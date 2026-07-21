import { createContext, useContext, useState, useCallback, useEffect } from "react";
import type { ReactNode } from "react";
import type { Lang } from "./data/content";
import type { House } from "./data/finance";

type PhotoMap = Record<string, string>;

function houseFromHash(): House | null {
  const h = window.location.hash.replace(/^#\/?/, "").toLowerCase();
  if (h === "tashkent" || h === "toshkent") return "tashkent";
  if (h === "quvosoy" || h === "kuvasoy" || h === "quvasoy") return "quvosoy";
  return null;
}

interface AppState {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  exportMode: boolean;
  setExportMode: (v: boolean) => void;
  photos: PhotoMap;
  setPhoto: (id: string, dataUrl: string) => void;
  removePhoto: (id: string) => void;
  house: House | null;
  setHouse: (h: House | null) => void;
}

const AppContext = createContext<AppState | null>(null);

const PHOTO_KEY = "onauyi_photos";
const LANG_KEY = "onauyi_lang";

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem(LANG_KEY);
    return saved === "uz" ? "uz" : "ru";
  });
  const [exportMode, setExportMode] = useState(false);
  const [house, setHouseState] = useState<House | null>(() => houseFromHash());
  const [photos, setPhotos] = useState<PhotoMap>(() => {
    try {
      return JSON.parse(localStorage.getItem(PHOTO_KEY) || "{}");
    } catch {
      return {};
    }
  });

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem(LANG_KEY, l);
  }, []);
  const toggleLang = useCallback(
    () => setLang(lang === "ru" ? "uz" : "ru"),
    [lang, setLang]
  );

  const persist = useCallback((next: PhotoMap) => {
    setPhotos(next);
    try {
      localStorage.setItem(PHOTO_KEY, JSON.stringify(next));
    } catch (e) {
      console.warn("localStorage переполнен — фото не сохранено", e);
    }
  }, []);

  const setPhoto = useCallback(
    (id: string, dataUrl: string) => persist({ ...photos, [id]: dataUrl }),
    [photos, persist]
  );
  const removePhoto = useCallback(
    (id: string) => {
      const next = { ...photos };
      delete next[id];
      persist(next);
    },
    [photos, persist]
  );

  const setHouse = useCallback((h: House | null) => {
    setHouseState(h);
    const target = h ? `#/${h}` : "#/";
    if (window.location.hash !== target) window.location.hash = target;
  }, []);

  useEffect(() => {
    const onHash = () => setHouseState(houseFromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <AppContext.Provider
      value={{
        lang, setLang, toggleLang, exportMode, setExportMode,
        photos, setPhoto, removePhoto, house, setHouse,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
