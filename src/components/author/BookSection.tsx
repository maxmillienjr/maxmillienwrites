import { Container } from '../ui/Container'
import type { AuthorBook } from '../../content/author'

export function BookSection({ book }: { book: AuthorBook }) {
  return (
    <section id="book" className="border-t border-[color:var(--color-rule)] py-[var(--space-12)] scroll-mt-24">
      <Container>
        <p className="author-eyebrow mb-[var(--space-4)]">
          The Book
        </p>
        <div className="grid gap-[var(--space-8)] md:grid-cols-[minmax(240px,340px)_1fr] md:items-start">
          <div>
            <img
              src={book.coverSrc}
              alt={book.coverAlt}
              width={340}
              height={510}
              loading="lazy"
              className="author-cover w-full max-w-[300px] rounded-[var(--radius-md)] md:max-w-none"
            />
          </div>
          <div>
            <h2 className="mb-[var(--space-2)]">{book.title}</h2>
            {book.subtitle ? (
              <p className="author-subtitle mb-[var(--space-4)]">
                {book.subtitle}
              </p>
            ) : null}
            <div className="space-y-[var(--space-3)] text-lg">
              {book.summary.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="mt-[var(--space-6)] flex flex-wrap items-center gap-[var(--space-4)]">
              <a
                href={book.buyUrl}
                target="_blank"
                rel="noreferrer"
                className="author-cta author-cta-primary"
              >
                Buy on Amazon →
              </a>
              <span className="author-eyebrow">
                Published {book.publishedYear}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
