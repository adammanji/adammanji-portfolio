import Link from "next/link";
import type { ReactNode } from "react";

/*
  Shared building blocks. Every page is built from these so the site
  reads as one ledger book:

    <Page>            page column with the red margin line
    <PageHeader>      title, one-paragraph summary, optional facts and link
    <Section>         a titled block; title sits in the left column on desktop
    <Facts>           label / value pairs on ruled rows
    <Steps>           an ordered sequence (only for things that are a sequence)
    <Areas>           titled paragraphs in a two-column ruled grid
    <TagList>         a plain list of tools
    <A>               text link, internal or external
*/

export function Page({ children }: { children: ReactNode }) {
  return (
    <main id="main" className="sheet margin-line pb-4">
      {children}
    </main>
  );
}

export function A({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const external = /^(https?:|mailto:)/.test(href);
  if (external) {
    return (
      <a
        href={href}
        className={`link ${className}`}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={`link ${className}`}>
      {children}
    </Link>
  );
}

export type Fact = { label: string; value: string };

export function Facts({ facts }: { facts: Fact[] }) {
  return (
    <dl className="ruled">
      {facts.map((f) => (
        <div
          key={f.label}
          className="grid grid-cols-[6.5rem_1fr] items-baseline gap-4 py-2.5"
        >
          <dt className="label">{f.label}</dt>
          <dd className="ui text-base">{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function PageHeader({
  title,
  summary,
  facts,
  link,
}: {
  title: string;
  summary: string;
  facts?: Fact[];
  link?: { href: string; label: string };
}) {
  return (
    <header className="grid gap-x-16 gap-y-10 pt-14 pb-4 md:grid-cols-[1.25fr_1fr] md:pt-24">
      <div>
        <h1 className="text-5xl md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-[34rem] text-xl leading-normal md:text-2xl md:leading-[1.45]">
          {summary}
        </p>
        {link ? (
          <p className="ui mt-6 text-base">
            <A href={link.href}>{link.label}</A>
          </p>
        ) : null}
      </div>
      {facts ? (
        <div className="md:pt-3">
          <Facts facts={facts} />
        </div>
      ) : null}
    </header>
  );
}

export function Section({
  title,
  children,
  id,
}: {
  title: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className="mt-16 grid gap-x-12 gap-y-6 border-t-2 border-ink pt-6 md:mt-24 md:grid-cols-[14rem_1fr]"
    >
      <h2 className="text-2xl md:text-[1.75rem]">{title}</h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

export function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="prose-col">
      {paragraphs.map((p) => (
        <p key={p.slice(0, 32)}>{p}</p>
      ))}
    </div>
  );
}

export function Steps({
  steps,
}: {
  steps: { step: string; detail: string }[];
}) {
  return (
    <ol className="ruled">
      {steps.map((s, i) => (
        <li
          key={s.step}
          className="grid grid-cols-[2rem_1fr] gap-x-4 gap-y-1 py-4 md:grid-cols-[2.5rem_14rem_1fr]"
        >
          <span className="figures text-base text-red" aria-hidden>
            {i + 1}
          </span>
          <h3 className="text-lg">{s.step}</h3>
          <p className="col-start-2 text-base text-ink-soft md:col-start-3 md:text-[1.0625rem]">
            {s.detail}
          </p>
        </li>
      ))}
    </ol>
  );
}

export function Areas({
  areas,
}: {
  areas: { title: string; body: string }[];
}) {
  return (
    <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
      {areas.map((a) => (
        <div key={a.title}>
          <h3 className="text-xl">{a.title}</h3>
          <p className="mt-2 text-[1.0625rem]">{a.body}</p>
        </div>
      ))}
    </div>
  );
}

export function TagList({ items }: { items: string[] }) {
  return (
    <ul className="ui flex flex-wrap gap-x-2 gap-y-2 text-[0.9375rem]">
      {items.map((s) => (
        <li key={s} className="rounded-sm border border-rule bg-paper-2 px-2.5 py-1">
          {s}
        </li>
      ))}
    </ul>
  );
}
