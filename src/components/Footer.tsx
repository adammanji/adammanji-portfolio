import { site } from "@/lib/content";

/* Closing block on every page: the one action, then the small print. */
export function Footer() {
  return (
    <footer className="on-night no-print mt-24 md:mt-32">
      <div className="sheet py-16 md:py-24">
        <h2 className="max-w-2xl text-3xl md:text-5xl">
          The quickest way to reach me is email.
        </h2>
        <p className="mt-5 max-w-xl text-lg opacity-85">
          I answer questions about Bashi, engineering roles, and anything on
          this site.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a className="btn btn-solid" href={`mailto:${site.email}`}>
            Email {site.email}
          </a>
          <a className="link ui" href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className="link ui" href={site.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        <p className="label mt-16">
          {site.name}. {site.locations.join(", ")}.
        </p>
      </div>
    </footer>
  );
}
