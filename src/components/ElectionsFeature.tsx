"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "./Reveal";

// Hispanic male presidential margin (D - R), simplified from CPS / Edison exit polls
const data: { year: number; margin: number }[] = [
  { year: 2004, margin: 9 },
  { year: 2008, margin: 31 },
  { year: 2012, margin: 24 },
  { year: 2016, margin: 19 },
  { year: 2020, margin: 9 },
  { year: 2024, margin: -12 },
];

const W = 720;
const H = 360;
const PAD = { l: 56, r: 24, t: 32, b: 40 };
const minY = -20;
const maxY = 35;

const xFor = (i: number) =>
  PAD.l + (i * (W - PAD.l - PAD.r)) / (data.length - 1);
const yFor = (v: number) =>
  PAD.t + ((maxY - v) / (maxY - minY)) * (H - PAD.t - PAD.b);

const path = data
  .map((d, i) => `${i === 0 ? "M" : "L"} ${xFor(i)} ${yFor(d.margin)}`)
  .join(" ");

const areaPath =
  path +
  ` L ${xFor(data.length - 1)} ${yFor(0)} L ${xFor(0)} ${yFor(0)} Z`;

export function ElectionsFeature() {
  const reduce = useReducedMotion();

  return (
    <section
      id="data"
      className="relative border-b hairline py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-x-6 px-6 md:gap-x-10 md:px-10">
        <Reveal className="col-span-12 mb-10 flex items-baseline justify-between border-b hairline-strong pb-4 md:mb-14">
          <span className="font-mono text-xs text-bone-3">№ 03</span>
          <span className="eyebrow">Data analysis</span>
          <span className="font-mono text-xs text-bone-3 hidden md:inline">
            2024 · published writeup
          </span>
        </Reveal>

        <Reveal className="col-span-12 md:col-span-5">
          <h2 className="font-display text-5xl leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
            <span className="font-display-italic">A 38-point</span> shift, in
            sixteen years.
          </h2>
          <p className="mt-6 max-w-md text-bone-2 md:text-lg">
            Six elections, two data sources (Census CPS and Edison exit polls),
            one stubborn pattern. The Hispanic male presidential margin has
            collapsed from{" "}
            <span className="text-ember">D+31 in 2008</span> to{" "}
            <span className="text-ember">R+12 in 2024</span> — a 43-point
            realignment, with 35 of those points coming in the last cycle alone.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 border-t hairline-strong pt-5">
            <Stat n="6" l="elections" />
            <Stat n="38pt" l="net shift" />
            <Stat n="2" l="data sources" />
          </div>
        </Reveal>

        <Reveal
          className="col-span-12 mt-12 md:col-span-7 md:col-start-6 md:mt-0"
          delay={0.15}
        >
          <div className="border hairline-strong bg-ink-2 p-4 md:p-6">
            <div className="mb-4 flex items-baseline justify-between">
              <span className="eyebrow">
                Hispanic male margin (D — R)
              </span>
              <span className="eyebrow">y axis: pts</span>
            </div>

            <svg
              viewBox={`0 0 ${W} ${H}`}
              role="img"
              aria-label="Hispanic male presidential margin from 2004 to 2024"
              className="w-full"
            >
              {/* Y gridlines */}
              {[30, 20, 10, 0, -10].map((v) => (
                <g key={v}>
                  <line
                    x1={PAD.l}
                    y1={yFor(v)}
                    x2={W - PAD.r}
                    y2={yFor(v)}
                    stroke="currentColor"
                    className="text-bone/10"
                    strokeDasharray={v === 0 ? "0" : "2 4"}
                  />
                  <text
                    x={PAD.l - 10}
                    y={yFor(v) + 4}
                    textAnchor="end"
                    className="fill-bone-3 font-mono text-[10px]"
                  >
                    {v > 0 ? `+${v}` : v}
                  </text>
                </g>
              ))}

              {/* Zero line emphasis */}
              <line
                x1={PAD.l}
                y1={yFor(0)}
                x2={W - PAD.r}
                y2={yFor(0)}
                stroke="currentColor"
                className="text-bone/40"
              />

              {/* Area fill below curve (reading the area as the "shift" footprint) */}
              <motion.path
                d={areaPath}
                fill="var(--color-ember)"
                fillOpacity={0.08}
                initial={reduce ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 0.6 }}
              />

              {/* Path */}
              <motion.path
                d={path}
                fill="none"
                stroke="var(--color-ember)"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={reduce ? false : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] as const }}
              />

              {/* Points + labels */}
              {data.map((d, i) => (
                <motion.g
                  key={d.year}
                  initial={reduce ? false : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.5 + i * 0.1 }}
                >
                  <circle
                    cx={xFor(i)}
                    cy={yFor(d.margin)}
                    r={4}
                    fill="var(--color-ink)"
                    stroke="var(--color-ember)"
                    strokeWidth={2}
                  />
                  <text
                    x={xFor(i)}
                    y={H - 12}
                    textAnchor="middle"
                    className="fill-bone-3 font-mono text-[10px]"
                  >
                    {d.year}
                  </text>
                  <text
                    x={xFor(i)}
                    y={yFor(d.margin) - 12}
                    textAnchor="middle"
                    className="fill-bone font-mono text-[11px]"
                  >
                    {d.margin > 0 ? `D+${d.margin}` : `R+${Math.abs(d.margin)}`}
                  </text>
                </motion.g>
              ))}
            </svg>
          </div>
          <p className="mt-3 font-mono text-[10px] text-bone-3 uppercase tracking-wider">
            fig 01 — Method: simple two-party margin from CPS-weighted exit poll
            crosstabs. Recreated for this site; full code &amp; data on request.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-3xl tracking-tight text-bone md:text-4xl">
        {n}
      </div>
      <div className="eyebrow mt-1">{l}</div>
    </div>
  );
}
