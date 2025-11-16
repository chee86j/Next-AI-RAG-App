# Product Requirements Document (PRD)

## 1. Product Overview
Build a Parsity-inspired AI learning assistant that demonstrates how to ship a production-ready Retrieval-Augmented Generation (RAG) application. The app serves two goals:
1. Give developers a hands-on, Next.js-based reference implementation that mirrors the Parsity AI Dev program outcomes (vector storage, RAG pipeline, streaming UI, agent orchestration, observability, and pitching materials).
2. Provide a live learning companion where each implementation step is documented (e.g., `step-01.md`) so future engineers can replay the build.

## 2. Target Users
- **Primary:** Full-stack developers familiar with React/Next.js who want to integrate LLM capabilities without guessing at best practices.
- **Secondary:** Product/engineering leads evaluating AI feasibility; they need tangible demos, telemetry, and ROI artifacts.

## 3. Objectives & Success Criteria
1. **Functional completeness:** All Epics/Stories in `jira_plan.md` are implemented with parity to the Parsity curriculum.
2. **Teaching mode:** Every major milestone produces a `step-XX.md` entry explaining the why/how.
3. **Operational excellence:** System-level logging, retries, telemetry, and QA checks ensure production readiness.
4. **Executive alignment:** “Selling the Vision” artifacts (deck, one-pager, demo video) clearly communicate value, costs, and risks.

## 4. User Stories
### Epic 1 - Foundation
- As a developer, I need a starter-kit repo with strict TypeScript, Tailwind, and Auth.js so I can follow along without bootstrapping from scratch.
- As a learner, I want `/Instructions` files (PRD, TechStack, steps) so I can understand the plan before coding.
- As an instructor, I need math demos (embeddings, cosine similarity) to explain why RAG works.

### Epic 2 - RAG Pipeline
- As an engineer, I want ingestion utilities that clean and chunk documents with clear strategy docs.
- As an operator, I need automated checks for chunk quality and retrieval precision so regressions surface quickly.
- As a teammate, I want a Pinecone/Qdrant trade-off memo to justify infrastructure choices.

### Epic 3 - RAG UX Integration
- As a user, I expect a responsive chat UI with streaming responses and visible citations.
- As a developer, I want prompt histories and streaming metrics to debug context relevance.
- As a learner, I need documentation comparing RAG vs. fine-tuning so I can explain trade-offs.

### Epic 4 - Agent & Orchestration
- As a power user, I want the system to decide between internal knowledge (RAG) and external search automatically.
- As QA, I require deterministic tests proving the agent selects the correct tools for varied prompts.
- As leadership, I need recorded demos/pitch decks explaining why the agent approach drives ROI.

### Epic 5 - Observability & Deployment
- As a maintainer, I must see latency, tokens, and retrieval metrics in dashboards.
- As DevOps, I need a reliable Vercel pipeline with environment parity.
- As stakeholders, we want a final demo day with consistent citations, performance, and UX polish.

## 5. Requirements & Constraints
- **Tech stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Auth.js/NextAuth, OpenAI API, Pinecone or Qdrant, plus any lightweight datastore for session data.
- **Engineering rules:** Follow `.cursor/rules/engineering` for planning, modular rules, styling, and comments.
- **Documentation:** All major steps captured in `/Instructions/step-XX.md` with references to Jira stories.
- **Security/privacy:** Store secrets via environment variables; avoid logging sensitive data.
- **Performance:** Initial load < 2s on a standard laptop; streaming latency tracked via time-to-first-token.

## 6. Assumptions
- The organization already has access to OpenAI API keys and a vector DB account.
- Developers have basic familiarity with Next.js and Node tooling.
- Stakeholders can attend weekly reviews/office hours for feedback loops.

## 7. Risks & Mitigations
| Risk | Impact | Mitigation |
| --- | --- | --- |
| Incomplete planning leads to rework | High | Enforce 70/30 planning-execution split; review `jira_plan.md` before coding. |
| Cost overruns from vector DB usage | Medium | Implement batch upserts, limit dataset size during dev, include Pinecone vs. Qdrant memo. |
| Ambiguous prompts cause hallucinations | Medium | Maintain prompt templates + evaluation harness (Epic 2.4 & Epic 3.4). |
| Agent misfires on tool selection | Medium | Add deterministic tests and telemetry traces (Epic 4.3). |
| Deployment drift vs. demo environment | Low | Use Vercel preview deployments and release checklists (Epic 5.2/5.3). |

## 8. High-Level Flow
1. **Onboarding:** Read `/Instructions` (PRD, TechStack, steps) → configure environment.
2. **Foundation:** Setup starter kit, auth, vector math demos.
3. **Pipeline:** Build ingestion, embeddings, and retrieval guardrails.
4. **Experience:** Wire chat UI + API, add streaming, document prompts.
5. **Agents:** Add orchestration layer with tool selection and tests.
6. **Launch:** Instrument observability, deploy to Vercel, run QA + demo day.
7. **Post-launch:** Share telemetry, ROI updates, and keep step logs current.
