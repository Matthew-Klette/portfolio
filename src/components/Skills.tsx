import Reveal from "./Reveal";

const CATEGORIES = [
  {
    label: "01",
    title: "Analytics & Tracking",
    items: [
      "Google Tag Manager (client & server-side)",
      "GA4",
      "BigQuery",
      "Meta Conversions API",
      "Consent management platforms",
    ],
  },
  {
    label: "02",
    title: "Automation & Integration",
    items: [
      "n8n",
      "Workflow automation across BI, PM, and LLM-based systems",
      "API integrations between disconnected tools",
    ],
  },
  {
    label: "03",
    title: "Development",
    items: ["React", "JavaScript / TypeScript", "Python", "SQL"],
  },
  {
    label: "04",
    title: "Other",
    items: [
      "Privacy & compliance remediation",
      "Data pipeline debugging",
      "Technical documentation",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent">
          Skills
        </p>
        <h2 className="mb-14 max-w-2xl font-heading text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
          The stack I use to keep tracking and automation systems honest.
        </h2>
      </Reveal>
      <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
        {CATEGORIES.map((cat, i) => (
          <Reveal key={cat.title} delay={i * 80}>
            <div className="h-full bg-bg-elevated p-8">
              <div className="mb-6 flex items-baseline justify-between">
                <h3 className="font-heading text-lg font-semibold text-fg">
                  {cat.title}
                </h3>
                <span className="font-mono text-xs text-fg-muted">
                  {cat.label}
                </span>
              </div>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-fg-muted"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
