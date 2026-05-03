import { more } from "@/lib/projects";
import { Reveal } from "./Reveal";

export function MoreWork() {
  return (
    <section className="relative border-b hairline py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Reveal className="mb-12 flex items-baseline justify-between md:mb-16">
          <h2 className="font-display text-4xl tracking-tight md:text-5xl">
            <span className="font-display-italic text-bone-3">Etc.</span> —
            archived &amp; assorted
          </h2>
          <span className="eyebrow hidden md:block">§ IV</span>
        </Reveal>

        <ul className="grid grid-cols-1 gap-px bg-ink-3 md:grid-cols-2 lg:grid-cols-4">
          {more.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 0.04}>
              <article className="flex h-full flex-col justify-between bg-ink p-6 transition-colors hover:bg-ink-2 md:p-7">
                <div>
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-xs text-bone-3">{p.num}</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-bone-3">
                      {p.year}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-3xl leading-tight tracking-tight text-bone">
                    {p.name}
                  </h3>
                  <p className="mt-2 font-display-italic text-sm text-bone-3">
                    {p.kind}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-bone-2">
                    {p.blurb}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between border-t hairline-strong pt-4">
                  <span className="eyebrow">{p.status}</span>
                  {p.repo && (
                    <a
                      href={p.repo}
                      className="group inline-flex items-center gap-2 font-mono text-xs text-bone hover:text-ember transition-colors"
                    >
                      repo{" "}
                      <span
                        aria-hidden
                        className="transition-transform group-hover:translate-x-1"
                      >
                        ↗
                      </span>
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
