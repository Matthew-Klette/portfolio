import Reveal from "../Reveal";
import { SKILLS, TOOLS } from "@/data/profile";

const MID = Math.ceil(TOOLS.length / 2);
const ROWS = [TOOLS.slice(0, MID), TOOLS.slice(MID)];

function Track({ tools, hidden }: { tools: readonly (typeof TOOLS)[number][]; hidden?: boolean }) {
  return (
    <ul className="marquee-track" aria-hidden={hidden || undefined}>
      {tools.map((t) => (
        <li key={t.name} className="tool">
          <span className="tool-name">{t.name}</span>
          <span className="tool-detail">{t.detail}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Stack() {
  return (
    <section id="stack" className="section" aria-labelledby="stack-title">
      <header className="section-head">
        <p className="eyebrow">Stack</p>
        <h2 id="stack-title" className="heading">
          The tools I use to keep tracking <em>honest,</em> and builds fast.
        </h2>
      </header>
      <div className="marquee" aria-label="Tools">
        {ROWS.map((row, i) => (
          <div key={i} className={`marquee-row${i === 1 ? " marquee-row-reverse" : ""}`}>
            <Track tools={row} />
            <Track tools={row} hidden />
          </div>
        ))}
      </div>
      <div className="skills">
        {SKILLS.map((cat, i) => (
          <Reveal key={cat.title} delay={(i % 4) * 60}>
            <div className="skill">
              <h3 className="skill-title">{cat.title}</h3>
              <ul className="skill-list">
                {cat.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
