"use client";

import { useState } from "react";
import Image from "next/image";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 font-mono text-sm text-fg"
        >
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
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex flex-col gap-1.5 lg:hidden"
          >
            <span
              className={`h-px w-6 bg-fg-muted transition-transform duration-300 ease-out ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-fg-muted transition-transform duration-300 ease-out ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <ul
            id="mobile-nav"
            className="flex flex-col gap-1 border-t border-border px-6 py-4 font-mono text-xs uppercase tracking-widest text-fg-muted"
          >
            {LINKS.map((link, i) => (
              <li
                key={link.href}
                className={`transition-all duration-300 ease-out ${
                  open
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-1 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
              >
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 transition-colors hover:text-fg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
