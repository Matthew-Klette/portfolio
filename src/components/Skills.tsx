import Reveal from "./Reveal";
import SectionEyebrow from "./SectionEyebrow";

const CATEGORIES = [
  {
    index: "1",
    title: "Google Tag Manager",
    items: [
      "Client-side & server-side GTM",
      "Custom HTML tag authoring (ES5 + ES6+)",
      "JSON container export / import workflows",
      "Tag, trigger & variable template creation",
      "Stape data client, Consent Mode v2, OneTrust",
    ],
  },
  {
    index: "2",
    title: "Data & Analytics",
    items: [
      "BigQuery — table design & complex SQL",
      "GA4 event schema & full parameter ownership",
      "Microsoft Clarity — session & heatmap analysis",
      "Conversion tracking & multi-touch attribution",
      "Looker Studio — BigQuery dashboards & reporting",
    ],
  },
  {
    index: "3",
    title: "AI & Automation",
    items: [
      "MCP server creation & deployment",
      "Claude AI integration & prompt engineering",
      "n8n complex workflow automation",
      "API orchestration",
    ],
  },
  {
    index: "4",
    title: "Languages",
    items: [
      "JavaScript — expert (ES5 + ES6+)",
      "TypeScript — production use",
      "Python — automation, scripting, tooling",
      "SQL — complex queries & BigQuery",
      "Kotlin — Android & React Native",
    ],
  },
  {
    index: "5",
    title: "Frontend & Infrastructure",
    items: [
      "React, React Native, TypeScript",
      "Tailwind CSS, responsive design",
      "Strapi CMS — headless content modeling",
      "Docker — containerised deployments",
      "Tailscale VPN — mesh network remote dev",
    ],
  },
  {
    index: "6",
    title: "MarTech Ecosystem",
    items: [
      "Klaviyo — email & event integration",
      "Meta CAPI, Pixel & Business Suite",
      "Criteo, Bazaarvoice, OneTrust",
      "Consent Mode v2 initialization & templates",
      "Stape — sGTM data client setup & routing",
    ],
  },
  {
    index: "7",
    title: "Tooling & Workflow",
    items: [
      "Jira — sprint & issue tracking",
      "Linear — project & ticket management",
      "Notion — docs, SOPs & knowledge base",
      "Git & GitHub — version control",
    ],
  },
  {
    index: "8",
    title: "Databases & Backends",
    items: [
      "Firebase Realtime DB & Firestore",
      "Supabase & PostgreSQL",
      "SSMS — Microsoft SQL Server",
      "REST API design & debugging (Postman)",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionEyebrow number="02" label="SKILLS" />
        <h2 className="mb-14 max-w-2xl font-heading text-3xl leading-tight tracking-tight text-fg sm:text-4xl">
          The stack I use to keep tracking and automation systems honest.
        </h2>
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((cat, i) => (
          <Reveal key={cat.title} delay={(i % 4) * 80}>
            <div className="flex h-full flex-col rounded-2xl border border-border p-6">
              <div className="mb-5 flex items-baseline justify-between">
                <h3 className="font-heading text-xl tracking-tight text-fg">
                  {cat.title}
                </h3>
                <span className="font-mono text-xs text-fg-muted">
                  /{cat.index}
                </span>
              </div>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-mono text-xs leading-relaxed text-fg-muted"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-fg-muted" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
