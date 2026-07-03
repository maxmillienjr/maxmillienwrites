import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import { Hero } from '../components/hero/Hero'
import { OfferSection } from '../components/offer/OfferSection'
import { ClientRail } from '../components/case-study-rail/ClientRail'
import { OssRail } from '../components/case-study-rail/OssRail'
import { LeadArchitect } from '../components/lead-architect/LeadArchitect'
import { isLabs, CANONICAL_ORIGIN, LABS_LINKEDIN_URL } from '../lib/tenant'
import { authorContent } from '../content/author'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const SCHEMA_ID = 'schema-jsonld'
const PERSON_ID = `${CANONICAL_ORIGIN}/#max-millien`
const ORG_ID = 'https://labs.puretome.com/#puretome-labs'

// Two linked entities in one @graph: the Person "Max Millien" and the
// Organization "PureTome Labs" he founded. The @id cross-references (Person
// worksFor → Org, Org founder → Person) let Google build a single knowledge
// graph. sameAs ties every profile back to one identity — the signal that
// actually helps rank a name, far more than a mirror domain. Emitted on both
// tenants so the entity graph also lands on the consolidated canonical page.
const SITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: 'Max Millien',
      url: CANONICAL_ORIGIN,
      jobTitle: 'Principal AI Architect',
      image: `${CANONICAL_ORIGIN}/headshot.jpeg`,
      email: authorContent.press.email,
      worksFor: { '@id': ORG_ID },
      sameAs: [
        'https://www.puretome.com/',
        authorContent.book.buyUrl,
        ...authorContent.press.socials.map((s) => s.href),
      ],
    },
    {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: 'PureTome Labs',
      url: 'https://labs.puretome.com',
      logo: 'https://labs.puretome.com/ptl-logo-small.png',
      description:
        'Consultancy for production AI infrastructure: hybrid RAG, agentic systems, and HIPAA-compliant builds. Led by Max Millien.',
      founder: { '@id': PERSON_ID },
      sameAs: [LABS_LINKEDIN_URL],
    },
  ],
}

function HomePage() {
  useEffect(() => {
    let el = document.getElementById(SCHEMA_ID) as HTMLScriptElement | null
    if (!el) {
      el = document.createElement('script')
      el.id = SCHEMA_ID
      el.type = 'application/ld+json'
      document.head.appendChild(el)
    }
    el.textContent = JSON.stringify(SITE_SCHEMA)
    return () => {
      el?.remove()
    }
  }, [])

  return (
    <>
      <Hero />
      <OfferSection />
      <ClientRail />
      <OssRail />
      {isLabs() && <LeadArchitect />}
    </>
  )
}
