import Reveal from "./Reveal";

const CASE_STUDIES = [
  {
    tag: "Analytics Infrastructure",
    title: "Server-side tracking pipeline audit and remediation",
    problem:
      "A [mid-size e-commerce brand] was losing attribution data due to an unaudited, drift-prone server-side GTM setup — conversion events firing inconsistently across ad platforms.",
    approach:
      "Full audit of the sGTM container, tag firing logic, and consent-gated triggers. Rebuilt event mapping against source-of-truth schemas and added validation checks to catch drift before it reached ad platforms.",
    outcome:
      "Recovered [METRIC]% of previously unattributed conversions and reduced discrepancy between platform-reported and BigQuery-reported revenue to under [METRIC]%.",
  },
  {
    tag: "Privacy & Compliance",
    title: "Consent management and privacy compliance overhaul",
    problem:
      "Consent state wasn't reliably propagating from the CMP into tag firing logic, creating compliance exposure across [REGION] regulations.",
    approach:
      "Rebuilt the consent architecture around Consent Mode v2, mapped every tag to its legal basis, and added automated checks to catch future consent/tag mismatches before deploy.",
    outcome:
      "Closed [METRIC] compliance gaps identified in the audit and eliminated manual consent QA from the release process.",
  },
  {
    tag: "Automation",
    title: "Workflow automation connecting BI, PM, and AI systems",
    problem:
      "Reporting and task handoffs between analytics, project management, and stakeholder communication were manual, slow, and error-prone.",
    approach:
      "Built an n8n-based automation layer connecting BI outputs to PM tooling, with an LLM step for summarization and anomaly flagging before human review.",
    outcome:
      "Cut manual reporting time by [METRIC]% and removed [METRIC] hours/week of copy-paste work across the team.",
  },
  {
    tag: "Independent Project",
    title: "[PROJECT NAME] — self-built automation tool",
    problem:
      "[Describe the gap or repetitive problem this project solves.]",
    approach:
      "[Describe the architecture and technical decisions — stack, integrations, tradeoffs.]",
    outcome:
      "[Describe current usage, results, or what shipping it taught you.]",
  },
];

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent">
          Featured Work
        </p>
        <h2 className="mb-14 max-w-2xl font-heading text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
          Case studies from recent engagements. Details generalized where
          NDA applies.
        </h2>
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-2">
        {CASE_STUDIES.map((cs, i) => (
          <Reveal key={cs.title} delay={i * 80}>
            <article className="group h-full rounded-lg border border-border bg-bg-elevated p-8 transition-colors hover:border-accent/50">
              <span className="mb-4 inline-block rounded-full border border-accent/30 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-accent">
                {cs.tag}
              </span>
              <h3 className="mb-6 font-heading text-xl font-semibold leading-snug text-fg">
                {cs.title}
              </h3>
              <dl className="space-y-4 text-sm leading-relaxed text-fg-muted">
                <div>
                  <dt className="mb-1 font-mono text-[11px] uppercase tracking-widest text-fg">
                    Problem
                  </dt>
                  <dd>{cs.problem}</dd>
                </div>
                <div>
                  <dt className="mb-1 font-mono text-[11px] uppercase tracking-widest text-fg">
                    Approach
                  </dt>
                  <dd>{cs.approach}</dd>
                </div>
                <div>
                  <dt className="mb-1 font-mono text-[11px] uppercase tracking-widest text-fg">
                    Outcome
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
