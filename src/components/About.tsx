import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent">
          About
        </p>
      </Reveal>
      <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
        <Reveal>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            Independent, remote,
            <br />
            built for outcomes.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="space-y-5 text-base leading-relaxed text-fg-muted">
            <p>
              I&apos;m an independent MarTech Engineer working remotely from
              South Africa. I design, build, and repair the systems that sit
              between marketing platforms and the data teams rely on —
              tracking implementations, server-side pipelines, and the
              automation that keeps them running without manual intervention.
            </p>
            <p>
              Most of my work starts where something is broken or missing:
              attribution data that doesn&apos;t reconcile, consent flows
              that don&apos;t hold up to audit, or workflows that still
              depend on someone copying data between tools by hand. I fix the
              underlying system, not just the symptom.
            </p>
            <p>
              I&apos;m currently completing a BCAD in Application
              Development, which feeds directly back into the engineering
              side of this work — cleaner code, better-structured pipelines,
              and less duct tape.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
