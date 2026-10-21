import type { Build } from "@/data/builds";

const haystack = (b: Build): string =>
  [b.title, b.kind, b.phrase, b.description, ...b.stack].join(" ").toLowerCase();

/** Every whitespace-separated term must appear somewhere in the build. */
export function filterBuilds(builds: readonly Build[], query: string): Build[] {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return [...builds];
  return builds.filter((b) => {
    const text = haystack(b);
    return terms.every((t) => text.includes(t));
  });
}

export function formatMonth(iso: string): string {
  const [y, m] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
