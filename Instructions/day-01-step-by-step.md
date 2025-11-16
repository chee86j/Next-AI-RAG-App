# Day 1 - Step-by-Step Commands

Use this guide to replay Step 01 (Engineering Kickoff) and Step 02 (Starter Kit Verification). Follow each block in order- think of it like a lab manual.

## 1. Plan First (Step 01)
1. Make sure the `/Instructions` folder exists:
   ```bash
   mkdir -p Instructions
   ```
2. Open the following files in your editor and paste the content from our repo (or rewrite them yourself):
   - `Instructions/step-01.md` - outlines the kickoff objective and references `.cursor/rules`.
   - `Instructions/PRD.md` - the product requirements document (user stories, risks, flows).
   - `Instructions/TechStack.md` - the selected frameworks/services.

> Teaching tip: read each file aloud or summarize it in your own words before moving on. It cements the intent behind the work.

## 2. Scaffold the Starter Kit (Step 02)
```powershell
cd C:\Users\jeffr\Documents\Next-AI-RAG-App
npx create-next-app@latest . `
  --ts `
  --tailwind `
  --eslint `
  --app `
  --src-dir `
  --import-alias "@/*" `
  --use-npm
```
If the folder isn’t empty, temporarily move `/Instructions`, `.cursor`, and `jira_plan.md` elsewhere, run the command, then move them back.

## 3. Restore Cursor Engineering Rules
```bash
mkdir -p .cursor/rules/engineering
# recreate coding-principles.mdc, design-rules.mdc, javascript-rules.mdc, etc.
```
Use the versions in this repository as your source of truth so Cursor has the right guardrails.

## 4. Install & Verify
```bash
npm install
npm run lint
npm run build
```
> In WSL, prefix with `PATH=$PWD/.local/node/node-v20.12.2-linux-x64/bin:$PATH` so the local Node runtime is used.

## 5. Simplify the UI
```bash
# Replace src/app/layout.tsx, globals.css, and page.tsx with the Hello World versions
git rm public/*.svg
touch public/.gitkeep
```
Now the app renders a clean “Hello World” card instead of the template marketing page.

```
┌──────────────────────────────────┐
│  create-next-app scaffold        │
│  (Next.js + TS + Tailwind)       │
└────────────────┬─────────────────┘
                 │
                 ▼
┌──────────────────────────────────┐
│  Hello World UI edits            │
│  layout.tsx / page.tsx / CSS     │
└──────────────────────────────────┘
```

## 6. Update Your Learning Log
- Add any observations to `Instructions/step-01.md` and `Instructions/step-02.md` (what surprised you, what you’d teach a friend).
- Keep this file (`day-01-step-by-step.md`) in sync with the commands you actually ran.

Congratulations- once these sections are done, you’ve finished Day 1 and can move on to Step 03 (Auth.js session utilities).
