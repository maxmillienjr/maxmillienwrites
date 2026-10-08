import { Link } from '@tanstack/react-router'
import { Container } from '../ui/Container'
import type { AuthorPress } from '../../content/author'

export function PressSection({ press }: { press: AuthorPress }) {
  return (
    <section
      id="press"
      className="border-t border-[color:var(--color-rule)] py-[var(--space-12)] scroll-mt-24"
    >
      <Container>
        <p className="author-eyebrow mb-[var(--space-4)]">
          Press & Connect
        </p>
        <h2 className="mb-[var(--space-4)]">Get in touch</h2>
        <p className="mb-[var(--space-8)] text-lg">
          Press and media inquiries: {' '}
          <a href={`mailto:${press.email}`} className="font-mono">
            {press.email}
          </a>
        </p>

        <ul className="flex flex-wrap gap-[var(--space-1)]">
          {press.socials.map((s) => (
            <li key={s.href}>
              <a href={s.href} target="_blank" rel="noreferrer" className="author-chip">
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-[var(--space-8)] text-sm">
          <Link to="/" className="font-mono">
            ← Back to professional home
          </Link>
        </div>
      </Container>
    </section>
  )
}
