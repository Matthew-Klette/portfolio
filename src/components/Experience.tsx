import Reveal from "./Reveal";
import SectionEyebrow from "./SectionEyebrow";

const SCOPE = [
  {
    index: "1",
    title: "Tag Management & Server-Side Tracking",
    description:
      "Own both client-side and server-side GTM end to end. Build and debug custom JavaScript templates, triggers, and variables capturing ecommerce events across the full customer journey. Ran a full architecture and security audit of the server-side container and implemented the majority of the resulting remediation myself.",
  },
  {
    index: "2",
    title: "Data Engineering & Warehousing",
    description:
      "Design and maintain BigQuery schemas and pipelines supporting attribution, product recommendation performance, and channel-level reporting — including dedicated tracking tables with row-level product attribution that now underpin business-facing dashboards, plus a Google Shopping organic attribution pipeline with an accompanying Looker Studio dashboard.",
  },
  {
    index: "3",
    title: "Privacy & Consent Management",
    description:
      "Led a consent management remediation covering OneTrust — correcting a geolocation and regulatory template misconfiguration affecting over a million user sessions, adding missing vendor consent records for major ad platforms, and gating server-side advertising tags that previously fired unconditionally.",
  },
  {
    index: "4",
    title: "Advertising Platform Integration",
    description:
      "Own Meta Conversions API implementation and event quality — deduplication logic, click/browser ID passthrough, and ongoing pixel audits. Resolved event-match and attribution quality issues across Meta and Google Ads, including a full audit and cleanup of invalid, bot-generated events.",
  },
  {
    index: "5",
    title: "Marketing Analytics & Reporting",
    description:
      "Own Microsoft Clarity configuration — session tooling, funnel setup, Core Web Vitals monitoring — using it to diagnose layout-stability issues on high-traffic product pages. Scope and deliver custom reports on feature usage and conversion impact that inform product and merchandising decisions.",
  },
  {
    index: "6",
    title: "Automation & Internal Tooling",
    description:
      "Design and maintain n8n workflow automations orchestrating content generation and data synchronization, including concurrency and run-lock logic to prevent race conditions. Independently built a Python-based compliance scanning tool with an API layer and automated reporting.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionEyebrow number="04" label="EXPERIENCE" />
      </Reveal>

      <Reveal>
        <div className="mb-14 grid gap-12 border-b border-border pb-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-fg-muted">
              Dec 2024 — Present · Remote
            </p>
            <h3 className="font-heading text-3xl tracking-tight text-fg sm:text-4xl">
              MarTech &amp; Analytics Engineer
            </h3>
            <p className="mt-1 font-mono text-sm text-fg-muted">
              Independent Contractor — KUHL
            </p>
          </div>
          <p className="max-w-sm font-mono text-sm leading-relaxed text-fg-muted">
            Sole engineer owning the full analytics, tracking, and MarTech
            stack for KUHL&apos;s ecommerce platform — from client-side
            capture through server-side processing to warehouse storage and
            downstream activation.
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
