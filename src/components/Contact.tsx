import Reveal from "./Reveal";
import SectionEyebrow from "./SectionEyebrow";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionEyebrow number="06" label="CONTACT" />
        <h2 className="mb-6 max-w-2xl font-heading text-3xl leading-tight tracking-tight text-fg sm:text-4xl">
          Have a tracking, automation, or data pipeline problem?
        </h2>
        <p className="mb-12 max-w-xl font-mono text-sm leading-relaxed text-fg-muted">
          Reach out directly. I typically respond within 1-2 business days.
        </p>
      </Reveal>

      <Reveal>
        <div className="space-y-6">
          <a
            href="mailto:mbkconsultinggroup@gmail.com"
            className="block font-heading text-4xl tracking-tight text-fg transition-colors hover:text-fg-muted sm:text-5xl"
          >
            mbkconsultinggroup@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/matthew-klette-416a51320/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-fg-muted transition-colors hover:text-fg"
          >
            <span aria-hidden>↗</span> LinkedIn
          </a>
        </div>
      </Reveal>
    </section>
  );
}
