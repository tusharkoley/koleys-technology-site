// app/services/page.tsx
const services = [
  {
    name: "Python & Backend Engineering",
    summary:
      "Design and implementation of robust APIs, services, and integrations using modern Python frameworks.",
    details: [
      "FastAPI / Django backends",
      "Asynchronous services and workers",
      "REST / GraphQL APIs",
      "Integration with third-party systems",
    ],
  },
  {
    name: "Data & ML Platforms",
    summary:
      "End-to-end data workflows from ingestion to analytics and machine learning deployment.",
    details: [
      "Data modelling and warehousing",
      "Batch and streaming pipelines",
      "ML experiment tracking and deployment",
      "Kubeflow, Airflow, or cloud-native orchestrators",
    ],
  },
  {
    name: "Cloud & DevOps",
    summary:
      "Infrastructure that supports safe, repeatable delivery and observability.",
    details: [
      "Infrastructure-as-code (Terraform, CloudFormation)",
      "Docker, Kubernetes, serverless",
      "CI/CD design (GitLab, GitHub Actions, Azure DevOps)",
      "Monitoring, logging, and alerting integrations",
    ],
  },
  {
    name: "Technical Advisory",
    summary:
      "Support for technical leaders and founders on architecture, hiring, and roadmap choices.",
    details: [
      "Architecture reviews and risk assessment",
      "Proof-of-concept validation",
      "Team coaching and onboarding",
      "Build vs buy analysis",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-8">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
          Services
        </p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          How Koleys Technology can help your team.
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
          We work best when embedded with your existing product, data, or
          research teams, owning complex technical problems and leaving behind
          systems that are simple to understand and maintain.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <div
            key={s.name}
            className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
          >
            <h2 className="text-sm font-semibold text-slate-50">{s.name}</h2>
            <p className="mt-2 text-sm text-slate-300">{s.summary}</p>
            <ul className="mt-3 list-disc space-y-1 pl-4 text-xs text-slate-400">
              {s.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
