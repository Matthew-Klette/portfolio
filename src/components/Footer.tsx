import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <Reveal>
          <h2 className="font-heading text-[clamp(2.5rem,10vw,7rem)] leading-none tracking-tight text-border">
            [ LET&apos;S TALK ]
          </h2>
        </Reveal>
        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 font-mono text-xs uppercase tracking-widest text-bg transition-colors hover:bg-off-white"
          >
            <span aria-hidden>↗</span> I&apos;m available for new projects
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 border-t border-border px-6 py-8 font-mono text-xs text-fg-muted sm:flex-row">
        <p>© {new Date().getFullYear()} Matthew Klette. All rights reserved.</p>
      </div>
    </footer>
  );
}
