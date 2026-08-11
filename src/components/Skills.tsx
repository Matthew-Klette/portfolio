import Reveal from "./Reveal";
import SectionEyebrow from "./SectionEyebrow";

const CATEGORIES = [
  {
    index: "1",
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
    index: "2",
    title: "Automation & Integration",
    items: [
      "n8n",
      "Workflow automation across BI, PM, and LLM-based systems",
      "API integrations between disconnected tools",
    ],
  },
  {
    index: "3",
    title: "Development",
    items: ["React", "JavaScript / TypeScript", "Python", "SQL"],
  },
  {
    index: "4",
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
        <SectionEyebrow number="02" label="SKILLS" />
        <h2 className="mb-14 max-w-2xl font-heading text-3xl leading-tight tracking-tight text-fg sm:text-4xl">
          The stack I use to keep tracking and automation systems honest.
        </h2>
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-2">
        {CATEGORIES.map((cat, i) => (
          <Reveal key={cat.title} delay={i * 80}>
            <div className="flex h-full flex-col rounded-2xl border border-border p-8">
              <div className="mb-6 flex items-baseline justify-between">
                <h3 className="font-heading text-2xl tracking-tight text-fg">
                  {cat.title}
                </h3>
                <span className="font-mono text-xs text-fg-muted">
                  /{cat.index}
                </span>
              </div>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-mono text-sm text-fg-muted"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-fg-muted" />
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
