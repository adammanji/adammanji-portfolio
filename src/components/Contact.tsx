import { Reveal } from "./Reveal";

const channels = [
  { label: "Email · personal", value: "adam.manji@berkeley.edu", href: "mailto:adam.manji@berkeley.edu" },
  { label: "Email · Bashi", value: "adam@bashi.app", href: "mailto:adam@bashi.app" },
  { label: "Email · Snappy", value: "adam@snappyfantasy.com", href: "mailto:adam@snappyfantasy.com" },
  { label: "GitHub", value: "adammanji", href: "https://github.com/adammanji" },
  { label: "LinkedIn", value: "/in/adam-manji-b883681b2", href: "https://www.linkedin.com/in/adam-manji-b883681b2/" },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative border-b hairline py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-x-6 px-6 md:gap-x-10 md:px-10">
        <Reveal className="col-span-12 mb-12 flex items-baseline justify-between md:mb-20">
          <span className="eyebrow">§ VI — colophon</span>
          <span className="eyebrow">Contact</span>
        </Reveal>

        <Reveal className="col-span-12 md:col-span-7">
          <h2 className="font-display text-6xl leading-[0.95] tracking-tight md:text-8xl">
            Get in <span className="font-display-italic">touch.</span>
          </h2>
          <p className="mt-6 max-w-md text-bone-2 md:text-lg">
            For Bashi, write to{" "}
            <span className="text-ember">adam@bashi.app</span>. For Snappy,
            <span className="text-ember"> adam@snappyfantasy.com</span>.
            Anything else, the Berkeley address is the easiest to reach.
          </p>
        </Reveal>

        <Reveal
          className="col-span-12 mt-12 md:col-span-5 md:mt-2"
          delay={0.1}
        >
          <ul className="border-t hairline-strong">
            {channels.map((c) => (
              <li key={c.label} className="border-b hairline-strong">
                <a
                  href={c.href}
                  className="group flex items-baseline justify-between py-4 transition-colors"
                >
                  <span className="eyebrow">{c.label}</span>
                  <span className="inline-flex items-center gap-2 font-mono text-sm text-bone group-hover:text-ember transition-colors">
                    {c.value}
                    <span
                      aria-hidden
                      className="transition-transform group-hover:translate-x-1"
                    >
                      ↗
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
