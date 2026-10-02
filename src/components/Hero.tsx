import Logo3D from "./Logo3D";
import { BOOKING_LABEL, BOOKING_URL, RESUME_URL } from "@/lib/site";

const STACK = ["sGTM", "GA4", "Meta CAPI", "Consent Mode v2", "BigQuery/Looker Studio"];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex max-w-6xl flex-col px-6 pb-24 pt-8 sm:pt-16"
    >
      <span className="absolute right-6 top-12 hidden font-mono text-xs uppercase tracking-widest text-fg-muted sm:top-16 lg:inline-block">
        {"// Minimal systems, maximum signal"}
      </span>
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex-1">
          <div className="mb-5 flex flex-wrap items-center gap-3 sm:mb-6 sm:gap-4">
            <span className="font-mono text-xs uppercase tracking-wider text-fg-muted sm:tracking-widest">
              [ MBK Consulting Group · Independent ]
            </span>
            <span className="hidden items-center sm:inline-flex rounded-full border border-border px-4 py-1.5 font-mono text-xs text-fg-muted">
              since 2024
            </span>
          </div>

          <h1 className="font-heading text-[clamp(3.5rem,12vw,9rem)] leading-[0.9] tracking-tight text-fg">
            MATTHEW
            <br />
            KLETTE
            <br />
            <span className="text-fg-muted">MARTECH</span>
          </h1>

          <p className="mt-6 max-w-xl font-mono text-sm leading-relaxed text-fg sm:mt-10">
            Your ad platforms, GA4 and your order system all report a
            different revenue number, and nobody trusts the dashboard. I build
            the server-side tracking and consent setup that closes that gap.
          </p>

          <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-fg-muted">
            {STACK.join(" · ")}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
            <a
              href={BOOKING_URL}
              className="inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 font-mono text-xs uppercase tracking-widest text-bg transition-colors hover:bg-off-white"
            >
              <span aria-hidden>↗</span> {BOOKING_LABEL}
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono text-xs uppercase tracking-widest text-fg transition-colors hover:border-fg"
            >
              View work <span aria-hidden>→</span>
            </a>
            <a
              href={RESUME_URL}
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 font-mono text-xs uppercase tracking-widest text-fg-muted transition-colors hover:text-fg"
            >
              Resume <span aria-hidden>↓</span>
            </a>
          </div>
        </div>

        <Logo3D className="mx-auto h-56 w-56 shrink-0 sm:h-72 sm:w-72 lg:mx-0 lg:h-96 lg:w-96" />
      </div>
    </section>
  );
}
