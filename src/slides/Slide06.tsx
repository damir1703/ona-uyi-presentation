import SlideShell from "../components/SlideShell";
import Counter from "../components/Counter";
import { Reveal, RItem } from "../components/motion";
import { useApp } from "../context";
import { content } from "../data/content";
import type { SlideProps } from "./types";

export default function Slide06({ n, total, active }: SlideProps) {
  const { lang } = useApp();
  const c = content.slide06;
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

          <RItem className="s06__geo s06__side">
            <div className="s06__side-block">
              <h3 className="s06__geo-title">📋 {c.catTitle[lang]}</h3>
              <ul>
                {c.categories.map((r, i) => {
                  const max = Math.max(...c.categories.map((x) => x.count), 1);
                  return (
                    <li key={i}>
                      <span className="s06__geo-name s06__geo-name--wide">{r[lang]}</span>
                      <span className="s06__geo-track">
                        <span className="s06__geo-fill" style={{ width: active ? `${(r.count / max) * 100}%` : 0 }} />
                      </span>
                      <span className="s06__geo-count">{r.count}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="s06__side-block">
              <h3 className="s06__geo-title">🗺 {c.geoTitle[lang]}</h3>
              <ul>
                {c.regions.map((r, i) => {
                  const max = Math.max(...c.regions.map((x) => x.count));
                  return (
                    <li key={i}>
                      <span className="s06__geo-name">{r[lang]}</span>
                      <span className="s06__geo-track">
                        <span className="s06__geo-fill" style={{ width: active ? `${(r.count / max) * 100}%` : 0 }} />
                      </span>
                      <span className="s06__geo-count">{r.count}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </RItem>
        </div>
      </Reveal>
    </SlideShell>
  );
}
