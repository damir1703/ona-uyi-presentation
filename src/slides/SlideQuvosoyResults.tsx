import SlideShell from "../components/SlideShell";
import Counter from "../components/Counter";
import { Reveal, RItem } from "../components/motion";
import { useApp } from "../context";
import { content } from "../data/content";
import type { SlideProps } from "./types";

export default function SlideQuvosoyResults({ n, total, active }: SlideProps) {
  const { lang } = useApp();
  const c = content.quvosoyResults;
  return (
    <SlideShell n={n} total={total} className="s06">
      <Reveal active={active} className="s06__wrap">
        <RItem className="s06__head">
          <h2 className="section-title section-title--left">{c.title[lang]}</h2>
          <span className="badge-outline">{c.badge[lang]}</span>
        </RItem>

        <div className="s06__grid">
          <RItem className="s06__cards">
            {c.achievements.map((a, i) => (
              <div className="s06__card" key={i} style={{ "--accent": a.color } as React.CSSProperties}>
                <span className="s06__bar" />
                <span className="s06__icon">{a.icon}</span>
                <div className="s06__meta">
                  <span className="s06__num">
                    <Counter end={a.num} active={active} duration={1.6} />
                  </span>
                  <span className="s06__label">{a[lang]}</span>
                </div>
              </div>
            ))}
          </RItem>

          <RItem className="s06__geo">
            <h3 className="s06__geo-title">🏥 {c.medTitle[lang]}</h3>
            <ul className="qmed">
              {c.med.map((m, i) => (
                <li key={i}>
                  <span className="qmed__icon">{m.icon}</span>
                  <span className="qmed__text">{m[lang]}</span>
                </li>
              ))}
            </ul>
          </RItem>
        </div>
      </Reveal>
    </SlideShell>
  );
}
