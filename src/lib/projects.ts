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
    year: "2025—",
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
    kind: "Hardware · physical-stakes tag",
    year: "2022",
    status: "Functional prototype",
    blurb:
      "Tag, but with consequences. We tore apart consumer TENS units and wired their electrode pads through Arduino relays — get hit by an IR pulse, take a real shock. An iOS HUD and a Python websocket server keep the lobby honest.",
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
    slug: "madness",
    name: "Madness 2026",
    kind: "Sports ML · bracket optimization",
    year: "2026",
    status: "Personal tournament use",
    blurb:
      "A full pipeline for the 2026 NCAA bracket. XGBoost win-probabilities calibrated with isotonic regression, blended with Vegas lines, then a 100k-iteration Monte Carlo that picks the bracket maximizing P(top-3 finish) in a 40-person pool.",
  },
  {
    num: "06",
    slug: "vinyl",
    name: "Vinyl Player",
    kind: "Hardware · RFID / NFC",
    year: "2022—",
    status: "Long-running side build",
    blurb:
      "A digital vinyl player. Tap an NFC-tagged card on an MSP430 reader and the matching record starts playing — physical artifact for a digital library. Energia firmware, custom RFID handling, hand-cut chipboard \"sleeves\".",
  },
  {
    num: "07",
    slug: "croadle",
    name: "Croadle",
    kind: "Side project · web game",
    year: "2022",
    status: "Was deployed",
    blurb:
      "Wordle, but you're guessing today's UC Berkeley dining-hall menu. Flask, App Engine, a custom on-screen keyboard, and an admin page for the daily answer.",
  },
  {
    num: "08",
    slug: "cs70-predictor",
    name: "CS 70 Predictor",
    kind: "Tiny tool · for myself",
    year: "2022",
    status: "Personal-use micro-tool",
    blurb:
      "A statistical tool I wrote for myself before the CS 70 final. Take my midterm score, the historical exam correlation, the grade I wanted — and tell me the standard deviation I'd need on the final to get there. Built, in my own words, “out of pure anxiety.”",
  },
  {
    num: "09",
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

// Coursework — filed together. Semesters included only when there's hard
// folder/filename evidence (otherwise omitted rather than guessed).
export type Course = {
  code: string;
  title: string;
  when?: string;
};

export type CourseGroup = {
  group: string;
  note?: string;
  items: Course[];
};

export const coursework: CourseGroup[] = [
  {
    group: "Berkeley · Computer Science & EECS",
    items: [
      { code: "CS 61A", title: "Structure & Interpretation of Computer Programs" },
      { code: "CS 61B", title: "Data Structures", when: "Fa 2022" },
      { code: "CS 61C", title: "Machine Structures", when: "2023" },
      { code: "CS 70",  title: "Discrete Math & Probability" },
      { code: "CS 161", title: "Computer Security", when: "Sp 2024" },
      { code: "CS 164", title: "Programming Languages & Compilers", when: "Fa 2024" },
      { code: "CS 186", title: "Introduction to Database Systems", when: "Sp 2025" },
      { code: "CS 188", title: "Introduction to Artificial Intelligence" },
      { code: "CS 189", title: "Introduction to Machine Learning" },
      { code: "EECS 16A", title: "Information Devices & Systems I", when: "Fa 2022" },
      { code: "EECS 16B", title: "Information Devices & Systems II" },
    ],
  },
  {
    group: "Berkeley · Data, Math, and the rest",
    items: [
      { code: "DATA 8",   title: "Foundations of Data Science" },
      { code: "DATA 100", title: "Principles & Techniques of Data Science" },
      { code: "MATH 1A",  title: "Calculus" },
      { code: "ISF 100J", title: "International & Area Studies" },
      { code: "BIOENG 10", title: "Introduction to Biomedical Engineering" },
      { code: "FRENCH 185", title: "Topics in French Cinema", when: "Fa 2022" },
      { code: "AMERSTD",   title: "American Studies · research paper" },
    ],
  },
  {
    group: "Pre-Berkeley · Queen's, high school, contests",
    note: "Transfer-in via Queen's University; contest history before that.",
    items: [
      { code: "CISC 124", title: "Queen's University · Object-Oriented Java" },
      { code: "CompSci",  title: "High-school CS final · multi-level Java game" },
      { code: "CCC",      title: "Canadian Computing Competition · 2010 · 2011 · 2021" },
      { code: "ECOO 2020", title: "Canadian H.S. Programming Contest" },
    ],
  },
];
