import Reveal from "./Reveal";
import SectionEyebrow from "./SectionEyebrow";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionEyebrow number="04" label="ABOUT" />
      </Reveal>
      <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
        <Reveal>
          <h2 className="font-heading text-4xl leading-[0.95] tracking-tight text-fg sm:text-5xl">
            Independent,
            <br />
            remote, built
            <br />
            for outcomes.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="space-y-5 font-mono text-sm leading-relaxed text-fg-muted">
            <p>
              I&apos;m an independent MarTech engineer working remotely from
              Port Elizabeth, South Africa, with US e-commerce teams. I&apos;m
              available across the full South African workday (UTC+2), which
              overlaps US Eastern mornings. I build the systems that sit
              between marketing platforms and the numbers teams rely on:
              client and server-side tracking, consent, and the automation
              that keeps them running.
            </p>
            <p>
              Most of my work starts with numbers that don&apos;t agree:
              attribution that doesn&apos;t reconcile, consent that isn&apos;t
              applied the same way in every tag, or workflows that still
              depend on someone copying data between tools by hand. I fix the
              underlying system, not just the symptom.
            </p>
            <p>
              I&apos;m completing a degree in Application Development at
              Emeris (finishing 2026), which feeds straight back into the
              engineering side of this work: cleaner code, better-structured
              automation, and less duct tape.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
