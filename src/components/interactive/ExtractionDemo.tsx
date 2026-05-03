"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const LINES = [
  { label: "document.detected", value: "10-K · FY2024 · 142 pages" },
  { label: "page.range.selected", value: "p. 38—54, 71—89, 102—118" },
  { label: "revenue.fy2024", value: "$3.42B" },
  { label: "revenue.fy2023", value: "$2.91B" },
  { label: "yoy.growth", value: "+17.5%" },
  { label: "ebitda.margin", value: "22.4%" },
  { label: "current.ratio", value: "1.78" },
  { label: "debt.to.equity", value: "0.62" },
  { label: "interest.coverage", value: "8.3×" },
  { label: "ccc.days", value: "47" },
  { label: "fcf.fy2024", value: "$412M" },
  { label: "memo.draft", value: "ready for review" },
];

export function ExtractionDemo() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reduce) {
      setStep(LINES.length);
      return;
    }
    const id = setInterval(() => {
      setStep((s) => (s >= LINES.length ? 0 : s + 1));
    }, 600);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <div className="border hairline-strong bg-ink-2 p-5 font-mono text-xs md:p-6">
      <div className="mb-4 flex items-center justify-between border-b hairline-strong pb-3">
        <span className="eyebrow">bashi/extract.run</span>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-court" />
          <span className="text-bone-3">live</span>
        </div>
      </div>
      <div className="space-y-1.5">
        {LINES.slice(0, step).map((line, i) => (
          <motion.div
            key={line.label}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
            className="flex items-baseline justify-between gap-4"
          >
            <span className="text-bone-3">
              <span className="text-ember">→</span> {line.label}
            </span>
            <span
              className={
                i === step - 1 ? "text-ember" : "text-bone"
              }
            >
              {line.value}
            </span>
          </motion.div>
        ))}
        {step < LINES.length && !reduce && (
          <div className="flex items-baseline gap-2 pt-1">
            <span className="text-ember">→</span>
            <span className="inline-block h-3 w-2 animate-pulse bg-bone-2" />
          </div>
        )}
      </div>
    </div>
  );
}
