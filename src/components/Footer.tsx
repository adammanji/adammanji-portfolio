export function Footer() {
  return (
    <footer className="relative">
      <div className="mx-auto grid max-w-[1600px] grid-cols-12 items-end gap-x-6 px-6 py-10 md:gap-x-10 md:px-10 md:py-14">
        <div className="col-span-12 md:col-span-6">
          <p className="font-display text-7xl leading-[0.85] tracking-tight md:text-9xl lg:text-[12rem]">
            Adam <span className="font-display-italic">Manji</span>
          </p>
        </div>
        <div className="col-span-12 mt-6 flex items-end justify-between gap-6 md:col-span-6 md:mt-0 md:flex-col md:items-end">
          <div className="flex flex-col gap-1 text-right">
            <span className="eyebrow">© MMXXVI · Built in Berkeley</span>
            <span className="eyebrow">
              Set in Fraunces, Manrope &amp; JetBrains Mono
            </span>
          </div>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-bone-3 hover:text-ember transition-colors"
          >
            Back to top{" "}
            <span aria-hidden className="transition-transform group-hover:-translate-y-1">
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
