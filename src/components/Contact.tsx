"use client";

import Reveal from "./Reveal";
import SectionEyebrow from "./SectionEyebrow";

// To enable the form, replace FORMSPREE_ID below with your Formspree
// endpoint id (see README.md). Until then the form falls back to a
// mailto link and posting is disabled.
const FORMSPREE_ID = "";

export default function Contact() {
  const formEnabled = FORMSPREE_ID.length > 0;

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionEyebrow number="06" label="CONTACT" />
        <h2 className="mb-6 max-w-2xl font-heading text-3xl leading-tight tracking-tight text-fg sm:text-4xl">
          Have a tracking, automation, or data pipeline problem?
        </h2>
        <p className="mb-12 max-w-xl font-mono text-sm leading-relaxed text-fg-muted">
          Reach out directly or send a message below. I typically respond
          within [TIMEFRAME].
        </p>
      </Reveal>

      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <div className="space-y-6">
            <a
              href="mailto:matthewklette14@gmail.com"
              className="block font-heading text-3xl tracking-tight text-fg transition-colors hover:text-fg-muted"
            >
              matthewklette14@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/[YOUR-LINKEDIN]"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-fg-muted transition-colors hover:text-fg"
            >
              <span aria-hidden>↗</span> LinkedIn
            </a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          {formEnabled ? (
            <form
              action={`https://formspree.io/f/${FORMSPREE_ID}`}
              method="POST"
              className="space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-mono text-xs uppercase tracking-widest text-fg-muted"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-border bg-bg-elevated px-4 py-3 font-mono text-sm text-fg outline-none focus:border-fg"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-mono text-xs uppercase tracking-widest text-fg-muted"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-border bg-bg-elevated px-4 py-3 font-mono text-sm text-fg outline-none focus:border-fg"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-xs uppercase tracking-widest text-fg-muted"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-none rounded-lg border border-border bg-bg-elevated px-4 py-3 font-mono text-sm text-fg outline-none focus:border-fg"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 font-mono text-xs uppercase tracking-widest text-bg transition-colors hover:bg-off-white"
              >
                <span aria-hidden>↗</span> Send Message
              </button>
            </form>
          ) : (
            <div className="rounded-2xl border border-dashed border-border p-8 font-mono text-sm leading-relaxed text-fg-muted">
              Contact form is disabled — set{" "}
              <code className="text-fg">FORMSPREE_ID</code> in{" "}
              <code className="text-fg">src/components/Contact.tsx</code> to
              enable it, or remove this block and use the email link
              directly.
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
