import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: string[];
  index: number | null;
  setIndex: (i: number | null) => void;
}

export default function Lightbox({ images, index, setIndex }: Props) {
  const close = useCallback(() => setIndex(null), [setIndex]);
  const prev = useCallback(
    () => setIndex(index === null ? null : (index - 1 + images.length) % images.length),
    [index, images.length, setIndex]
  );
  const next = useCallback(
    () => setIndex(index === null ? null : (index + 1) % images.length),
    [index, images.length, setIndex]
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, close, prev, next]);

  if (index === null) return null;

  return (
    <div className="lightbox" onClick={close}>
      <button className="lightbox__close" aria-label="Закрыть" onClick={close}>
        <X size={26} />
      </button>
      {images.length > 1 && (
        <button
          className="lightbox__nav lightbox__nav--prev"
          aria-label="Назад"
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
        >
          <ChevronLeft size={30} />
        </button>
      )}
      <img src={images[index]} alt="" className="lightbox__img" onClick={(e) => e.stopPropagation()} />
      {images.length > 1 && (
        <button
          className="lightbox__nav lightbox__nav--next"
          aria-label="Вперёд"
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
        >
          <ChevronRight size={30} />
        </button>
      )}
    </div>
  );
}
