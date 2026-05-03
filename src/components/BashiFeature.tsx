import Image from "next/image";
import { Reveal } from "./Reveal";
import { ExtractionDemo } from "./interactive/ExtractionDemo";

const stack = [
  "FastAPI",
  "Python 3.11",
  "Claude Sonnet 4.6",
  "pdfplumber",
  "openpyxl",
  "ReportLab",
  "PostgreSQL",
  "Railway",
  "pytest (716)",
];

const beats = [
  {
    head: "The problem",
    body: "Commercial credit underwriting is a multi-week ritual. Analysts manually re-key numbers from PDF financials into Excel, build 3-statement projections, and write a memo. The work is tedious, error-prone, and low-leverage — the slowest part of every middle-market deal.",
  },
  {
    head: "The wedge",
    body: "Bashi reads the PDF the way a credit officer would. It picks the right pages with vision-language models, extracts 51+ metrics with type-checked extractors, builds the deterministic 5-year projection in pure Python, and writes a memo that you'd be willing to put in front of a credit committee.",
  },
  {
    head: "Why it matters",
    body: "We turn a two-week underwriting pass into an afternoon. The model does what models are good at — read mess, structure it. The deterministic layer does what models shouldn't — arithmetic, projections, memo skeleton. The human does the only part that still matters: judgment.",
  },
];

export function BashiFeature() {
  return (
    <section
      id="bashi"
      className="relative border-b hairline py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-x-6 px-6 md:gap-x-10 md:px-10">
        {/* Header bar */}
        <Reveal className="col-span-12 mb-10 flex items-baseline justify-between border-b hairline-strong pb-4 md:mb-14">
          <span className="font-mono text-xs text-bone-3">№ 01</span>
          <span className="eyebrow">A case study</span>
          <span className="font-mono text-xs text-bone-3 hidden md:inline">
            2025—present · pre-seed · live
          </span>
        </Reveal>

        {/* Title block */}
        <Reveal className="col-span-12 md:col-span-7">
          <h2 className="font-display text-7xl leading-[0.92] tracking-tight md:text-9xl">
            Bashi
          </h2>
          <p className="mt-6 max-w-xl font-display-italic text-2xl leading-tight text-bone-2 md:text-3xl">
            An AI copilot for commercial credit underwriting.
          </p>
        </Reveal>

        <Reveal
          className="col-span-12 mt-10 flex flex-col items-start justify-end gap-4 md:col-span-5 md:mt-0 md:items-end"
          delay={0.1}
        >
          <a
            href="https://bashi.app"
            className="group inline-flex items-center gap-3 border hairline-strong px-5 py-3 transition-colors hover:border-ember hover:text-ember"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em]">
              bashi.app
            </span>
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              ↗
            </span>
          </a>
          <span className="eyebrow">adam@bashi.app</span>
        </Reveal>

        {/* Live demo */}
        <Reveal className="col-span-12 mt-12 md:mt-16" delay={0.15}>
          <ExtractionDemo />
        </Reveal>

        {/* Screenshots row */}
        <Reveal
          className="col-span-12 mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6"
          delay={0.2}
        >
          {[
            "Screenshot 2026-04-07 at 23.05.46.png",
            "Screenshot 2026-04-07 at 23.05.55.png",
            "Screenshot 2026-04-07 at 23.06.02.png",
          ].map((src, i) => (
            <figure
              key={src}
              className="group relative aspect-[4/3] overflow-hidden border hairline-strong bg-ink-2"
            >
              <Image
                src={`/bashi/${src}`}
                alt={`Bashi product screenshot ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-wider text-bone bg-ink/70 px-2 py-1">
                fig {String(i + 1).padStart(2, "0")}
              </figcaption>
            </figure>
          ))}
        </Reveal>

        {/* Narrative beats */}
        <div className="col-span-12 mt-20 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {beats.map((b, i) => (
            <Reveal key={b.head} delay={0.05 * i}>
              <div className="border-t hairline-strong pt-5">
                <span className="eyebrow">§ {String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 font-display text-2xl text-bone md:text-3xl">
                  {b.head}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-bone-2 md:text-base">
                  {b.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Stack */}
        <Reveal className="col-span-12 mt-16 border-t hairline-strong pt-6">
          <div className="mb-4 flex items-baseline justify-between">
            <span className="eyebrow">Stack</span>
            <span className="eyebrow">9 items</span>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs text-bone md:text-sm">
            {stack.map((s) => (
              <li key={s} className="before:mr-2 before:text-ember before:content-['◇']">
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
