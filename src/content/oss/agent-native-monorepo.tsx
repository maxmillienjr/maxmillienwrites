import type { OssContent } from './types'

function Diagram() {
  const nodes = [
    { x: 20, label: 'ingress' },
    { x: 104, label: 'retrieve' },
    { x: 188, label: 'plan' },
    { x: 272, label: 'act' },
    { x: 356, label: 'distill' },
    { x: 440, label: 'reflect' },
    { x: 524, label: 'egress' },
  ]
  return (
    <svg
      viewBox="0 0 660 330"
      className="w-full rounded-[var(--radius-md)] border border-white/10 bg-white/[0.02]"
      role="img"
      aria-label="agent-native-monorepo architecture: a React console calls an Express gateway, which proxies to the agent service (NestJS 11 and LangGraph). The agent service also serves A2A v1.0 JSON-RPC with a signed Agent Card and a FHIR prior-authorization intake. Its graph runs ingress, retrieve, plan, act (looping, with approve and compensate beside it), distill, reflect and egress. Memory-core writes to Postgres 16 with pgvector, which serves retrieval, and to Neo4j 5. Every run is recorded beside its checkpoints and appended to a hash-chained ledger."
    >
      <defs>
        <marker id="arrow-anm" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#D4FF4F" />
        </marker>
        <marker id="arrow-anm-muted" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#F5F4F0" fillOpacity="0.5" />
        </marker>
      </defs>
      <g fontFamily="ui-monospace, SFMono-Regular, monospace" fontSize="11" fill="#F5F4F0">
        <rect x="20" y="20" width="120" height="50" rx="8" fill="none" stroke="#F5F4F0" strokeOpacity="0.35" />
        <text x="80" y="42" textAnchor="middle">console</text>
        <text x="80" y="58" textAnchor="middle" fillOpacity="0.6">React · Vite</text>

        <rect x="170" y="20" width="120" height="50" rx="8" fill="none" stroke="#F5F4F0" strokeOpacity="0.35" />
        <text x="230" y="42" textAnchor="middle">gateway</text>
        <text x="230" y="58" textAnchor="middle" fillOpacity="0.6">Express · traces</text>

        <rect x="320" y="20" width="320" height="50" rx="8" fill="none" stroke="#D4FF4F" strokeOpacity="0.6" />
        <text x="480" y="42" textAnchor="middle">agent-service · NestJS 11 + LangGraph</text>
        <text x="480" y="58" textAnchor="middle" fillOpacity="0.6">/runs · /a2a/jsonrpc · /fhir/Claim/$submit</text>

        <line x1="140" y1="45" x2="170" y2="45" stroke="#F5F4F0" strokeOpacity="0.5" markerEnd="url(#arrow-anm-muted)" />
        <line x1="290" y1="45" x2="320" y2="45" stroke="#F5F4F0" strokeOpacity="0.5" markerEnd="url(#arrow-anm-muted)" />

        <text x="20" y="112" fillOpacity="0.55">the graph</text>
        {nodes.map((n, i) => (
          <g key={n.label}>
            <rect
              x={n.x}
              y="124"
              width="68"
              height="36"
              rx="6"
              fill="none"
              stroke={n.label === 'act' ? '#D4FF4F' : '#F5F4F0'}
              strokeOpacity={n.label === 'act' ? 0.7 : 0.35}
            />
            <text x={n.x + 34} y="146" textAnchor="middle">{n.label}</text>
            {i < nodes.length - 1 && (
              <line x1={n.x + 68} y1="142" x2={n.x + 84} y2="142" stroke="#D4FF4F" strokeOpacity="0.55" markerEnd="url(#arrow-anm)" />
            )}
          </g>
        ))}
        <path d="M 296 124 C 296 100, 330 100, 330 122" fill="none" stroke="#D4FF4F" strokeOpacity="0.55" markerEnd="url(#arrow-anm)" />
        <text x="338" y="108" fillOpacity="0.6" fontSize="10">loop ≤ maxSteps</text>

        <rect x="230" y="184" width="68" height="30" rx="6" fill="none" stroke="#F5F4F0" strokeOpacity="0.35" strokeDasharray="4 3" />
        <text x="264" y="203" textAnchor="middle" fontSize="10">approve</text>
        <rect x="314" y="184" width="84" height="30" rx="6" fill="none" stroke="#F5F4F0" strokeOpacity="0.35" strokeDasharray="4 3" />
        <text x="356" y="203" textAnchor="middle" fontSize="10">compensate</text>
        <line x1="296" y1="160" x2="272" y2="184" stroke="#F5F4F0" strokeOpacity="0.45" markerEnd="url(#arrow-anm-muted)" />
        <line x1="316" y1="160" x2="340" y2="184" stroke="#F5F4F0" strokeOpacity="0.45" markerEnd="url(#arrow-anm-muted)" />

        <rect x="20" y="256" width="205" height="54" rx="8" fill="none" stroke="#F5F4F0" strokeOpacity="0.35" />
        <text x="122" y="279" textAnchor="middle">Postgres 16 + pgvector</text>
        <text x="122" y="295" textAnchor="middle" fillOpacity="0.6">episodes · facts · retrieval</text>

        <rect x="240" y="256" width="190" height="54" rx="8" fill="none" stroke="#F5F4F0" strokeOpacity="0.35" />
        <text x="335" y="279" textAnchor="middle">Neo4j 5</text>
        <text x="335" y="295" textAnchor="middle" fillOpacity="0.6">concepts · not in retrieval</text>

        <rect x="445" y="256" width="195" height="54" rx="8" fill="none" stroke="#F5F4F0" strokeOpacity="0.35" />
        <text x="542" y="279" textAnchor="middle">run records + ledger</text>
        <text x="542" y="295" textAnchor="middle" fillOpacity="0.6">SHA-256 hash chain</text>

        <line x1="138" y1="160" x2="122" y2="256" stroke="#D4FF4F" strokeOpacity="0.5" markerStart="url(#arrow-anm)" />
        <line x1="474" y1="160" x2="345" y2="256" stroke="#F5F4F0" strokeOpacity="0.4" markerEnd="url(#arrow-anm-muted)" />
        <line x1="558" y1="160" x2="560" y2="256" stroke="#F5F4F0" strokeOpacity="0.4" markerEnd="url(#arrow-anm-muted)" />
      </g>
    </svg>
  )
}

