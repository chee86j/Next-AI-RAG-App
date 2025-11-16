# Step 03 – Auth.js Session Utilities

## Objective
Implement the authentication/session backbone described in Story 1.2 of `jira_plan.md`, using Auth.js (NextAuth) with a Credentials provider and anonymous fallback.

## Checklist
1. **Dependencies** – Install `next-auth` (and `@auth/core` if needed once we extend adapters).
2. **API Route** – Create `/app/api/auth/[...nextauth]/route.ts` that validates `__initial_auth_token`, falls back to a guest session, and persists via JWT or adapter.
3. **Client Hook** – Build `useSessionState` that returns `{ userId, role, isSessionReady }` and prevents data access until ready.
4. **Diagnostics** – Log session onboarding info (user id, auth state) to emulate Parsity’s mentoring/office hour support.
5. **Docs** – Update `/Instructions/day-01-step-by-step.md` (or Day 2 when we get there) with the commands/config changes used.

## Teaching Notes
- Explain to yourself (or in the log) why we prefer Auth.js over Firebase for this project.
- Capture any pitfalls (env vars, Next.js route handlers) so future learners avoid them.

## Next Actions
Once the auth utilities are in place, proceed to Step 04 (environment hardening & vector math demos).
