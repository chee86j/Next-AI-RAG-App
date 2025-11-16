# Step 02 – Starter Kit Verification & Repo Setup

## Objective
Confirm that the repository aligns with the engineering guardrails before adding new code. This includes verifying the Next.js starter kit, TypeScript strict settings, Tailwind configuration, linting, and the `.cursor/rules` structure.

## Checklist
1. **Starter Kit Baseline**
   - Ensure the repo already contains a working Next.js 14 + TypeScript project (App Router).
   - If missing, clone a vetted starter kit into the repo (never auto-generate via AI) and commit the baseline.

2. **TypeScript & Linting**
   - Confirm `tsconfig.json` has `strict: true` and recommended flags (`noUnusedLocals`, `noUncheckedIndexedAccess`, etc.).
   - Verify ESLint + Prettier configurations enforce single quotes and the block comment style described in `.cursor/rules/engineering/coding-principles.mdc`.

3. **Tailwind CSS**
   - Check `tailwind.config.ts` or `.js` includes the `app/` and `src/` directories.
   - Ensure base styles (fonts, color palette) reflect Parsity’s brand guidance or an agreed design system.

4. **Folder Structure**
   - Confirm `/Instructions`, `.cursor/rules`, and `jira_plan.md` sit at the repo root for easy discovery.
   - Make sure the `step-XX.md` files live under `/Instructions` and follow sequential numbering.

5. **Automation & Tooling**
   - If Husky/lint-staged aren’t present, decide whether to add them now or in a later step; document the decision in this file.
   - Identify the package manager (npm/pnpm/yarn) and record it in `TechStack.md` if not already captured.

## Teaching Notes
- Describe any starter-kit adjustments (e.g., upgrading dependencies, removing scaffolding files) so future learners know what changed.
- Link back to `jira_plan.md` Epic 1, Story 1.1 for traceability.

## Execution Log
- 2024-11-15: Scaffolded the repo with `npx create-next-app@latest . --ts --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm`.
- Verified that `tsconfig.json` ships with `strict: true`, `skipLibCheck: true`, and the `@/*` alias required by Story 1.1.
- Confirmed Tailwind is configured through `postcss.config.mjs` + `tailwind.config.ts` (App Router preset), covering `src/app` paths.
- Package manager is **npm** (per `package-lock.json`); recorded in `TechStack.md`.
- Installed a local Node 20 runtime under `.local/node` to run commands inside WSL; `npm run lint` and `npm run build` both complete successfully on the baseline scaffold.
- TODO (next run): add Husky/lint-staged after core scaffolding is stable.

## Next Actions
After completing this checklist, we can move to Step 03: implementing authentication and session utilities (Epic 1, Story 1.2).
