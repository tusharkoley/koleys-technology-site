// app/contact/page.tsx
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
          Contact
        </p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          Start a conversation.
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
          Share a brief outline of your project, team, and timelines. We can
          then arrange a short call to understand your needs and see whether
          we&apos;re a good fit.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-[2fr,1fr]">
        <form
          className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
          action="mailto:info@koleystechnology.com"
          method="post"
          encType="text/plain"
        >
          <div>
            <label className="block text-xs font-medium text-slate-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-300">
              Organisation / team
            </label>
            <input
              type="text"
              name="organisation"
              className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-300">
              Project summary
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-500"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-slate-950 hover:bg-sky-400 transition-colors"
          >
            Send message
          </button>
        </form>

        <aside className="space-y-4 text-sm text-slate-300">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <h2 className="text-sm font-semibold text-slate-50">
              Direct contact
            </h2>
            <p className="mt-2 text-sm">
              Email:{" "}
              <span className="font-medium text-slate-100">
                info@koleystechnology.com
              </span>
            </p>
            <p className="mt-2 text-xs text-slate-400">
              You can also reach out on LinkedIn for informal discussions.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-xs text-slate-400">
            <p>
              Koleys Technology Ltd is a limited company registered in England &
              Wales. Details available on request in formal engagement
              documents.
            </p>
          </div>
          <p className="text-xs text-slate-500">
            Personal site:{" "}
            <Link
              href="https://tusharkoley.com"
              className="text-sky-400 hover:underline"
            >
              tusharkoley.com
            </Link>
          </p>
        </aside>
      </div>
    </div>
  );
}
