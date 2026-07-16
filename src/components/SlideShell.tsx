import type { ReactNode } from "react";

interface Props {
  n: number; // 1-based
  total: number;
  dark?: boolean;
  className?: string;
  children: ReactNode;
}

const pad = (x: number) => String(x).padStart(2, "0");

export default function SlideShell({ n, total, dark = false, className = "", children }: Props) {
  return (
    <section className={`slide ${dark ? "slide--dark" : ""} ${className}`}>
      <span className="slide__counter">
        {pad(n)} <em>/ {pad(total)}</em>
      </span>
      <div className="slide__inner">{children}</div>
    </section>
  );
}
