import { Home, X } from "lucide-react";
import { useApp } from "../context";
import { houses } from "../data/content";
import { OUTLINE_PATH, MAP_W, MAP_H, project } from "../data/uzbekistan";

interface Props {
  active: number | null;
  onSelect: (num: number | null) => void;
}

export default function UzbekistanMap({ active, onSelect }: Props) {
  const { lang, exportMode } = useApp();

  return (
    <div className="map-stage" style={{ aspectRatio: `${MAP_W} / ${MAP_H}` }}>
      <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} preserveAspectRatio="xMidYMid meet" className="map-svg">
        <defs>
          <linearGradient id="uzFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#0D9488" />
          </linearGradient>
        </defs>
        <path
          d={OUTLINE_PATH}
          fill="url(#uzFill)"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth={1.5}
          strokeLinejoin="round"
        />
      </svg>

      <div className="map-overlay">
        {houses.map((h) => {
          const { x, y } = project(h.lng, h.lat);
          const left = (x / MAP_W) * 100;
          const top = (y / MAP_H) * 100;
          const isActive = active === h.num;
          return (
            <div
              key={h.num}
              className={`marker${isActive ? " marker--active" : ""}`}
              style={{ left: `${left}%`, top: `${top}%` }}
              onClick={() => onSelect(isActive ? null : h.num)}
              role="button"
              tabIndex={0}
              aria-label={h.city_ru}
            >
              {!exportMode && <span className="marker__ping" />}
              <span className="marker__pin">
                <span className="marker__num">{h.num}</span>
              </span>
              <span className="marker__tail" />

              {isActive && (
                <div className="map-popup" onClick={(e) => e.stopPropagation()}>
                  <div className="map-popup__head">
                    <span className="map-popup__badge">{h.num}</span>
                    <strong>{lang === "ru" ? h.city_ru : h.city_uz}</strong>
                    {!exportMode && (
                      <button
                        className="map-popup__close"
                        aria-label="Закрыть"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelect(null);
                        }}
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>
                  <div className="map-popup__body">
                    <Home size={15} />
                    <span>{lang === "ru" ? h.desc_ru : h.desc_uz}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
