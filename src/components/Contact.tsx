import Reveal from "./Reveal";
import SectionEyebrow from "./SectionEyebrow";
import {
  BOOKING_LABEL,
  BOOKING_URL,
  EMAIL,
  EMAIL_URL,
  LINKEDIN_URL,
} from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionEyebrow number="07" label="CONTACT" />
        <h2 className="mb-6 max-w-3xl font-heading text-3xl leading-tight tracking-tight text-fg sm:text-4xl">
          Revenue numbers don&apos;t match across GA4, your ad platforms and
          your order system?
        </h2>
        <p className="mb-12 max-w-xl font-mono text-sm leading-relaxed text-fg-muted">
          Reach out directly. I reply within 3 business days.
        </p>
      </Reveal>

      <Reveal>
        <div className="space-y-6">
          <a
            href={EMAIL_URL}
            className="block break-all font-heading text-3xl tracking-tight text-fg transition-colors hover:text-fg-muted sm:break-normal sm:text-5xl"
          >
            {EMAIL}
          </a>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={BOOKING_URL}
              className="inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 font-mono text-xs uppercase tracking-widest text-bg transition-colors hover:bg-off-white"
            >
              <span aria-hidden>↗</span> {BOOKING_LABEL}
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-2 py-3 font-mono text-xs uppercase tracking-widest text-fg-muted transition-colors hover:text-fg"
            >
              <span aria-hidden>↗</span> LinkedIn
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
