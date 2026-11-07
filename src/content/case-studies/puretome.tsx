import type { ClientCaseStudyContent } from './types'

function RequestPathDiagram() {
  return (
    <svg
      viewBox="0 0 680 320"
      className="w-full rounded-[var(--radius-md)] border border-white/10 bg-white/[0.02]"
      role="img"
      aria-label="PureTome request path: the React web client calls the Express API, which owns MongoDB, the only database, and writes each turn before confirming it. The API sends the stateless AI service (NestJS and LangGraph, no database) a turn briefing and the whole manuscript. The AI service calls a model routing layer where each of 31 call sites is sent to Gemini or Claude by config. Audiobook renders and conversation-summary folding run over Pub/Sub."
    >
      <defs>
        <marker id="arrow-pt-path" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#D4FF4F" />
        </marker>
        <marker id="arrow-pt-path-muted" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#F5F4F0" fillOpacity="0.5" />
        </marker>
      </defs>
      <g fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="11" fill="#F5F4F0">
        <rect x="20" y="20" width="120" height="56" rx="8" fill="none" stroke="#F5F4F0" strokeOpacity="0.3" />
        <text x="80" y="46" textAnchor="middle">Web</text>
        <text x="80" y="62" textAnchor="middle" fillOpacity="0.6">React 19</text>

        <rect x="180" y="20" width="200" height="56" rx="8" fill="none" stroke="#F5F4F0" strokeOpacity="0.3" />
        <text x="280" y="46" textAnchor="middle">API</text>
        <text x="280" y="62" textAnchor="middle" fillOpacity="0.6">Express · saves turn first</text>

        <rect x="420" y="20" width="220" height="56" rx="8" fill="none" stroke="#F5F4F0" strokeOpacity="0.3" />
        <text x="530" y="46" textAnchor="middle">MongoDB</text>
        <text x="530" y="62" textAnchor="middle" fillOpacity="0.6">the one database</text>

        <line x1="140" y1="48" x2="180" y2="48" stroke="#F5F4F0" strokeOpacity="0.5" markerEnd="url(#arrow-pt-path-muted)" />
        <line x1="380" y1="48" x2="420" y2="48" stroke="#F5F4F0" strokeOpacity="0.5" markerEnd="url(#arrow-pt-path-muted)" />

        <rect x="180" y="140" width="200" height="64" rx="8" fill="none" stroke="#D4FF4F" strokeOpacity="0.6" />
        <text x="280" y="166" textAnchor="middle">AI service (stateless)</text>
        <text x="280" y="184" textAnchor="middle" fillOpacity="0.6">NestJS · LangGraph · no DB</text>

        <line x1="280" y1="76" x2="280" y2="140" stroke="#D4FF4F" strokeOpacity="0.8" markerEnd="url(#arrow-pt-path)" />
        <text x="292" y="104" fillOpacity="0.85">turn briefing +</text>
        <text x="292" y="120" fillOpacity="0.85">whole manuscript</text>

        <rect x="420" y="140" width="220" height="64" rx="8" fill="none" stroke="#F5F4F0" strokeOpacity="0.3" />
        <text x="530" y="166" textAnchor="middle">Model routing</text>
        <text x="530" y="184" textAnchor="middle" fillOpacity="0.6">Gemini or Claude per call site</text>

        <line x1="380" y1="172" x2="420" y2="172" stroke="#D4FF4F" strokeOpacity="0.6" markerEnd="url(#arrow-pt-path)" />

        <rect x="180" y="250" width="200" height="56" rx="8" fill="none" stroke="#F5F4F0" strokeOpacity="0.3" />
        <text x="280" y="274" textAnchor="middle">Pub/Sub</text>
        <text x="280" y="290" textAnchor="middle" fillOpacity="0.6">narration · summary folding</text>

        <line x1="280" y1="204" x2="280" y2="250" stroke="#F5F4F0" strokeOpacity="0.5" markerStart="url(#arrow-pt-path-muted)" markerEnd="url(#arrow-pt-path-muted)" />

        <text x="420" y="248" fillOpacity="0.7">manuscript first in the prompt:</text>
        <text x="420" y="264" fillOpacity="0.7">the cache serves ~80% of input</text>
        <text x="420" y="288" fillOpacity="0.5">over 150k words: BM25 chapters</text>
      </g>
    </svg>
  )
}

