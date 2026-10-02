import Reveal from "./Reveal";
import SectionEyebrow from "./SectionEyebrow";

const QUALIFICATIONS = [
  {
    title:
      "Bachelor of Computer and Information Sciences in Application Development",
    detail: "In progress, completing 2026",
  },
  {
    title: "Higher Certificate in Mobile Application and Web Development",
    detail: "2023, with distinction",
  },
];

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionEyebrow number="06" label="EDUCATION" />
      </Reveal>
      <Reveal>
        <div className="rounded-2xl border border-border p-6 sm:p-8">
          <h3 className="font-heading text-3xl tracking-tight text-fg sm:text-4xl">
            Emeris
          </h3>
          <p className="mt-1 font-mono text-xs uppercase tracking-widest text-fg-muted">
            Formerly IIE Varsity College
          </p>
          <ul className="mt-6 divide-y divide-border border-t border-border">
            {QUALIFICATIONS.map((q) => (
              <li
                key={q.title}
                className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <span className="font-mono text-sm text-fg">{q.title}</span>
                <span className="shrink-0 font-mono text-xs text-fg-muted">
                  {q.detail}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
