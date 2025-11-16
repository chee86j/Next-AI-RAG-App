# Day 2 - Step-by-Step Commands (Auth + Sessions)

Welcome back! If you’re coming from the PERN world (Postgres, Express, React, Node), think of this day as wiring up your familiar “Auth middleware + React context” but inside Next.js.

## 1. Install Auth.js (NextAuth)
```bash
npm install next-auth
```
> Analogy: this is like adding Passport.js to your Express project. Auth.js handles session cookies/JWTs for Next.js.

## 2. API Route = Express Endpoint
```bash
mkdir -p src/app/api/auth/[...nextauth]
```
- `src/app/api/auth/[...nextauth]/route.ts` wires NextAuth into Next.js route handlers. Think Express: `app.post('/auth', passportHandler)`.
- It reads `INITIAL_AUTH_TOKEN` for “real” users and falls back to a guest session otherwise (similar to seeding users vs. anonymous access).
```ts
// TypeScript
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
const handler = NextAuth({ providers: [Credentials({ ... })] });
export { handler as GET, handler as POST };

// JavaScript mental model
// const handler = NextAuth({ providers: [Credentials({ ... })] })
```

## 3. Client-Side Session Provider
```bash
mkdir -p src/components
```
- `src/components/app-session-provider.tsx` wraps the app with `SessionProvider`. Same idea as a React Context provider that stores `req.user` on the client.
- Update `src/app/layout.tsx` to wrap `<AppSessionProvider>{children}</AppSessionProvider>`.

## 4. Use the Session in Components
- Import `import { useSession } from "next-auth/react";` in any client component.
- Call `const { data, status } = useSession();` (status is `"loading"`/`"authenticated"`/`"unauthenticated"`). This replaces the custom hook entirely.

## 5. Environment Setup
- Add `NEXTAUTH_SECRET` (random string) and optionally `INITIAL_AUTH_TOKEN` to `.env.local`.
- Restart `npm run dev` after changing env vars.

## 6. Sanity Checks
```bash
npm run lint
npm run build
```
> This is like running ESLint + `npm test` in a PERN project to ensure the new middleware compiles.

## 7. Docs & Observations
- Update `Instructions/step-03.md` with any nuances you noticed.
- Note in your logs how this differs from Express auth (e.g., no custom session store needed- Auth.js handles JWTs by default).

At this point, the app has full session awareness (seed token or guest). Next Day: Step 04 (env docs + vector math demos).
