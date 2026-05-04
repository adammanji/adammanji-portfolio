import { coursework } from "@/lib/projects";
import type { Course, CourseGroup } from "@/lib/projects";
import { Reveal } from "./Reveal";

export function Coursework() {
  return (
    <section
      id="coursework"
      className="relative border-b hairline py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Reveal className="mb-10 flex items-baseline justify-between md:mb-14">
          <h2 className="font-display text-4xl tracking-tight md:text-6xl">
            Coursework,{" "}
            <span className="font-display-italic text-bone-3">
              indexed
            </span>
          </h2>
          <span className="eyebrow hidden md:block">§ V</span>
        </Reveal>

        <Reveal className="mb-16 max-w-3xl text-bone-2 md:text-lg" delay={0.05}>
          A working index of what I&apos;ve studied — and, where I have it,
          what I built. Berkeley CS as the spine, with detours through data,
          biology, French cinema, and a Canadian programming contest or three.
          Project lists are curated, not exhaustive.
        </Reveal>

        {coursework.map((g, gi) => (
          <CourseGroupBlock key={g.group} group={g} index={gi} />
        ))}
      </div>
    </section>
  );
}

function CourseGroupBlock({
  group,
  index,
}: {
  group: CourseGroup;
  index: number;
}) {
  return (
    <section className="mb-20 last:mb-0 md:mb-28">
      <Reveal className="mb-10 border-b hairline-strong pb-4 md:mb-14">
        <div className="flex items-baseline justify-between gap-6">
          <h3 className="font-display text-2xl tracking-tight text-bone md:text-3xl">
            <span className="text-bone-3">{romanize(index + 1)}.</span>{" "}
            {group.group}
          </h3>
          <span className="eyebrow hidden md:block">
            {group.items.length} {group.items.length === 1 ? "course" : "courses"}
          </span>
        </div>
        {group.note && (
          <p className="mt-2 max-w-2xl text-sm italic text-bone-3 md:text-base">
            {group.note}
          </p>
        )}
      </Reveal>

      <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 md:gap-y-16">
        {group.items.map((c, i) => (
          <Reveal key={c.code + c.title} delay={0.04 + i * 0.03}>
            <CourseBlock course={c} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CourseBlock({ course }: { course: Course }) {
  return (
    <article className="border-t hairline-strong pt-5">
      <header className="mb-5">
        <div className="flex items-baseline justify-between gap-3">
          <span className="font-mono text-xs text-ember md:text-sm">
            {course.code}
          </span>
          {course.when && (
            <span className="font-mono text-[10px] uppercase tracking-wider text-bone-3">
              {course.when}
            </span>
          )}
        </div>
        <h4 className="mt-2 font-display text-xl leading-snug tracking-tight text-bone md:text-2xl">
          {course.title}
        </h4>
        {course.note && (
          <p className="mt-2 text-sm italic text-bone-3">{course.note}</p>
        )}
      </header>

      {course.projects && course.projects.length > 0 && (
        <ul className="space-y-2.5 border-t hairline pt-4">
          {course.projects.map((p) => (
            <li key={p.name} className="flex items-baseline gap-3">
              <span className="mt-[3px] text-ember" aria-hidden>
                ◇
              </span>
              <div className="flex-1">
                <span className="font-mono text-xs text-bone md:text-sm">
                  {p.name}
                </span>
                <span className="text-bone-3"> · </span>
                <span className="text-sm leading-relaxed text-bone-2 md:text-[15px]">
                  {p.blurb}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

function romanize(n: number) {
  const map: Record<number, string> = {
    1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII",
  };
  return map[n] ?? String(n);
}
