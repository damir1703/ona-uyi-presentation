import { useState } from "react";
import { Search } from "lucide-react";
import SlideShell from "../components/SlideShell";
import PhotoUpload from "../components/PhotoUpload";
import Lightbox from "../components/Lightbox";
import { Reveal, RItem } from "../components/motion";
import { useApp } from "../context";
import { content } from "../data/content";
import type { SlideProps } from "./types";

const tagColors = ["#065F46", "#0D9488", "#D97706"];
const GRID_IDS = Array.from({ length: 9 }, (_, i) => `s07_${i}`);

export default function Slide07({ n, total, active }: SlideProps) {
  const { lang, photos, exportMode } = useApp();
  const c = content.slide07;
  const [lbIndex, setLbIndex] = useState<number | null>(null);

  const filledImages = GRID_IDS.map((id) => photos[id]).filter(Boolean) as string[];

  const openLightbox = (cellId: string) => {
    if (!photos[cellId] || exportMode) return;
    const idx = GRID_IDS.filter((id, i) => photos[id] && GRID_IDS.indexOf(cellId) >= i).length - 1;
    setLbIndex(Math.max(0, idx));
  };

  return (
    <SlideShell n={n} total={total} className="s07">
      <div className="s07__grid">
        <Reveal active={active} className="s07__left">
          <RItem>
            <h2 className="section-title section-title--left">{c.title[lang]}</h2>
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

        <Reveal active={active} className="s07__photos">
          {GRID_IDS.map((id) => (
            <div
              key={id}
              className="s07__cell"
              onClick={() => openLightbox(id)}
              style={{ cursor: photos[id] && !exportMode ? "zoom-in" : undefined }}
            >
              <PhotoUpload id={id} compact />
              {photos[id] && !exportMode && (
                <span className="s07__zoom">
                  <Search size={18} />
                </span>
              )}
            </div>
          ))}
        </Reveal>
      </div>

      <Lightbox images={filledImages} index={lbIndex} setIndex={setLbIndex} />
    </SlideShell>
  );
}
