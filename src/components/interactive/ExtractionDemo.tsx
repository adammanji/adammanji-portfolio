"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Line = { label: string; value: string; tone?: "fact" | "calc" | "ok" };

const LINES: Line[] = [
  { label: "document.detected", value: "10-K · 142 pages", tone: "fact" },
  { label: "page.range.selected", value: "p. 38—54, 71—89", tone: "fact" },
  { label: "revenue.fy", value: "$3.42B", tone: "fact" },
  { label: "revenue.prior", value: "$2.91B", tone: "fact" },
  { label: "yoy.growth", value: "+17.5%", tone: "calc" },
  { label: "ebitda.margin", value: "22.4%", tone: "calc" },
  { label: "current.ratio", value: "1.78", tone: "calc" },
  { label: "debt.to.equity", value: "0.62", tone: "calc" },
  { label: "interest.coverage", value: "8.3×", tone: "calc" },
  { label: "fcf.fy", value: "$412M", tone: "calc" },
  { label: "memo.draft", value: "ready for review", tone: "ok" },
];

export function ExtractionDemo() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setStep(LINES.length);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setStep(i);
      if (i >= LINES.length) clearInterval(id);
    }, 380);
    return () => clearInterval(id);
  }, [inView, reduce]);

  const done = step >= LINES.length;

  return (
    <div ref={ref} className="border hairline-strong bg-ink-2 p-5 font-mono text-xs md:p-6">
      <div className="mb-4 flex items-center justify-between border-b hairline-strong pb-3">
        <span className="eyebrow">bashi/extract.run</span>
        <div className="flex items-center gap-2">
          <span
            className={`h-2 w-2 rounded-full ${
              done ? "bg-court" : "animate-pulse bg-ember"
            }`}
          />
          <span className="text-bone-3">{done ? "complete" : "running"}</span>
        </div>
      </div>
      <div className="space-y-1.5">
        {LINES.slice(0, step).map((line, i) => (
          <motion.div
            key={line.label}
            initial={reduce ? false : { opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
            className="flex items-baseline justify-between gap-4"
          >
            <span className="text-bone-3">
              <span className="text-ember">→</span> {line.label}
            </span>
            <span
              className={
                line.tone === "ok"
                  ? "text-court"
                  : i === step - 1 && !done
                  ? "text-ember"
                  : "text-bone"
              }
            >
              {line.value}
            </span>
          </motion.div>
        ))}
        {!done && step < LINES.length && (
          <div className="flex items-baseline gap-2 pt-1">
            <span className="text-ember">→</span>
            <span className="inline-block h-3 w-2 animate-pulse bg-bone-2" />
          </div>
        )}
      </div>
    </div>
  );
}
