import { Reveal } from "./Reveal";
import { LobbyDemo } from "./interactive/LobbyDemo";

const stack = [
  "Arduino · C++",
  "IR transmit / receive",
  "TENS unit · teardown",
  "Relay-driven shock trigger",
  "Python · Flask",
  "Flask-SocketIO",
  "iOS · Swift",
  "UIKit",
];

const beats = [
  {
    head: "The thesis",
    body: "Laser tag already exists. The whole game is solved at the toy-store level: photons hit a vest, a buzzer beeps, you keep playing. We wanted stakes that the body actually noticed — something between the photon and the score. The shock is what made it a game we actually wanted to play.",
  },
  {
    head: "The teardown",
    body: "Each player wears an IR receiver wired to a torn-down TENS unit — the over-the-counter electrode-pad device physiotherapists use for muscle stim. The Arduino sits between them. When the IR sensor catches a coded pulse, the Arduino briefly closes a relay and the TENS unit fires through the pads on your forearm. Current-limited and within consumer-device specs — sharp, not dangerous.",
  },
  {
    head: "The referee",
    body: "A Flask + SocketIO server runs the room: lobbies, teams, hit-points, modes (team-deathmatch and capture-the-flag). Every IR event routes through the server before it can fire any TENS unit, so the rules of the game live in one place — and the body trusts that singularity.",
  },
  {
    head: "The HUD",
    body: "Each player carries an iOS HUD — health, scoreboard, respawn timer. The phone is what you check between rounds. The Arduino is what carries the shot. The pads are what make you remember it. Three stacks, one feedback loop, one stinging forearm.",
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
          <span className="eyebrow">Real stakes for a fake game</span>
          <h2 className="mt-3 font-display text-7xl leading-[0.92] tracking-tight md:text-9xl">
            TaserTag<span className="font-display-italic text-ember">.</span>
          </h2>
          <p className="mt-6 max-w-2xl font-display-italic text-2xl leading-tight text-bone-2 md:text-3xl">
            Laser tag already exists. We tore apart TENS units, wired the
            electrode pads through Arduino relays, and built a tag game where
            getting hit means getting{" "}
            <span className="text-ember">shocked.</span>
          </p>
        </Reveal>

        <Reveal
          className="col-span-12 mt-10 flex flex-col items-start justify-end gap-4 md:col-span-4 md:mt-0 md:items-end"
          delay={0.1}
        >
          <span className="eyebrow">Three stacks · one game · one shock</span>
          <div className="flex flex-col gap-2 text-right font-mono text-xs text-bone">
            <span><span className="text-ember">◇</span> Arduino · IR · TENS</span>
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
              tag="01 · rig"
              title="Arduino"
              sub="IR emitter / receiver · TENS relay · pads on forearm"
            />
            <Node
              tag="02 · referee"
              title="Flask + SocketIO"
              sub="lobby · teams · hit logic · shock authorization"
              center
            />
            <Node
              tag="03 · HUD"
              title="iOS app"
              sub="health · scoreboard · respawn timer"
            />
          </div>
          <div className="md:col-span-12 -mt-2 hidden items-center justify-between font-mono text-[10px] text-bone-3 md:flex">
            <span>↳ IR pulse</span>
            <span>↳ websocket event · relay fire</span>
            <span>↳ HUD update</span>
          </div>
        </Reveal>

        {/* Live lobby */}
        <Reveal className="col-span-12 mt-12 md:mt-16 md:col-span-7" delay={0.15}>
          <LobbyDemo />
          <p className="mt-3 font-mono text-[10px] text-bone-3 uppercase tracking-wider">
            fig 01 — Lobby state, simulated. Real games include a real flinch.
          </p>
        </Reveal>

        <Reveal
          className="col-span-12 mt-12 flex flex-col gap-4 md:col-span-5 md:col-start-8 md:mt-16"
          delay={0.18}
        >
          <span className="eyebrow">What it taught me</span>
          <p className="text-base leading-relaxed text-bone-2 md:text-lg">
            Three stacks talking to each other in real time is the most
            humbling thing you can build — every clock skew, every dropped
            packet, every flaky IR hit, every misfired relay surfaces through
            whichever layer is loudest. You learn to instrument before you
            optimize. You also learn that physical feedback fixes a lot of
            UX bugs.
          </p>
        </Reveal>

        {/* Narrative beats */}
        <div className="col-span-12 mt-20 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
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
