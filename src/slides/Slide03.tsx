import SlideShell from "../components/SlideShell";
import PhotoUpload from "../components/PhotoUpload";
import { Reveal, RItem } from "../components/motion";
import { useApp } from "../context";
import { content } from "../data/content";
import type { SlideProps } from "./types";

export default function Slide03({ n, total, active }: SlideProps) {
  const { lang, house } = useApp();
  const c = content.slide03;
  const photoId = (i: number) => (house === "quvosoy" ? `s03q_${i}` : `s03_${i}`);
  return (
    <SlideShell n={n} total={total} className="s03">
      <Reveal active={active} className="s03__wrap">
        <RItem className="center">
          <h2 className="section-title">{c.title[lang]}</h2>
          <span className="accent-line accent-line--center" />
        </RItem>

        <RItem className="s03__circles">
          {c.categories.map((cat, i) => (
            <div className="s03__cat" key={i}>
              <div className="s03__circle">
                <PhotoUpload id={photoId(i)} shape="circle" />
                <span className="s03__cat-icon">{cat.icon}</span>
              </div>
              <h3>{cat.title[lang]}</h3>
              <p>{cat.sub[lang]}</p>
            </div>
          ))}
        </RItem>
      </Reveal>

      <div className="s03__criteria">
        {c.criteria.map((cr, i) => (
          <div className="s03__crit" key={i}>
            <span className="s03__crit-icon">{cr.icon}</span>
            <span>{cr[lang]}</span>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
