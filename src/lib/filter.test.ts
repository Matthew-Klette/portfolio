import { describe, expect, test } from "vitest";
import { BUILDS } from "@/data/builds";
import { filterBuilds, formatMonth } from "./filter";

describe("filterBuilds", () => {
  test("returns every build for an empty query", () => {
    expect(filterBuilds(BUILDS, "  ")).toHaveLength(BUILDS.length);
  });

  test("matches stack names case-insensitively", () => {
    expect(filterBuilds(BUILDS, "THREE.JS").map((b) => b.slug)).toEqual(["aubade", "nightfall"]);
  });

  test("requires every term to match", () => {
    expect(filterBuilds(BUILDS, "koi canvas").map((b) => b.slug)).toEqual(["nishiki"]);
    expect(filterBuilds(BUILDS, "koi webgl2")).toEqual([]);
  });
});

describe("builds data", () => {
  test("every build has an https URL, a unique slug and at least two shots", () => {
    const slugs = new Set(BUILDS.map((b) => b.slug));
    expect(slugs.size).toBe(BUILDS.length);
    for (const b of BUILDS) {
      expect(b.url.startsWith("https://")).toBe(true);
      expect(b.shots.length).toBeGreaterThanOrEqual(2);
    }
  });
});

describe("formatMonth", () => {
  test("formats an ISO date as a short month and year", () => {
    expect(formatMonth("2026-10-03")).toBe("Oct 2026");
  });
});
