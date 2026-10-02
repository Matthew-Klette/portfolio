import Reveal from "./Reveal";
import SectionEyebrow from "./SectionEyebrow";

const SERVICES = [
  {
    title: "Client & server-side GTM on Stape",
    outcome:
      "Your tags run through a server container you control, so browser restrictions cost you less data and every change ships as a tested, versioned release.",
  },
  {
    title: "Consent Mode v2 & OneTrust",
    outcome:
      "Every tag follows the visitor's consent choice, and Google still gets the consent signals it needs for modeled conversions.",
  },
  {
    title: "Meta CAPI & Google Ads server-side",
    outcome:
      "Purchases reach Meta and Google Ads from your server as well as the browser, counted once, so bidding learns from real orders.",
  },
  {
    title: "GA4 event specs",
    outcome:
      "A written spec for every event and parameter, so developers build exactly what your analysts expect to query.",
  },
  {
    title: "BigQuery & Looker Studio reporting",
    outcome:
      "Server-side events land in BigQuery with Looker Studio reports on top, so you can check GA4 and ad platform numbers against your own data.",
  },
  {
    title: "n8n & Claude automation",
    outcome:
      "Repetitive work runs on its own, with a person reviewing before anything goes live. I built 4 production n8n automations for KÜHL, including a product-page content pipeline with human review.",
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionEyebrow number="01" label="SERVICES" />
        <h2 className="mb-14 max-w-2xl font-heading text-3xl leading-tight tracking-tight text-fg sm:text-4xl">
          What I set up, and what you get from it.
        </h2>
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => (
          <Reveal key={service.title} delay={(i % 3) * 80}>
            <div className="flex h-full flex-col rounded-2xl border border-border p-6">
              <div className="mb-4 flex items-baseline justify-between gap-4">
                <h3 className="font-heading text-xl tracking-tight text-fg">
                  {service.title}
                </h3>
                <span className="font-mono text-xs text-fg-muted">
                  /{i + 1}
                </span>
              </div>
              <p className="font-mono text-xs leading-relaxed text-fg-muted">
                {service.outcome}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
