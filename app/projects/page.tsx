// app/projects/page.tsx
type Project = {
  name: string;
  role: string;
  description: string;
  highlights: string[];
};

const projects: Project[] = [
  {
    name: "AI & Imaging Platform (Global Pharma)",
    role: "Senior Python / Data Engineer (Contract)",
    description:
      "Cloud-native platform supporting AI and image-based workflows in oncology research.",
    highlights: [
      "Designed and maintained data pipelines for large imaging datasets.",
      "Implemented CI/CD for containerised services using GitLab.",
      "Collaborated with data scientists on experiment deployment and monitoring.",
    ],
  },
  {
    name: "TradeZens – Trading & Analytics",
    role: "Founder / Lead Engineer",
    description:
      "Internal project exploring systematic trading strategies and portfolio analytics.",
    highlights: [
      "Python backend with data ingestion, strategy evaluation, and reporting.",
      "Web-based dashboards for portfolio and risk overview.",
      "Experimentation with AI-assisted decision support.",
    ],
  },
  {
    name: "AI Automation & Agentic Workflows",
    role: "R&D / Prototyping",
    description:
      "Ongoing experiments with agentic AI to automate repetitive workflows such as content generation and video editing.",
    highlights: [
      "Designed multi-step workflows using LLM APIs.",
      "Integrated tooling for media processing and content scheduling.",
      "Focused on reliability, observability, and maintainable orchestration.",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
          Projects
        </p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          Selected work and ongoing projects.
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
          A mix of client engagements and internal projects that illustrate how
          we think about reliability, data, and long-term maintainability.
        </p>
      </header>

      <div className="space-y-5">
        {projects.map((p) => (
          <article
            key={p.name}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
          >
            <h2 className="text-sm font-semibold text-slate-50">{p.name}</h2>
            <p className="mt-1 text-xs text-slate-400">{p.role}</p>
            <p className="mt-2 text-sm text-slate-300">{p.description}</p>
            <ul className="mt-3 list-disc space-y-1 pl-4 text-xs text-slate-400">
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
