import Logo3D from "./Logo3D";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex max-w-6xl flex-col px-6 pb-24 pt-12 sm:pt-16"
    >
      <span className="absolute right-6 top-12 hidden font-mono text-xs uppercase tracking-widest text-fg-muted sm:top-16 lg:inline-block">
        {"// Minimal systems, maximum signal"}
      </span>
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex-1">
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-fg-muted">
              [ Independent MarTech Contracting ]
            </span>
            <span className="inline-flex items-center rounded-full border border-border px-4 py-1.5 font-mono text-xs text-fg-muted">
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

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <p className="max-w-md font-mono text-sm leading-relaxed text-fg-muted">
              I architect, repair, and maintain the analytics and automation
              infrastructure entire teams depend on.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 font-mono text-xs uppercase tracking-widest text-bg transition-colors hover:bg-off-white"
            >
              <span aria-hidden>↗</span> View Work
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono text-xs uppercase tracking-widest text-fg transition-colors hover:border-fg"
            >
              <span aria-hidden>↗</span> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-xs uppercase tracking-widest text-fg-muted transition-colors hover:text-fg"
            >
              Contact <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        <Logo3D className="mx-auto h-56 w-56 shrink-0 sm:h-72 sm:w-72 lg:mx-0 lg:h-96 lg:w-96" />
      </div>
    </section>
  );
}
