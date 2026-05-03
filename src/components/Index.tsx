"use client";

import { all } from "@/lib/projects";
import { motion, useReducedMotion } from "motion/react";

export function Index() {
  const reduce = useReducedMotion();

  return (
    <section id="index" className="relative border-b hairline py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="mb-12 flex items-baseline justify-between md:mb-16">
          <h2 className="font-display text-4xl tracking-tight md:text-6xl">
            The Work, <span className="font-display-italic text-bone-3">Indexed</span>
          </h2>
          <span className="eyebrow hidden md:block">§ II — Seven entries</span>
        </div>

        <ul className="border-t hairline-strong">
          {all.map((p, i) => (
            <motion.li
              key={p.slug}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.04,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="group border-b hairline-strong"
            >
              <a
                href={p.slug ? `#${p.slug}` : "#"}
                className="grid grid-cols-12 items-baseline gap-x-4 py-5 transition-colors md:gap-x-6 md:py-7"
              >
                <span className="col-span-2 font-mono text-xs text-bone-3 transition-colors group-hover:text-ember md:col-span-1 md:text-sm">
                  {p.num}
                </span>
                <span className="col-span-10 font-display text-2xl tracking-tight text-bone transition-all group-hover:translate-x-2 group-hover:text-ember md:col-span-5 md:text-4xl">
                  {p.name}
                </span>
                <span className="col-span-7 hidden font-mono text-xs text-bone-3 md:col-span-4 md:block">
                  {p.kind}
                </span>
                <span className="col-span-5 hidden text-right font-mono text-xs text-bone-3 md:col-span-2 md:block">
                  {p.year}
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
