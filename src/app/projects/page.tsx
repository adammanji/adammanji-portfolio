import type { Metadata } from "next";
import { A, Page, PageHeader, Section, TagList } from "@/components/ui";
import { earlier, projects, taserTag } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Things Adam Manji built for fun, for a hackathon, or to see if they would work.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <Page>
      <PageHeader
        title="Projects"
        summary="Things I built for fun, for a hackathon, or to see if they would work."
      />

      <article
        id={taserTag.slug}
        className="mt-12 scroll-mt-8 rounded-sm bg-paper-2 px-6 py-10 md:mt-16 md:px-14 md:py-14"
      >
        <p className="label figures">
          {taserTag.year} · {taserTag.kind}
        </p>
        <h2 className="mt-2 text-4xl md:text-6xl">{taserTag.name}</h2>
        <p className="mt-5 max-w-[38rem] text-xl leading-normal md:text-2xl md:leading-[1.45]">
          {taserTag.blurb}
        </p>
        {taserTag.detail ? (
          <div className="prose-col mt-8">
            {taserTag.detail.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        ) : null}
        {taserTag.stack ? (
          <div className="mt-8">
            <TagList items={taserTag.stack} />
          </div>
        ) : null}
      </article>

      <ul className="ruled mt-16 md:mt-20">
        {projects.map((p) => (
          <li key={p.slug} id={p.slug} className="scroll-mt-8">
            <article className="grid gap-x-10 gap-y-2 py-6 md:grid-cols-[14rem_1fr] md:py-8">
              <div>
                <h2 className="text-xl md:text-2xl">{p.name}</h2>
                <p className="label figures mt-1">
                  {p.year} · {p.kind}
                </p>
              </div>
              <div>
                <p className="max-w-[38rem] text-[1.0625rem]">{p.blurb}</p>
                {p.stack ? (
                  <p className="ui mt-3 text-[0.9375rem] text-ink-soft">
                    {p.stack.join(", ")}
                  </p>
                ) : null}
                {p.links ? (
                  <p className="ui mt-3 flex flex-wrap gap-x-5 text-base">
                    {p.links.map((l) => (
                      <A key={l.href} href={l.href}>
                        {l.label}
                      </A>
                    ))}
                  </p>
                ) : null}
              </div>
            </article>
          </li>
        ))}
      </ul>

      <Section title="Before Berkeley">
        <ul className="ruled">
          {earlier.map((line) => (
            <li key={line} className="py-3 text-[1.0625rem]">
              {line}
            </li>
          ))}
        </ul>
      </Section>
    </Page>
  );
}
