// All public copy about the analytics work. Claims follow the verified list in
// Matt's notes (contract limits: no client data, ticket counts or artifacts).

export const SERVICES = [
  {
    title: "Client & server-side GTM on Stape",
    outcome:
      "Your tags run through a server container you control, so browser restrictions cost you less data and every change ships as a tested, versioned release.",
  },
  {
    title: "Consent Mode v2 & OneTrust",
    outcome:
      "Every tag follows the visitor's consent choice, and Google still gets the consent signals it needs for modeled conversions.",
  },
  {
    title: "Meta CAPI & Google Ads server-side",
    outcome:
      "Purchases reach Meta and Google Ads from your server as well as the browser, counted once, so bidding learns from real orders.",
  },
  {
    title: "GA4 event specs",
    outcome: "A written spec for every event and parameter, so developers build exactly what your analysts expect to query.",
  },
  {
    title: "BigQuery & Looker Studio reporting",
    outcome:
      "Server-side events land in BigQuery with Looker Studio reports on top, so you can check GA4 and ad platform numbers against your own data.",
  },
  {
    title: "n8n & Claude automation",
    outcome:
      "Repetitive work runs on its own, with a person reviewing before anything goes live. I built 4 production n8n automations for KÜHL, including a product-page content pipeline with human review.",
  },
] as const;

export type CaseStudy = {
  tag: string;
  title: string;
  problem: string;
  approach: string;
  outcomes: readonly string[];
  stats?: readonly { value: string; label: string }[]; // shown large; each restates an outcome above
};

export const CASE_STUDIES: readonly CaseStudy[] = [
  {
    tag: "Server-side tracking",
    title: "Server-side tracking and consent for KÜHL",
    problem:
      "Client-side and server-side event counts drift apart, and conversions in GA4, Meta and Google Ads don't reconcile with each other or with the order system. Every server-side ad tag needs deduplication against its browser counterpart and the same consent gating, or purchases get counted twice and consent choices aren't applied everywhere.",
    approach:
      "Build and publish changes across the web and server-side GTM containers on Stape. Trace each event from the dataLayer through the server container to Meta CAPI and Google Ads, deduplicate browser and server conversions, and gate tags on Consent Mode v2.",
    outcomes: [
      "Created 181 production GTM versions (111 web, 70 server-side) since January 2025.",
      "Wrote the server-side GTM audit (security, data quality, consent, maintainability) and led the fixes.",
      "Took web tags with Consent Mode v2 consent checks from zero to about a third of the container.",
      "Nearly doubled the server-side event streams feeding the data warehouse.",
    ],
    stats: [
      { value: "181", label: "production GTM versions since January 2025" },
      { value: "111 / 70", label: "web / server-side" },
      { value: "~⅓", label: "of web tags now gated on Consent Mode v2, up from none" },
      { value: "~2×", label: "server-side event streams into the warehouse" },
    ],
  },
  {
    tag: "Privacy & consent",
    title: "Consent that holds across every tag",
    problem:
      "A consent banner, Consent Mode v2 and server-side ad tags each carry their own idea of what a visitor agreed to. They have to agree across regions, browsers and every new tag that ships.",
    approach:
      "Manage OneTrust geolocation rules and regulatory templates, add vendor consent records for major ad platforms, and gate server-side advertising tags on consent state as new tracking ships.",
    outcomes: ["Consent checks are part of how new tags ship, with consent QA across browsers and environments before release."],
  },
  {
    tag: "Automation",
    title: "n8n and Claude automation with a human in the loop",
    problem:
      "Product-page content and data sync between internal tools took repetitive manual work. Any automation had to keep a person in the loop and stop overlapping runs from colliding.",
    approach:
      "Built 4 production n8n automations, including a product-page content pipeline where Claude drafts and a person reviews before anything is published, with run-lock logic around shared state. Also contributed to an internal privacy scanner: headless scanning, report delivery and AI-generated reports.",
    outcomes: ["The content pipeline runs on its own up to the human review step, and overlapping runs are locked out."],
    stats: [{ value: "4", label: "production n8n automations, each with a human review step" }],
  },
];

