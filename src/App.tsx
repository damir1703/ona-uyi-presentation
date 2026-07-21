import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Navigation from "./components/Navigation";
import HouseChooser from "./components/HouseChooser";
import { useApp } from "./context";
import type { House } from "./data/finance";
import type { SlideProps } from "./slides/types";
import Slide01 from "./slides/Slide01";
import Slide02 from "./slides/Slide02";
import Slide03 from "./slides/Slide03";
import Slide04 from "./slides/Slide04";
import Slide05 from "./slides/Slide05";
import Slide06 from "./slides/Slide06";
import Slide07 from "./slides/Slide07";
import Slide08 from "./slides/Slide08";
import Slide09 from "./slides/Slide09";
import SlideMadina from "./slides/SlideMadina";
import Slide10 from "./slides/Slide10";
import Slide11 from "./slides/Slide11";
import FinanceSlide from "./slides/FinanceSlide";
import FinanceDetailSlide from "./slides/FinanceDetailSlide";
import SlideQuvosoyIntro from "./slides/SlideQuvosoyIntro";
import SlideQuvosoyResults from "./slides/SlideQuvosoyResults";
import SlideNigora from "./slides/SlideNigora";
import SlideMahliyo from "./slides/SlideMahliyo";
import SlideNargiza from "./slides/SlideNargiza";

type SlideRenderer = (p: SlideProps) => ReactNode;
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function buildSlides(house: House): SlideRenderer[] {
  // Общее начало (титул → карта)
  const common: SlideRenderer[] = [
    (p) => <Slide01 {...p} />,
    (p) => <Slide03 {...p} />,
    (p) => <Slide04 {...p} />,
    (p) => <Slide07 {...p} />,
    (p) => <Slide05 {...p} />,
    (p) => <Slide10 {...p} />,
  ];
  // Ветка конкретного дома
  const branch: SlideRenderer[] =
    house === "tashkent"
      ? [
          (p) => <Slide02 {...p} />,
          (p) => <Slide06 {...p} />,
          (p) => <FinanceSlide {...p} house="tashkent" />,
          (p) => <FinanceDetailSlide {...p} house="tashkent" />,
          (p) => <Slide08 {...p} />,
          (p) => <Slide09 {...p} />,
          (p) => <SlideMadina {...p} />,
        ]
      : [
          (p) => <SlideQuvosoyIntro {...p} />,
          (p) => <SlideQuvosoyResults {...p} />,
          (p) => <FinanceSlide {...p} house="quvosoy" />,
          (p) => <FinanceDetailSlide {...p} house="quvosoy" />,
          (p) => <SlideNigora {...p} />,
          (p) => <SlideMahliyo {...p} />,
          (p) => <SlideNargiza {...p} />,
        ];
  return [...common, ...branch, (p) => <Slide11 {...p} />];
}

export default function App() {
  const { house, setExportMode } = useApp();
  const [index, setIndex] = useState(0);
  const [exporting, setExporting] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);

  const slides = useMemo(() => (house ? buildSlides(house) : []), [house]);
  const TOTAL = slides.length;

  const go = useCallback(
    (i: number) => setIndex((prev) => Math.max(0, Math.min(TOTAL - 1, typeof i === "number" ? i : prev))),
    [TOTAL]
  );

  useEffect(() => {
    setIndex(0);
  }, [house]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (exporting || !house) return;
      if (e.key === "ArrowRight") go(index + 1);
      else if (e.key === "ArrowLeft") go(index - 1);
      else if (e.key.toLowerCase() === "f") {
        if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
        else document.exitFullscreen?.();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, go, exporting, house]);

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
    if (exporting || !house) return;
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
        await sleep(450);
        shots.push(
          await html2canvas(slideEls[i], { scale: 2, useCORS: true, backgroundColor: "#FAFAF7", logging: false })
        );
      }
      const first = shots[0];
      const orient = first.width >= first.height ? "landscape" : "portrait";
      const pdf = new jsPDF({ orientation: orient, unit: "px", format: [first.width, first.height] });
      shots.forEach((cv, i) => {
        const o = cv.width >= cv.height ? "landscape" : "portrait";
        if (i > 0) pdf.addPage([cv.width, cv.height], o);
        pdf.addImage(cv.toDataURL("image/jpeg", 0.92), "JPEG", 0, 0, cv.width, cv.height);
      });
      pdf.save(`OnaUyi_${house === "tashkent" ? "Toshkent" : "Quvasoy"}.pdf`);
    } catch (err) {
      console.error("PDF export failed", err);
      alert("Не удалось собрать PDF. Подробности в консоли.");
    } finally {
      document.body.classList.remove("exporting");
      setExportMode(false);
      setExporting(false);
      setIndex(restore);
    }
  }, [exporting, index, setExportMode, house, TOTAL]);

  if (!house) return <HouseChooser />;

  return (
    <div className="app">
      <Navbar onExport={exportPDF} exporting={exporting} />

      <div className="stage" ref={stageRef} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        {slides.map((render, i) => (
          <div key={i} className={`slide-holder${i === index ? " is-active" : ""}`} aria-hidden={i !== index}>
            {render({ n: i + 1, total: TOTAL, active: i === index })}
          </div>
        ))}
      </div>

      {!exporting && <Navigation index={index} total={TOTAL} go={go} />}

      <AnimatePresence>
        {exporting && (
          <motion.div className="export-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="export-overlay__card">
              <span className="export-overlay__spinner" />
              <p>Собираем PDF…</p>
              <span className="export-overlay__hint">{index + 1} / {TOTAL}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
