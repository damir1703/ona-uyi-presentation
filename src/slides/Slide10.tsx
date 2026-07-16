import { useState } from "react";
import { Home } from "lucide-react";
import SlideShell from "../components/SlideShell";
import UzbekistanMap from "../components/UzbekistanMap";
import { Reveal, RItem } from "../components/motion";
import { useApp } from "../context";
import { content, houses } from "../data/content";
import type { SlideProps } from "./types";

export default function Slide10({ n, total, active }: SlideProps) {
  const { lang } = useApp();
  const c = content.slide10;
  const [selected, setSelected] = useState<number | null>(1);

  return (
    <SlideShell n={n} total={total} dark className="s10">
      <Reveal active={active} className="s10__wrap">
        <RItem className="center">
          <h2 className="section-title section-title--light">{c.title[lang]}</h2>
        </RItem>

        <RItem className="s10__main">
          <div className="s10__map">
            <UzbekistanMap active={selected} onSelect={setSelected} />
          </div>

          <div className="s10__list">
            {houses.map((h) => (
              <button
                key={h.num}
                className={`house-pill${selected === h.num ? " house-pill--active" : ""}`}
                onClick={() => setSelected(selected === h.num ? null : h.num)}
              >
                <Home size={18} />
                <span className="house-pill__num">{h.num}</span>
                <span className="house-pill__city">{lang === "ru" ? h.city_ru : h.city_uz}</span>
              </button>
            ))}
          </div>
        </RItem>

        <RItem className="center">
          <span className="s10__total">{c.total[lang]}</span>
        </RItem>
      </Reveal>
    </SlideShell>
  );
}
