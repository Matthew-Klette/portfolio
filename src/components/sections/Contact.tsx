import { BOOKING_LABEL, BOOKING_URL, EMAIL, EMAIL_URL, LINKEDIN_URL, RESUME_URL } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="contact-glow" aria-hidden="true" />
      <p className="eyebrow">Contact</p>
      <h2 id="contact-title" className="heading contact-title">
        Revenue numbers don&apos;t match across GA4, your ad platforms and your order system?
      </h2>
      <p className="lede">Reach out directly. I reply within 3 business days.</p>
      <a href={EMAIL_URL} className="contact-email">
        {EMAIL}
      </a>
      <div className="contact-actions">
        <a href={BOOKING_URL} className="button-primary">
          {BOOKING_LABEL}
        </a>
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="button-ghost">
          LinkedIn <span aria-hidden="true">↗</span>
        </a>
        <a href={RESUME_URL} className="button-ghost">
          Résumé <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
