import type { Metadata } from "next";
import { A, Page, Section } from "@/components/ui";
import { resume, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Adam Manji: co-founder and CTO of Bashi, founder of Snappy, UC Berkeley Computer Science 2025.",
  alternates: { canonical: "/resume" },
};

function Rows({ rows }: { rows: { group: string; items: string }[] }) {
  return (
    <dl className="ruled">
      {rows.map((r) => (
        <div
          key={r.group}
          className="grid gap-x-8 gap-y-1 py-3 break-inside-avoid md:grid-cols-[11rem_1fr]"
        >
          <dt className="label font-medium text-ink">{r.group}</dt>
          <dd className="text-[1.0625rem]">{r.items}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function ResumePage() {
  return (
    <Page>
      <header className="pt-14 pb-4 md:pt-24 print:pt-0">
        <h1 className="text-5xl md:text-7xl">Resume</h1>
        <div className="mt-6 flex flex-col gap-x-8 gap-y-4 md:flex-row md:items-center">
          <a
            className="btn btn-solid no-print self-start"
            href={site.resumePdf}
            download
          >
            Download PDF
          </a>
          <p className="ui text-base">
            <A href={`mailto:${site.email}`}>{site.email}</A>
            {" · "}
            {site.locations.join(", ")}
            {" · "}
            <A href={site.linkedin}>LinkedIn</A>
            {" · "}
            <A href={site.github}>GitHub</A>
          </p>
        </div>
        <p className="mt-8 max-w-[44rem] text-[1.0625rem] leading-relaxed md:text-lg">
          {resume.summary}
        </p>
      </header>

      <Section title="Experience">
        <div className="flex flex-col gap-10">
          {resume.experience.map((e) => (
            <article key={e.org} className="break-inside-avoid">
              <div className="grid gap-x-8 gap-y-1 md:grid-cols-[1fr_auto]">
                <h3 className="text-xl">
                  {e.org}
                  <span className="ui font-normal">
                    {" "}
                    · {e.title}
                  </span>
                </h3>
                <p className="label figures md:text-right">
                  {e.when} · {e.where}
                </p>
              </div>
              {"link" in e && e.link ? (
                <p className="ui mt-1 text-base">
                  <A href={e.link.href}>{e.link.label}</A>
                </p>
              ) : null}
              {"lead" in e && e.lead ? (
                <p className="mt-2 text-[1.0625rem] text-ink-soft italic">
                  {e.lead}
                </p>
              ) : null}
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[1.0625rem] marker:text-ink-soft">
                {e.bullets.map((b) => (
                  <li key={b.slice(0, 40)}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Education">
        <div className="flex flex-col gap-8">
          {resume.education.map((e) => (
            <article key={e.org} className="break-inside-avoid">
              <div className="grid gap-x-8 gap-y-1 md:grid-cols-[1fr_auto]">
                <h3 className="text-xl">
                  {e.org}
                  <span className="ui font-normal"> · {e.title}</span>
                </h3>
                <p className="label figures md:text-right">{e.when}</p>
              </div>
              <p className="mt-2 text-[1.0625rem]">{e.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Skills">
        <Rows rows={resume.skills} />
      </Section>

      <Section title="Leadership and communication">
        <Rows rows={resume.leadership} />
      </Section>
    </Page>
  );
}
