"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#index", label: "Index" },
  { href: "#bashi", label: "Bashi" },
  { href: "#snappy", label: "Snappy" },
  { href: "#data", label: "Data" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md bg-ink/70 border-b hairline" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="#top"
          className="font-display text-xl tracking-tight text-bone hover:text-ember transition-colors"
        >
          Adam Manji
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="eyebrow hover:text-bone transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume/adam-manji-resume.pdf"
              className="eyebrow inline-flex items-center gap-2 border hairline-strong px-3 py-2 hover:border-ember hover:text-ember transition-colors"
            >
              Resume <span aria-hidden>↗</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
