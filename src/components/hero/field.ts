// Pure placement maths for the card field, kept apart from three.js so it can be tested.

export const FIELD = {
  count: 160,
  nearZ: -2.5, // backstop: cards normally respawn once they leave the view
  startZ: -7, // initial fill stops here so nothing starts huge
  farZ: -24,
  speed: 0.38, // world units per second toward the camera
  fadeInSpan: 5, // depth over which a new card fades up from black
  maxR: 1.25,
} as const;

export type Clear = { x: number; y: number };

/**
 * Headline keep-out, as ellipse radii in normalised device coordinates (-1..1).
 * On portrait screens the type fills the width, so cards keep to bands above and below it.
 */
export function keepOut(aspect: number): Clear {
  return aspect >= 1 ? { x: 0.62, y: 0.58 } : { x: 1.7, y: 0.46 };
}

/** Fewer cards on portrait screens, where the same field would crowd a narrow view. */
export function cardCount(aspect: number): number {
  return aspect >= 1 ? FIELD.count : Math.round(FIELD.count * 0.5);
}

export type Placement = { x: number; y: number; z: number };

/** Half-extent of the view frustum at a given depth. */
export function halfExtent(z: number, fovDeg: number, aspect: number) {
  const h = Math.tan((fovDeg * Math.PI) / 360) * Math.abs(z);
  return { w: h * aspect, h };
}

/** True when an NDC point sits outside the headline's elliptical keep-out. */
export function outsideClear(nx: number, ny: number, clear: Clear): boolean {
  return (nx / clear.x) ** 2 + (ny / clear.y) ** 2 >= 1;
}

/**
 * Places a card at depth z so it first appears outside the keep-out. A card keeps
 * its world x/y as it approaches, so its screen position only moves outward and
 * it can never drift in front of the headline.
 */
export function place(z: number, fovDeg: number, aspect: number, rand: () => number): Placement {
  const { w, h } = halfExtent(z, fovDeg, aspect);
  const clear = keepOut(aspect);
  for (let i = 0; i < 40; i++) {
    const angle = rand() * Math.PI * 2;
    const r = 0.35 + rand() * (FIELD.maxR - 0.35);
    const nx = Math.cos(angle) * r;
    const ny = Math.sin(angle) * r;
    if (outsideClear(nx, ny, clear)) return { x: nx * w, y: ny * h, z };
  }
  return { x: 0, y: h * FIELD.maxR, z };
}

/** 0..1 brightness: new cards fade up from black at the back, then stay lit until they leave the view. */
export function depthFade(z: number): number {
  return Math.min(1, Math.max(0, (z - FIELD.farZ) / FIELD.fadeInSpan));
}
