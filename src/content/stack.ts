export type StackGroupKey = 'ai' | 'backend' | 'frontend' | 'infra' | 'compliance'

export type StackNode = {
  id: string
  name: string
  group: StackGroupKey
  note: string
}

export type StackEdge = {
  source: string
  target: string
  label?: string
}

export const stackGroupMeta: Record<
  StackGroupKey,
  { label: string; order: number; colorVar: string }
> = {
  frontend: { label: 'Frontend', order: 0, colorVar: '--color-group-frontend' },
  backend: { label: 'Backend', order: 1, colorVar: '--color-group-backend' },
  ai: { label: 'AI & Data', order: 2, colorVar: '--color-group-ai' },
  infra: { label: 'Infrastructure', order: 3, colorVar: '--color-group-infra' },
  compliance: { label: 'Compliance', order: 4, colorVar: '--color-group-compliance' },
}

export const stackNodes: StackNode[] = [
  // AI & Data
  {
    id: 'context-eng',
    name: 'Context engineering',
    group: 'ai',
    note: 'Measure the context strategy before building it. For PureTome, a 61-question eval put whole-book prompt caching at 99% against 82% for top-5 retrieval, so chat reads the whole manuscript, placed first in the prompt so the implicit cache serves about 80% of input tokens. Books over 150k words get a BM25 chapter selection.',
  },
  {
    id: 'neo4j',
    name: 'Neo4j',
    group: 'ai',
    note: "Ran PureTome's author journal and the graph half of its retrieval until whole-book context made it redundant, then came out of production with no data lost. Still the concept graph in agent-native-monorepo, kept out of retrieval after an ablation (ADR 0009).",
  },
  {
    id: 'pgvector',
    name: 'pgvector',
    group: 'ai',
    note: "The vector half of PureTome's retrieval until it was retired alongside Neo4j. Now the retrieval store in agent-native-monorepo: session-scoped vector search that refuses a query naming no session.",
  },
  {
    id: 'langgraph',
    name: 'LangGraph',
    group: 'ai',
    note: 'Stateful agent orchestration: pure-function nodes over typed state, deterministic transitions, and every edge independently replayable for debugging agent behavior.',
  },
  {
    id: 'mcp',
    name: 'MCP',
    group: 'ai',
    note: 'Model Context Protocol servers expose internal tools to Claude and other agents: typed boundaries replace prompt-engineered tool use, and permissions live in the server, not the prompt.',
  },
  {
    id: 'vertex-ai',
    name: 'Vertex AI',
    group: 'ai',
    note: 'Managed inference for production workloads: model endpoints isolated per tenant, with region pinning and VPC-SC for regulated data paths.',
  },
  {
    id: 'gemini',
    name: 'Gemini',
    group: 'ai',
    note: 'Primary long-context model for structured extraction. 1M-token window used for whole-document reasoning without chunking compromises.',
  },
  {
    id: 'claude-code',
    name: 'Claude Code',
    group: 'ai',
    note: 'Development loop itself: subagents for research, skills for repeatable workflows, and hooks for guardrails. The CI of the editor.',
  },

  // Backend
  {
    id: 'nestjs',
    name: 'NestJS 11',
    group: 'backend',
    note: 'Dependency-injected modular monolith: same decorators scale from a single Cloud Run service to a federated graph without rewriting boundaries.',
  },
  {
    id: 'node',
    name: 'Node.js',
    group: 'backend',
    note: 'Runtime baseline. LTS-pinned, tuned with --max-old-space-size for the worker tier and AbortController-aware for every outbound call.',
  },
  {
    id: 'drizzle',
    name: 'Drizzle',
    group: 'backend',
    note: 'Type-safe SQL without the ORM abstraction tax: migrations generated from schema, relations inferred, raw SQL still a first-class citizen when the query planner disagrees.',
  },
  {
    id: 'postgres',
    name: 'Postgres',
    group: 'backend',
    note: 'Source of truth for everything transactional. JSONB for flexible fields, pgvector for embeddings, row-level security for tenant isolation.',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    group: 'backend',
    note: "PureTome's one database since Neo4j and pgvector were retired: manuscripts, chat transcripts and journey summaries through Mongoose, with each chat turn written before it is confirmed.",
  },
  {
    id: 'redis',
    name: 'Redis',
    group: 'backend',
    note: "Caching in front of streaming text-to-speech and pronunciation lookups, plus a distributed lock, in PureTome's AI service.",
  },
  {
    id: 'qstash',
    name: 'QStash',
    group: 'backend',
    note: 'Durable HTTP-based queue for cross-service fan-out: retries, DLQ, and signed requests that survive regional failover without sticky state.',
  },
  {
    id: 'pubsub',
    name: 'Cloud Pub/Sub',
    group: 'backend',
    note: 'Backbone for event-driven pipelines: at-least-once delivery, dead-letter topics, and per-subscription concurrency limits tuned for the downstream\'s throughput.',
  },

  // Frontend
  {
    id: 'angular-21',
    name: 'Angular 21',
    group: 'frontend',
    note: 'Signals-based reactivity for the enterprise product surface: strict templates, standalone components, and deferrable views for slow-path panels.',
  },
  {
    id: 'react-19',
    name: 'React 19',
    group: 'frontend',
    note: 'Server components + suspense for marketing and content surfaces: lower TTI than Angular for the public-facing cuts where first paint matters most.',
  },
  {
    id: 'spartan-ui',
    name: 'Spartan UI',
    group: 'frontend',
    note: 'Headless component primitives for Angular: the shadcn of the Angular world, so design tokens live in the stylesheet and flow straight to runtime without a component library fighting back.',
  },
  {
    id: 'tailwind-v4',
    name: 'Tailwind v4',
    group: 'frontend',
    note: 'CSS-first config via @theme: design tokens live in one stylesheet, no JS config file, and the compiler only emits what the markup uses.',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    group: 'frontend',
    note: 'Strict mode across every workspace: no implicit any, exhaustive switch on discriminated unions, and zod at every I/O boundary so runtime types match compile-time ones.',
  },

  // Infrastructure
  {
    id: 'gcp',
    name: 'GCP',
    group: 'infra',
    note: 'Primary cloud. Cloud Run for stateless services, GKE for anything with persistent connections, and VPC-SC perimeters around every HIPAA-scoped project.',
  },
  {
    id: 'terraform',
    name: 'Terraform',
    group: 'infra',
    note: 'Infrastructure-as-code across all environments: modules versioned per team, state in GCS with object-level locking, and a CI gate that blocks plans with destructive diffs.',
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    group: 'infra',
    note: 'GKE Autopilot for stateful workloads. HPA on custom metrics, PodDisruptionBudgets tuned to SLO, and Istio for mTLS between namespaces.',
  },
  {
    id: 'docker',
    name: 'Docker',
    group: 'infra',
    note: 'Multi-stage builds with distroless base images. <80MB images, no shell in production, and SBOMs generated at build time for the compliance trail.',
  },
  {
    id: 'github-actions',
    name: 'GitHub Actions',
    group: 'infra',
    note: 'CI/CD for every repo: reusable workflows for the standard paths, Workload Identity Federation for GCP auth (no long-lived keys), and required checks enforced on main.',
  },
  {
    id: 'firebase',
    name: 'Firebase',
    group: 'infra',
    note: 'Hosting + Functions for marketing surfaces and lightweight handlers. SPA rewrites, long-cache headers on /assets/*, and a deploy pipeline that fits in a single workflow file.',
  },

  // Compliance
  {
    id: 'hipaa-baa',
    name: 'HIPAA/BAA',
    group: 'compliance',
    note: 'Every vendor in the data path signs a BAA before PHI crosses the boundary. GCP, Resend, Sentry, all of it. No exceptions, no "low-risk" dispensations.',
  },
  {
    id: 'aes-256-gcm',
    name: 'AES-256-GCM',
    group: 'compliance',
    note: 'Column-level PHI encryption via Drizzle middleware, keys rotated via GCP KMS with envelope encryption. Ciphertext never leaves the database; plaintext never leaves memory.',
  },
  {
    id: 'google-dlp',
    name: 'Google DLP',
    group: 'compliance',
    note: "Built a DLP de-identification path in PureTome's AI service. It ships switched off; the live privacy features are pseudonyms in every export and the audiobook.",
  },
  {
    id: 'tink',
    name: 'Tink',
    group: 'compliance',
    note: 'Google\'s cryptographic library: opinionated APIs that make the insecure choice hard, keysets versioned and rotated without downtime.',
  },
  {
    id: 'oauth2-jwt',
    name: 'OAuth2/JWT',
    group: 'compliance',
    note: 'Short-lived access tokens, refresh rotation, and a revocation list for the sensitive scopes. No cookies crossing the tenant boundary.',
  },
]

