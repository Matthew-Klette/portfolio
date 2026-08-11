export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col justify-center px-6 py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-accent/10 blur-[120px]"
      />
      <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-accent">
        MarTech Engineer
      </p>
      <h1 className="max-w-3xl font-heading text-5xl font-semibold leading-[1.05] tracking-tight text-fg sm:text-6xl lg:text-7xl">
        [YOUR NAME]
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">
        I build and repair the analytics and automation infrastructure that
        marketing and product teams depend on — server-side tracking,
        attribution pipelines, and the workflows that connect them.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#work"
          className="rounded bg-accent px-6 py-3 text-sm font-medium uppercase tracking-wide text-bg transition-transform hover:scale-[1.02]"
        >
          View Work
        </a>
        <a
          href="/resume.pdf"
          className="rounded border border-border px-6 py-3 text-sm font-medium uppercase tracking-wide text-fg transition-colors hover:border-accent hover:text-accent"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          className="rounded px-6 py-3 text-sm font-medium uppercase tracking-wide text-fg-muted transition-colors hover:text-accent"
        >
          Contact →
        </a>
      </div>
    </section>
  );
}
