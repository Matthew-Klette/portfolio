import Reveal from "./Reveal";
import SectionEyebrow from "./SectionEyebrow";

const SCOPE = [
  {
    index: "1",
    title: "Tag Management & Server-Side Tracking",
    description:
      "Build and publish changes across the client and server-side GTM containers: custom JavaScript variables, triggers and tags capturing e-commerce events across the full customer journey. Wrote the server-side GTM audit (security, data quality, consent, maintainability) and led the fixes.",
  },
  {
    index: "2",
    title: "Event Specs & Reporting",
    description:
      "Write the GA4 event and parameter specs that BigQuery tables are built from, including row-level product attribution for on-site recommendation modules. Query those tables in SQL and build the Looker Studio reports on top for attribution, recommendation performance and channel-level reporting.",
  },
  {
    index: "3",
    title: "Privacy & Consent Management",
    description:
      "Manage OneTrust geolocation and regulatory template configuration, vendor consent records for major ad platforms, and consent gating on server-side advertising tags as new tracking ships. Took web tags with Consent Mode v2 consent checks from zero to about a third of the container.",
  },
  {
    index: "4",
    title: "Advertising Platform Integration",
    description:
      "Meta Conversions API and Google Ads server-side tags with browser and server deduplication, click and browser ID passthrough, and ongoing event-quality checks in Meta Events Manager.",
  },
  {
    index: "5",
    title: "Marketing Analytics & Reporting",
    description:
      "Configure Microsoft Clarity (session tooling, funnels, Core Web Vitals monitoring) and use it to investigate layout stability on high-traffic product pages. Scope and deliver custom reports on feature usage and conversion impact for product and merchandising decisions.",
  },
  {
    index: "6",
    title: "Automation & Internal Tooling",
    description:
      "Built 4 production n8n automations, including a product-page content pipeline with human review, with run-lock logic so overlapping runs can't collide. Use MCP integrations to connect Claude to tools like Linear and n8n. Contributed to an internal privacy scanner: headless scanning, report delivery and AI-generated reports.",
  },
  {
    index: "7",
    title: "Data Integrity & QA",
    description:
      "Take tracking work from requirements through implementation to QA. Reconcile client-side and server-side event counts, and configure server-side tags for platform-specific event handling.",
  },
  {
    index: "8",
    title: "Stakeholder Coordination & Documentation",
    description:
      "Coordinate directly with stakeholders to translate business reporting needs into tracking specifications and dashboard requirements. Document tracking architecture and data flow so the setup stays maintainable.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionEyebrow number="05" label="EXPERIENCE" />
      </Reveal>

      <Reveal>
        <div className="mb-14 grid gap-12 border-b border-border pb-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-fg-muted">
              Dec 2024 — Present · Remote
            </p>
            <h3 className="font-heading text-3xl tracking-tight text-fg sm:text-4xl">
              Contract MarTech Engineer
            </h3>
            <p className="mt-1 font-mono text-sm text-fg-muted">
              Independent Contractor — KÜHL, via MBK Consulting Group
            </p>
          </div>
          <p className="max-w-sm font-mono text-sm leading-relaxed text-fg-muted">
            Contract MarTech engineer for KÜHL since December 2024, and the
            primary engineer for client and server-side tagging and consent:
            from browser capture through the server-side container to the ad
            platforms, and the GA4 specs and reporting built on top.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SCOPE.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 80}>
            <div className="flex h-full flex-col rounded-2xl border border-border p-6">
              <div className="mb-4 flex items-baseline justify-between">
                <h4 className="font-heading text-lg tracking-tight text-fg">
                  {item.title}
                </h4>
                <span className="font-mono text-xs text-fg-muted">
                  /{item.index}
                </span>
              </div>
              <p className="font-mono text-xs leading-relaxed text-fg-muted">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
