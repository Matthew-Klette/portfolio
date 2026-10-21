// Generic e-commerce events for the analytics door's backdrop. Illustrative only:
// no client data, ids or volumes.

export type Route = { to: string; status: "sent" | "dedup" | "modeled" | "blocked" };

export type StreamEvent = {
  id: number;
  time: string;
  name: string;
  detail: string;
  consent: "granted" | "denied";
  routes: Route[];
};

const EVENTS = [
  { name: "page_view", weight: 5, detail: () => "/" },
  { name: "view_item", weight: 4, detail: (r: () => number) => `sku ${100 + Math.floor(r() * 899)}` },
  { name: "add_to_cart", weight: 2, detail: (r: () => number) => `qty ${1 + Math.floor(r() * 3)}` },
  { name: "begin_checkout", weight: 1, detail: () => "cart" },
  { name: "purchase", weight: 1, detail: (r: () => number) => `$${(40 + r() * 260).toFixed(2)}` },
] as const;

const TOTAL_WEIGHT = EVENTS.reduce((s, e) => s + e.weight, 0);

/** Small deterministic PRNG so the stream is stable between renders and testable. */
export function seeded(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 2 ** 32;
  };
}

function pickEvent(r: () => number) {
  let n = r() * TOTAL_WEIGHT;
  for (const e of EVENTS) {
    n -= e.weight;
    if (n <= 0) return e;
  }
  return EVENTS[0];
}

const pad = (n: number, w = 2) => String(n).padStart(w, "0");

export function formatClock(ms: number): string {
  const d = Math.floor(ms);
  const h = Math.floor(d / 3_600_000) % 24;
  const m = Math.floor(d / 60_000) % 60;
  const s = Math.floor(d / 1000) % 60;
  return `${pad(h)}:${pad(m)}:${pad(s)}.${pad(d % 1000, 3)}`;
}

/**
 * Routing mirrors the setup the door describes: GA4 always receives the event,
 * ad platforms only with ads consent (otherwise Google models it), and a purchase
 * sent from browser and server is deduplicated on its event id.
 */
export function routesFor(name: string, consent: StreamEvent["consent"]): Route[] {
  const routes: Route[] = [{ to: "GA4", status: consent === "granted" ? "sent" : "modeled" }];
  const ads = name === "purchase" || name === "add_to_cart" || name === "begin_checkout";
  if (!ads) return routes;
  if (consent === "denied") return [...routes, { to: "Meta CAPI", status: "blocked" }];
  return [
    ...routes,
    { to: "Meta CAPI", status: name === "purchase" ? "dedup" : "sent" },
    { to: "Google Ads", status: "sent" },
  ];
}

export function makeEvent(id: number, clockMs: number, r: () => number): StreamEvent {
  const e = pickEvent(r);
  const consent = r() < 0.78 ? "granted" : "denied";
  return { id, time: formatClock(clockMs), name: e.name, detail: e.detail(r), consent, routes: routesFor(e.name, consent) };
}
