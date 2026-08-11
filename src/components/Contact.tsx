"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import SectionEyebrow from "./SectionEyebrow";
import { getCookie, setCookie } from "@/lib/cookies";

const FORMSPREE_ID = "mljrbbpg";
const MAX_SUBMISSIONS = 2;
const COOKIE_NAME = "contact-submissions";
const COOKIE_DAYS = 30;

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const formEnabled = FORMSPREE_ID.length > 0;
  const [submitCount, setSubmitCount] = useState(() => {
    const stored = Number(getCookie(COOKIE_NAME) ?? "0");
    return Number.isFinite(stored) ? stored : 0;
  });
  const [status, setStatus] = useState<Status>("idle");

  const limitReached = submitCount >= MAX_SUBMISSIONS;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (limitReached || status === "submitting") return;

    const form = e.currentTarget;
    setStatus("submitting");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!res.ok) throw new Error("submission failed");

      const next = submitCount + 1;
      setCookie(COOKIE_NAME, String(next), COOKIE_DAYS);
      setSubmitCount(next);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionEyebrow number="06" label="CONTACT" />
        <h2 className="mb-6 max-w-2xl font-heading text-3xl leading-tight tracking-tight text-fg sm:text-4xl">
          Have a tracking, automation, or data pipeline problem?
        </h2>
        <p className="mb-12 max-w-xl font-mono text-sm leading-relaxed text-fg-muted">
          Reach out directly or send a message below. I typically respond
          within 1-2 business days.
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
              href="https://www.linkedin.com/in/matthew-klette-416a51320/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-fg-muted transition-colors hover:text-fg"
            >
              <span aria-hidden>↗</span> LinkedIn
            </a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          {!formEnabled ? (
            <div className="rounded-2xl border border-dashed border-border p-8 font-mono text-sm leading-relaxed text-fg-muted">
              Contact form is disabled — set{" "}
              <code className="text-fg">FORMSPREE_ID</code> in{" "}
              <code className="text-fg">src/components/Contact.tsx</code> to
              enable it (see README.md), or use the email link directly.
            </div>
          ) : limitReached ? (
            <div className="rounded-2xl border border-dashed border-border p-8 font-mono text-sm leading-relaxed text-fg-muted">
              You&apos;ve sent {MAX_SUBMISSIONS} messages from this browser
              — for anything further, email me directly at{" "}
              <a
                href="mailto:matthewklette14@gmail.com"
                className="text-fg underline underline-offset-2"
              >
                matthewklette14@gmail.com
              </a>
              .
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
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
                  maxLength={100}
                  autoComplete="name"
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
                  maxLength={254}
                  autoComplete="email"
                  className="w-full rounded-lg border border-border bg-bg-elevated px-4 py-3 font-mono text-sm text-fg outline-none focus:border-fg"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-xs uppercase tracking-widest text-fg-muted"
                >
                  What do you need done?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  maxLength={2000}
                  className="w-full resize-none rounded-lg border border-border bg-bg-elevated px-4 py-3 font-mono text-sm text-fg outline-none focus:border-fg"
                />
              </div>
              {/* Honeypot: hidden from real users via CSS, invisible to
                  screen readers via aria-hidden. Bots that fill in every
                  field trip this; Formspree silently drops the submission
                  when it's non-empty instead of forwarding it to your inbox. */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="_gotcha">Leave this field empty</label>
                <input
                  id="_gotcha"
                  name="_gotcha"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 font-mono text-xs uppercase tracking-widest text-bg transition-colors hover:bg-off-white disabled:opacity-50"
                >
                  <span aria-hidden>↗</span>{" "}
                  {status === "submitting" ? "Sending…" : "Send Message"}
                </button>
                {status === "success" && (
                  <span className="font-mono text-xs text-fg-muted">
                    Sent — thanks. {MAX_SUBMISSIONS - submitCount} message
                    {MAX_SUBMISSIONS - submitCount === 1 ? "" : "s"} left from
                    this browser.
                  </span>
                )}
                {status === "error" && (
                  <span className="font-mono text-xs text-fg-muted">
                    Something went wrong — try the email link instead.
                  </span>
                )}
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
