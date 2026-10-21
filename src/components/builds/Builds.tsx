"use client";

import { useMemo, useState } from "react";
import { BUILDS } from "@/data/builds";
import { filterBuilds } from "@/lib/filter";
import BuildCard from "./BuildCard";

export default function Builds() {
  const [query, setQuery] = useState("");
  const [liveSlug, setLiveSlug] = useState<string | null>(null);
  const shown = useMemo(() => filterBuilds(BUILDS, query), [query]);
  const trimmed = query.trim();
  const clear = () => setQuery("");

  return (
    <section id="builds" className="section" aria-labelledby="builds-title">
      <div className="catalog-glow" aria-hidden="true" />
      <header className="section-head">
        <p className="eyebrow">Frontend builds</p>
        <h2 id="builds-title" className="heading">
          Every build is a real site. <em>Open any of them.</em>
        </h2>
        <p className="lede">
          Concept sites, scroll stories and motion pieces I designed and built. Hover a card to run the live site inside
          it.
        </p>
        <div className="catalog-tools">
          <form className="catalog-search" role="search" onSubmit={(e) => e.preventDefault()}>
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <circle cx="9" cy="9" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M13.5 13.5 17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <label htmlFor="build-search" className="sr-only">
              Search builds
            </label>
            <input
              id="build-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or stack, e.g. three.js"
              autoComplete="off"
            />
          </form>
          <p className="catalog-count" aria-live="polite">
            {trimmed ? `${shown.length} of ${BUILDS.length} match “${trimmed}”` : `${BUILDS.length} builds, all live`}
            {trimmed && (
              <button type="button" className="catalog-clear" onClick={clear}>
                Clear
              </button>
            )}
          </p>
        </div>
      </header>
      {shown.length > 0 ? (
        <div className="catalog-grid">
          {shown.map((b) => (
            <BuildCard key={b.slug} build={b} index={BUILDS.indexOf(b)} live={liveSlug === b.slug} onActivate={setLiveSlug} />
          ))}
        </div>
      ) : (
        <div className="catalog-empty">
          <p>No build matches “{trimmed}”. Try a stack like three.js, or a word like koi.</p>
          <button type="button" className="button-ghost" onClick={clear}>
            Show every build
          </button>
        </div>
      )}
    </section>
  );
}