export const OTHER_WORK = {
  text: "A legislator lookup and postcard tool for the Utah Mountain Lion Conservation campaign (Wix Studio, Velo, Geocodio API).",
  links: [
    { label: "Protect", href: "https://www.utahmountainlion.org/protect" },
    { label: "Postcard campaign", href: "https://www.utahmountainlion.org/postcard" },
  ],
} as const;

// Core tracking and reporting stack first; general dev tools after.
export const TOOLS = [
  { name: "GTM", detail: "Client + server" },
  { name: "Stape", detail: "sGTM hosting" },
  { name: "GA4", detail: "Event specs" },
  { name: "Meta CAPI", detail: "Server-side" },
  { name: "Consent Mode v2", detail: "Tag gating" },
  { name: "OneTrust", detail: "Geo rules" },
  { name: "BigQuery", detail: "SQL reporting" },
  { name: "Looker Studio", detail: "BQ dashboards" },
  { name: "n8n", detail: "Workflows" },
  { name: "Klaviyo", detail: "Email events" },
  { name: "Clarity", detail: "Session data" },
  { name: "MCP", detail: "AI tooling" },
  { name: "JavaScript", detail: "ES5 + ES6+" },
  { name: "Python", detail: "Scripting" },
  { name: "React", detail: "TypeScript" },
  { name: "three.js", detail: "WebGL" },
  { name: "Supabase", detail: "PostgreSQL" },
  { name: "Docker", detail: "Containers" },
  { name: "Strapi", detail: "Headless CMS" },
  { name: "React Native", detail: "Mobile" },
] as const;

// Order: tracking, then data, then automation, then dev.
export const SKILLS = [
  {
    title: "Google Tag Manager",
    items: [
      "Client-side & server-side GTM",
      "Custom HTML tag authoring (ES5 + ES6+)",
      "Tag, trigger & variable template creation",
      "JSON container export / import workflows",
      "Stape: sGTM data client setup & routing",
    ],
  },
  {
    title: "Ad platforms & consent",
    items: [
      "Meta CAPI, Pixel & Business Suite",
      "Google Ads conversion tracking",
      "Consent Mode v2 initialization & templates",
      "OneTrust geolocation rules & vendor consent",
      "Klaviyo, Criteo, Bazaarvoice",
    ],
  },
  {
    title: "Data & analytics",
    items: [
      "GA4 event specs & parameters",
      "BigQuery SQL analysis & reporting",
      "Looker Studio dashboards on BigQuery",
      "Microsoft Clarity session & heatmap analysis",
      "Conversion tracking & multi-touch attribution",
    ],
  },
  {
    title: "AI & automation",
    items: [
      "n8n workflow automation",
      "MCP integrations: Claude with Linear, n8n & more",
      "Claude AI integration & prompt engineering",
      "Claude Code agentic development workflows",
      "API orchestration",
    ],
  },
  {
    title: "Languages",
    items: [
      "JavaScript, expert (ES5 + ES6+)",
      "TypeScript in production",
      "SQL, complex queries & BigQuery",
      "Python for automation, scripting, tooling",
    ],
  },
  {
    title: "Frontend & infrastructure",
    items: [
      "React, React Native, TypeScript",
      "three.js, WebGL, Canvas 2D, GSAP",
      "Tailwind CSS, responsive design",
      "Strapi headless content modeling",
      "Docker containerised deployments",
    ],
  },
  {
    title: "Databases & backends",
    items: ["Supabase & PostgreSQL", "Firebase Realtime DB & Firestore", "REST API design & debugging (Postman)"],
  },
  {
    title: "Tooling & workflow",
    items: [
      "Git & GitHub version control",
      "Linear project & ticket management",
      "Jira sprint & issue tracking",
      "Notion docs, SOPs & knowledge base",
    ],
  },
] as const;

