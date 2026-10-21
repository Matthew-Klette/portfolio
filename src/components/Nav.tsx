"use client";

import { useState } from "react";
import Image from "next/image";
import { RESUME_URL } from "@/lib/site";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#builds", label: "Builds" },
  { href: "#stack", label: "Stack" },
  { href: "#about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav" data-open={open || undefined}>
      <a href="#top" className="nav-mark" onClick={close}>
        <Image src="/mark.png" alt="" width={22} height={22} />
        Matthew Klette
      </a>
      <nav aria-label="Main navigation" className="nav-links">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>
      <div className="nav-actions">
        <a href={RESUME_URL} className="nav-resume">
          Résumé
        </a>
        <a href="#contact" className="button-primary">
          Get in touch
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
      <nav id="mobile-nav" aria-label="Mobile navigation" className="nav-sheet" hidden={!open}>
        {[...LINKS, { href: RESUME_URL, label: "Résumé" }, { href: "#contact", label: "Contact" }].map((l) => (
          <a key={l.href} href={l.href} onClick={close}>
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
