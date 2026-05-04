import Image from "next/image";
import { Reveal } from "./Reveal";
import { ScoringTicker } from "./interactive/ScoringTicker";

const stack = [
  "React Native / Expo",
  "FastAPI",
  "PostgreSQL",
  "Auth0",
  "Glicko-2",
  "WebSockets",
  "League data feeds",
  "Railway",
  "EAS · TestFlight",
];

const beats = [
  {
    head: "The thesis",
    body: "DraftKings won by being a spreadsheet. The next generation of fantasy users won't sit down for a 12-hour slate. They'll play in the queue at Chipotle. The product needs to feel like a mobile game, finish in minutes, and make every play feel consequential — without anyone risking a paycheck.",
  },
  {
    head: "The form factor",
    body: "Snappy ships two formats. NBA quarter-only contests resolve in roughly 30 minutes. MLB head-to-head snake drafts finish in three innings. Both are 1v1. Both have a 20-second draft clock. Both are free to play, with rank — Bronze through Legend — replacing dollars as the thing on the line.",
  },
  {
    head: "The under-the-hood",
    body: "Live matchmaking with a bot fallback at 90 seconds. A Glicko-2 rating that buckets players across eight divisions. Three independent scoring engines. Real-time stat polling against league feeds. Audit-grade tests on the server so the rating math never slips.",
  },
];

const facts = [
  { n: "8", l: "divisions, Bronze → Legend" },
  { n: "2", l: "sports — NBA + MLB" },
  { n: "20s", l: "draft pick clock" },
  { n: "$0", l: "to play, ever" },
];
export function SnappyFeature() {
  return (
    <section
      id="snappy"
      className="relative border-b hairline py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-x-6 px-6 md:gap-x-10 md:px-10">
        <Reveal className="col-span-12 mb-10 flex items-baseline justify-between border-b hairline-strong pb-4 md:mb-14">
          <span className="font-mono text-xs text-bone-3">№ 02</span>
          <span className="eyebrow">A case study</span>
          <span className="font-mono text-xs text-bone-3 hidden md:inline">
            2024—present · beta · TestFlight
          </span>
        </Reveal>

        <Reveal className="col-span-12 md:col-span-7">
          <span className="eyebrow">Early access · Free to play</span>
          <h2 className="mt-3 font-display text-7xl leading-[0.92] tracking-tight md:text-9xl">
            Snappy<span className="font-display-italic text-ember">.</span>
          </h2>
          <p className="mt-6 max-w-xl font-display-italic text-2xl leading-tight text-bone-2 md:text-3xl">
            Fantasy sports, ranked. Pick three real players. Go head-to-head.
            Climb from Bronze to Legend.
          </p>
        </Reveal>

        <Reveal
          className="col-span-12 mt-10 flex flex-col items-start justify-end gap-4 md:col-span-5 md:mt-0 md:items-end"
          delay={0.1}
        >
          <a
            href="https://snappyfantasy.com"
            className="group inline-flex items-center gap-3 border hairline-strong px-5 py-3 transition-colors hover:border-ember hover:text-ember"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em]">
              snappyfantasy.com
            </span>
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              ↗
            </span>
          </a>
          <span className="eyebrow">adam@snappyfantasy.com</span>
        </Reveal>

        {/* Facts strip */}
        <Reveal
          className="col-span-12 mt-12 grid grid-cols-2 gap-y-8 border-y hairline-strong py-8 md:mt-16 md:grid-cols-4"
          delay={0.12}
        >
          {facts.map((f) => (
            <div key={f.l}>
              <div className="font-display text-4xl tracking-tight text-bone md:text-5xl">
                {f.n}
              </div>
              <div className="eyebrow mt-1">{f.l}</div>
            </div>
          ))}
        </Reveal>

        {/* Live ticker + screenshot collage */}
        <div className="col-span-12 mt-12 grid grid-cols-12 gap-x-6 gap-y-10 md:mt-16 md:gap-x-10">
          <Reveal className="col-span-12 md:col-span-5" delay={0.15}>
            <ScoringTicker />
            <p className="mt-3 font-mono text-[10px] text-bone-3 uppercase tracking-wider">
              fig 01 — Snappy live-scoring engine. Real formulas, simulated stats.
            </p>
          </Reveal>

          <Reveal className="col-span-12 md:col-span-7" delay={0.2}>
            <div className="grid grid-cols-3 items-end gap-3 md:gap-5">
              <Phone src="/snappy/home_screen.png" label="Home" />
              <Phone src="/snappy/draft_screen.png" label="Draft" featured />
              <Phone src="/snappy/live_match.png" label="Live" />
            </div>
            <p className="mt-3 font-mono text-[10px] text-bone-3 uppercase tracking-wider">
              fig 02 — iOS, current build
            </p>
          </Reveal>
        </div>

        {/* Three steps from snappyfantasy.com */}
        <Reveal
          className="col-span-12 mt-20 grid grid-cols-1 gap-10 border-t hairline-strong pt-10 md:grid-cols-3 md:gap-8"
          delay={0.18}
        >
          {[
            {
              num: "01",
              h: "Match",
              b: "Hit Battle. Ranked 1v1 matchmaking at your ELO. Eight divisions from Bronze to Legend. Win and climb, lose and learn.",
            },
            {
              num: "02",
              h: "Draft",
              b: "Snake-draft your roster from real players in live games. Twenty seconds per pick. Every choice matters.",
            },
            {
              num: "03",
              h: "Compete",
              b: "Watch it play out live. Every pitch, every play scores in real time. Your roster against theirs, fantasy points rolling in.",
            },
          ].map((s) => (
            <div key={s.num}>
              <div className="font-mono text-xs text-bone-3">{s.num}</div>
              <h3 className="mt-2 font-display text-3xl tracking-tight text-bone md:text-4xl">
                {s.h}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-bone-2 md:text-base">
                {s.b}
              </p>
            </div>
          ))}
        </Reveal>

        {/* Narrative beats */}
        <div className="col-span-12 mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
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

function Phone({
  src,
  label,
  featured,
}: {
  src: string;
  label: string;
  featured?: boolean;
}) {
  return (
    <figure
      className={`group relative aspect-[9/19] overflow-hidden bg-transparent ${
        featured ? "translate-y-[-1.5rem] md:translate-y-[-2.5rem]" : ""
      }`}
    >
      <Image
        src={src}
        alt={`Snappy ${label} screen`}
        fill
        sizes="(max-width: 768px) 33vw, 240px"
        className="object-contain transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <figcaption className="eyebrow absolute -bottom-6 left-0 right-0 text-center md:-bottom-8">
        {label}
      </figcaption>
    </figure>
  );
}
