"use client";

import Reveal from "./Reveal";

// To enable the form, replace FORMSPREE_ID below with your Formspree
// endpoint id (see README.md). Until then the form falls back to a
// mailto link and posting is disabled.
const FORMSPREE_ID = "";

export default function Contact() {
  const formEnabled = FORMSPREE_ID.length > 0;

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent">
          Contact
        </p>
        <h2 className="mb-6 max-w-2xl font-heading text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
          Have a tracking, automation, or data pipeline problem?
        </h2>
        <p className="mb-12 max-w-xl text-base leading-relaxed text-fg-muted">
          Reach out directly or send a message below. I typically respond
          within [TIMEFRAME].
        </p>
      </Reveal>

      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <div className="space-y-6">
            <a
              href="mailto:your.email@example.com"
              className="block font-heading text-2xl font-semibold text-fg transition-colors hover:text-accent"
            >
              your.email@example.com
            </a>
            <a
              href="https://linkedin.com/in/[YOUR-LINKEDIN]"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm uppercase tracking-widest text-fg-muted transition-colors hover:text-accent"
            >
              LinkedIn ↗
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
                  className="w-full rounded border border-border bg-bg-elevated px-4 py-3 text-sm text-fg outline-none focus:border-accent"
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
                  className="w-full rounded border border-border bg-bg-elevated px-4 py-3 text-sm text-fg outline-none focus:border-accent"
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
                  className="w-full resize-none rounded border border-border bg-bg-elevated px-4 py-3 text-sm text-fg outline-none focus:border-accent"
                />
              </div>
              <button
                type="submit"
                className="rounded bg-accent px-6 py-3 text-sm font-medium uppercase tracking-wide text-bg transition-transform hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className="rounded-lg border border-dashed border-border p-8 text-sm leading-relaxed text-fg-muted">
              Contact form is disabled — set{" "}
              <code className="text-accent">FORMSPREE_ID</code> in{" "}
              <code className="text-accent">src/components/Contact.tsx</code>{" "}
              to enable it, or remove this block and use the email link
              directly.
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
