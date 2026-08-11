const TOOLS = [
  { name: "GTM", detail: "Tag Manager", sub: "Client + Server" },
  { name: "BigQuery", detail: "Data Warehouse", sub: "Google Cloud" },
  { name: "JavaScript", detail: "Expert · ES6+", sub: "Custom Tags" },
  { name: "Python", detail: "Automation", sub: "Scripting" },
  { name: "React", detail: "TypeScript", sub: "Tailwind CSS" },
  { name: "React Native", detail: "Cross-platform", sub: "Mobile" },
  { name: "Kotlin", detail: "Android · JVM", sub: "Mobile Dev" },
  { name: "n8n", detail: "Automation", sub: "Workflows" },
  { name: "Firebase", detail: "Realtime DB", sub: "Firestore" },
  { name: "Docker", detail: "Containers", sub: "DevOps" },
  { name: "Supabase", detail: "PostgreSQL", sub: "Backend" },
  { name: "Klaviyo", detail: "Email MarTech", sub: "Events" },
  { name: "MCP", detail: "Server Creation", sub: "AI Tooling" },
  { name: "GA4", detail: "Events Schema", sub: "Analytics" },
  { name: "Looker Studio", detail: "BQ Dashboards", sub: "Reporting" },
  { name: "Strapi", detail: "Headless CMS", sub: "Content Model" },
  { name: "Tailscale", detail: "VPN · Mesh", sub: "Remote Dev" },
  { name: "Clarity", detail: "MS Clarity", sub: "Session Data" },
];

function Track({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-4 pr-4"
      aria-hidden={ariaHidden}
    >
      {TOOLS.map((tool) => (
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
          <Track />
          <Track ariaHidden />
        </div>
      </div>
    </section>
  );
}
