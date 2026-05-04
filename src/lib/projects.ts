export type Project = {
  num: string;
  slug: string;
  name: string;
  kind: string;
  year: string;
  status: string;
  href?: string;
  repo?: string;
  blurb: string;
};

export const flagship: Project[] = [
  {
    num: "01",
    slug: "bashi",
    name: "Bashi",
    kind: "B2B fintech · AI underwriting",
    year: "2025—",
    status: "MVP · live",
    href: "https://bashi.app",
    blurb:
      "An AI copilot for commercial credit underwriting. Reads financial PDFs, builds 5-year, 3-statement projections, and writes a memo a credit committee would actually read.",
  },
  {
    num: "02",
    slug: "snappy",
    name: "Snappy",
    kind: "Consumer mobile · ranked fantasy",
    year: "2024—",
    status: "Beta · TestFlight",
    href: "https://snappyfantasy.com",
    blurb:
      "Ranked fantasy sports for short attention spans. Pick three real players from live games, go head-to-head, climb from Bronze to Legend. Free to play, no money.",
  },
];

export const featured: Project[] = [
  {
    num: "03",
    slug: "tasertag",
    name: "TaserTag",
    kind: "Hardware · multiplayer game",
    year: "2022",
    status: "Functional prototype",
    blurb:
      "Real-life laser tag with custom infrared hardware, an iOS companion app, and a Python websocket server keeping the lobby honest. Three different stacks, one game, one weekend.",
  },
];

export const more: Project[] = [
  {
    num: "04",
    slug: "calhacks9",
    name: "CalHacks 9",
    kind: "Hackathon · NL → charts",
    year: "2022",
    status: "Hackathon submission",
    blurb:
      "A natural-language interface for plotting physics. Users typed sentences like \"quantum harmonic oscillator\" and a fine-tuned Cohere classifier mapped them to chart actions. October 2022 — a month before ChatGPT shipped.",
    repo: "https://github.com/adammanji/calhacks9",
  },
  {
    num: "05",
    slug: "croadle",
    name: "Croadle",
    kind: "Side project · web game",
    year: "2022",
    status: "Was deployed",
    blurb:
      "Wordle, but you're guessing today's UC Berkeley dining-hall menu. Flask, App Engine, a custom on-screen keyboard, and an admin page for the daily answer.",
  },
  {
    num: "06",
    slug: "islamophobia",
    name: "Documenting Islamophobia in Canada",
    kind: "Research · long-form web",
    year: "2024",
    status: "Published",
    blurb:
      "A nine-section research site — country profile, media influence, legal challenges, surveillance, countermeasures — with an interactive Leaflet map and hand-built static pages. The non-code work in the inventory.",
    href: "https://adammanji.github.io",
  },
];

export const all = [...flagship, ...featured, ...more];
