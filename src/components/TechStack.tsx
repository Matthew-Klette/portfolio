// Core tracking and reporting stack first; general dev tools after.
const TOOLS = [
  { name: "GTM", detail: "Tag Manager", sub: "Client + Server" },
  { name: "Stape", detail: "sGTM Hosting", sub: "Data Client" },
  { name: "GA4", detail: "Event Specs", sub: "Analytics" },
  { name: "Meta CAPI", detail: "Conversions API", sub: "Server-Side" },
  { name: "Consent Mode v2", detail: "Google Consent", sub: "Tag Gating" },
  { name: "OneTrust", detail: "Consent Platform", sub: "Geo Rules" },
  { name: "BigQuery", detail: "SQL / Reporting", sub: "Google Cloud" },
  { name: "Looker Studio", detail: "BQ Dashboards", sub: "Reporting" },
  { name: "n8n", detail: "Automation", sub: "Workflows" },
  { name: "Klaviyo", detail: "Email MarTech", sub: "Events" },
  { name: "Clarity", detail: "MS Clarity", sub: "Session Data" },
  { name: "MCP", detail: "Integrations", sub: "AI Tooling" },
  { name: "JavaScript", detail: "Expert · ES6+", sub: "Custom Tags" },
  { name: "Python", detail: "Automation", sub: "Scripting" },
  { name: "React", detail: "TypeScript", sub: "Tailwind CSS" },
  { name: "Supabase", detail: "PostgreSQL", sub: "Backend" },
  { name: "Docker", detail: "Containers", sub: "DevOps" },
  { name: "Strapi", detail: "Headless CMS", sub: "Content Model" },
  { name: "React Native", detail: "Cross-platform", sub: "Mobile" },
  { name: "Firebase", detail: "Realtime DB", sub: "Firestore" },
];

const MID = Math.ceil(TOOLS.length / 2);
const ROW_ONE = TOOLS.slice(0, MID);
const ROW_TWO = TOOLS.slice(MID);

function Track({
  tools,
  ariaHidden,
}: {
  tools: typeof TOOLS;
  ariaHidden?: boolean;
}) {
  return (
    <div
      className="flex shrink-0 items-center gap-4 pr-4"
      aria-hidden={ariaHidden}
    >
      {tools.map((tool) => (
        <div
          key={tool.name}
          className="flex w-40 shrink-0 flex-col justify-center rounded-lg border border-border px-4 py-4"
        >
          <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-fg">
            {tool.name}
          </p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-wide text-fg-muted">
            {tool.detail}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-wide text-fg-muted/70">
            {tool.sub}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="border-y border-border py-8">
      <p className="mb-6 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-fg-muted">
        Tech Stack
      </p>
      <div className="marquee-mask overflow-hidden">
        <div className="flex w-max animate-marquee motion-reduce:animate-none">
          <Track tools={ROW_ONE} />
          <Track tools={ROW_ONE} ariaHidden />
        </div>
      </div>
      <div className="marquee-mask mt-4 overflow-hidden">
        <div className="flex w-max animate-marquee-reverse motion-reduce:animate-none">
          <Track tools={ROW_TWO} />
          <Track tools={ROW_TWO} ariaHidden />
        </div>
      </div>
    </section>
  );
}
