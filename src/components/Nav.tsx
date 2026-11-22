"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/content";

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="no-print border-b border-rule">
      <div className="sheet flex flex-col gap-x-8 gap-y-2 py-4 md:flex-row md:items-center md:justify-between md:py-5">
        <Link
          href="/"
          className="ui text-lg font-semibold tracking-[0.14em] uppercase no-underline"
        >
          {site.name}
        </Link>
        <nav aria-label="Main">
          <ul className="ui -mx-2 flex flex-wrap items-center text-base">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex min-h-11 items-center px-2 no-underline md:px-3 ${
                      active ? "font-semibold" : "text-ink-soft hover:text-ink"
                    }`}
                  >
                    <span className={active ? "mark" : undefined}>
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
