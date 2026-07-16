import SlideShell from "../components/SlideShell";
import Counter from "../components/Counter";
import { Reveal, RItem } from "../components/motion";
import { useApp } from "../context";
import { content } from "../data/content";
import type { SlideProps } from "./types";

export default function Slide05({ n, total, active }: SlideProps) {
  const { lang } = useApp();
  const c = content.slide05;
  return (
    <SlideShell n={n} total={total} dark className="s05">
      <Reveal active={active} className="s05__wrap">
        <RItem className="center">
          <h2 className="section-title section-title--light">{c.title[lang]}</h2>
        </RItem>
        <RItem className="center">
          <span className="badge-soft">{c.period[lang]}</span>
        </RItem>

        <RItem className="s05__big">
          {c.stats_big.map((s, i) => (
            <div className="s05__card" key={i} style={{ background: s.grad }}>
              <span className="s05__num">
                <Counter end={s.num} active={active} />
              </span>
              <span className="s05__label">{s[lang]}</span>
            </div>
          ))}
        </RItem>

        <RItem className="s05__small">
          {c.stats_small.map((s, i) => (
            <div
              className="s05__scard"
              key={i}
              style={{ background: s.tint, border: `1px solid ${s.border}` }}
            >
              <span className="s05__snum">
                <Counter end={s.num} active={active} duration={1.4} />
              </span>
              <span className="s05__slabel">{s[lang]}</span>
            </div>
          ))}
        </RItem>
      </Reveal>
    </SlideShell>
  );
}
