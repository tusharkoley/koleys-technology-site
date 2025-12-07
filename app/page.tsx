// app/page.tsx
import Link from "next/link";
import { ChatWidget } from "@/components/ChatWidget";

const highlights = [
  "Senior Python & data engineering",
  "Cloud-native architectures (AWS / GCP / Azure)",
  "ML & analytics platforms in regulated environments",
  "CI/CD, observability, and production reliability",
];

const techStack = [
  "Python",
  "FastAPI / Django",
  "PostgreSQL",
  "Docker / Kubernetes",
  "GitLab CI/CD",
  "AWS / GCP",
  "Kubeflow",
];

export default function HomePage() {
  return (
    <>
    <div className="space-y-16">
      {/* Hero */}
      <section className="grid gap-10 pt-6 md:grid-cols-[1.3fr,1fr] md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
            Koleys Technology Ltd
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Python, data, and AI engineering{" "}
            <span className="text-sky-400">for teams that ship.</span>
          </h1>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            Koleys Technology Ltd is a UK-based consultancy focused on robust
            backend, data, and AI systems. We help product and research teams
            design, build, and operate platforms that turn complex data into
            reliable, actionable outcomes.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-slate-950 hover:bg-sky-400 transition-colors"
            >
              View services
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-slate-700 px-5 py-2 text-sm font-medium text-slate-100 hover:border-sky-400 hover:text-sky-300 transition-colors"
            >
              Discuss a project
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              What we focus on
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-200">
              {highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Core stack
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {techStack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-700 px-2 py-0.5 text-[11px] uppercase tracking-wide text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mini sections */}
      <section className="grid gap-6 md:grid-cols-3">
        <HomeCard
          title="Contracting & consulting"
          body="Flexible engagement as a senior engineer or small team, integrating with your existing stack and delivery processes."
        />
        <HomeCard
          title="Platforms, not prototypes"
          body="We build solutions that are observable, tested, and maintainable — ready for real-world workloads and iteration."
        />
        <HomeCard
          title="Domain experience"
          body="Experience across healthcare, analytics, and trading tools, with a strong focus on data integrity and compliance-aware design."
        />
      </section>
    </div>

     {/* Chat widget at bottom-right */}
      <ChatWidget />

    </>
  );
}

function HomeCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
      <h2 className="text-sm font-semibold text-slate-50">{title}</h2>
      <p className="mt-2 text-sm text-slate-300">{body}</p>
    </div>
  );
}
