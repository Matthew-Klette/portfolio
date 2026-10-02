import Reveal from "./Reveal";
import SectionEyebrow from "./SectionEyebrow";

// Order: tracking, then data, then automation, then dev.
const CATEGORIES = [
  {
    index: "1",
    title: "Google Tag Manager",
    items: [
      "Client-side & server-side GTM",
      "Custom HTML tag authoring (ES5 + ES6+)",
      "Tag, trigger & variable template creation",
      "JSON container export / import workflows",
      "Stape — sGTM data client setup & routing",
    ],
  },
  {
    index: "2",
    title: "Ad Platforms & Consent",
    items: [
      "Meta CAPI, Pixel & Business Suite",
      "Google Ads — conversion tracking",
      "Consent Mode v2 initialization & templates",
      "OneTrust — geolocation rules & vendor consent",
      "Klaviyo, Criteo, Bazaarvoice",
    ],
  },
  {
    index: "3",
    title: "Data & Analytics",
    items: [
      "GA4 event specs & parameters",
      "BigQuery — SQL analysis & reporting",
      "Looker Studio — BigQuery dashboards & reporting",
      "Microsoft Clarity — session & heatmap analysis",
      "Conversion tracking & multi-touch attribution",
    ],
  },
  {
    index: "4",
    title: "AI & Automation",
    items: [
      "n8n workflow automation",
      "MCP integrations — Claude with Linear, n8n & more",
      "Claude AI integration & prompt engineering",
      "Claude Code — agentic development workflows",
      "API orchestration",
    ],
  },
  {
    index: "5",
    title: "Languages",
    items: [
      "JavaScript — expert (ES5 + ES6+)",
      "TypeScript — production use",
      "SQL — complex queries & BigQuery",
      "Python — automation, scripting, tooling",
    ],
  },
  {
    index: "6",
    title: "Frontend & Infrastructure",
    items: [
      "React, React Native, TypeScript",
      "Tailwind CSS, responsive design",
      "Strapi CMS — headless content modeling",
      "Docker — containerised deployments",
    ],
  },
  {
    index: "7",
    title: "Databases & Backends",
    items: [
      "Supabase & PostgreSQL",
      "Firebase Realtime DB & Firestore",
      "REST API design & debugging (Postman)",
    ],
  },
  {
    index: "8",
    title: "Tooling & Workflow",
    items: [
      "Git & GitHub — version control",
      "Linear — project & ticket management",
      "Jira — sprint & issue tracking",
      "Notion — docs, SOPs & knowledge base",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionEyebrow number="03" label="SKILLS" />
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
