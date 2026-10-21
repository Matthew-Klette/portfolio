import { LINKEDIN_URL, SITE_NAME } from "@/lib/site";

const LINKS = [
  { label: "GitHub", href: "https://github.com/Matthew-Klette" },
  { label: "LinkedIn", href: LINKEDIN_URL },
];

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {SITE_NAME}. Designed and built by Matthew Klette.
      </p>
      <nav aria-label="Elsewhere" className="footer-links">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
            {l.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
