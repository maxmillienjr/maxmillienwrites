export type ClientCaseStudy = {
  slug: string
  title: string
  blurb: string
  stack: string[]
  /** Omit for an engagement with no public write-up: the card renders without a link. */
  detailHref?: string
  accent?: string
}

export const clientCaseStudies: ClientCaseStudy[] = [
  {
    slug: 'quiet-horizons',
    title: 'Quiet Horizons TelePsychiatry',
    blurb:
      'HIPAA-compliant Clinical OS for a concierge psychiatric practice. Ambient AI scribe transforms raw WebSocket audio into signed SOAP notes with zero draft-state writes; immutable audit trail enforced at the schema layer.',
    stack: ['Angular 21', 'NestJS', 'Drizzle', 'Vertex AI Gemini', 'GCP BAA'],
    detailHref: '/work/quiet-horizons',
    accent: '#8EE6C8',
  },
  {
    slug: 'puretome',
    title: 'PureTome AI Biographer',
    blurb:
      "An AI biographer that interviews an author, reads the whole manuscript on every turn, and narrates the finished book in a studio voice or the author's own. A 61-question eval moved chat from top-5 retrieval to whole-book context (82% to 99% accuracy), and two datastores came out of production with no data lost.",
    stack: ['React 19', 'Express', 'NestJS', 'LangGraph', 'MongoDB', 'Gemini + Claude', 'Pub/Sub', 'Cloud Run'],
    detailHref: '/work/puretome',
    accent: '#D4FF4F',
  },
  {
    slug: 'really-global',
    title: 'Really Global',
    blurb:
      "Contract engineering for a health-tech platform, as a founding senior full-stack developer: booking and payments features across a Django/Celery backend and a Next.js/TypeScript/GraphQL frontend, shipped through the client's PR review, Jest/Playwright suites and CI gates.",
    stack: ['Django', 'Celery', 'Next.js', 'TypeScript', 'GraphQL', 'Azure', 'Jest', 'Playwright'],
    accent: '#9FB4FF',
  },
]
