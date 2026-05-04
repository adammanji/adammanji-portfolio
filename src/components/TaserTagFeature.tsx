import { Reveal } from "./Reveal";
import { LobbyDemo } from "./interactive/LobbyDemo";

const stack = [
  "Arduino · C++",
  "IR transmit / receive",
  "Python · Flask",
  "Flask-SocketIO",
  "iOS · Swift",
  "UIKit",
];

const beats = [
  {
    head: "The hardware",
    body: "Each gun is an Arduino-driven IR emitter wired to a trigger and a chest-mounted IR receiver. A hit registers as a coded pulse the receiver decodes — not just \"something flashed,\" but which player fired. The protocol gets you team-deathmatch instead of chaos.",
  },
  {
    head: "The server",
    body: "A Python Flask + SocketIO server runs the room. It tracks lobbies, teams, hit-points, and game modes — team deathmatch and capture-the-flag. Every IR event from every gun routes through it, so the truth of the game lives in one place.",
  },
  {
    head: "The phone",
    body: "Each player carries an iOS app — health bar, scoreboard, respawn timer, ammo counter. The phone is the HUD. The Arduino is the gun. The server is the referee. Three different stacks. One game.",
  },
];

export function TaserTagFeature() {
  return (
    <section
      id="tasertag"
      className="relative border-b hairline py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-x-6 px-6 md:gap-x-10 md:px-10">
        <Reveal className="col-span-12 mb-10 flex items-baseline justify-between border-b hairline-strong pb-4 md:mb-14">
          <span className="font-mono text-xs text-bone-3">№ 03</span>
          <span className="eyebrow">A case study</span>
          <span className="font-mono text-xs text-bone-3 hidden md:inline">
            2022 · functional prototype
          </span>
        </Reveal>

        <Reveal className="col-span-12 md:col-span-8">
          <span className="eyebrow">Hardware × software × phone</span>
          <h2 className="mt-3 font-display text-7xl leading-[0.92] tracking-tight md:text-9xl">
            TaserTag<span className="font-display-italic text-ember">.</span>
          </h2>
          <p className="mt-6 max-w-2xl font-display-italic text-2xl leading-tight text-bone-2 md:text-3xl">
            Real-life laser tag. Custom IR hardware on the gun, Python
            websockets on the server, an iOS app for the HUD.
          </p>
        </Reveal>

        <Reveal
          className="col-span-12 mt-10 flex flex-col items-start justify-end gap-4 md:col-span-4 md:mt-0 md:items-end"
          delay={0.1}
        >
          <span className="eyebrow">Three stacks · one game</span>
          <div className="flex flex-col gap-2 text-right font-mono text-xs text-bone">
            <span><span className="text-ember">◇</span> Arduino · C++</span>
            <span><span className="text-ember">◇</span> Python · WebSockets</span>
            <span><span className="text-ember">◇</span> iOS · Swift</span>
          </div>
        </Reveal>

        {/* Schematic */}
        <Reveal
          className="col-span-12 mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-12 md:gap-10"
          delay={0.12}
        >
          <div className="md:col-span-12 grid grid-cols-3 items-stretch gap-px bg-ink-3">
            <Node
              tag="01 · gun"
              title="Arduino"
              sub="IR emitter · trigger · receiver chest"
            />
            <Node
              tag="02 · server"
              title="Flask + SocketIO"
              sub="lobby · teams · hit logic"
              center
            />
            <Node
              tag="03 · HUD"
              title="iOS app"
              sub="health · scoreboard · respawn"
            />
          </div>
          <div className="md:col-span-12 -mt-2 hidden items-center justify-between font-mono text-[10px] text-bone-3 md:flex">
            <span>↳ IR pulse</span>
            <span>↳ websocket event</span>
            <span>↳ HUD update</span>
          </div>
        </Reveal>

        {/* Live lobby */}
        <Reveal className="col-span-12 mt-12 md:mt-16 md:col-span-7" delay={0.15}>
          <LobbyDemo />
          <p className="mt-3 font-mono text-[10px] text-bone-3 uppercase tracking-wider">
            fig 01 — Lobby state, simulated
          </p>
        </Reveal>

        <Reveal
          className="col-span-12 mt-12 flex flex-col gap-4 md:col-span-5 md:col-start-8 md:mt-16"
          delay={0.18}
        >
          <span className="eyebrow">What it taught me</span>
          <p className="text-base leading-relaxed text-bone-2 md:text-lg">
            Three stacks talking to each other in real time is the most
            humbling thing you can build. Every clock skew, every dropped
            packet, every flaky IR hit becomes a bug surfaced through whichever
            layer is loudest. You learn to instrument before you optimize.
          </p>
        </Reveal>

        {/* Narrative beats */}
        <div className="col-span-12 mt-20 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {beats.map((b, i) => (
            <Reveal key={b.head} delay={0.05 * i}>
              <div className="border-t hairline-strong pt-5">
                <span className="eyebrow">§ {String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 font-display text-2xl text-bone md:text-3xl">
                  {b.head}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-bone-2 md:text-base">
                  {b.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="col-span-12 mt-16 border-t hairline-strong pt-6">
          <div className="mb-4 flex items-baseline justify-between">
            <span className="eyebrow">Stack</span>
            <span className="eyebrow">{stack.length} items</span>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs text-bone md:text-sm">
            {stack.map((s) => (
              <li key={s} className="before:mr-2 before:text-ember before:content-['◇']">
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Node({
  tag,
  title,
  sub,
  center,
}: {
  tag: string;
  title: string;
  sub: string;
  center?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-2 bg-ink p-5 md:p-6 ${
        center ? "bg-ink-2" : ""
      }`}
    >
      <span className="eyebrow">{tag}</span>
      <span className="font-display text-2xl leading-tight text-bone md:text-3xl">
        {title}
      </span>
      <span className="font-mono text-[10px] text-bone-3 uppercase tracking-wider md:text-[11px]">
        {sub}
      </span>
    </div>
  );
}
