import SlideShell from "../components/SlideShell";
import PhotoUpload from "../components/PhotoUpload";
import { Reveal, RItem } from "../components/motion";
import { useApp } from "../context";
import { content } from "../data/content";
import type { SlideProps } from "./types";

export default function SlideQuvosoyIntro({ n, total, active }: SlideProps) {
  const { lang } = useApp();
  const c = content.quvosoyIntro;
  return (
    <SlideShell n={n} total={total} className="qintro">
      <div className="qintro__grid">
        <Reveal active={active} className="qintro__left">
          <RItem>
            <span className="tag tag--soft">{c.tag[lang]}</span>
          </RItem>
          <RItem>
            <h1 className="qintro__title">{c.title[lang]}</h1>
          </RItem>
          <RItem>
            <h2 className="qintro__sub">{c.sub[lang]}</h2>
          </RItem>
          <RItem>
            <span className="accent-line" />
          </RItem>
          <RItem>
            <p className="qintro__desc">{c.desc[lang]}</p>
          </RItem>
          <RItem>
            <ul className="qintro__facts">
              {c.facts.map((f, i) => (
                <li key={i}>
                  <span className="qintro__fact-icon">{f.icon}</span>
                  <span>{f[lang]}</span>
                </li>
              ))}
            </ul>
          </RItem>
        </Reveal>

        <Reveal active={active} className="qintro__photos">
          <RItem className="qintro__photo qintro__photo--big">
            <PhotoUpload id="s_quvosoy_1" />
          </RItem>
          <RItem className="qintro__photo">
            <PhotoUpload id="s_quvosoy_2" />
          </RItem>
        </Reveal>
      </div>
    </SlideShell>
  );
}
