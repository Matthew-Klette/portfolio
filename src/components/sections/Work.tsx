import Reveal from "../Reveal";
import { CASE_STUDIES, OTHER_WORK, SERVICES } from "@/data/profile";

export default function Work() {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <header className="section-head">
        <p className="eyebrow">Analytics engineering</p>
        <h2 id="work-title" className="heading">
          Tracking, consent and automation, <em>end to end.</em>
        </h2>
        <p className="lede">What I set up, and what you get from it.</p>
      </header>

      <ol className="services">
        {SERVICES.map((s, i) => (
          <li key={s.title} className="service">
            <Reveal delay={(i % 3) * 70}>
              <span className="service-num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-text">{s.outcome}</p>
            </Reveal>
          </li>
        ))}
      </ol>

      <p className="eyebrow work-sub">Case studies from recent engagements</p>
      <div className="cases">
        {CASE_STUDIES.map((cs, i) => (
          <Reveal key={cs.title}>
            <article className="case" aria-labelledby={`case-${i}`}>
              <div className="case-side">
                <span className="badge-pill">{cs.tag}</span>
                <h3 id={`case-${i}`} className="case-title">
                  {cs.title}
                </h3>
                <span className="case-num">/{String(i + 1).padStart(2, "0")}</span>
                {cs.stats && (
                  <dl className="case-stats">
                    {cs.stats.map((st) => (
                      <div key={st.label}>
                        <dt>{st.value}</dt>
                        <dd>{st.label}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </div>
              <dl className="case-body">
                <div>
                  <dt>Problem</dt>
                  <dd>{cs.problem}</dd>
                </div>
                <div>
                  <dt>Approach</dt>
                  <dd>{cs.approach}</dd>
                </div>
                <div>
                  <dt>Outcome</dt>
                  <dd>
                    <ul className="case-outcomes">
                      {cs.outcomes.map((o) => (
                        <li key={o}>{o}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </article>
          </Reveal>
        ))}
      </div>

      <p className="other-work">
        <span className="other-work-label">Other work</span>
        <span>{OTHER_WORK.text}</span>
        {OTHER_WORK.links.map((l) => (
          <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
            {l.label} <span aria-hidden="true">↗</span>
          </a>
        ))}
      </p>
    </section>
  );
}
