import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { ReactNode, CSSProperties } from "react";
import { useApp } from "../context";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

export function Reveal({
  active,
  children,
  className,
  style,
}: {
  active: boolean;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const { exportMode } = useApp();
  return (
    <motion.div
      className={className}
      style={style}
      variants={container}
      initial="hidden"
      animate={active || exportMode ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

export function RItem({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <motion.div className={className} style={style} variants={item}>
      {children}
    </motion.div>
  );
}
