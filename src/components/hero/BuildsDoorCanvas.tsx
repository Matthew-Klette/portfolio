"use client";

import { useEffect, useRef } from "react";
import { BUILDS } from "@/data/builds";
import type { Tunnel } from "./tunnel";

const ALL_SHOTS = BUILDS.flatMap((b) => b.shots);

export function shotIndexesFor(slug: string): number[] {
  let offset = 0;
  for (const b of BUILDS) {
    if (b.slug === slug) return b.shots.map((_, i) => offset + i);
    offset += b.shots.length;
  }
  return [];
}

type Props = { activeSlug: string; reduced: boolean };

/** The builds door's backdrop: the card tunnel from the catalog, lazy-loaded. */
export default function BuildsDoorCanvas({ activeSlug, reduced }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tunnelRef = useRef<Tunnel | null>(null);
  const slugRef = useRef(activeSlug);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let cancelled = false;
    let cleanup = () => {};
    import("./tunnel")
      .then(({ createTunnel }) => {
        if (cancelled) return;
        const tunnel = createTunnel(canvas, ALL_SHOTS, reduced);
        tunnelRef.current = tunnel;
        tunnel.setTheme(shotIndexesFor(slugRef.current));
        const io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? tunnel.start() : tunnel.stop()));
        io.observe(canvas);
        const onVisibility = () => (document.hidden ? tunnel.stop() : tunnel.start());
        document.addEventListener("visibilitychange", onVisibility);
        cleanup = () => {
          io.disconnect();
          document.removeEventListener("visibilitychange", onVisibility);
          tunnel.dispose();
          tunnelRef.current = null;
        };
      })
      .catch(() => {
        canvas.dataset.fallback = "true";
      });
    return () => {
      cancelled = true;
      cleanup();
    };
  }, [reduced]);

  useEffect(() => {
    slugRef.current = activeSlug; // read when the lazily loaded tunnel starts
    tunnelRef.current?.setTheme(shotIndexesFor(activeSlug));
  }, [activeSlug]);

  return <canvas ref={canvasRef} className="door-canvas" aria-hidden="true" />;
}
