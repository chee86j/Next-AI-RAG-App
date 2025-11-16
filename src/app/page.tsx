export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <section className="w-full max-w-xl rounded-3xl border border-slate-800/60 bg-slate-900/70 p-10 text-center shadow-2xl shadow-slate-950/40">
        <p className="text-xs font-semibold uppercase tracking-[0.5em] text-indigo-400">
          Next.js + Tailwind
        </p>
        <h1 className="mt-6 text-4xl font-semibold leading-tight text-white">
          Hello World
        </h1>
        <p className="mt-4 text-base text-slate-300">
          Start building by editing{" "}
          <code className="rounded bg-slate-800 px-2 py-1 font-mono text-indigo-200">
            src/app/page.tsx
          </code>
          .
        </p>
      </section>
    </main>
  );
}