export const stackEdges: StackEdge[] = [
  { source: 'context-eng', target: 'gemini', label: 'implicit cache' },
  { source: 'pgvector', target: 'langgraph', label: 'vector retrieval' },
  { source: 'neo4j', target: 'langgraph', label: 'concept writes' },
  { source: 'mongodb', target: 'node', label: 'Mongoose' },
  { source: 'langgraph', target: 'vertex-ai', label: 'agent orchestration' },
  { source: 'langgraph', target: 'gemini', label: 'structured extraction' },
  { source: 'nestjs', target: 'drizzle', label: 'typed data layer' },
  { source: 'drizzle', target: 'postgres', label: 'schema + migrations' },
  { source: 'nestjs', target: 'redis', label: 'cache + locks' },
  { source: 'nestjs', target: 'qstash', label: 'durable webhooks' },
  { source: 'angular-21', target: 'spartan-ui', label: 'component layer' },
  { source: 'spartan-ui', target: 'tailwind-v4', label: 'styling' },
  { source: 'react-19', target: 'tailwind-v4', label: 'styling' },
  { source: 'gcp', target: 'terraform', label: 'infra-as-code' },
  { source: 'gcp', target: 'kubernetes', label: 'compute plane' },
  { source: 'gcp', target: 'firebase', label: 'hosting + auth' },
  { source: 'docker', target: 'github-actions', label: 'build pipeline' },
  { source: 'drizzle', target: 'aes-256-gcm', label: 'column encryption' },
  { source: 'aes-256-gcm', target: 'tink', label: 'key management' },
  { source: 'tink', target: 'gcp', label: 'KMS envelope' },
  { source: 'hipaa-baa', target: 'google-dlp', label: 'de-identification path' },
  { source: 'oauth2-jwt', target: 'nestjs', label: 'auth guards' },
  { source: 'mcp', target: 'claude-code', label: 'tool protocol' },
]

