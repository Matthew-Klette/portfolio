const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-heading text-sm font-semibold tracking-tight text-fg"
        >
          [YOUR NAME]
          <span className="text-accent">.</span>
        </a>
        <ul className="hidden items-center gap-8 text-xs uppercase tracking-widest text-fg-muted sm:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded border border-accent/40 px-3 py-1.5 text-xs uppercase tracking-widest text-accent transition-colors hover:bg-accent hover:text-bg"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
