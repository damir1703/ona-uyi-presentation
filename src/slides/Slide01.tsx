import SlideShell from "../components/SlideShell";
import PhotoUpload from "../components/PhotoUpload";
import { Reveal, RItem } from "../components/motion";
import { useApp } from "../context";
import { content } from "../data/content";
import type { SlideProps } from "./types";

export default function Slide01({ n, total, active }: SlideProps) {
  const { lang, house } = useApp();
  const c = content.slide01;
  const sub =
    house === "quvosoy"
      ? { ru: "Дом Кувасой, Ферганская долина", uz: "Quvasoy uyi, Farg'ona vodiysi" }[lang]
      : c.sub[lang];
  const heroId = house === "quvosoy" ? "s01_hero_quvosoy" : "s01_hero";
  const desc =
    house === "quvosoy"
      ? {
          ru: "Ресурсный центр помощи мамам с детьми в трудной жизненной ситуации в Ферганской долине. Открыт 9 сентября 2025 года.",
          uz: "Farg'ona vodiysidagi qiyin vaziyatdagi onalar va bolalarga yordam markazi. 2025-yil 9-sentabrda ochildi.",
        }[lang]
      : c.desc[lang];
  return (
    <SlideShell n={n} total={total} className="s01">
      <div className="s01__grid">
        <Reveal active={active} className="s01__left">
          <RItem>
            <span className="tag tag--soft">{c.tag[lang]}</span>
          </RItem>
          <RItem>
            <h1 className="s01__title">{c.title}</h1>
          </RItem>
          <RItem>
            <h2 className="s01__sub">{sub}</h2>
          </RItem>
          <RItem>
            <span className="accent-line" />
          </RItem>
          <RItem>
            <p className="s01__desc">{desc}</p>
          </RItem>
          <RItem>
            <div className="s01__stats">
              {c.stats.map((s, i) => (
                <span key={i} className="pill" style={{ background: s.color }}>
                  {s[lang]}
                </span>
              ))}
            </div>
          </RItem>
        </Reveal>

        <div className="s01__right">
          <div className="circle circle--big float">
            <PhotoUpload id={heroId} shape="circle" />
          </div>
          <div className="circle circle--mid">
            <span className="circle__icon">🏠</span>
          </div>
          <span className="circle__label">{c.housesLabel[lang]}</span>
          <div className="circle circle--small float float--delay">
            <span className="circle__icon">💚</span>
          </div>
        </div>
      </div>

      <div className="s01__footer">
        <span>ONA.UYI.UZ</span>
        <span className="s01__footer-mid">{c.footer[lang]} 💚</span>
        <span className="s01__footer-tag">@ONA.UYI.UZ</span>
      </div>
    </SlideShell>
  );
}
