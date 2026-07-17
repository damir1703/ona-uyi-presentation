import { useRef, useState } from "react";
import { Camera, X } from "lucide-react";
import { useApp } from "../context";
import { content } from "../data/content";
import { defaultPhotos } from "../data/defaults";

interface Props {
  id: string;
  shape?: "rect" | "circle";
  compact?: boolean; // для мелких ячеек сетки
  label?: string; // подпись-оверлей (напр. «Официальная церемония»)
  ring?: string; // цвет emerald-кольца для круглых фото
}

const MAX_BYTES = 10 * 1024 * 1024;

export default function PhotoUpload({ id, shape = "rect", compact = false, label, ring }: Props) {
  const { lang, photos, setPhoto, removePhoto, exportMode } = useApp();
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);
  const uploaded = photos[id];
  const src = uploaded || defaultPhotos[id];

  const radius = shape === "circle" ? "50%" : compact ? 12 : 20;

  const handleFile = (file?: File | null) => {
    if (!file) return;
    if (!/^image\/(jpeg|png|webp|jpg)$/.test(file.type)) {
      alert(lang === "ru" ? "Только JPG, PNG или WEBP" : "Faqat JPG, PNG yoki WEBP");
      return;
    }
    if (file.size > MAX_BYTES) {
      alert(lang === "ru" ? "Файл больше 10 МБ" : "Fayl 10 MB dan katta");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setPhoto(id, reader.result as string);
    reader.readAsDataURL(file);
  };

  const ringStyle =
    shape === "circle" && ring
      ? { boxShadow: `0 0 0 6px ${ring}, 0 16px 48px rgba(6,95,70,0.2)` }
      : undefined;

  if (src) {
    return (
      <div className="photo photo--filled" style={{ borderRadius: radius, ...ringStyle }}>
        <img src={src} alt="" style={{ borderRadius: radius }} />
        {label && <div className="photo__caption">{label}</div>}
        {!exportMode && uploaded && (
          <button
            className="photo__remove"
            aria-label="Удалить фото"
            onClick={(e) => {
              e.stopPropagation();
              removePhoto(id);
            }}
          >
            <X size={16} />
          </button>
        )}
      </div>
    );
  }

  // Пустой плейсхолдер. В режиме экспорта — просто мягкий блок без пунктира.
  return (
    <div
      className={`photo photo--empty${dragOver ? " photo--drag" : ""}${
        exportMode ? " photo--export" : ""
      }`}
      style={{ borderRadius: radius }}
      onClick={() => !exportMode && inputRef.current?.click()}
      onDragOver={(e) => {
        e.preventDefault();
        setDragOver(true);
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragOver(false);
        handleFile(e.dataTransfer.files?.[0]);
      }}
      role="button"
      tabIndex={exportMode ? -1 : 0}
    >
      {!exportMode && (
        <>
          <Camera size={compact ? 20 : 34} strokeWidth={1.6} />
          {!compact && <span>{content.meta.upload[lang]}</span>}
          {compact && <span className="photo__mini">{content.meta.uploadGrid[lang]}</span>}
        </>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        hidden
        onChange={(e) => handleFile(e.target.files?.[0])}
      />
    </div>
  );
}
