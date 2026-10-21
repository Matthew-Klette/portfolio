export type Build = {
  slug: string;
  title: string;
  phrase: string; // finishes the hero line "Step inside …"
  kind: string;
  description: string;
  url: string;
  repo: string | null; // public repos only
  stack: readonly string[];
  date: string; // ISO, first shipped
  shots: readonly string[];
};

const shots = (slug: string, count: number): string[] =>
  Array.from({ length: count }, (_, i) => `/shots/${slug}-${i + 1}.jpg`);

export const BUILDS: readonly Build[] = [
  {
    slug: "aubade",
    title: "Aubade",
    phrase: "a circadian lamp",
    kind: "Concept site",
    description: "A lamp that matches the daylight outside your window, minute by minute. The product is fictional; the frontend is real.",
    url: "https://aubade-eta.vercel.app",
    repo: "https://github.com/Matthew-Klette/aubade",
    stack: ["Next.js", "three.js", "GSAP", "Lenis"],
    date: "2026-10-03",
    shots: shots("aubade", 3),
  },
  {
    slug: "nishiki",
    title: "Nishiki",
    phrase: "a koi field guide",
    kind: "Field guide",
    description: "Eight koi varieties drawn live in code, with a judging vocabulary, an ID game and a pond you can feed.",
    url: "https://nishiki.vercel.app",
    repo: "https://github.com/Matthew-Klette/nishiki",
    stack: ["Vite", "React", "TypeScript", "Canvas 2D"],
    date: "2026-10-03",
    shots: shots("nishiki", 3),
  },
  {
    slug: "goldenhour",
    title: "Golden Hour",
    phrase: "a kinetic intro",
    kind: "Motion",
    description: "A 76-second portfolio intro where every sound and every frame is code.",
    url: "https://golden-hour-smoky.vercel.app",
    repo: "https://github.com/Matthew-Klette/golden-hour",
    stack: ["Web Audio", "GSAP", "Canvas"],
    date: "2026-10-09",
    shots: shots("goldenhour", 2),
  },
  {
    slug: "nightfall",
    title: "Minecraft Nightfall",
    phrase: "a Minecraft night",
    kind: "Scroll story",
    description: "One night in a voxel world, from sunset on a cliff to a wolf at sunrise, told by scrolling.",
    url: "https://minecraft-nightfall.vercel.app",
    repo: null,
    stack: ["three.js", "GSAP", "Lenis"],
    date: "2026-10-10",
    shots: shots("nightfall", 3),
  },
  {
    slug: "fragrance",
    title: "Notes & Hours",
    phrase: "a fragrance index",
    kind: "Encyclopedia",
    description: "58 real fragrances with official bottles, filtered by season and hour, with originals set against their dupes.",
    url: "https://fragrance-index.vercel.app",
    repo: null,
    stack: ["Next.js", "GSAP", "Lenis", "WebGL"],
    date: "2026-10-10",
    shots: shots("fragrance", 3),
  },
  {
    slug: "hydrurga",
    title: "Hydrurga",
    phrase: "a leopard seal dive",
    kind: "Specimen catalog",
    description: "A catalog of one animal that you read by diving, from the pack ice down to 1,256 metres.",
    url: "https://hydrurga.vercel.app",
    repo: null,
    stack: ["Vite", "React", "WebGL2", "d3-geo"],
    date: "2026-10-18",
    shots: shots("hydrurga", 3),
  },
];
