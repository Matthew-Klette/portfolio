"use client";

import type { Build } from "@/data/builds";
import { formatMonth } from "@/lib/filter";
import LivePreview from "./LivePreview";

type Props = {
  build: Build;
  index: number;
  live: boolean;
  onActivate: (slug: string | null) => void;
};

const host = (url: string) => new URL(url).host;

export default function BuildCard({ build, index, live, onActivate }: Props) {
  const activate = () => onActivate(build.slug);
  const deactivate = () => onActivate(null);

  return (
    <article
      className="card"
      aria-labelledby={`${build.slug}-title`}
      onPointerEnter={(e) => e.pointerType === "mouse" && activate()}
      onPointerLeave={(e) => e.pointerType === "mouse" && deactivate()}
    >
      <a
        href={build.url}
        target="_blank"
        rel="noopener noreferrer"
        className="card-window"
        onFocus={activate}
        onBlur={deactivate}
        aria-label={`Open ${build.title} in a new tab`}
      >
        <span className="card-chrome" aria-hidden="true">
          <span className="card-dots">
            <i />
            <i />
            <i />
          </span>
          <span className="card-host">{host(build.url)}</span>
          <span className="card-live">
            <span className="status-dot" />
            {live ? "Live preview" : "Live"}
          </span>
        </span>
        <LivePreview url={build.url} poster={build.shots[0]} title={build.title} live={live} />
      </a>
      <div className="card-body">
        <p className="card-meta">
          <span className="badge-pill">{build.kind}</span>
          <span className="card-num">
            /{String(index + 1).padStart(2, "0")} · {formatMonth(build.date)}
          </span>
        </p>
        <h3 id={`${build.slug}-title`} className="card-title">
          {build.title}
        </h3>
        <p className="card-desc">{build.description}</p>
        <ul className="card-stack" aria-label="Built with">
          {build.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <div className="card-actions">
          <a href={build.url} target="_blank" rel="noopener noreferrer" className="button-ghost">
            Open site <span aria-hidden="true">↗</span>
          </a>
          {build.repo && (
            <a href={build.repo} target="_blank" rel="noopener noreferrer" className="card-source">
              Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
