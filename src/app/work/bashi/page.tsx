import type { Metadata } from "next";
import { Areas, Page, PageHeader, Prose, Section, Steps, TagList } from "@/components/ui";
import { bashi, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Bashi",
  description: bashi.summary,
  alternates: { canonical: "/work/bashi" },
};

export default function BashiPage() {
  return (
    <Page>
      <PageHeader
        title={bashi.title}
        summary={bashi.summary}
        facts={bashi.facts}
        link={bashi.link}
      />

      <Section title="The problem">
        <Prose paragraphs={bashi.intro} />
      </Section>

      <Section title="How a file moves through it">
        <Steps steps={bashi.pipeline} />
      </Section>

      <Section title="What I do">
        <Areas areas={bashi.areas} />
      </Section>

      <Section title="Built with">
        <TagList items={bashi.stack} />
      </Section>

      <div className="mt-16 border-t-2 border-ink pt-8 pb-12 md:mt-24 md:pb-16">
        <p className="max-w-[34rem] text-xl leading-normal md:text-2xl md:leading-[1.45]">
          {bashi.closing}
        </p>
        <div className="mt-7">
          <a className="btn btn-solid" href={`mailto:${site.email}`}>
            Email me
          </a>
        </div>
      </div>
    </Page>
  );
}
