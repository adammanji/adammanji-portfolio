import { coursework } from "@/lib/projects";
import { Reveal } from "./Reveal";

export function Coursework() {
  return (
    <section
      id="coursework"
      className="relative border-b hairline py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Reveal className="mb-12 flex items-baseline justify-between md:mb-16">
          <h2 className="font-display text-4xl tracking-tight md:text-5xl">
            Coursework,{" "}
            <span className="font-display-italic text-bone-3">on the books</span>
          </h2>
          <span className="eyebrow hidden md:block">§ V</span>
        </Reveal>

        <Reveal className="mb-10 max-w-2xl text-bone-2 md:text-lg" delay={0.05}>
          A faithful — if approximate — index of what I&apos;ve studied. Berkeley
          CS as the spine, with detours through data, biology, French cinema,
          and a high-school programming contest or three.
        </Reveal>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {coursework.map((g, i) => (
            <Reveal key={g.group} delay={0.1 + i * 0.06}>
              <section className="border-t hairline-strong pt-5">
                <header>
                  <span className="eyebrow">
                    § {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-2xl leading-tight tracking-tight text-bone md:text-3xl">
                    {g.group}
                  </h3>
                  {g.note && (
                    <p className="mt-2 text-sm italic text-bone-3">{g.note}</p>
                  )}
                </header>

                <ul className="mt-6 divide-y hairline">
                  {g.items.map((c) => (
                    <li
                      key={c.code + c.title}
                      className="grid grid-cols-12 items-baseline gap-x-3 py-3"
                    >
                      <span className="col-span-4 font-mono text-xs text-bone md:text-sm">
                        {c.code}
                      </span>
                      <span className="col-span-7 text-sm leading-snug text-bone-2 md:text-[15px]">
                        {c.title}
                      </span>
                      <span className="col-span-1 text-right font-mono text-[10px] text-bone-3">
                        {c.when ?? ""}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
