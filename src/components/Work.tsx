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
    title: "Consent management and privacy compliance overhaul",
    problem:
      "A geolocation and regulatory template misconfiguration in KUHL's OneTrust setup was affecting consent handling for a large share of user sessions, and some server-side advertising tags were firing without proper consent gating.",
    approach:
      "Corrected the OneTrust template and geolocation logic, added missing vendor consent records for major ad platforms, and implemented consent gating across the server-side advertising tags that needed it.",
    outcome:
      "Brought consent handling back into compliance across affected sessions and now own ongoing consent QA across browsers and environments as new tracking ships.",
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
    tag: "Independent Project",
    title: "AI-orchestrated workflow automation",
    problem:
      "Manually maintained cross-system workflows — syncing data between a BI warehouse, a knowledge/PM tool, and team communication — broke in predictable but disruptive ways: duplicate-record loops when a sync re-ran, approval steps that silently stalled with no escalation, and race conditions when two triggers fired on the same record within seconds of each other.",
    approach:
      "Built a personal automation toolkit in n8n that orchestrates BigQuery, Notion, and team messaging into a single pipeline, with an LLM step (Anthropic API) handling summarization and routing decisions mid-flow. Added idempotency keys to kill duplicate-record loops, timeout-based escalation so stuck approvals surface instead of stalling silently, and locking logic so concurrent triggers can't corrupt the same record.",
    outcome:
      "A reusable automation pattern — not a one-off script — that now underpins how I connect BI, PM, and AI systems on client work, with the failure modes that used to require manual babysitting handled automatically.",
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
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
