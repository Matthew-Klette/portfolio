import { describe, expect, test } from "vitest";
import { FIELD, cardCount, depthFade, halfExtent, keepOut, outsideClear, place } from "./field";

const FOV = 50;

// Deterministic generator so failures reproduce
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 2 ** 32;
    return s / 2 ** 32;
  };
}

describe("place", () => {
  test.each([16 / 10, 390 / 844])("never puts a card inside the headline keep-out (aspect %f)", (aspect: number) => {
    const rand = seeded(7);
    const clear = keepOut(aspect);
    for (let i = 0; i < 2000; i++) {
      const z = FIELD.farZ + rand() * (FIELD.nearZ - FIELD.farZ);
      const p = place(z, FOV, aspect, rand);
      const { w, h } = halfExtent(z, FOV, aspect);
      expect(outsideClear(p.x / w, p.y / h, clear)).toBe(true);
    }
  });

  test("a card only moves outward on screen as it approaches", () => {
    const aspect = 16 / 10;
    const p = place(FIELD.farZ, FOV, aspect, seeded(3));
    const ndcAt = (z: number) => Math.hypot(p.x / halfExtent(z, FOV, aspect).w, p.y / halfExtent(z, FOV, aspect).h);
    expect(ndcAt(FIELD.nearZ)).toBeGreaterThan(ndcAt(FIELD.farZ));
  });
});

describe("depthFade", () => {
  test("is black at both ends and full in the middle", () => {
    expect(depthFade(FIELD.farZ)).toBe(0);
    expect(depthFade(FIELD.nearZ)).toBe(0);
    expect(depthFade((FIELD.farZ + FIELD.nearZ) / 2)).toBe(1);
  });
});

describe("cardCount", () => {
  test("halves the field on portrait screens", () => {
    expect(cardCount(1.6)).toBe(FIELD.count);
    expect(cardCount(0.46)).toBe(Math.round(FIELD.count / 2));
  });
});
