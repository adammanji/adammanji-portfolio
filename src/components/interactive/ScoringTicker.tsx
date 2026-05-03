"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

type Player = {
  name: string;
  team: "you" | "opp";
  pts: number;
  delta: number;
};

const SEED: Player[] = [
  { name: "S. Curry", team: "you", pts: 12, delta: 0 },
  { name: "L. Dončić", team: "you", pts: 9, delta: 0 },
  { name: "A. Edwards", team: "you", pts: 7, delta: 0 },
  { name: "J. Tatum", team: "opp", pts: 11, delta: 0 },
  { name: "S. Gilgeous-A.", team: "opp", pts: 8, delta: 0 },
  { name: "G. Antetokounmpo", team: "opp", pts: 6, delta: 0 },
];

export function ScoringTicker() {
  const reduce = useReducedMotion();
  const [players, setPlayers] = useState(SEED);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setTick((t) => t + 1);
      setPlayers((prev) => {
        const idx = Math.floor(Math.random() * prev.length);
        const bumps = [2, 2, 2, 3, 3];
        const bump = bumps[Math.floor(Math.random() * bumps.length)];
        return prev.map((p, i) =>
          i === idx ? { ...p, pts: p.pts + bump, delta: bump } : { ...p, delta: 0 }
        );
      });
    }, 1900);
    return () => clearInterval(id);
  }, [reduce]);

  const youTotal = players
    .filter((p) => p.team === "you")
    .reduce((s, p) => s + p.pts, 0);
  const oppTotal = players
    .filter((p) => p.team === "opp")
    .reduce((s, p) => s + p.pts, 0);

  return (
    <div className="border hairline-strong bg-ink-2 font-mono text-xs">
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
        className={`font-display text-3xl tracking-tight ${
          accent ? "text-ember" : "text-bone"
        }`}
      >
        {total}
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
          <span className="relative inline-flex items-center gap-1 text-bone">
            <span>{p.pts}</span>
            {p.delta > 0 && (
              <motion.span
                key={`${p.name}-${tick}`}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 0, y: -16 }}
                transition={{ duration: 1.4 }}
                className="absolute -right-1 -top-2 text-[10px] text-ember"
              >
                +{p.delta}
              </motion.span>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}
