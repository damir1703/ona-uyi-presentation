import SlideShell from "../components/SlideShell";
import PhotoUpload from "../components/PhotoUpload";
import { Reveal, RItem } from "../components/motion";
import { useApp } from "../context";
import { content } from "../data/content";
import type { SlideProps } from "./types";

export default function Slide02({ n, total, active }: SlideProps) {
  const { lang } = useApp();
  const c = content.slide02;
  return (
    <SlideShell n={n} total={total} className="s02">
      <Reveal active={active} className="s02__wrap">
        <RItem className="s02__banner">
          <p>{c.banner[lang]}</p>
          <span className="s02__date-badge">{c.date[lang]}</span>
        </RItem>

        <RItem className="s02__photos">
          <div className="s02__photo">
            <PhotoUpload id="s02_a" label={c.photo1[lang]} />
          </div>
          <div className="s02__photo">
            <PhotoUpload id="s02_b" label={c.photo2[lang]} />
          </div>
        </RItem>

        <RItem className="s02__pill-wrap">
          <span className="pill pill--lg" style={{ background: "#064E3B" }}>
            {c.date[lang]}
          </span>
        </RItem>
      </Reveal>
    </SlideShell>
  );
}
