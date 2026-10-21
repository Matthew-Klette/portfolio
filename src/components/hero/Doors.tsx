"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { BUILDS } from "@/data/builds";
import { BOOKING_LABEL, BOOKING_URL } from "@/lib/site";
import BuildsDoorCanvas from "./BuildsDoorCanvas";
import EventStream from "./EventStream";

const CYCLE_MS = 4200;
const STACK = ["sGTM", "GA4", "Meta CAPI", "Consent Mode v2", "BigQuery / Looker Studio"];

const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";
const subscribeReduced = (cb: () => void) => {
  const mq = window.matchMedia(REDUCED_QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

function useReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeReduced,
    () => window.matchMedia(REDUCED_QUERY).matches,
    () => false,
  );
}

export default function Doors() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const build = BUILDS[active];

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % BUILDS.length), CYCLE_MS);
    return () => window.clearInterval(id);
  }, [reduced]);

  return (
    <section id="top" className="doors" aria-labelledby="intro">
      <h1 id="intro" className="doors-intro">
        <span>Matthew Klette</span>
        <span className="doors-intro-role">MarTech engineer and frontend builder · Port Elizabeth, working with US teams</span>
      </h1>

      <article className="door door-analytics" aria-labelledby="door-analytics-title">
        <div className="door-backdrop">
          <EventStream reduced={reduced} />
        </div>
        <div className="door-glow door-glow-blue" aria-hidden="true" />
        <div className="door-content">
          <p className="eyebrow">01 · Analytics engineering</p>
          <h2 id="door-analytics-title" className="door-title">
            Numbers that <em>agree.</em>
          </h2>
          <p className="door-text">
            Your ad platforms, GA4 and your order system all report a different revenue number, and nobody trusts the
            dashboard. I build the server-side tracking and consent setup that closes that gap.
          </p>
          <ul className="chips" aria-label="Core stack">
            {STACK.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <div className="door-actions">
            <a href="#work" className="button-primary">
              See the work
            </a>
            <a href={BOOKING_URL} className="button-ghost">
              {BOOKING_LABEL}
            </a>
          </div>
        </div>
      </article>

      <article className="door door-builds" aria-labelledby="door-builds-title">
        <div className="door-backdrop">
          <BuildsDoorCanvas activeSlug={build.slug} reduced={reduced} />
        </div>
        <div className="door-glow door-glow-orange" aria-hidden="true" />
        <div className="door-content">
          <p className="eyebrow">02 · Frontend builds</p>
          <h2 id="door-builds-title" className="door-title">
            Sites you can <em>step inside.</em>
          </h2>
          <p className="door-text">
            {BUILDS.length} concept sites, scroll stories and motion pieces, each one live and built from scratch in code.
          </p>
          <p className="door-now" aria-live="polite">
            <span className="status-dot" aria-hidden="true" />
            Now showing
            <span key={build.slug} className="door-now-phrase">
              {build.phrase}
            </span>
            <span className="door-thumbs" aria-hidden="true">
              {build.shots.slice(0, 2).map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element -- tiny decorative thumbs, swapped every few seconds
                <img key={`${build.slug}-${src}`} src={src} alt="" className={`door-thumb door-thumb-${i}`} />
              ))}
            </span>
          </p>
          <div className="door-actions">
            <a href="#builds" className="button-primary">
              Browse the builds
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}
