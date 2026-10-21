"use client";

import { useEffect, useState } from "react";
import { makeEvent, seeded, type StreamEvent } from "./streamModel";

const ROWS = 22;
const TICK_MS = 900;
const START_CLOCK = 9 * 3_600_000 + 41 * 60_000; // 09:41, a fixed fictional morning

const STATUS_LABEL = { sent: "✓", dedup: "✓ dedup", modeled: "modeled", blocked: "held" } as const;

/** Seeded, so server and client render the same first rows. */
function createStream() {
  const r = seeded(20241201);
  let clock = START_CLOCK;
  let id = 0;
  return () => {
    clock += 120 + r() * 1400;
    return makeEvent(id++, clock, r);
  };
}

/** The analytics door's backdrop: a live-looking tag log. */
export default function EventStream({ reduced }: { reduced: boolean }) {
  const [next] = useState(createStream);
  const [rows, setRows] = useState<StreamEvent[]>(() => Array.from({ length: ROWS }, next).reverse());

  useEffect(() => {
    if (reduced) return;
    const timer = window.setInterval(() => setRows((prev) => [next(), ...prev.slice(0, ROWS - 1)]), TICK_MS);
    return () => window.clearInterval(timer);
  }, [reduced, next]);

  return (
    <ol className="stream" aria-hidden="true">
      {rows.map((e) => (
        <li key={e.id} className="stream-row" data-name={e.name}>
          <span className="stream-time">{e.time}</span>
          <span className="stream-name">{e.name}</span>
          <span className="stream-detail">{e.detail}</span>
          <span className="stream-consent" data-consent={e.consent}>
            ads {e.consent}
          </span>
          <span className="stream-routes">
            {e.routes.map((rt) => (
              <span key={rt.to} data-status={rt.status}>
                {rt.to} {STATUS_LABEL[rt.status]}
              </span>
            ))}
          </span>
        </li>
      ))}
    </ol>
  );
}
