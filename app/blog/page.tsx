// app/blog/page.tsx
export default function BlogPage() {
  return (
    <div className="space-y-6">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
          Blog
        </p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          Notes on engineering and learning.
        </h1>
      </header>

      <p className="max-w-xl text-sm text-slate-300 sm:text-base">
        This space will host short, practical posts on topics like building
        durable data platforms, AI workflows, and learning paths for engineers
        and students. If you&apos;d like to be notified when new posts are
        available, mention it when you get in touch.
      </p>

      <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/40 p-6 text-sm text-slate-400">
        No public articles yet — the best way to understand how we work is to{" "}
        <span className="text-sky-400">start a conversation.</span>
      </div>
    </div>
  );
}
