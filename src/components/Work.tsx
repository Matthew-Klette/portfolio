import Reveal from "./Reveal";
import SectionEyebrow from "./SectionEyebrow";

const CASE_STUDIES = [
  {
    tag: "Analytics Infrastructure",
    title: "Server-side tracking pipeline audit and remediation",
    problem:
      "KUHL's server-side GTM container had accumulated configuration debt as the sole engineer inherited full ownership — tag hygiene, consent enforcement, duplicate event firing, and drift between browser-side triggers and downstream platform APIs all needed review.",
    approach:
      "Ran an architecture review of the container, tracing issues through multi-layer systems from client-side triggers through the server-side container to downstream APIs, then produced and personally implemented the majority of a prioritized remediation plan.",
    outcome:
      "Closed the duplicate-event gaps, restored consent enforcement across server-side ad tags, and cleaned up the biggest sources of configuration debt in the container.",
  },
  {
    tag: "Privacy & Compliance",
    title: "Consent management and privacy compliance hardening",
    problem:
      "KUHL's OneTrust geolocation and regulatory template configuration needed a refresh to keep pace with evolving CCPA and GDPR requirements across a large share of user sessions, and server-side advertising tags needed tighter consent-state gating as new tracking shipped.",
    approach:
      "Refreshed the OneTrust template and geolocation logic, added vendor consent records for major ad platforms, and strengthened consent gating across server-side advertising tags to keep pace with new tracking.",
    outcome:
      "Strengthened consent handling across affected sessions and now own ongoing consent QA across browsers and environments as new tracking ships.",
  },
  {
    tag: "Automation",
    title: "Workflow automation and internal tooling",
    problem:
      "Content generation and data synchronization across internal tools depended on manual runs, with no protection against overlapping executions corrupting shared state.",
    approach:
      "Built n8n workflow automations to orchestrate the pipelines end to end, adding concurrency and run-lock logic to prevent race conditions, then independently built a Python-based compliance scanning tool with its own API layer and automated reporting.",
    outcome:
      "Removed manual intervention from the automated pipelines and gave the team a standing, self-reporting tool for ongoing privacy compliance monitoring.",
  },
  {
    tag: "Personal Project",
    title: "Utah Mountain Lion Conservation — Legislator Guide",
    problem:
      "Utah residents supporting a public wildlife conservation campaign had no simple way to find out who their state representatives were or how to contact them about wildlife management legislation.",
    approach:
      "Built a legislator lookup and advocacy tool for the Utah Mountain Lion Conservation campaign — a personal project done as a favor for a contact. Implemented address-to-district resolution using the Geocodio API, with a mobile-optimized embed built using Wix Velo page code, plus supporting HTML/CSS/JS for the interactive lookup widget and script cards. Stack: Wix Studio, Velo (JavaScript), Geocodio API, HTML/CSS/JS.",
    outcome:
      "Live on the campaign site, helping residents find and directly contact their representatives about the legislation.",
    links: [
      { label: "Protect", href: "https://www.utahmountainlion.org/protect" },
      {
        label: "Postcard Campaign",
        href: "https://www.utahmountainlion.org/postcard",
      },
    ],
  },
];

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionEyebrow number="01" label="FEATURED WORK" />
        <h2 className="mb-14 max-w-2xl font-heading text-3xl leading-tight tracking-tight text-fg sm:text-4xl">
          Case studies from recent engagements.
        </h2>
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-2">
        {CASE_STUDIES.map((cs, i) => (
          <Reveal key={cs.title} delay={i * 80}>
            <article className="flex h-full flex-col rounded-2xl bg-off-white p-8 text-bg">
              <div className="mb-6 flex items-start justify-between gap-4">
                <span className="inline-block rounded-full border border-bg/20 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-bg/70">
                  {cs.tag}
                </span>
                <span className="font-mono text-xs text-bg/50">
                  /{i + 1}
                </span>
              </div>
              <h3 className="mb-6 font-heading text-2xl leading-snug tracking-tight text-bg">
                {cs.title}
              </h3>
              <dl className="space-y-4 font-mono text-sm leading-relaxed text-bg/70">
                <div>
                  <dt className="mb-1 font-mono text-[11px] uppercase tracking-widest text-bg">
                    [Task]
                  </dt>
                  <dd>{cs.problem}</dd>
                </div>
                <div>
                  <dt className="mb-1 font-mono text-[11px] uppercase tracking-widest text-bg">
                    [Solution]
                  </dt>
                  <dd>{cs.approach}</dd>
                </div>
                <div>
                  <dt className="mb-1 font-mono text-[11px] uppercase tracking-widest text-bg">
                    [Outcome]
                  </dt>
                  <dd>{cs.outcome}</dd>
                </div>
              </dl>
              {"links" in cs && cs.links && (
                <div className="mt-6 flex flex-wrap gap-4">
                  {cs.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-bg transition-colors hover:text-bg/60"
                    >
                      <span aria-hidden>↗</span> {link.label}
                    </a>
                  ))}
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
