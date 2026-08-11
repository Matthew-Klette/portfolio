import Image from "next/image";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#top" className="flex items-center gap-3 font-mono text-sm text-fg">
          <Image src="/mark.png" alt="Matthew Klette" width={28} height={28} />
          [ <span className="font-medium">MATTHEW.KLETTE</span> ]
        </a>
        <ul className="hidden items-center gap-8 font-mono text-xs uppercase tracking-widest text-fg-muted lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-fg">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-5">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full border border-border px-5 py-2 font-mono text-xs uppercase tracking-widest text-fg transition-colors hover:border-fg sm:inline-flex"
          >
            <span aria-hidden>↗</span> Get in touch
          </a>
          <div className="flex flex-col gap-1.5" aria-hidden>
            <span className="h-px w-6 bg-fg-muted" />
            <span className="h-px w-6 bg-fg-muted" />
          </div>
        </div>
      </nav>
    </header>
  );
}
