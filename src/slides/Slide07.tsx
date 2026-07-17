import SlideShell from "../components/SlideShell";
import { Reveal, RItem } from "../components/motion";
import { useApp } from "../context";
import { content } from "../data/content";
import type { SlideProps } from "./types";

const tagColors = ["#065F46", "#0D9488", "#D97706"];

export default function Slide07({ n, total, active }: SlideProps) {
  const { lang } = useApp();
  const c = content.slide07;

  return (
    <SlideShell n={n} total={total} className="s07">
      <Reveal active={active} className="s07__wrap">
        <RItem className="center">
          <h2 className="section-title">{c.title[lang]}</h2>
          <span className="accent-line accent-line--center" />
        </RItem>

        <RItem>
          <p className="s07__text">{c.text[lang]}</p>
        </RItem>

        <RItem>
          <div className="s07__tags">
            {c.masterclasses.map((m, i) => (
              <span key={i} className="s07__tag" style={{ background: tagColors[i % 3] }}>
                <span>{m.icon}</span> {m[lang]}
              </span>
            ))}
          </div>
        </RItem>
      </Reveal>
    </SlideShell>
  );
}
