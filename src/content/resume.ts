export type Role = {
  company: string
  title: string
  start: string
  end: string
  bullets: string[]
  current?: boolean
  /**
   * Roles are dated here once, in one place, even though the public page
   * renders the curated dateless view. Set false to keep a short contract
   * stint out of that curated view. The dated chronology used for job
   * submissions lives in the Drive doc, not here.
   */
  inHighlights?: boolean
}

export type SkillGroup = {
  label: string
  items: string[]
}

export type Education = {
  institution: string
  degree: string
  start?: string
  end?: string
}

export type OpenSourceProject = {
  name: string
  href: string
  blurb: string
}

export type OpenSource = {
  contributionsPrefix: string
  contributionRepos: string[]
  projects: OpenSourceProject[]
}

export type Resume = {
  name: string
  location: string
  phone: string
  email: string
  github: string
  pdfHref: string
  summary: string
  skills: SkillGroup[]
  openSource: OpenSource
  experience: Role[]
  education: Education[]
}

export const resume: Resume = {
  name: 'Max Millien',
  location: 'Greater Boston Area',
  phone: '(617) 224-7372',
  email: 'max.millien@puretome.com',
  github: 'github.com/maxmillienjr',
  pdfHref: '/resume/Millien-Max-2026.pdf',
  summary:
    'Full-stack and platform engineer who builds and operates production AI systems end-to-end. Recent work includes a hybrid retrieval engine over a knowledge graph and vector store, agent orchestration on LangGraph, and a HIPAA telehealth platform running under a BAA. Enterprise delivery background across healthcare, security systems, and telecom cloud infrastructure, with Kubernetes, Terraform, and CI/CD ownership at each. Owns systems from architecture through production support, and works directly with the people who depend on them.',
  skills: [
    {
      label: 'AI & Data Intelligence',
      items: [
        'Generative AI (GenAI)',
        'Hybrid RAG (Neo4j, PGVector)',
        'LangChain/LangGraph',
        'Agentic Workflows & Agentic IDEs (Claude Code)',
        'MCP',
        'Context Engineering',
        'Gemini API',
        'Vertex AI',
        'Ollama',
      ],
    },
    {
      label: 'Backend & Databases',
      items: [
        'Node.js (NestJS, Express)',
        'C# (.NET Core, ASP.NET)',
        'Python (Django, Celery)',
        'Bash',
        'Java (Spring Boot)',
        'Ruby on Rails',
        'PostgreSQL',
        'MongoDB',
        'Cloud SQL',
        'SQL Server',
      ],
    },
    {
      label: 'Compliance & Security',
      items: [
        'HIPAA/BAA Compliance',
        'Google DLP (PII De-identification)',
        'Secure WebSockets',
        'JWT/OAuth2',
        'AES-256 Encryption',
        'Stripe API',
      ],
    },
    {
      label: 'Infrastructure & Eventing',
      items: [
        'GCP',
        'AWS',
        'Azure',
        'Terraform',
        'Kubernetes',
        'Docker',
        'CI/CD',
        'Redis',
        'Google Cloud Pub/Sub',
        'QStash',
        'RabbitMQ',
      ],
    },
    {
      label: 'Frontend & UX Engineering',
      items: [
        'React',
        'Next.js',
        'Angular',
        'TypeScript/ESNext',
        'Redux Toolkit',
        'Tailwind CSS',
        'shadcn/ui',
        'Spartan UI',
        'Material Design',
        'Slate.js',
        'SEO/GEO',
        'D3.js',
      ],
    },
  ],
  openSource: {
    contributionsPrefix: 'merged fixes to',
    contributionRepos: ['Angular (core)', 'claude-mem'],
    projects: [
      {
        name: 'realtime-voice-infra',
        href: 'https://github.com/maxmillienjr/realtime-voice-infra',
        blurb: 'voice-agent transport layer: AudioWorklet capture, backpressure-aware streaming',
      },
      {
        name: 'secure-data-vault',
        href: 'https://github.com/maxmillienjr/secure-data-vault',
        blurb: 'regulated-data reference architecture: envelope encryption, tamper-evident audit trails',
      },
      {
        name: 'agent-native-monorepo',
        href: 'https://github.com/maxmillienjr/agent-native-monorepo',
        blurb: 'stateful LangGraph agent chassis with a three-tier memory architecture',
      },
    ],
  },
  experience: [
    {
      company: 'PureTome',
      title: 'Principal Engineer (Founder)',
      start: '2025',
      end: 'Present',
      current: true,
      bullets: [
        'Shipped a HIPAA-compliant telehealth and patient dossier management platform for a psychiatric practice client (Quiet Horizon PLLC), utilizing GCP, Google Workspace BAA (ADC), and strict AES-256-GCM encryption for all PHI at rest via NestJS and Drizzle ORM.',
        "Scoped and delivered an ambient AI medical scribe at the practice owner's request, then engineered the inference layer that made raw dictation clinically usable: a stateless Vertex AI (Gemini 2.5) pipeline that structures live WebSocket dictation into psychiatric notes in memory, with zero draft-state writes so the medical audit trail stays immutable.",
        'Developed a highly reactive clinical workspace using Angular 21 and Spartan UI, featuring a real-time secure dictation pipeline that streams live browser audio over WebSockets to Google Speech-to-Text, reducing provider charting time by synthesizing complex psychiatric evaluations in seconds.',
        "Delivered contract engineering for a health-tech platform client as a founding senior full-stack developer, building booking and payments features across a Django/Celery backend hosted on Azure and a Next.js/TypeScript/GraphQL frontend, shipped through the client's PR review, Jest/Playwright suites, and CI gates.",
        'Spearheaded the product development and UX design to launch an AI Biographer platform, empowering users to craft, publish, and distribute ebook/paperback memoirs and biographies.',
        'Built and deployed an LLM-agnostic stateless AI engine on LangGraph, with each of its 31 model call sites routable to Gemini or Claude by config; a 146-case eval (cross-vendor judge panel, same-model noise floor, $57) selected 19 features for a smaller model at about the same cost.',
        'Engineered a high-performance monorepo integrating a React 19 frontend with Node.js/NestJS microservices.',
        'Built an internal growth engine (Next.js, shadcn/ui) to monitor telemetry and orchestrate AI credit economies.',
        'Designed and shipped a "Hybrid Memory System" combining vector similarity search with graph-based causality mapping to execute multi-step AI workflows without hallucination.',
        'Designed and ran an LLM context-strategy evaluation (61 questions, 3 synthetic manuscripts, LLM judge, $8 total) showing whole-book prompt caching beat top-5 RAG, 99% vs 82% accuracy with unsupported claims cut from 19% to 7%, then shipped it with billing that prices cached tokens correctly.',
        'Retired two datastores (Neo4j, pgvector/Supabase) from a live product with zero data loss, consolidating onto MongoDB with a dry-run-first, idempotent migration.',
        'Orchestrated background job queues and asynchronous service communication using Redis, Google Cloud Pub/Sub, and QStash for reliable, heavy-workload AI processing.',
        'Implemented rigorous DevOps and testing standards, building a zero-downtime CI/CD pipeline via GitHub Actions, GCP, and Terraform, backed by comprehensive Playwright E2E and 80% Jest unit test coverage.',
        'Built and deployed an audiobook production pipeline that features content-addressed synthesis caching, Chirp 3 HD stock narration, Pub/Sub render jobs, ffmpeg loudness normalization and M4B chapter packaging, speech-to-text QC with automatic retakes, and consented voice cloning (Gemini 3.8 TTS).',
        'Standardized an agentic development practice across three repos: implementation is specified in a written brief, delegated to Claude Code sub-agents, then reviewed diff by diff before it leaves the branch, supported by 18 domain skills, 4 custom sub-agent definitions, and SessionStart hook automation. Code produced this way ships through outside PR review and CI.',
      ],
    },
    {
      company: 'SBE Vision',
      title: 'Engineering Lead',
      start: '2016',
      end: '2018',
      bullets: [
        "Partnered with an IBM solutions engineer to design and ship a custom integration between the platform and IBM DOORS, coordinating across two companies' engineering teams to get it running in the customer's environment.",
        'Led a team of 11 developers (across 3 time zones), directed agile processes, and architected microservice infrastructure across GKE and on-prem Kubernetes clusters, integrating GitLab CI/Nexus pipelines.',
        'Designed and developed a modular Angular/TypeScript UI toolkit leveraging Material Design/Tachyons/D3.js, standardizing UX and cutting design-to-development time. The service layer consisted of 10+ microservices built with Spring Boot, Nest.js, and Koa.js, along with Postgres for persistence.',
        'Wrote an automation framework using Node/MongoDB that used Testcafe and Maven Surefire to provide nightly results on e2e testing of microservices. Service logging was performed using the ELK stack with Filebeat.',
        'Configured registries for Docker, npm, Helm, and Maven, streamlining DX and cutting build times.',
        'Implemented an out-of-stack identity provider/management service for authentication (OAuth2, JWT).',
      ],
    },
    {
      company: 'Intac International',
      title: 'Senior Software Engineer',
      start: '2015',
      end: '2016',
      inHighlights: false,
      bullets: [
        'Created a large, data-driven toolkit of reusable/themeable web components for WintacOnline, a cross-device SaaS for mobile CRM, booking, dispatching, and billing automation; segmented the core app into market-specific interfaces: HVAC, Plumbing, Cleaning (EmberJS, Ruby on Rails, AWS, CircleCI, RDS).',
        'Authored the majority of the UI framework and established code-review standards while mentoring the team.',
      ],
    },
    {
      company: 'Verizon Enterprise Solutions',
      title: 'Senior Software Engineer',
      start: '2014',
      end: '2015',
      bullets: [
        'Built web apps and RESTful web services to manage enterprise private cloud organizations and their associated accounts, virtual machines, storage, firewalls, billing, and usage (Dropwizard, Swagger, RabbitMQ, Angular, Express, Nginx, Postgres, CentOS).',
        'Championed best practices for Node.js, Angular, and Docker adoption, and standardized front-end workflows across teams.',
        'Designed cross-platform Vagrant/Docker dev clusters that reduced environment setup time from 2 days to under 2 hours, accelerating team onboarding and CI pipeline readiness.',
        'Built an automated OpenShift STI deployment pipeline for containerized microservices, enabling zero-downtime releases and reducing deployment errors.',
      ],
    },
    {
      company: 'G4S Technology Software Solutions',
      title: 'Senior Software Engineer',
      start: '2012',
      end: '2014',
      bullets: [
        'Developed a configurable survey and incident reporting tool (Knockout.js, RavenDB, ASP.NET MVC) deployed across 17K+ security systems, improving data collection efficiency and UX consistency.',
        'Built SQL-to-RavenDB migration utilities and Excel importers supporting 100K+ system records, enabling seamless legacy-to-modern data transition.',
        "Worked directly with Bank of America stakeholders to define and deliver a self-service capability in the Card Access Control platform, letting their facilities teams manage their own buildings' access points internally instead of routing every change back through G4S.",
        'Enhanced Card Access Control app with 10+ new features and performance optimizations, reducing load times and improving system uptime.',
        'Developed recruitment workflow module (Angular, C#, RabbitMQ, Azure), implementing CQRS architecture, improving request processing speed, and reducing code complexity.',
      ],
    },
    {
      company: 'Partners Healthcare',
      title: 'Programmer/Analyst',
      start: '2011',
      end: '2012',
      bullets: [
        'Developed applications for the Acute Care Documentation team to provide real-time electronic medical record solutions, thereby replacing paper flow sheets, assessments, and clinical notes.',
        'Worked directly with floor nurses and product owners to turn real bedside charting workflow into the application, taking requirements and feedback straight from the clinical end users rather than through a written spec.',
        'Implemented a cost analysis tool for the Imaging Finance department that is used for tracking the usage of radiology resources owned by Massachusetts General Hospital.',
      ],
    },
  ],
  education: [
    {
      institution: 'Boston University',
      degree: 'Bachelor of Science, Electrical Engineering',
      start: '2003',
      end: '2007',
    },
  ],
}

export const PREVIOUS_ROLES_LABEL = 'Earlier Experience'
