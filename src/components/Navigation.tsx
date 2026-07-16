import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  index: number;
  total: number;
  go: (i: number) => void;
}

export default function Navigation({ index, total, go }: Props) {
  return (
    <>
      <div className="progress" style={{ width: `${((index + 1) / total) * 100}%` }} />

      <button
        className="nav-arrow nav-arrow--left"
        aria-label="Предыдущий слайд"
        disabled={index === 0}
        onClick={() => go(index - 1)}
      >
        <ChevronLeft size={26} />
      </button>
      <button
        className="nav-arrow nav-arrow--right"
        aria-label="Следующий слайд"
        disabled={index === total - 1}
        onClick={() => go(index + 1)}
      >
        <ChevronRight size={26} />
      </button>

      <div className="dots">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            className={`dot${i === index ? " dot--active" : ""}`}
            aria-label={`Слайд ${i + 1}`}
            aria-current={i === index}
            onClick={() => go(i)}
          />
        ))}
      </div>
    </>
  );
}
