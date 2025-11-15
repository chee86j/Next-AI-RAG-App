# AI-Powered Full Stack App: JIRA Project Plan

> A Parsity-inspired, engineering-guarded roadmap that takes the product from foundational setup to a fully deployed Retrieval-Augmented Generation (RAG) experience while following `.cursor/rules/engineering`.

**Target stack:** Next.js 14 · TypeScript · Tailwind CSS · Auth.js · OpenAI API · Pinecone/Qdrant  
**Parsity reference:** 30-day intensive focused on vector math, RAG pipelines, streaming UX, observability, agents, and pitching AI ROI.  
**Engineering guardrails:** Planning-first mindset, `/Instructions` knowledge base, modular `.mdc` rule files, DRY/clean code expectations, comment/logging conventions, and starter-kit-only scaffolding.

## Engineering Alignment Checklist (from `.cursor/rules/engineering`)
- Operate with a systems mindset: document user stories, flows, and requirements before coding (70% planning / 30% execution).
- Maintain an `/Instructions` folder containing `PRD.md` + `TechStack.md`; load it at the beginning of each Cursor session.
- Rely on vetted starter kits rather than letting the AI scaffold projects from scratch; focus LLM usage on business logic.
- Keep modular `.mdc` rule files under `.cursor/rules/` (frontend/back-end/tests) to scope Cursor prompts precisely.
- Enforce DRY principles, descriptive variable names, lean functions, and block-style comments (`/* */`).
- Prefer single quotes where applicable, instrument TypeScript/JS code with clear structure, and plan for extensive observability/logging.
- Treat UI work with the responsive, accessible standards captured in `design-rules.mdc`.

## 30-Day Execution Cadence (Adapted from Parsity)
| Week | Theme (Parsity) | Parsity Deliverables | Related JIRA Coverage |
| --- | --- | --- | --- |
| Week 1 | LLMs, Embeddings & Vectors | Vector search demo, math assignments for dot products/embeddings | Epic 1 (Stories 1.0–1.4) |
| Week 2 | Building RAG Pipelines | Scrape, chunk, embed, retrieve, respond + chunking strategy proposal | Epic 2 (Stories 2.1–2.4) |
| Week 3 | TypeScript & Next.js Integration | Chat interface, API routes, streaming, fine-tuning explainer video | Epic 3 (Stories 3.1–3.4) |
| Week 4 | Agents, Deployment & Pitching | Agent unit tests, launch to Vercel, RAG presentation + Selling the Vision | Epics 4 & 5 (Stories 4.1–5.4) |

## Epic Roadmap at a Glance
| Epic | Theme | Outcome |
| --- | --- | --- |
| 🚀 Epic 1 | Project Setup & Engineering Guardrails | Starter-kit workspace, `/Instructions` folder, Auth.js sessions, and vector-math readiness |
| 📚 Epic 2 | RAG Pipeline Development | Repeatable ingestion, chunking, embedding, indexing, and evaluation workflow |
| 💬 Epic 3 | Full-Stack Integration & UX | Production chat UI wired to the RAG API with streaming responses, fine-tuning narrative, and observability hooks |
| 🤖 Epic 4 | Agent & Orchestration Layer | Tool-aware agent that chooses between RAG retrieval and external search, with decision tracing |
| ✅ Epic 5 | Observability, Deployment & ROI | Hardened error handling, telemetry dashboards, Vercel launch, QA sign-off, and leadership-friendly reporting |

---

## 🚀 Epic 1: Project Setup & Engineering Guardrails (Foundation)
**Goal:** Establish the starter-kit workspace, governance artifacts, authentication bootstrap, environment configuration, and Week 1 linear-algebra prep.

### Story 1.0 – Engineering Enablement & `/Instructions` Stack
- **Priority:** High · **Effort:** 2 days
- **Tasks:**
  - Task 1.0.1 – Clone/verify a vetted Next.js 14 + TypeScript + Tailwind starter kit (no scaffold-from-scratch) with linting/formatting baked in.
  - Task 1.0.2 – Create `/Instructions/PRD.md` describing goals, user stories, flows, and edge cases per Parsity’s planning expectations.
  - Task 1.0.3 – Add `/Instructions/TechStack.md` documenting frontend/backend dependencies, integration points, and environment setup.
  - Task 1.0.4 – Document how to load `/Instructions` + `.cursor/rules/**/*.mdc` at the start of each Cursor session (checklist in README).
  - Task 1.0.5 – Ensure modular `.mdc` rule files exist (frontend/back-end/tests/design) and confirm scope mappings are correct.

