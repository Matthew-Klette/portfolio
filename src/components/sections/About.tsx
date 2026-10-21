import Reveal from "../Reveal";
import { ABOUT, EDUCATION, ROLE } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="about-intro">
        <p className="eyebrow">About</p>
        <h2 id="about-title" className="heading">
          Independent, remote, <em>built for outcomes.</em>
        </h2>
        <div className="about-copy">
          {ABOUT.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </div>

      <ol className="timeline">
        <li>
          <Reveal>
            <article className="timeline-card">
              <p className="timeline-date">{ROLE.dates}</p>
              <h3 className="timeline-title">{ROLE.title}</h3>
              <p className="timeline-org">{ROLE.org}</p>
              <p className="timeline-text">{ROLE.summary}</p>
              <details className="scope">
                <summary>What the work covers ({ROLE.scope.length} areas)</summary>
                <ol className="scope-list">
                  {ROLE.scope.map((s) => (
                    <li key={s.title}>
                      <h4>{s.title}</h4>
                      <p>{s.description}</p>
                    </li>
                  ))}
                </ol>
              </details>
            </article>
          </Reveal>
        </li>
        <li>
          <Reveal>
            <article className="timeline-card">
              <p className="timeline-date">Education</p>
              <h3 className="timeline-title">{EDUCATION.school}</h3>
              <p className="timeline-org">{EDUCATION.formerly}</p>
              <ul className="quals">
                {EDUCATION.qualifications.map((q) => (
                  <li key={q.title}>
                    <span>{q.title}</span>
                    <span className="quals-detail">{q.detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </li>
      </ol>
    </section>
  );
}
