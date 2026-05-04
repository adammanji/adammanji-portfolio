"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Slot = {
  name: string;
  team: "red" | "blue";
  hp: number;
  status: "alive" | "tagged" | "respawning";
};

const SEED: Slot[] = [
  { name: "P1 · adam", team: "red", hp: 5, status: "alive" },
  { name: "P2 · troy", team: "red", hp: 4, status: "alive" },
  { name: "P3 · preston", team: "blue", hp: 5, status: "alive" },
  { name: "P4 · noah", team: "blue", hp: 3, status: "alive" },
];

export function LobbyDemo() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-10%" });
  const [slots, setSlots] = useState(SEED);
  const [event, setEvent] = useState<string>("game.armed · pads.calibrated · ttd 3:00");

  useEffect(() => {
    if (reduce || !inView) return;
    const id = setInterval(() => {
      setSlots((prev) => {
        const i = Math.floor(Math.random() * prev.length);
        const s = prev[i];
        if (s.hp <= 1) {
          setEvent(`${s.name} eliminated · ${flip(s.team)} +1 · respawn 5s`);
          return prev.map((p, idx) =>
            idx === i ? { ...p, hp: 5, status: "respawning" } : p,
          );
        }
        setEvent(`ir.hit · ${flip(s.team)} → ${s.name} · tens.fire (-1 hp)`);
        return prev.map((p, idx) =>
          idx === i ? { ...p, hp: p.hp - 1, status: "alive" } : p,
        );
      });
    }, 1700);
    return () => clearInterval(id);
  }, [inView, reduce]);

  return (
    <div ref={ref} className="border hairline-strong bg-ink-2 font-mono text-xs">
      <div className="flex items-center justify-between border-b hairline-strong px-4 py-3 md:px-5">
        <span className="eyebrow">tasertag/lobby.live</span>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-ember" />
          <span className="text-bone-3">match in progress</span>
        </div>
      </div>

      <ul className="divide-y hairline-strong">
        {slots.map((s) => (
          <li
            key={s.name}
            className="flex items-center justify-between px-4 py-3 md:px-5"
          >
            <div className="flex items-center gap-3">
              <span
                className={`h-2 w-2 rounded-full ${
                  s.team === "red" ? "bg-ember" : "bg-court"
                }`}
              />
              <span className="text-bone">{s.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-bone-3">hp</span>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.span
                    key={i}
                    initial={false}
                    animate={{ opacity: i < s.hp ? 1 : 0.15 }}
                    transition={{ duration: 0.3 }}
                    className={`h-3 w-1.5 ${
                      s.team === "red" ? "bg-ember" : "bg-court"
                    }`}
                  />
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="border-t hairline-strong bg-ink-3/40 px-4 py-2 md:px-5">
        <span className="eyebrow text-bone-2">→ {event}</span>
      </div>
    </div>
  );
}

function flip(t: "red" | "blue") {
  return t === "red" ? "blue" : "red";
}
