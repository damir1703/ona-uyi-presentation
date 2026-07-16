import SlideShell from "../components/SlideShell";
import { Reveal, RItem } from "../components/motion";
import { useApp } from "../context";
import { content } from "../data/content";
import type { SlideProps } from "./types";

export default function Slide11({ n, total, active }: SlideProps) {
  const { lang } = useApp();
  const c = content.slide11;
  return (
    <SlideShell n={n} total={total} dark className="s11">
      <span className="s11__topline" />
      <div className="s11__halo" aria-hidden>
        <span className="s11__halo-outer" />
        <span className="s11__halo-inner" />
        <span className="s11__halo-heart">💚</span>
      </div>

      <Reveal active={active} className="s11__content">
        <RItem>
          <span className="tag tag--ghost">{c.tag}</span>
        </RItem>
        <RItem>
          <p className="s11__line1">{c.line1[lang]}</p>
        </RItem>
        <RItem>
          <h2 className="s11__slogan">{c.slogan[lang]}</h2>
        </RItem>
        <RItem>
          <div className="s11__stats">
            {c.stats.map((s, i) => (
              <div className="s11__stat" key={i}>
                <span className="s11__stat-icon">{s.icon}</span>
                <span className="s11__stat-value">{s.value}</span>
                <span className="s11__stat-label">{s[lang]}</span>
              </div>
            ))}
          </div>
        </RItem>
        <RItem>
          <button className="s11__cta">{c.cta[lang]}</button>
        </RItem>
      </Reveal>
    </SlideShell>
  );
}
