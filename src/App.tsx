import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Navigation from "./components/Navigation";
import { useApp } from "./context";
import Slide01 from "./slides/Slide01";
import Slide02 from "./slides/Slide02";
import Slide03 from "./slides/Slide03";
import Slide04 from "./slides/Slide04";
import Slide05 from "./slides/Slide05";
import Slide06 from "./slides/Slide06";
import Slide07 from "./slides/Slide07";
import Slide08 from "./slides/Slide08";
import Slide09 from "./slides/Slide09";
import Slide10 from "./slides/Slide10";
import Slide11 from "./slides/Slide11";
import type { SlideProps } from "./slides/types";

const SLIDES: React.ComponentType<SlideProps>[] = [
  Slide01, Slide02, Slide03, Slide04, Slide05, Slide06,
  Slide07, Slide08, Slide09, Slide10, Slide11,
];
const TOTAL = SLIDES.length;
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function App() {
  const { setExportMode } = useApp();
  const [index, setIndex] = useState(0);
  const [exporting, setExporting] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);

  const go = useCallback((i: number) => {
    setIndex((prev) => {
      const target = typeof i === "number" ? i : prev;
      return Math.max(0, Math.min(TOTAL - 1, target));
    });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (exporting) return;
      if (e.key === "ArrowRight") go(index + 1);
      else if (e.key === "ArrowLeft") go(index - 1);
      else if (e.key.toLowerCase() === "f") {
        if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
        else document.exitFullscreen?.();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, go, exporting]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 60) go(index + (dx < 0 ? 1 : -1));
    touchX.current = null;
  };

  const exportPDF = useCallback(async () => {
    if (exporting) return;
    setExporting(true);
    setExportMode(true);
    document.body.classList.add("exporting");
    const restore = index;
    try {
      const [{ jsPDF }, html2canvas] = await Promise.all([
        import("jspdf"),
        import("html2canvas").then((m) => m.default),
      ]);
      await sleep(400);
      const slideEls = stageRef.current!.querySelectorAll<HTMLElement>(".slide");
      const shots: HTMLCanvasElement[] = [];
      for (let i = 0; i < TOTAL; i++) {
        setIndex(i);
        await sleep(430);
        const canvas = await html2canvas(slideEls[i], {
          scale: 2,
          useCORS: true,
          backgroundColor: "#FAFAF7",
          logging: false,
        });
        shots.push(canvas);
      }
      const first = shots[0];
      const orient = first.width >= first.height ? "landscape" : "portrait";
      const pdf = new jsPDF({ orientation: orient, unit: "px", format: [first.width, first.height] });
      shots.forEach((cv, i) => {
        const o = cv.width >= cv.height ? "landscape" : "portrait";
        if (i > 0) pdf.addPage([cv.width, cv.height], o);
        pdf.addImage(cv.toDataURL("image/jpeg", 0.92), "JPEG", 0, 0, cv.width, cv.height);
      });
      pdf.save("OnaUyi_Presentation.pdf");
    } catch (err) {
      console.error("PDF export failed", err);
      alert("Не удалось собрать PDF. Подробности в консоли.");
    } finally {
      document.body.classList.remove("exporting");
      setExportMode(false);
      setExporting(false);
      setIndex(restore);
    }
  }, [exporting, index, setExportMode]);

  return (
    <div className="app">
      <Navbar onExport={exportPDF} exporting={exporting} />

      <div className="stage" ref={stageRef} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        {SLIDES.map((Slide, i) => (
          <div
            key={i}
            className={`slide-holder${i === index ? " is-active" : ""}`}
            aria-hidden={i !== index}
          >
            <Slide n={i + 1} total={TOTAL} active={i === index} />
          </div>
        ))}
      </div>

      {!exporting && <Navigation index={index} total={TOTAL} go={go} />}

      <AnimatePresence>
        {exporting && (
          <motion.div
            className="export-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="export-overlay__card">
              <span className="export-overlay__spinner" />
              <p>Собираем PDF…</p>
              <span className="export-overlay__hint">
                {index + 1} / {TOTAL}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
