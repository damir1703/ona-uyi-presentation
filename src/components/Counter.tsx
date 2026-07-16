import { useEffect, useRef, useState } from "react";
import { useApp } from "../context";

interface Props {
  end: number;
  active: boolean;
  duration?: number; // сек
}

// CountUp от 0 при появлении слайда, easeOut. В режиме экспорта — сразу финал.
export default function Counter({ end, active, duration = 2 }: Props) {
  const { exportMode } = useApp();
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);
  const doneRef = useRef(false);

  useEffect(() => {
    if (exportMode) {
      setValue(end);
      return;
    }
    if (!active) {
      // сброс, чтобы при повторном заходе снова анимировалось
      doneRef.current = false;
      setValue(0);
      return;
    }
    if (doneRef.current) {
      setValue(end);
      return;
    }
    let start: number | null = null;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setValue(Math.round(end * eased));
      if (p < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        doneRef.current = true;
      }
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active, end, duration, exportMode]);

  return <>{value.toLocaleString("ru-RU")}</>;
}
