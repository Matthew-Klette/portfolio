import Reveal from "./Reveal";
import SectionEyebrow from "./SectionEyebrow";

type Build = {
  tag: string;
  title: string;
  description: string;
  href: string;
};

const BUILDS: Build[] = [
  {
    tag: "Concept Site",
    title: "Aubade",
    description:
      "A concept site for a circadian lamp that keeps time with the sun. Next.js, three.js, GSAP and Lenis.",
    href: "https://aubade-eta.vercel.app",
  },
  {
    tag: "Concept Site",
    title: "Nishiki",
    description:
      "A concept field guide to eight koi varieties, drawn live in code. Vite, React, TypeScript and Canvas 2D.",
    href: "https://nishiki.vercel.app",
  },
  {
    tag: "Motion",
    title: "Golden Hour",
    description:
      "A 76-second kinetic portfolio intro where every sound and frame is code. Web Audio, GSAP and Canvas.",
    href: "https://golden-hour-smoky.vercel.app",
  },
  {
    tag: "Scroll Story",
    title: "Minecraft Nightfall",
    description:
      "A scroll-driven Minecraft night-cycle story. Three.js, GSAP and Lenis.",
    href: "https://minecraft-nightfall.vercel.app",
  },
  {
    tag: "Encyclopedia",
    title: "Notes & Hours",
    description:
      "A fragrance index of 60 real scents, with designer originals set against their dupes. Next.js, GSAP, Lenis and WebGL gradients.",
    href: "https://fragrance-index.vercel.app",
  },
  {
    tag: "Specimen Catalog",
    title: "Hydrurga",
    description:
      "A specimen catalog of the leopard seal that you read by diving under the ice. Vite, React, WebGL2 and d3-geo.",
    href: "https://hydrurga.vercel.app",
  },
];

function BuildCard({ build, index }: { build: Build; index: number }) {
  return (
    <article className="flex h-full flex-col rounded-2xl bg-off-white p-8 text-bg">
      <div className="mb-6 flex items-start justify-between gap-4">
        <span className="inline-block rounded-full border border-bg/20 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-bg/70">
          {build.tag}
        </span>
        <span className="font-mono text-xs text-bg/50">/{index + 1}</span>
      </div>
      <h3 className="mb-4 font-heading text-2xl leading-snug tracking-tight text-bg">
        {build.title}
      </h3>
      <p className="mb-8 font-mono text-sm leading-relaxed text-bg/70">
        {build.description}
      </p>
      <a
        href={build.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-bg transition-colors hover:text-bg/60"
      >
        <span aria-hidden>↗</span> View live
      </a>
    </article>
  );
}

export default function Builds() {
  return (
    <section id="builds" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionEyebrow number="03" label="BUILDS" />
        <h2 className="mb-14 max-w-2xl font-heading text-3xl leading-tight tracking-tight text-fg sm:text-4xl">
          Personal frontend builds.
        </h2>
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {BUILDS.map((build, i) => (
          <Reveal key={build.title} delay={i * 80}>
            <BuildCard build={build} index={i} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