### Story 1.1 – Setup Next.js & TypeScript Environment
- **Priority:** High · **Effort:** 2 days
- **Tasks:**
  - Task 1.1.1 – Align the starter kit with repository conventions (strict TypeScript, ESLint, Prettier, Husky if applicable).
  - Task 1.1.2 – Configure Tailwind (`tailwind.config.ts`) for `app/` and `src/`, plus shared design tokens to match Parsity visuals.
  - Task 1.1.3 – Document package scripts, lint/test commands, and Node version to keep onboarding consistent.
  - Task 1.1.4 – Add block comment templates (`/* ... */`) and snippet guidance for contributors in the `/Instructions` folder.

### Story 1.2 – Configure Authentication & Session Utilities
- **Priority:** High · **Effort:** 2 days
- **Tasks:**
  - Task 1.2.1 – Set up Auth.js/NextAuth in `/app/api/auth/[...nextauth]/route.ts` with a Credentials provider validating `__initial_auth_token` and persisting sessions (JWT or adapter-backed).
  - Task 1.2.2 – Implement a helper that hydrates the session from the token and creates an anonymous guest session when missing.
  - Task 1.2.3 – Expose a `useSessionState` hook returning session user id, role, and an `isSessionReady` flag to prevent premature data access.
  - Task 1.2.4 – Emit onboarding diagnostics (user id, auth state) to support Slack-style mentoring/office hours.

### Story 1.3 – Environment & API Key Management
- **Priority:** High · **Effort:** 1 day
- **Tasks:**
  - Task 1.3.1 – Document required environment variables (OpenAI, Vector DB, Auth.js secrets) in `/Instructions/TechStack.md` and `.env.example`.
  - Task 1.3.2 – Ship a reusable OpenAI API wrapper that sets headers, selects the model (e.g., `gpt-4o-mini`), and handles errors.
  - Task 1.3.3 – Add an onboarding checklist verifying environment readiness before joining Parsity-style group calls.

### Story 1.4 – LLM & Vector Foundations (Parsity Week 1)
- **Priority:** Medium · **Effort:** 1 day
- **Tasks:**
  - Task 1.4.1 – Build a standalone vector search demo visualizing embeddings/cosine similarity.
  - Task 1.4.2 – Produce internal “math assignments” (TypeScript notebooks) covering dot products, normalization, and embedding drift.
  - Task 1.4.3 – Record a 10-minute walkthrough linking these math primitives to the upcoming RAG pipeline vocabulary.

---

## 📚 Epic 2: RAG Pipeline Development (Data Ingestion)
**Goal:** Ingest documents, transform them into embeddings, persist them in a vector database, and evaluate chunking trade-offs per Parsity’s Week 2 deliverables.

### Story 2.1 – Vector Database Provisioning
- **Priority:** High · **Effort:** 2 days
- **Tasks:**
  - Task 2.1.1 – Choose Pinecone (free tier) or self-hosted Qdrant and provision the index structure.
  - Task 2.1.2 – Define the embedding dimension (e.g., 1536 for `text-embedding-3-small`) and metadata fields (`source_url`, `document_title`, `chunk_id`).
  - Task 2.1.3 – Implement a `VectorDBService` for init, bulk upserts, and vector similarity queries.
  - Task 2.1.4 – Draft a Parsity-style trade-off memo comparing Pinecone vs. Qdrant (costs, latency, scaling knobs) to support Week 4 “Selling the Vision.”

### Story 2.2 – Data Preprocessing & Chunking
- **Priority:** High · **Effort:** 3 days
- **Tasks:**
  - Task 2.2.1 – Build a data loader that ingests Markdown/PDF sources and emits clean text.
  - Task 2.2.2 – Develop a TextSplitter (recursive or semantic) with `chunkSize ≈ 1000` chars and `chunkOverlap ≈ 200` to preserve context.
  - Task 2.2.3 – Deliver the Parsity Week 2 “chunking strategy proposal” outlining split heuristics, overlap rationale, and doc governance.
  - Task 2.2.4 – Add automated chunk-quality checks (length distribution, average overlap, metadata completeness) and post results to Slack before office hours.

