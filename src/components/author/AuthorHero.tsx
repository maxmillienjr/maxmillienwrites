import { Container } from '../ui/Container'
import type { AuthorHero as AuthorHeroContent } from '../../content/author'

export function AuthorHero({ hero }: { hero: AuthorHeroContent }) {
  return (
    <section className="author-hero pt-[var(--space-16)] pb-[var(--space-8)]">
      <Container>
        <div className="grid gap-[var(--space-6)] lg:grid-cols-[1fr_1.15fr] lg:gap-[var(--space-12)]">
          <div>
            <p className="author-eyebrow mb-[var(--space-3)]">Author · Engineer</p>
            <h1>{hero.h1}</h1>
            <p className="author-subtitle mt-[var(--space-2)]">{hero.subtitle}</p>
            <p className="pull-quote my-[var(--space-6)]">{hero.tagline}</p>
            <div className="flex flex-wrap gap-[var(--space-2)]">
              <a
                href={hero.primaryCta.href}
                target="_blank"
                rel="noreferrer"
                className="author-cta author-cta-primary"
              >
                {hero.primaryCta.label} →
              </a>
              <a
                href={hero.secondaryCta.href}
                target="_blank"
                rel="noreferrer"
                className="author-cta author-cta-secondary"
              >
                {hero.secondaryCta.label} →
              </a>
            </div>
          </div>
          <div className="space-y-[var(--space-3)] text-lg md:text-xl lg:pt-[var(--space-8)]">
            {hero.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
