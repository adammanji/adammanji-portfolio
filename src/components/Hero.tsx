"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export function Hero() {
  const reduce = useReducedMotion();

  const lineFx = (delay: number) => ({
    initial: reduce ? false : { y: "110%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1.05, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden border-b hairline pt-28 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--color-bone) 1px, transparent 1px)",
            backgroundSize: "calc(100% / 12) 100%",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-[1600px] grid-cols-12 gap-x-6 px-6 pb-12 md:gap-x-10 md:px-10 lg:pb-20">
        <div className="col-span-12 mb-10 flex items-baseline justify-between md:mb-16">
          <motion.span
            className="eyebrow"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            № 00 — Adam Manji · San Francisco, CA
          </motion.span>
          <motion.span
            className="eyebrow hidden md:block"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            Vol. I · MMXXVI
          </motion.span>
        </div>

        <h1 className="col-span-12 font-display text-[18vw] font-medium leading-[0.92] tracking-[-0.04em] md:text-[14vw] lg:text-[12vw]">
          <span className="block overflow-hidden pb-[0.04em]">
            <motion.span className="block" {...lineFx(0.15)}>
              Founder
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.16em]">
            <motion.span
              className="block pl-[0.6em] font-display-italic text-bone-2"
              {...lineFx(0.3)}
            >
              &amp; engineer.
            </motion.span>
          </span>
        </h1>

        <div className="col-span-12 mt-8 grid grid-cols-12 gap-x-6 gap-y-8 md:mt-14 md:gap-x-10">
          <motion.div
            className="col-span-5 md:col-span-3 lg:col-span-2"
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden border hairline-strong bg-ink-2">
              <Image
                src="/headshot/adam.png"
                alt="Adam Manji"
                fill
                priority
                sizes="(max-width: 768px) 40vw, 200px"
                className="object-cover grayscale contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          <div className="col-span-7 flex flex-col justify-between gap-8 md:col-span-9 lg:col-span-10">
            <motion.p
              className="max-w-2xl text-balance font-display text-2xl leading-[1.15] tracking-tight text-bone md:text-3xl lg:text-4xl"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.65 }}
            >
              Building in fintech and sports — an AI copilot for commercial
              credit underwriting
              <span className="font-display-italic text-bone-3">
                {" "}(Bashi){" "}
              </span>
              and a free-to-play, ranked fantasy app
              <span className="font-display-italic text-bone-3">
                {" "}(Snappy){" "}
              </span>
              currently in beta.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-end justify-between gap-8 border-t hairline pt-6"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.85 }}
            >
              <div className="grid grid-cols-2 gap-x-12 gap-y-4 sm:grid-cols-3 md:grid-cols-4">
                <Stat label="Based" value="San Francisco, CA" />
                <Stat label="Education" value="UC Berkeley · CS · IB" />
                <Stat label="Shipping" value="Bashi · Snappy" />
                <Stat label="Email" value="adam@bashi.app" />
              </div>

              <a
                href="#index"
                className="group inline-flex items-center gap-3 self-end text-bone hover:text-ember transition-colors"
                aria-label="Scroll to index"
              >
                <span className="eyebrow">The work, indexed</span>
                <span
                  aria-hidden
                  className="font-display text-2xl transition-transform group-hover:translate-y-1"
                >
                  ↓
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="eyebrow">{label}</span>
      <span className="font-mono text-xs text-bone md:text-sm">{value}</span>
    </div>
  );
}
