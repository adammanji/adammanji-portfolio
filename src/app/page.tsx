import Image from "next/image";
import Link from "next/link";
import { A, Page, TagList } from "@/components/ui";
import { bashi, home, projects, record, site, snappy, taserTag } from "@/lib/content";

export default function Home() {
  const picks = [taserTag, ...projects.slice(0, 3)];

  return (
    <Page>
      {/* Title card */}
      <section className="flex flex-col items-center pt-12 pb-14 text-center md:pt-20 md:pb-20">
        <div className="relative h-40 w-32 overflow-hidden rounded-t-full border-[1.5px] border-ink md:h-52 md:w-40">
          <Image
            src="/headshot/adam.jpg"
            alt="Adam Manji"
            fill
            priority
            sizes="(max-width: 768px) 128px, 160px"
            className="object-cover object-[50%_30%]"
          />
        </div>
        <h1 className="mt-8 text-[clamp(2.25rem,9vw,6rem)] leading-none font-bold tracking-[0.06em] uppercase">
          {site.name}
        </h1>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a className="btn btn-solid" href={`mailto:${site.email}`}>
            Email me
          </a>
          <Link className="btn btn-line" href="/resume">
            Read my resume
          </Link>
        </div>
        <p className="mt-9 max-w-[41rem] text-xl leading-normal md:text-2xl md:leading-[1.45]">
          {home.lede}
        </p>
        <p className="mt-4 max-w-[36rem] text-lg text-ink-soft">{home.second}</p>
      </section>

      {/* The record */}
      <section aria-labelledby="record-title">
        <div className="flex items-baseline justify-between gap-6 pb-3">
          <h2 id="record-title" className="text-2xl md:text-[1.75rem]">
            The record
          </h2>
          <p className="label hidden sm:block">Newest first</p>
        </div>
        <ol className="ruled enter-rows">
          {record.map((row) => {
            const body = (
              <div className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-1 py-4 md:grid-cols-[8.5rem_14rem_1fr_auto] md:items-baseline md:py-5">
                <span className="figures label order-2 text-right md:order-none md:text-left">
                  {row.years}
                </span>
                <span className="ui order-1 text-xl font-semibold md:order-none md:text-2xl">
                  {row.name}
                  {row.href ? (
                    <span aria-hidden className="ml-2 text-red">
                      ›
                    </span>
                  ) : null}
                </span>
                <span className="order-3 col-span-2 text-[1.0625rem] md:order-none md:col-span-1">
                  {row.role}
                </span>
                <span className="ui order-4 col-span-2 text-base md:order-none md:col-span-1 md:pr-1.5 md:text-right">
                  {row.note ? (
                    <span className={row.highlight ? "mark" : "text-ink-soft"}>
                      {row.note}
                    </span>
                  ) : null}
                </span>
              </div>
            );
            return (
              <li key={row.name}>
                {row.href ? (
                  <Link
                    href={row.href}
                    className="block no-underline transition-colors hover:bg-paper-2"
                  >
                    {body}
                  </Link>
                ) : (
                  body
                )}
              </li>
            );
          })}
        </ol>
      </section>

      {/* Bashi */}
      <section className="on-night mt-20 rounded-sm px-6 py-10 md:mt-28 md:px-14 md:py-16">
        <p className="label">Now. Co-founder and CTO.</p>
        <h2 className="mt-2 text-4xl md:text-6xl">Bashi</h2>
        <p className="mt-5 max-w-[38rem] text-xl leading-normal md:text-2xl md:leading-[1.45]">
          {bashi.homeBlurb}
        </p>
        <ol className="ui mt-9 grid gap-x-8 gap-y-0 text-base sm:grid-cols-2 lg:grid-cols-3">
          {bashi.pipeline.map((p, i) => (
            <li
              key={p.step}
              className="flex items-baseline gap-3 border-t border-paper/25 py-3"
            >
              <span className="figures text-mark">{i + 1}</span>
              {p.step}
            </li>
          ))}
        </ol>
        <div className="mt-9">
          <Link className="btn btn-solid" href="/work/bashi">
            Read about Bashi
          </Link>
        </div>
      </section>

      {/* Snappy */}
      <section className="mt-8 grid items-center gap-x-12 gap-y-10 rounded-sm bg-paper-2 px-6 py-10 md:grid-cols-[1.1fr_1fr] md:px-14 md:py-16">
        <div>
          <p className="label">2025 to now. Founder and sole engineer.</p>
          <h2 className="mt-2 text-4xl md:text-6xl">Snappy</h2>
          <p className="mt-5 max-w-[34rem] text-xl leading-normal">
            {snappy.homeBlurb}
          </p>
          <div className="mt-8">
            <Link className="btn btn-solid" href="/work/snappy">
              Read about Snappy
            </Link>
          </div>
        </div>
        <div className="flex justify-center gap-3 md:gap-4">
          {snappy.screens.slice(0, 3).map((s) => (
            <div
              key={s.src}
              className="relative aspect-[400/878] w-1/3 max-w-40 overflow-hidden rounded-xl border-[1.5px] border-ink bg-paper md:rounded-2xl"
            >
              <Image
                src={s.src}
                alt={`Snappy ${s.label.toLowerCase()} screen`}
                fill
                sizes="(max-width: 768px) 30vw, 160px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Side projects */}
      <section className="mt-20 md:mt-28" aria-labelledby="projects-title">
        <div className="flex items-baseline justify-between gap-6 pb-3">
          <h2 id="projects-title" className="text-2xl md:text-[1.75rem]">
            Side projects
          </h2>
          <A href="/projects" className="ui text-base">
            All projects
          </A>
        </div>
        <ul className="ruled">
          {picks.map((p) => (
            <li
              key={p.slug}
              className="grid gap-x-10 gap-y-2 py-5 md:grid-cols-[14rem_1fr_auto] md:items-baseline"
            >
              <h3 className="text-xl">
                <Link href={`/projects#${p.slug}`} className="no-underline hover:underline">
                  {p.name}
                </Link>
              </h3>
              <p className="max-w-[38rem] text-[1.0625rem]">{p.blurb}</p>
              <span className="figures label">{p.year}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Tools, for the reader scanning for a keyword */}
      <section className="mt-16 md:mt-20" aria-labelledby="tools-title">
        <h2 id="tools-title" className="pb-4 text-2xl md:text-[1.75rem]">
          What I work in
        </h2>
        <TagList
          items={[
            "Python",
            "TypeScript",
            "Django",
            "FastAPI",
            "PostgreSQL",
            "React and Next.js",
            "React Native",
            "AWS",
            "Terraform",
            "LLM pipelines and evals",
            "SOC 2",
          ]}
        />
      </section>
    </Page>
  );
}
