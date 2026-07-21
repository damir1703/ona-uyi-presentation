import SlideShell from "../components/SlideShell";
import PhotoUpload from "../components/PhotoUpload";
import { Reveal, RItem } from "../components/motion";
import { useApp } from "../context";
import { content } from "../data/content";
import type { SlideProps } from "./types";

export default function Slide04({ n, total, active }: SlideProps) {
  const { lang, house } = useApp();
  const c = content.slide04;
  const photoId = house === "quvosoy" ? "s04_photo_q" : "s04_photo";
  return (
    <SlideShell n={n} total={total} className="s04">
      <div className="s04__grid">
        <Reveal active={active} className="s04__left">
          <RItem>
            <h2 className="section-title section-title--left">{c.title[lang]}</h2>
          </RItem>
          <RItem>
            <p className="s04__t1">{c.text1[lang]}</p>
          </RItem>
          <RItem>
            <p className="s04__t2">{c.text2[lang]}</p>
          </RItem>
          <RItem>
            <div className="s04__photo">
              <PhotoUpload id={photoId} shape="circle" ring="#10B981" />
            </div>
          </RItem>
        </Reveal>

        <Reveal active={active} className="s04__cards">
          {c.services.map((s, i) => (
            <RItem key={i} className="s04__card" style={{ background: s.color }}>
              <span className="s04__card-icon">{s.icon}</span>
              <span className="s04__card-text">{s[lang]}</span>
            </RItem>
          ))}
        </Reveal>
      </div>
    </SlideShell>
  );
}
