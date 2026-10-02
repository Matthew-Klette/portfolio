import Reveal from "./Reveal";
import SectionEyebrow from "./SectionEyebrow";

type CaseStudy = {
  tag: string;
  title: string;
  problem: string;
  approach: string;
  outcomes: string[];
};

const CASE_STUDIES: CaseStudy[] = [
  {
    tag: "Server-Side Tracking",
    title: "Server-side tracking and consent for KÜHL",
    problem:
      "Client-side and server-side event counts drift apart, and conversions in GA4, Meta and Google Ads don't reconcile with each other or with the order system. Every server-side ad tag needs deduplication against its browser counterpart and the same consent gating, or purchases get counted twice and consent choices aren't applied everywhere.",
    approach:
      "Build and publish changes across the web and server-side GTM containers on Stape. Trace each event from the dataLayer through the server container to Meta CAPI and Google Ads, deduplicate browser and server conversions, and gate tags on Consent Mode v2.",
    outcomes: [
      "Authored 249 production GTM releases across web and server-side containers since January 2025, over 80% of all releases since I started.",
      "Wrote the server-side GTM audit (security, data quality, consent, maintainability) and led the fixes.",
      "Took web tags with Consent Mode v2 consent checks from zero to about a third of the container.",
      "Nearly doubled the server-side event streams feeding the data warehouse.",
    ],
  },
  {
    tag: "Privacy & Consent",
    title: "Consent that holds across every tag",
    problem:
      "A consent banner, Consent Mode v2 and server-side ad tags each carry their own idea of what a visitor agreed to. They have to agree across regions, browsers and every new tag that ships.",
    approach:
      "Manage OneTrust geolocation rules and regulatory templates, add vendor consent records for major ad platforms, and gate server-side advertising tags on consent state as new tracking ships.",
    outcomes: [
      "Consent checks are part of how new tags ship, with consent QA across browsers and environments before release.",
    ],
  },
  {
    tag: "Automation",
    title: "n8n and Claude automation with a human in the loop",
    problem:
      "Product-page content and data sync between internal tools took repetitive manual work. Any automation had to keep a person in the loop and stop overlapping runs from colliding.",
    approach:
      "Built 4 production n8n automations, including a product-page content pipeline where Claude drafts and a person reviews before anything is published, with run-lock logic around shared state. Also contributed to an internal privacy scanner: headless scanning, report delivery and AI-generated reports.",
    outcomes: [
      "The content pipeline runs on its own up to the human review step, and overlapping runs are locked out.",
    ],
  },
];

const OTHER_WORK_LINKS = [
  { label: "Protect", href: "https://www.utahmountainlion.org/protect" },
  { label: "Postcard Campaign", href: "https://www.utahmountainlion.org/postcard" },
];

function CaseStudyCard({ cs, index }: { cs: CaseStudy; index: number }) {
  return (
    <article className="flex h-full flex-col rounded-2xl bg-off-white p-8 text-bg">
      <div className="mb-6 flex items-start justify-between gap-4">
        <span className="inline-block rounded-full border border-bg/20 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-bg/70">
          {cs.tag}
        </span>
        <span className="font-mono text-xs text-bg/50">/{index + 1}</span>
      </div>
      <h3 className="mb-6 font-heading text-2xl leading-snug tracking-tight text-bg">
        {cs.title}
      </h3>
      <dl className="space-y-4 font-mono text-sm leading-relaxed text-bg/70">
        <div>
          <dt className="mb-1 font-mono text-[11px] uppercase tracking-widest text-bg">
            [Problem]
          </dt>
          <dd>{cs.problem}</dd>
        </div>
        <div>
          <dt className="mb-1 font-mono text-[11px] uppercase tracking-widest text-bg">
            [Approach]
          </dt>
          <dd>{cs.approach}</dd>
        </div>
        <div>
          <dt className="mb-1 font-mono text-[11px] uppercase tracking-widest text-bg">
            [Outcome]
          </dt>
          <dd>
            <ul className="space-y-2">
              {cs.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-bg/60" />
                  {outcome}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionEyebrow number="02" label="FEATURED WORK" />
        <h2 className="mb-14 max-w-2xl font-heading text-3xl leading-tight tracking-tight text-fg sm:text-4xl">
          Case studies from recent engagements.
        </h2>
      </Reveal>
      <div className="grid gap-6 lg:grid-cols-3">
        {CASE_STUDIES.map((cs, i) => (
          <Reveal key={cs.title} delay={i * 80}>
            <CaseStudyCard cs={cs} index={i} />
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6 font-mono text-xs leading-relaxed text-fg-muted">
          <span>
            <span className="uppercase tracking-widest text-fg">Other work:</span>{" "}
            a legislator lookup and postcard tool for the Utah Mountain Lion
            Conservation campaign (Wix Studio, Velo, Geocodio API).
          </span>
          {OTHER_WORK_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 uppercase tracking-widest text-fg transition-colors hover:text-fg-muted"
            >
              <span aria-hidden>↗</span> {link.label}
            </a>
          ))}
        </p>
      </Reveal>
    </section>
  );
}