### Story 2.3 – Embedding & Indexing Utility
- **Priority:** High · **Effort:** 2 days
- **Tasks:**
  - Task 2.3.1 – Write an async helper that calls the selected embedding model and returns vector arrays.
  - Task 2.3.2 – Create a script/CLI orchestrating load → chunk → embed → transactional bulk upsert into the vector DB.
  - Task 2.3.3 – Capture runbooks + Loom walkthrough covering the “scrape, chunk, embed, retrieve, respond” lifecycle per Parsity Week 2.
  - Task 2.3.4 – Instrument the pipeline to log token usage, latency, and chunk provenance for later observability dashboards.

### Story 2.4 – Retrieval Quality Guardrails
- **Priority:** Medium · **Effort:** 1 day
- **Tasks:**
  - Task 2.4.1 – Seed evaluation questions and golden answers to benchmark retrieval precision/recall.
  - Task 2.4.2 – Automate nightly retrieval tests (topK overlap, score distributions) and post summaries before weekly office hours.

---

## 💬 Epic 3: Full-Stack Integration & UX (Chat Interface)
**Goal:** Deliver the chat experience, connect it to the RAG pipeline for grounded responses, and fulfill Parsity’s Week 3 streaming + fine-tuning assignments.

### Story 3.1 – Chat Interface Development
- **Priority:** High · **Effort:** 3 days
- **Tasks:**
  - Task 3.1.1 – Use Tailwind flex utilities (plus `sm:`, `md:` breakpoints) to craft a responsive chat layout with a pinned input bar per `design-rules.mdc`.
  - Task 3.1.2 – Manage chat history with `useState` storing `{ role: 'user'|'assistant', content, sources? }` objects.
  - Task 3.1.3 – Add a reusable component that renders retrieved document titles/URIs as clickable citations.
  - Task 3.1.4 – Integrate Parsity UI templates or equivalent brand tokens so screenshots match the “what you’ll build” material.

### Story 3.2 – Core RAG Logic API Route
- **Priority:** High · **Effort:** 3 days
- **Tasks:**
  - Task 3.2.1 – Create `/api/rag-query` to accept the user prompt and `userId`.
  - Task 3.2.2 – Generate the query embedding and run a Vector DB similarity search (`topK ≈ 5`).
  - Task 3.2.3 – Construct the prompt combining context chunks with the original question via placeholders.
  - Task 3.2.4 – Call the LLM (using the wrapper from Epic 1) and return the response plus source metadata.
  - Task 3.2.5 – Record a demo showing RAG vs. fine-tuning trade-offs (Parsity Week 3 assignment) and store the script/video under `/docs`.

### Story 3.3 – Real-Time Streaming Response & Observability Hooks
- **Priority:** Medium · **Effort:** 2 days
- **Tasks:**
  - Task 3.3.1 – Refactor the API route to stream results via the LLM SDK and expose an SSE-compatible response stream.
  - Task 3.3.2 – Update the client to consume the `ReadableStream`, patch the last assistant bubble live, and avoid full reloads.
  - Task 3.3.3 – Capture streaming metrics (time-to-first-token, tokens/sec) and surface them in an Observability panel.

### Story 3.4 – Prompt & UX Reviews
- **Priority:** Medium · **Effort:** 1 day
- **Tasks:**
  - Task 3.4.1 – Host a weekly review (mirroring Parsity group calls) to score prompt quality, citation clarity, and UI responsiveness.
  - Task 3.4.2 – Maintain a changelog of prompt tweaks, failure cases, and UI adjustments discussed during office hours.

---

## 🤖 Epic 4: Agent & Orchestration Layer (Advanced Logic)
**Goal:** Empower the system with an agent that can decide whether to rely on internal RAG results or external search tools and prepare Week 4 pitching materials.

