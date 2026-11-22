import type { Metadata } from "next";
import Image from "next/image";
import { A, Areas, Page, PageHeader, Prose, Section, Steps, TagList } from "@/components/ui";
import { snappy } from "@/lib/content";

export const metadata: Metadata = {
  title: "Snappy",
  description: snappy.summary,
  alternates: { canonical: "/work/snappy" },
};

export default function SnappyPage() {
  const [closingBefore, closingAfter = ""] = snappy.closing.split(snappy.link.label);
  return (
    <Page>
      <PageHeader
        title={snappy.title}
        summary={snappy.summary}
        facts={snappy.facts}
        link={snappy.link}
      />

      {/* Screens: scroll-snap row on mobile, six across on desktop */}
      <div
        role="region"
        aria-label="Snappy screenshots"
        tabIndex={0}
        className="mt-10 -mx-(--gutter) overflow-x-auto overscroll-x-contain px-(--gutter) pb-2 md:mt-16 md:mx-0 md:overflow-visible md:px-0"
      >
        <ul className="flex snap-x snap-mandatory scroll-px-(--gutter) gap-3 md:grid md:grid-cols-6 md:gap-4">
          {snappy.screens.map((s) => (
            <li key={s.src} className="w-[44vw] shrink-0 snap-start md:w-auto">
              <div className="relative aspect-[400/798] w-full overflow-hidden rounded-xl border-[1.5px] border-ink bg-paper md:rounded-2xl">
                <Image
                  src={s.src}
                  alt={`Snappy app screen: ${s.label}`}
                  fill
                  sizes="(max-width: 768px) 44vw, 180px"
                  className="object-cover"
                />
              </div>
              <p className="label mt-2">{s.label}</p>
            </li>
          ))}
        </ul>
      </div>

      <Section title="Why I built it">
        <Prose paragraphs={snappy.intro} />
      </Section>

      <Section title="How a match works">
        <Steps steps={snappy.match} />
      </Section>

      {/* Numbers strip */}
      <dl className="ruled mt-16 grid grid-cols-2 md:mt-24 md:grid-cols-4">
        {snappy.numbers.map((n) => (
          <div key={n.label} className="py-6 pr-4 md:py-8">
            <dt className="figures text-5xl leading-none font-semibold md:text-6xl">
              {n.value}
            </dt>
            <dd className="label mt-3 max-w-[14rem]">{n.label}</dd>
          </div>
        ))}
      </dl>

      <Section title="What I built">
        <Areas areas={snappy.areas} />
      </Section>

      <Section title="Built with">
        <TagList items={snappy.stack} />
      </Section>

      <div className="mt-16 border-t-2 border-ink pt-8 pb-12 md:mt-24 md:pb-16">
        <p className="max-w-[34rem] text-xl leading-normal md:text-2xl md:leading-[1.45]">
          {closingBefore}
          <A href={snappy.link.href}>{snappy.link.label}</A>
          {closingAfter}
        </p>
      </div>
    </Page>
  );
}
