"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// Snappy NBA scoring (per snappyfantasy.com /how-it-works):
// pts + reb*1.5 + ast*2 + stl*2.5 + blk*2.5 - to*2 - pf*1.5
const SCORE = (s: Stat) =>
  s.pts +
  s.reb * 1.5 +
  s.ast * 2 +
  s.stl * 2.5 +
  s.blk * 2.5 -
  s.to * 2 -
  s.pf * 1.5;

type Stat = {
  pts: number;
  reb: number;
  ast: number;
  stl: number;
  blk: number;
  to: number;
  pf: number;
};

type Player = {
  name: string;
  team: "you" | "opp";
  stat: Stat;
  delta: number;
};

const ZERO: Stat = { pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, to: 0, pf: 0 };

const SEED: Player[] = [
  { name: "S. Gilgeous-A.", team: "you", stat: { ...ZERO, pts: 8, reb: 2, ast: 3 }, delta: 0 },
  { name: "L. Dončić", team: "you", stat: { ...ZERO, pts: 7, reb: 4, ast: 4, to: 1 }, delta: 0 },
  { name: "A. Edwards", team: "you", stat: { ...ZERO, pts: 9, reb: 1, ast: 2, stl: 1 }, delta: 0 },
  { name: "J. Tatum", team: "opp", stat: { ...ZERO, pts: 9, reb: 3, ast: 2 }, delta: 0 },
  { name: "N. Jokić", team: "opp", stat: { ...ZERO, pts: 6, reb: 5, ast: 5, to: 2 }, delta: 0 },
  { name: "G. Antetokounmpo", team: "opp", stat: { ...ZERO, pts: 5, reb: 3, ast: 1, blk: 1 }, delta: 0 },
];

// Plausible quarter-of-NBA stat events
const EVENTS: Array<{ key: keyof Stat; label: string }> = [
  { key: "pts", label: "+2" },
  { key: "pts", label: "+2" },
  { key: "pts", label: "+3" },
  { key: "reb", label: "REB" },
  { key: "ast", label: "AST" },
  { key: "ast", label: "AST" },
  { key: "stl", label: "STL" },
  { key: "blk", label: "BLK" },
  { key: "to", label: "TO" },
];

export function ScoringTicker() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-10%" });
  const [players, setPlayers] = useState(SEED);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (reduce || !inView) return;
    const id = setInterval(() => {
      setTick((t) => t + 1);
      setPlayers((prev) => {
        const idx = Math.floor(Math.random() * prev.length);
        const ev = EVENTS[Math.floor(Math.random() * EVENTS.length)];
        const bumpAmt = ev.key === "pts"
          ? ev.label === "+3" ? 3 : 2
          : 1;
        return prev.map((p, i) => {
          if (i !== idx) return { ...p, delta: 0 };
          const next = { ...p.stat, [ev.key]: p.stat[ev.key] + bumpAmt };
          return {
            ...p,
            stat: next,
            delta: SCORE(next) - SCORE(p.stat),
          };
        });
      });
    }, 1700);
    return () => clearInterval(id);
  }, [reduce, inView]);

  const youTotal = players
    .filter((p) => p.team === "you")
    .reduce((s, p) => s + SCORE(p.stat), 0);
  const oppTotal = players
    .filter((p) => p.team === "opp")
    .reduce((s, p) => s + SCORE(p.stat), 0);

  return (
    <div ref={ref} className="border hairline-strong bg-ink-2 font-mono text-xs">
      <div className="flex items-center justify-between border-b hairline-strong px-4 py-3 md:px-5">
        <span className="eyebrow">snappy/Q3.live</span>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-ember" />
          <span className="text-bone-3">5:42 left</span>
        </div>
      </div>

      <div className="grid grid-cols-2 border-b hairline-strong">
        <Side label="you" total={youTotal} accent />
        <Side label="opp" total={oppTotal} />
      </div>

      <div className="grid grid-cols-2 divide-x hairline-strong">
        <Roster
          players={players.filter((p) => p.team === "you")}
          tick={tick}
          align="left"
        />
        <Roster
          players={players.filter((p) => p.team === "opp")}
          tick={tick}
          align="right"
        />
      </div>

      <div className="border-t hairline-strong px-4 py-2 md:px-5">
        <span className="eyebrow">scoring · pts + reb·1.5 + ast·2 + stl/blk·2.5 − to·2 − pf·1.5</span>
      </div>
    </div>
  );
}

function Side({
  label,
  total,
  accent,
}: {
  label: string;
  total: number;
  accent?: boolean;
}) {
  return (
    <div
      className={`flex items-baseline justify-between px-4 py-4 md:px-5 ${
        accent ? "bg-ember/[0.04]" : ""
      }`}
    >
      <span className="eyebrow">{label}</span>
      <span
        className={`font-display text-3xl tracking-tight tabular-nums ${
          accent ? "text-ember" : "text-bone"
        }`}
      >
        {total.toFixed(1)}
      </span>
    </div>
  );
}

function Roster({
  players,
  tick,
  align,
}: {
  players: Player[];
  tick: number;
  align: "left" | "right";
}) {
  return (
    <ul className="space-y-2 px-4 py-4 md:px-5">
      {players.map((p) => (
        <li
          key={p.name}
          className={`flex items-center gap-2 ${
            align === "right" ? "justify-end flex-row-reverse" : ""
          }`}
        >
          <span className="flex-1 truncate text-bone-2" style={{ textAlign: align }}>
            {p.name}
          </span>
          <span className="relative inline-flex items-center gap-1 text-bone tabular-nums">
            <span>{SCORE(p.stat).toFixed(1)}</span>
            {p.delta > 0 && (
              <motion.span
                key={`${p.name}-${tick}`}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 0, y: -16 }}
                transition={{ duration: 1.4 }}
                className="absolute -right-1 -top-2 text-[10px] text-ember"
              >
                +{p.delta.toFixed(1)}
              </motion.span>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}
