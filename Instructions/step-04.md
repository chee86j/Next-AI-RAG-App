# Step 04 – Vector Foundations & Environment Hardening

## Objective
Complete the remaining pieces of Epic 1 (Stories 1.3 and 1.4): document env vars, ship the OpenAI wrapper, and build the Week 1 vector/math demos.

## Checklist
1. **Environment Docs** – Update `.env.example` (or similar) with OpenAI, vector DB, Auth.js secrets; sync guidance into `/Instructions/TechStack.md`.
2. **OpenAI Wrapper** – Add a reusable TypeScript client that sets headers, model (e.g., `gpt-4o-mini`), and error handling.
3. **Vector Demo** – Build the standalone embedding/cosine-sim demo (can live under `/examples` or `/app/(demo)`), plus math assignments explaining dot products, normalization, drift.
4. **Walkthrough Recording** – Record or script the 10-minute walkthrough connecting the math primitives to the RAG pipeline vocabulary.
5. **Docs & Logs** – Capture the commands/files touched in a new “Day 2” log once work starts; mention any gotchas.

## Teaching Notes
- Treat the demo as a mini-lesson: comment the code generously so learners see the math steps.
- Tie everything back to Parsity Week 1 and cross-reference the relevant `jira_plan.md` stories.

## Next Actions
After Step 04, we’ll move into Epic 2 (RAG pipeline provisioning and chunking).
