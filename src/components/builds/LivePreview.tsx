"use client";

import { useEffect, useRef, useState } from "react";

const SITE_W = 1440;
const SITE_H = 900;

type Props = {
  url: string;
  poster: string;
  title: string;
  live: boolean; // only one card runs its iframe at a time
};

/** Mounted only while its card is live, so each activation starts unloaded. */
function LiveFrame({ url, title, scale }: { url: string; title: string; scale: number }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <iframe
      src={url}
      title={`${title}, live`}
      className="preview-frame"
      data-loaded={loaded || undefined}
      width={SITE_W}
      height={SITE_H}
      style={{ transform: `scale(${scale})` }}
      tabIndex={-1}
      aria-hidden="true"
      onLoad={() => setLoaded(true)}
    />
  );
}

/** Poster by default; a scaled live iframe of the real site while the card is active. */
export default function LivePreview({ url, poster, title, live }: Props) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.3);

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / SITE_W));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={frameRef} className="preview">
      {/* eslint-disable-next-line @next/next/no-img-element -- poster sits under a live iframe at its native 16:10 */}
      <img src={poster} alt={`${title}, the opening screen`} className="preview-poster" loading="lazy" />
      {live && <LiveFrame url={url} title={title} scale={scale} />}
    </div>
  );
}
