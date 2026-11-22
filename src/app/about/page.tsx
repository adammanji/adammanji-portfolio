import type { Metadata } from "next";
import Image from "next/image";
import { A, Page, PageHeader, Prose, Section } from "@/components/ui";
import { about, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Adam Manji is an engineer and founder from Toronto, working between San Francisco and London.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <Page>
      <PageHeader
        title="About"
        summary="Engineer and founder, from Toronto, working between San Francisco and London."
      />

      <div className="mt-10 grid gap-x-14 gap-y-8 md:mt-14 md:grid-cols-[17.5rem_1fr]">
        <div>
          <Image
            src="/headshot/adam.jpg"
            alt="Adam Manji"
            width={640}
            height={840}
            priority
            sizes="(max-width: 768px) 160px, 280px"
            className="h-auto w-40 rounded-t-full border-[1.5px] border-ink object-cover md:w-[17.5rem]"
          />
        </div>
        <Prose paragraphs={about.bio} />
      </div>

      <Section title="Education">
        <ul className="ruled">
          {about.education.map((e) => (
            <li key={e.school} className="py-5">
              <div className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1">
                <div>
                  <h3 className="text-xl">{e.school}</h3>
                  <p className="ui text-base">{e.detail}</p>
                </div>
                <span className="figures label text-right">{e.years}</span>
              </div>
              <p className="mt-2 max-w-[40rem] text-[1.0625rem] text-ink-soft">
                {e.notes}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Outside work">
        <ul className="ruled">
          {about.outside.map((line) => (
            <li key={line} className="py-3 text-[1.0625rem]">
              {line}
            </li>
          ))}
        </ul>
      </Section>

      <p className="ui mt-16 pb-8 text-base md:mt-24">
        Read my <A href="/resume">resume</A> or{" "}
        <A href={`mailto:${site.email}`}>email me</A>.
      </p>
    </Page>
  );
}
