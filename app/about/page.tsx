// app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="space-y-8">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
          About
        </p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          Koleys Technology Ltd.
        </h1>
      </header>

      <section className="space-y-4 text-sm text-slate-300 sm:text-base">
        <p>
          Koleys Technology Ltd is a UK-registered limited company providing
          high-quality software and data engineering services. The company is
          led by{" "}
          <span className="font-semibold text-slate-50">Tushar Koley</span>, a
          senior engineer with more than two decades of experience building
          production systems across finance, healthcare, and analytics.
        </p>
        <p>
          Our work sits at the intersection of backend engineering, data
          platforms, and applied machine learning. We have hands-on experience
          with cloud-native architectures, large-scale data processing, and the
          realities of delivering solutions in regulated industries.
        </p>
        <p>
          Engagements range from contract roles embedded in larger teams to
          focused consulting engagements, where we help define architecture,
          build core foundations, and hand over to your internal teams with
          clear documentation and support.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <AboutCard
          title="Experience"
          body="20+ years in software engineering, including senior positions across multiple sectors and technologies."
        />
        <AboutCard
          title="Location"
          body="Based in the United Kingdom, working remotely or on-site as required by the engagement."
        />
        <AboutCard
          title="Approach"
          body="Pragmatic, delivery-focused, and collaborative: we prefer simple, well-understood solutions over unnecessary complexity."
        />
      </section>
    </div>
  );
}

function AboutCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
      <h2 className="text-sm font-semibold text-slate-50">{title}</h2>
      <p className="mt-2 text-sm text-slate-300">{body}</p>
    </div>
  );
}
