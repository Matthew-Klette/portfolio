import Reveal from "./Reveal";
import SectionEyebrow from "./SectionEyebrow";

const TIMELINE = [
  {
    period: "[YEAR] — Present",
    title: "Independent MarTech Engineer",
    description:
      "Full ownership of analytics stacks for multiple clients — GTM (client & server-side), GA4, BigQuery pipelines, and consent architecture. Work directly with product and marketing stakeholders to scope, build, and maintain tracking infrastructure.",
  },
  {
    period: "[YEAR] — [YEAR]",
    title: "[PRIOR ROLE / CONTEXT]",
    description:
      "[Scope of ownership, systems worked on, or capability built during this period.]",
  },
];

const EDUCATION = [
  {
    period: "In Progress",
    title: "BCAD — Application Development",
    description: "[Institution name]",
  },
  {
    period: "Completed",
    title: "Higher Certificate in Mobile Application and Web Development",
    description: "[Institution name]",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <Reveal>
            <SectionEyebrow number="04" label="EXPERIENCE" />
          </Reveal>
          <ol className="space-y-10 border-l border-border pl-8">
            {TIMELINE.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <li className="relative">
                  <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-fg" />
                  <p className="mb-1 font-mono text-xs uppercase tracking-widest text-fg-muted">
                    {item.period}
                  </p>
                  <h3 className="mb-2 font-heading text-xl tracking-tight text-fg">
                    {item.title}
                  </h3>
                  <p className="font-mono text-sm leading-relaxed text-fg-muted">
                    {item.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <div id="education">
          <Reveal>
            <SectionEyebrow number="05" label="EDUCATION" />
          </Reveal>
          <ol className="space-y-10 border-l border-border pl-8">
            {EDUCATION.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <li className="relative">
                  <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-fg" />
                  <p className="mb-1 font-mono text-xs uppercase tracking-widest text-fg-muted">
                    {item.period}
                  </p>
                  <h3 className="mb-2 font-heading text-xl tracking-tight text-fg">
                    {item.title}
                  </h3>
                  <p className="font-mono text-sm leading-relaxed text-fg-muted">
                    {item.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