export const ROLE = {
  dates: "Dec 2024 to present · Remote",
  title: "Contract MarTech Engineer",
  org: "Independent contractor for KÜHL, via MBK Consulting Group",
  summary:
    "Contract MarTech engineer for KÜHL since December 2024, and the primary engineer for client and server-side tagging and consent: from browser capture through the server-side container to the ad platforms, and the GA4 specs and reporting built on top.",
  scope: [
    {
      title: "Tag management & server-side tracking",
      description:
        "Build and publish changes across the client and server-side GTM containers: custom JavaScript variables, triggers and tags capturing e-commerce events across the full customer journey. Wrote the server-side GTM audit (security, data quality, consent, maintainability) and led the fixes.",
    },
    {
      title: "Event specs & reporting",
      description:
        "Write the GA4 event and parameter specs that BigQuery tables are built from, including row-level product attribution for on-site recommendation modules. Query those tables in SQL and build the Looker Studio reports on top for attribution, recommendation performance and channel-level reporting.",
    },
    {
      title: "Privacy & consent management",
      description:
        "Manage OneTrust geolocation and regulatory template configuration, vendor consent records for major ad platforms, and consent gating on server-side advertising tags as new tracking ships. Took web tags with Consent Mode v2 consent checks from zero to about a third of the container.",
    },
    {
      title: "Advertising platform integration",
      description:
        "Meta Conversions API and Google Ads server-side tags with browser and server deduplication, click and browser ID passthrough, and ongoing event-quality checks in Meta Events Manager.",
    },
    {
      title: "Marketing analytics & reporting",
      description:
        "Configure Microsoft Clarity (session tooling, funnels, Core Web Vitals monitoring) and use it to investigate layout stability on high-traffic product pages. Scope and deliver custom reports on feature usage and conversion impact for product and merchandising decisions.",
    },
    {
      title: "Automation & internal tooling",
      description:
        "Built 4 production n8n automations, including a product-page content pipeline with human review, with run-lock logic so overlapping runs can't collide. Use MCP integrations to connect Claude to tools like Linear and n8n. Contributed to an internal privacy scanner: headless scanning, report delivery and AI-generated reports.",
    },
    {
      title: "Data integrity & QA",
      description:
        "Take tracking work from requirements through implementation to QA. Reconcile client-side and server-side event counts, and configure server-side tags for platform-specific event handling.",
    },
    {
      title: "Stakeholder coordination & documentation",
      description:
        "Coordinate directly with stakeholders to translate business reporting needs into tracking specifications and dashboard requirements. Document tracking architecture and data flow so the setup stays maintainable.",
    },
  ],
} as const;

export const EDUCATION = {
  school: "Emeris",
  formerly: "Formerly IIE Varsity College",
  qualifications: [
    { title: "Bachelor of Computer and Information Sciences in Application Development", detail: "In progress, completing 2026" },
    { title: "Higher Certificate in Mobile Application and Web Development", detail: "2023, with distinction" },
  ],
} as const;

export const ABOUT = [
  "I'm an independent MarTech engineer working remotely from Port Elizabeth, South Africa, with US e-commerce teams. I'm available across the full South African workday (UTC+2), which overlaps US Eastern mornings. I build the systems that sit between marketing platforms and the numbers teams rely on: client and server-side tracking, consent, and the automation that keeps them running.",
  "Most of my work starts with numbers that don't agree: attribution that doesn't reconcile, consent that isn't applied the same way in every tag, or workflows that still depend on someone copying data between tools by hand. I fix the underlying system, not just the symptom.",
  "On the other side of the work I design and build frontends from scratch: concept sites, scroll stories and motion pieces in React, three.js and WebGL. I'm completing a degree in Application Development at Emeris (finishing 2026), which feeds straight back into both: cleaner code, better-structured automation, and less duct tape.",
] as const;