export const agentNativeMonorepo: OssContent = {
  slug: 'agent-native-monorepo',
  problem: (
    <>
      <p>
        Most agent demos answer one question: does it run? The questions that decide whether an
        agent can sit in a regulated workflow are different. Can another agent discover and call
        it? What happens when a tool call cannot be undone? Did that prompt change make it
        worse, and how would you know before the merge? Can someone poison its memory? Can you
        prove, later, what it did on a given run?
      </p>
      <p className="mt-3">
        <span className="font-mono text-[color:var(--color-accent)]">agent-native-monorepo</span>{' '}
        answers each of those in code, with a test or a workflow behind every answer. Its demo
        domain is a synthetic Medicare Advantage prior-authorization workflow, where the stakes are
        concrete: a denial needs a clinician, appeals run on regulatory clocks, and the record
        has to hold up afterwards. The repository keeps a capability matrix,{' '}
        <code>docs/STATUS.md</code>, that marks each claim implemented, stubbed, planned or
        removed and cites the evidence at HEAD, so this page claims only rows marked implemented.
      </p>
    </>
  ),
  architecture: {
    diagram: <Diagram />,
    walkthrough: (
      <>
        <p>
          <strong>The graph and its memory.</strong> A run goes ingress, retrieve, plan, act
          (looping up to a step limit), distill, reflect, egress, and every node that does I/O
          retries on its own. Memory has three tiers: working memory per run, episodic memory in
          Postgres through Drizzle (idempotent upserts on session and turn, so a replayed write
          converges), and semantic facts in pgvector, with concepts also written to Neo4j.{' '}
          <strong>Retrieval is vector-only, by decision.</strong> A pre-registered ablation found
          that fusing graph results into retrieval did not beat vector search, so ADR 0009 took
          the graph out of the request path. Its explanation role stays marked stubbed until it
          is measured or removed.
        </p>
        <p className="mt-3">
          <strong>Tools that know whether they can be undone.</strong> Every tool declares a tier,
          and the type system holds the rule: a compensable tool without a{' '}
          <code>compensate</code> does not compile. A failed step aborts the loop and undoes the
          applied effects newest first. An irreversible call pauses on <code>interrupt()</code>{' '}
          for a person, with its checkpoint in Postgres, and is refused outright on a graph
          compiled without a checkpointer. Today the only irreversible tool is a test fixture,
          so no live request pauses yet.
        </p>
        <p className="mt-3">
          <strong>A2A as the seam.</strong> <code>/a2a/jsonrpc</code> serves A2A v1.0 (send,
          stream, get, list and cancel a task) and the v0.3 names, over the same run loop as{' '}
          <code>/runs</code>. The Agent Card at <code>/.well-known/agent-card.json</code> is
          signed ES256 by every configured key, the public keys are published as a JWKS, and two
          independent verifiers check every signature. With service credentials configured, every
          route but health and discovery requires a bearer token, and every session is derived
          from the caller. ADR 0016
          keeps the agent on LangGraph and makes A2A the integration point with an ADK estate.
        </p>
        <p className="mt-3">
          <strong>The prior-auth domain.</strong> <code>POST /fhir/Claim/$submit</code> takes a
          FHIR Bundle, runs the graph and answers with a <code>ClaimResponse</code>. The agent can
          produce exactly two things: an automated approval or a referral to a clinician. A
          denial needs a clinician&rsquo;s attestation, and type tests fail the build if an
          unattested denial compiles. Pended cases go to a review queue where determinations are
          issued over an Ed25519 signature, and appeals follow 42 CFR Part 422, Subpart M: the
          reviewer who reconsiders a denial cannot be the one who made it, enforced in code, at
          the route and by database constraints. All data is synthetic.
        </p>
      </>
    ),
  },
  additionalSections: [
    {
      heading: 'Evaluation',
      body: (
        <>
          <p>
            <code>packages/eval-harness</code> runs n trials per task and reports pass@k and
            pass^k, with per-trial ceilings on input tokens, output tokens and model calls beside
            the pass rate. A replay serves every model decision from a recorded cassette and
            makes no request to the model API, asserted at runtime: a request that reaches the
            host aborts the run. On every pull request, <code>agent-eval.yml</code> replays the
            suite and compares every task, trial and grader cell with a committed baseline, and
            any difference fails the check. A canary checks what actually serves the pinned model
            ids.
          </p>
          <p className="mt-3">
            What it is not: big. The suite is three tasks plus the red team, and a replay grades a
            recording, not today&rsquo;s model. <code>docs/STATUS.md</code> says both.
          </p>
        </>
      ),
    },
    {
      heading: 'Memory-poisoning red team',
      body: (
        <p>
          Three canary cases mapped to OWASP ASI06 and MITRE ATLAS, with their own report so their
          rate never shares a denominator with the main suite. Measured before the mitigations,
          one case failed: <code>distill</code> extracted a
          poisoned fax number from the agent&rsquo;s own answer and <code>reflect</code> merged it
          into memory. Two changes fixed it. Retrieval refuses a query that names no session, and
          distill reads only the user&rsquo;s turns, so the agent never promotes its own output
          (ADR 0011). All three cases now pass, and the replay job re-runs them on every pull
          request.
        </p>
      ),
    },
    {
      heading: 'Audit trail',
      body: (
        <p>
          One run is one OpenTelemetry trace in the GenAI semantic conventions: an{' '}
          <code>invoke_agent</code> root with <code>generate_content</code>,{' '}
          <code>embeddings</code> and <code>execute_tool</code> spans, and content capture off
          behind an attribute allow-list. Every run leaves a record beside its checkpoints and, with
          a ledger configured, appends a SHA-256 digest of both to a hash chain, written by a role that cannot
          rewrite it (ADR 0013). <code>ledger:verify</code> re-derives each digest, and editing a
          single checkpoint makes it exit 1 naming the run. <code>governance/controls.yaml</code>{' '}
          maps 28 controls to clauses of seven frameworks and cites the evidence for each.
        </p>
      ),
    },
  ],
  threatModel: (
    <>
      <p>
        <strong>Constraints this enforces:</strong> the agent cannot issue an adverse
        determination. Retrieval cannot cross sessions without an explicit opt-in. The agent does
        not write its own output to long-term memory. Telemetry carries no prompt or response
        content. The repository holds no real PHI, no CPT codes and no proprietary payer content
        (ADR 0003).
      </p>
      <p className="mt-3">
        <strong>What it does not do yet:</strong> tool output does not reach the answer, because{' '}
        <code>plan</code> runs before <code>act</code>. Episodic memory has no TTL. There is no
        OpenAPI document or API versioning. The eval gate becomes a merge blocker only when the
        branch ruleset that requires it is applied. Each of these is a row in{' '}
        <code>docs/STATUS.md</code>, labelled as what it is.
      </p>
    </>
  ),
  extractionNote: (
    <p>
      Began as a sanitized extraction of PureTome&rsquo;s agent service. PureTome has since moved
      to whole-book context and retired its graph and vector stores; this repository kept both and
      measured them instead, which is where ADR 0009 came from. The domain, the eval layer and the
      governance layer are its own.
    </p>
  ),
}
