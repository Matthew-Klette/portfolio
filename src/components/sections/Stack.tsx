import Reveal from "../Reveal";
import { SKILLS } from "@/data/profile";

export default function Stack() {
  return (
    <section id="stack" className="section" aria-labelledby="stack-title">
      <header className="section-head">
        <p className="eyebrow">Stack</p>
        <h2 id="stack-title" className="heading">
          The tools I use to keep tracking <em>honest,</em> and builds fast.
        </h2>
      </header>
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
