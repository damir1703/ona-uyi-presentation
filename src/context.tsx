import { createContext, useContext, useState, useCallback, useEffect } from "react";
import type { ReactNode } from "react";
import type { Lang } from "./data/content";

type PhotoMap = Record<string, string>;

interface AppState {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  exportMode: boolean;
  setExportMode: (v: boolean) => void;
  photos: PhotoMap;
  setPhoto: (id: string, dataUrl: string) => void;
  removePhoto: (id: string) => void;
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

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <AppContext.Provider
      value={{ lang, setLang, toggleLang, exportMode, setExportMode, photos, setPhoto, removePhoto }}
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