function NarrationDiagram() {
  const stages = [
    { x: 20, label: 'Chapter text', sub: 'paragraph chunks' },
    { x: 152, label: 'Chunk cache', sub: 'content-addressed' },
    { x: 284, label: 'Synthesis', sub: 'studio/own voice' },
    { x: 416, label: 'ffmpeg', sub: 'stitch · loudness' },
    { x: 548, label: 'M4B', sub: 'chapter markers' },
  ]
  return (
    <svg
      viewBox="0 0 680 200"
      className="w-full rounded-[var(--radius-md)] border border-white/10 bg-white/[0.02]"
      role="img"
      aria-label="PureTome audiobook pipeline: chapter text is split into paragraph chunks, checked against a content-addressed cache, synthesized in a studio voice or the author's own, stitched and loudness-normalized with ffmpeg, and packaged as an M4B with chapter markers. A QC step transcribes the audio back, aligns it word by word, and retakes any chapter with a word error rate above 0.2 once."
    >
      <defs>
        <marker id="arrow-pt-narr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#D4FF4F" />
        </marker>
      </defs>
      <g fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="11" fill="#F5F4F0">
        {stages.map((s, i) => (
          <g key={s.label}>
            <rect
              x={s.x}
              y="36"
              width="112"
              height="56"
              rx="8"
              fill="none"
              stroke={s.label === 'Synthesis' ? '#D4FF4F' : '#F5F4F0'}
              strokeOpacity={s.label === 'Synthesis' ? 0.6 : 0.3}
            />
            <text x={s.x + 56} y="60" textAnchor="middle">{s.label}</text>
            <text x={s.x + 56} y="76" textAnchor="middle" fillOpacity="0.6" fontSize="10">{s.sub}</text>
            {i < stages.length - 1 && (
              <line x1={s.x + 112} y1="64" x2={s.x + 132} y2="64" stroke="#D4FF4F" strokeOpacity="0.6" markerEnd="url(#arrow-pt-narr)" />
            )}
          </g>
        ))}

        <rect x="284" y="132" width="376" height="52" rx="8" fill="none" stroke="#F5F4F0" strokeOpacity="0.3" />
        <text x="472" y="154" textAnchor="middle">QC · transcribe back, align word by word</text>
        <text x="472" y="170" textAnchor="middle" fillOpacity="0.6">WER above 0.2 → retake the chapter once</text>

        <line x1="604" y1="92" x2="604" y2="132" stroke="#F5F4F0" strokeOpacity="0.5" markerEnd="url(#arrow-pt-narr)" />
        <line x1="340" y1="132" x2="340" y2="92" stroke="#D4FF4F" strokeOpacity="0.6" markerEnd="url(#arrow-pt-narr)" />
      </g>
    </svg>
  )
}

const evalRows = [
  { approach: 'RAG, top-5 (production at the time)', accuracy: '82%', unsupported: '19%' },
  { approach: 'RAG, top-30', accuracy: '95%', unsupported: '15%' },
  { approach: 'Whole book, cached', accuracy: '99%', unsupported: '7%' },
]