### Story 4.1 – Agent Framework Integration
- **Priority:** Medium · **Effort:** 3 days
- **Tasks:**
  - Task 4.1.1 – Define a `QueryAgent` class coordinating the LLM thought process, tool registry, and structured outputs.
  - Task 4.1.2 – Register core tools: the internal RAG retrieval function and a Google Search tool (`google:search`) for external knowledge.
  - Task 4.1.3 – Document how tools are added/validated/swapped to reflect Parsity’s multi-agent orchestration promise.

### Story 4.2 – Agent Decision Logic
- **Priority:** Medium · **Effort:** 3 days
- **Tasks:**
  - Task 4.2.1 – Craft a detailed system prompt with tool usage instructions, constraints, and success criteria.
  - Task 4.2.2 – Update `/api/rag-query` to delegate to the Agent, execute the chosen tool, and funnel results back for final completion.
  - Task 4.2.3 – Capture explanation traces (why the agent selected RAG vs. Search) for future ROI discussions.

### Story 4.3 – Agent Unit Testing
- **Priority:** Medium · **Effort:** 1 day
- **Tasks:**
  - Task 4.3.1 – Add tests with prompts referencing indexed internal docs (e.g., vacation policy) expecting the RAG path.
  - Task 4.3.2 – Add tests with current-event prompts (e.g., future Olympics host) expecting the Search path.
  - Task 4.3.3 – Post automated test summaries into Slack before weekly guest sessions, mirroring Parsity accountability.

### Story 4.4 – Selling the Vision & Pitch Assets
- **Priority:** Medium · **Effort:** 2 days
- **Tasks:**
  - Task 4.4.1 – Build a concise deck explaining RAG vs. fine-tuning trade-offs, OpenAI token economics, and data governance points.
  - Task 4.4.2 – Record a short “why this matters” video (Parsity Week 4 requirement) aimed at leadership and cross-functional partners.
  - Task 4.4.3 – Package metrics (retrieval accuracy, latency, adoption goals) into a one-pager for leadership approvals.

---

## ✅ Epic 5: Observability, Deployment & ROI (Go-Live)
**Goal:** Harden the platform, deploy it to Vercel, verify quality, and keep telemetry/pitch artifacts updated for Week 4 deliverables.

### Story 5.1 – Robust Error Handling & Logging
- **Priority:** High · **Effort:** 2 days
- **Tasks:**
  - Task 5.1.1 – Wrap OpenAI, Vector DB, and data-store calls in `try/catch` with friendly user messaging.
  - Task 5.1.2 – Emit structured logs for latency, prompt text, retrieved document titles, and response length.
  - Task 5.1.3 – Provide a retry helper with exponential backoff (1s · 2s · 4s) for transient issues.
  - Task 5.1.4 – Route error budgets and incident summaries to Slack to mimic Parsity’s live office-hours debugging culture.

### Story 5.2 – Deployment Configuration
- **Priority:** High · **Effort:** 1 day
- **Tasks:**
  - Task 5.2.1 – Connect the repo to Vercel and configure prod/dev environment variables in the dashboard.
  - Task 5.2.2 – Push to `main`, trigger a build, and confirm the deployed URL plus serverless routes execute correctly.
  - Task 5.2.3 – Publish a release checklist referencing Parsity’s expectation that every cohort launches to Vercel by Week 4.

### Story 5.3 – Final Quality Assurance (QA)
- **Priority:** Medium · **Effort:** 2 days
- **Tasks:**
  - Task 5.3.1 – Validate that every grounded response surfaces accurate citation metadata from the Vector DB.
  - Task 5.3.2 – Measure time-to-first-token and time-to-completion to ensure responsive streaming UX.
  - Task 5.3.3 – Run cross-browser + mobile checks to ensure flawless layout/interaction across major devices.
  - Task 5.3.4 – Host a Parsity-style demo day where stakeholders evaluate UX, citations, and streaming smoothness live.

### Story 5.4 – Telemetry, ROI, and Post-Launch Feedback
- **Priority:** Medium · **Effort:** 1 day
- **Tasks:**
  - Task 5.4.1 – Build a lightweight telemetry dashboard (tokens, latency buckets, retrieval success) to keep observability insights flowing after launch.
  - Task 5.4.2 – Collect qualitative feedback from Slack/office-hour participants and categorize prompts needing better context.
  - Task 5.4.3 – Bundle telemetry and feedback into monthly updates so leadership views the team as the go-to AI experts.
