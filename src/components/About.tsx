import { Reveal } from "./Reveal";

export function About() {
  return (
    <section
      id="about"
      className="relative border-b hairline py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-x-6 px-6 md:gap-x-10 md:px-10">
        <Reveal className="col-span-12 mb-12 flex items-baseline justify-between md:col-span-12 md:mb-16">
          <span className="eyebrow">A short biography</span>
          <span className="eyebrow hidden md:block">§ I</span>
        </Reveal>

        <Reveal className="col-span-12 md:col-span-8 md:col-start-3" delay={0.1}>
          <p className="font-display text-3xl leading-[1.18] tracking-tight text-bone md:text-4xl lg:text-5xl">
            I studied{" "}
            <span className="font-display-italic text-bone-3">
              computer science at UC Berkeley
            </span>
            , and IB before that. I now spend my days writing the code, the pitch
            decks, and the cold emails for two early-stage companies that have
            nothing in common on the surface — and almost everything in common
            underneath.
          </p>
        </Reveal>

        <Reveal
          className="col-span-12 mt-16 grid grid-cols-1 gap-12 md:col-span-10 md:col-start-2 md:grid-cols-3 md:gap-10"
          delay={0.2}
        >
          <Pillar
            num="i."
            title="Fintech"
            body="Bashi turns a multi-week credit-underwriting workflow into an afternoon. Claude-powered extraction, deterministic financial modeling, and an output that looks like the memo a senior credit officer would write."
          />
          <Pillar
            num="ii."
            title="Sports"
            body="Snappy is built on a contrarian bet — that the right form-factor for fantasy is short, head-to-head, ranked, and feels like a mobile game, not a spreadsheet. Live matchmaking, snake drafts, real-time scoring."
          />
          <Pillar
            num="iii."
            title="The seam"
            body="Both products live where messy real-world data meets a product surface. That's the work I'm interested in — turning the hard, schema-less middle of a problem into something a normal person can use."
          />
        </Reveal>
      </div>
    </section>
  );
}

function Pillar({
  num,
  title,
  body,
}: {
  num: string;
  title: string;
  body: string;
}) {
  return (
    <div className="border-t hairline-strong pt-6">
      <div className="flex items-baseline gap-3">
        <span className="font-display-italic text-ember">{num}</span>
        <h3 className="font-display text-2xl text-bone">{title}</h3>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-bone-2 md:text-base">
        {body}
      </p>
    </div>
  );
}
