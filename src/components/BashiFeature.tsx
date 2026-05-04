import { Reveal } from "./Reveal";
import { ExtractionDemo } from "./interactive/ExtractionDemo";

const beats = [
  {
    head: "The problem",
    body: "Commercial credit underwriting is a multi-week ritual. Analysts re-key numbers from PDFs into Excel, build 3-statement projections by hand, and write a memo. The work is tedious and error-prone — the slowest part of every middle-market deal.",
  },
  {
    head: "The wedge",
    body: "Bashi reads the PDF the way a credit officer would. Vision-language models pick the right pages. Type-checked extractors lift the numbers. A deterministic engine builds the projection in pure Python. The model writes the memo skeleton — never the math.",
  },
  {
    head: "Why it matters",
    body: "We turn a two-week pass into an afternoon. The model does what models are good at — read mess, structure it. The deterministic layer does what models shouldn't — arithmetic, projections, audit trail. The human is freed to do the only part that still matters: judgment.",
  },
];

const stack = [
  "FastAPI",
  "Python 3.11",
  "Claude Sonnet 4.6",
  "pdfplumber",
  "openpyxl",
  "ReportLab",
  "PostgreSQL",
  "Railway",
  "Docker",
];

export function BashiFeature() {
  return (
    <section
      id="bashi"
      className="relative border-b hairline py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-x-6 px-6 md:gap-x-10 md:px-10">
        <Reveal className="col-span-12 mb-10 flex items-baseline justify-between border-b hairline-strong pb-4 md:mb-14">
          <span className="font-mono text-xs text-bone-3">№ 01</span>
          <span className="eyebrow">A case study</span>
          <span className="font-mono text-xs text-bone-3 hidden md:inline">
            2025—present · MVP · live
          </span>
        </Reveal>

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

        {/* Editorial pull quote — using bashi.app's actual public tagline as a stealth wink */}
        <Reveal
          className="col-span-12 mt-16 border-y hairline-strong py-10 md:py-14"
          delay={0.12}
        >
          <p className="font-display-italic text-4xl leading-[1.05] tracking-tight text-bone md:text-6xl lg:text-7xl">
            <span className="text-bone-3">“</span>Unlocking potential,
            together.<span className="text-bone-3">”</span>
          </p>
          <p className="mt-3 font-mono text-[10px] text-bone-3 uppercase tracking-wider md:text-xs">
            — bashi.app, public homepage. The product itself is intentionally
            quiet for now.
          </p>
        </Reveal>

        {/* Live demo */}
        <Reveal className="col-span-12 mt-12 md:mt-16 md:col-span-7" delay={0.15}>
          <ExtractionDemo />
          <p className="mt-3 font-mono text-[10px] text-bone-3 uppercase tracking-wider">
            fig 01 — Bashi extraction pipeline, illustrative
          </p>
        </Reveal>

        <Reveal
          className="col-span-12 mt-12 flex flex-col gap-4 md:col-span-5 md:col-start-8 md:mt-16"
          delay={0.18}
        >
          <span className="eyebrow">What ships</span>
          <ul className="space-y-3 border-t hairline-strong pt-4 font-mono text-sm text-bone">
            <li className="flex items-baseline gap-3">
              <span className="text-ember">◇</span>
              <span>PDF ingestion across 10+ doc types</span>
            </li>
            <li className="flex items-baseline gap-3">
              <span className="text-ember">◇</span>
              <span>Deterministic 5-yr 3-statement projections</span>
            </li>
            <li className="flex items-baseline gap-3">
              <span className="text-ember">◇</span>
              <span>Drafted credit memo, exportable to Word</span>
            </li>
            <li className="flex items-baseline gap-3">
              <span className="text-ember">◇</span>
              <span>Excel workbook export with audit trail</span>
            </li>
            <li className="flex items-baseline gap-3">
              <span className="text-ember">◇</span>
              <span>Confidence scoring and human-in-the-loop edits</span>
            </li>
          </ul>
        </Reveal>

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

        <Reveal className="col-span-12 mt-16 border-t hairline-strong pt-6">
          <div className="mb-4 flex items-baseline justify-between">
            <span className="eyebrow">Stack</span>
            <span className="eyebrow">{stack.length} items</span>
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
