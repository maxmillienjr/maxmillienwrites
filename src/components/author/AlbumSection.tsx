import { useEffect, useRef, useState } from 'react'
import { Container } from '../ui/Container'
import type { AuthorAlbum } from '../../content/author'

export function AlbumSection({ album }: { album: AuthorAlbum }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin: '400px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section
      id="album"
      className="border-t border-[color:var(--color-rule)] py-[var(--space-12)] scroll-mt-24"
    >
      <Container>
        <p className="author-eyebrow mb-[var(--space-4)]">
          The Album
        </p>
        <h2 className="mb-[var(--space-4)]">{album.title}</h2>
        <p className="mb-[var(--space-8)] text-lg">{album.intro}</p>

        <div
          ref={ref}
          className="overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--color-rule)] bg-black"
          style={{ aspectRatio: '16 / 9' }}
        >
          {visible ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/videoseries?list=${album.youtubePlaylistId}`}
              width="100%"
              height="100%"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              loading="lazy"
              title={`${album.title} on YouTube`}
              className="block h-full w-full"
              style={{ border: 0 }}
            />
          ) : (
            <div
              aria-hidden
              className="flex h-full items-center justify-center font-mono text-xs uppercase tracking-wider text-[color:var(--color-muted)]"
            >
              Player loading…
            </div>
          )}
        </div>

        <div className="mt-[var(--space-6)] flex flex-wrap gap-[var(--space-2)]">
          <a
            href={album.spotifyUrl}
            target="_blank"
            rel="noreferrer"
            className="author-cta author-cta-secondary"
          >
            Listen on Spotify →
          </a>
          <a
            href={album.appleUrl}
            target="_blank"
            rel="noreferrer"
            className="author-cta author-cta-secondary"
          >
            Listen on Apple Music →
          </a>
          <a
            href={album.youtubeUrl}
            target="_blank"
            rel="noreferrer"
            className="author-cta author-cta-secondary"
          >
            Watch on YouTube →
          </a>
        </div>
      </Container>
    </section>
  )
}