function EvalTable() {
  return (
    <table className="mt-4 w-full max-w-[60ch] border-collapse font-mono text-xs">
      <thead>
        <tr className="border-b border-white/15 text-left text-[color:var(--color-fg)]/60">
          <th className="py-2 pr-4 font-normal">Approach</th>
          <th className="py-2 pr-4 font-normal">Accuracy</th>
          <th className="py-2 font-normal">Unsupported side claims</th>
        </tr>
      </thead>
      <tbody>
        {evalRows.map((r) => (
          <tr key={r.approach} className="border-b border-white/10">
            <td className="py-2 pr-4">{r.approach}</td>
            <td className="py-2 pr-4">{r.accuracy}</td>
            <td className="py-2">{r.unsupported}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export const puretome: ClientCaseStudyContent = {
  slug: 'puretome',
  problem: (
    <>
      <p>
        A memoir is long. An AI biographer has to answer a question about chapter 3 while the
        author is writing chapter 19, and the book can run past 150,000 words. The standard
        build is retrieval: chunk the manuscript, embed it, fetch the top few passages each
        turn. <span className="font-mono text-[color:var(--color-accent)]">PureTome</span>{' '}
        shipped that: a pgvector store over the manuscript, and a Neo4j graph for the
        author&rsquo;s journal.
      </p>
      <p className="mt-3">
        Long-context models with prompt caching made a second option affordable: put the whole
        book in the prompt. Rather than argue it, I measured it. A context-strategy spike asked
        61 questions of three synthetic memoirs (12k, 64k and 155k words), graded by an LLM
        judge, for $8 in total. No approach invented an answer; they differed on how much they
        got right and how much they added that the book didn&rsquo;t support.
      </p>
      <EvalTable />
      <p className="mt-4">
        So the architecture changed to match the measurement, and the parts the measurement made
        redundant came out of production.
      </p>
    </>
  ),
  architecture: {
    diagrams: [<RequestPathDiagram key="request-path" />, <NarrationDiagram key="narration" />],
    walkthrough: (
      <>
        <p>
          <strong>Whole-book context.</strong> The manuscript goes first in the system prompt,
          so the prefix stays stable and Gemini&rsquo;s implicit cache serves about 80% of input
          tokens. Retrieval is skipped for books up to 150k words; longer books get a BM25
          chapter selection, gated by its own eval. The manuscript comes from an API endpoint
          with ETag/304 and an LRU cache, and billing prices cached tokens correctly. On the
          shipped code path the eval scored 100% with no invented answers.
        </p>

        <p className="mt-6">
          <strong>One database.</strong> Whole-book context made vector retrieval redundant for
          almost every book, and the Neo4j journal had already been hollowed out as goals,
          interview plans and critiques moved to MongoDB. So both stores came out. Chat
          transcripts and the journey summary moved to MongoDB; pgvector, the embeddings and
          Supabase were deleted. Production data moved with a dry-run-first, idempotent
          migration: 131 records, and a second run found nothing new. The API now writes each
          turn before it confirms it, and a write that fails refunds the turn.
        </p>

        <p className="mt-6">
          <strong>A stateless AI service.</strong> The AI service (NestJS, with LangGraph
          orchestrating chat and interview turns) owns no database. The API sends each turn its
          transcript and journey summary, and the manuscript arrives from the API&rsquo;s
          endpoint. Folding a long conversation into the journey summary runs over Pub/Sub, with
          the API holding a lease on the thread. The rebuild also surfaced a quiet bug: LangGraph
          drops state channels a graph doesn&rsquo;t declare, so the journey summary had never
          reached the prompt.
        </p>

        <p className="mt-6">
          <strong>Model routing per call site.</strong> Each of the 31 model call sites names its
          feature, and one config entry per feature moves it between Gemini and Claude, validated
          at boot so a bad entry fails startup. A 146-case eval, judged pairwise in both orders by
          models from two vendors and checked against a same-model noise floor, chose what moved:
          nineteen features and the importer now run on a smaller Claude model. Any of them moves
          back by deleting its entry.
        </p>

        <p className="mt-6">
          <strong>The audiobook.</strong> Built on the existing stack with no new services:
          Pub/Sub consumers in the NestJS AI service, billing and job state in the Express API,
          and a private GCS bucket with lifecycle rules. Paragraph chunks are content-addressed
          and cached, so an edit re-synthesizes only what changed. ffmpeg stitches and
          loudness-normalizes each chapter into an M4B with chapter markers. QC transcribes the
          audio back, aligns it word by word, and retakes any chapter whose word error rate tops
          0.2, once.
        </p>
        <p className="mt-3 mb-3">
          The author can narrate in their own voice. The planned provider wouldn&rsquo;t enable
          custom voices without a large spend commitment, so own voice was re-routed through a
          self-serve voice-replication API: two days from spike to a live clone in production.
        </p>
      </>
    ),
  },
  additionalSections: [
    {
      heading: 'Also shipped',
      body: (
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>An in-house affiliate platform</strong> instead of a SaaS: an attribution
            spine (a referral cookie recorded at signup and never overwritten), a commission ledger
            that clears on the same rule as the refund policy, Stripe Connect Express onboarding,
            a monthly payout run, 1099 tracking and a Next.js partner portal.
          </li>
          <li>
            <strong>A print-cover generator</strong> built to KDP&rsquo;s print spec: a measured
            page count sets the spine width, the cover renders as a CMYK PDF through PDFKit and
            sharp, and a pdf-lib preflight re-reads the output and rejects it with the specific
            checks it failed.
          </li>
          <li>
            <strong>Chat turns from 30&ndash;37 s to 14 s</strong>, once the cause turned out to
            be model &ldquo;thinking&rdquo; on pre-reply routing calls; and real streaming, after
            gzip compression had been silently buffering server-sent events.
          </li>
          <li>
            <strong>A readiness review</strong> whose verdict comes from deterministic rules over
            the model&rsquo;s checklist, with every evidence quote verified against the
            manuscript; an unverified &ldquo;met&rdquo; drops to partial.
          </li>
        </ul>
      ),
    },
    {
      heading: 'Data-handling posture',
      body: (
        <>
          <p>
            The AI service owns no database: what it sees on a turn is what the API sent for that
            turn. Pseudonyms carry through every export, including chapter titles, the dedication,
            the byline, the EPUB and the audiobook. Own-voice narration requires a consent
            recording, passes a 12 dB SNR gate and a region check, and each voice is stored per
            book and deleted on every exit path. Deleting a memoir or an account purges its
            leftover checkpoints and uploads.
          </p>
          <p className="mt-3">
            <strong>Does not protect against:</strong> the model provider seeing the manuscript
            during inference. Whole-book context makes that the whole book rather than five
            passages. The control there is the provider terms (no training on the writing), not
            the architecture.
          </p>
        </>
      ),
    },
  ],
  impact: (
    <>
      <p>
        <strong>99% accuracy with the whole book, against 82% at top-5 retrieval</strong>, with
        unsupported side claims down from 19% to 7%, and 100% with no invented answers on the
        shipped code path. Chat turns went from 30&ndash;37 s to 14 s.
      </p>
      <p className="mt-3">
        Two managed datastores (Neo4j, and pgvector on Supabase) came out of a live product with
        no data lost, which removed two bills and two failure modes. The audiobook, own voice
        included, went from scoping to production in about ten days without adding a service.
      </p>
    </>
  ),
  engagementNote: (
    <p>
      PureTome was designed and built under PureTome Labs (an independent architecture-and-build
      practice, C2C, one architect doing the work, not a staffing layer). If you&rsquo;re
      building AI product around long-form user content and want the context strategy measured
      before it&rsquo;s built, a 30-minute architecture call is a reasonable first move.
    </p>
  ),
}
