export type OssShowcase = {
  slug: string
  title: string
  blurb: string
  stack: string[]
  githubUrl: string
  detailHref: string
  extractedFrom?: string
}

export const ossShowcase: OssShowcase[] = [
  {
    slug: 'agent-native-monorepo',
    title: 'agent-native-monorepo',
    blurb:
      'A LangGraph agent service built to be audited: A2A v1.0 with a signed Agent Card, tools that declare whether they can be undone (saga rollback, or a human approval gate when they cannot), an eval suite replayed against a committed baseline on every pull request, a memory-poisoning red team, OpenTelemetry GenAI traces and a hash-chained run ledger. Demo domain: synthetic Medicare Advantage prior authorization.',
    stack: [
      'Yarn 4',
      'Turborepo',
      'Node 24',
      'NestJS 11',
      'LangGraph',
      'Gemini API',
      'Postgres 16 + pgvector',
      'Neo4j 5',
      'Drizzle',
      'OpenTelemetry',
      'A2A v1.0',
      'GitHub Actions',
    ],
    githubUrl: 'https://github.com/maxmillienjr/agent-native-monorepo',
    detailHref: '/work/oss/agent-native-monorepo',
    extractedFrom:
      "Began as a sanitized extraction of PureTome's agent patterns and has grown its own domain since. docs/STATUS.md marks every capability implemented, stubbed, planned or removed against evidence at HEAD; 31 of 37 rows are implemented.",
  },
  {
    slug: 'headless-lanes',
    title: 'headless-lanes',
    blurb:
      'Scaffolding for running Claude Code agents unattended on systemd timers. A runner gives each login one run at a time, bills the subscription instead of an API key, and logs every run. Everything the agents make lands in one inbox, anything that needs a human waits in a decision queue, and a dispatcher lane works only what was approved. Ships a nightly lint, a single-file local console with a 30-second demo, and the failure behind each guardrail.',
    stack: ['Bash', 'Python 3.11 (stdlib only)', 'SQLite', 'systemd', 'Claude Code'],
    githubUrl: 'https://github.com/maxmillienjr/headless-lanes',
    detailHref: '/work/oss/headless-lanes',
    extractedFrom:
      'Cut down from the system I run my own business on. The example prompts are generic templates and the demo data is invented.',
  },
  {
    slug: 'secure-data-vault',
    title: 'secure-data-vault',
    blurb:
      'A drop-in field-level encryption layer for Postgres + Drizzle ORM, designed for PHI/PII workloads under HIPAA or SOC 2. Transparent AES-256-GCM at the column level using Google Tink for key management, with envelope encryption against GCP KMS. Includes a deterministic-search variant for encrypted-column lookups without hauling the entire table into memory. The README includes the threat model, the audit-trail expectations, and what this doesn\u2019t protect against.',
    stack: ['TypeScript', 'NestJS', 'Drizzle', 'Postgres', 'Google Tink', 'GCP KMS'],
    githubUrl: 'https://github.com/maxmillienjr/secure-data-vault',
    detailHref: '/work/oss/secure-data-vault',
    extractedFrom: "Extracted from Quiet Horizons' encryption-at-rest layer.",
  },
  {
    slug: 'realtime-voice-infra',
    title: 'realtime-voice-infra',
    blurb:
      'A production-grade pipeline for streaming audio dictation into structured AI output without buffering to disk. Browser captures audio → secure WebSocket → Google Speech-to-Text → Gemini for structured extraction → typed result back to the client. Includes back-pressure handling, reconnect semantics, and a stateless inference path that never persists draft transcripts (designed for regulated environments where draft-state writes are an audit liability).',
    stack: [
      'TypeScript',
      'NestJS',
      'WebSockets',
      'Google Speech-to-Text',
      'Vertex AI Gemini',
      'Cloud Run',
    ],
    githubUrl: 'https://github.com/maxmillienjr/realtime-voice-infra',
    detailHref: '/work/oss/realtime-voice-infra',
    extractedFrom: "Extracted from Quiet Horizons' ambient scribe pipeline.",
  },
]
