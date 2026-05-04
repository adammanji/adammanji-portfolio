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
    slug: "tolstoy",
    name: "Tolstoy",
    kind: "AI · Russian-lit recommender",
    year: "2024",
    status: "OpenAI · class final",
    blurb:
      "An OpenAI-backed recommender for niche 19th-century Russian literature. You feed it a list of books you've enjoyed and it returns less-obvious picks in the same vein — and it's hard-coded to refuse to suggest War and Peace, Crime and Punishment, Anna Karenina, or The Brothers Karamazov no matter what you give it.",
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

// ──────────────────────────────────────────────────────────────────────
// Coursework — every Berkeley course with hard evidence on disk or
// GitHub, plus pre-Berkeley. For each course, the most representative
// projects (curated, not exhaustive) and a 1-line note on what each did.
// ──────────────────────────────────────────────────────────────────────

export type CourseProject = {
  name: string;
  blurb: string;
};

export type Course = {
  code: string;
  title: string;
  when?: string;
  projects?: CourseProject[];
  note?: string;
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
      {
        code: "CS 61A",
        title: "Structure & Interpretation of Computer Programs",
        when: "Sp 2022",
        projects: [
          { name: "Hog", blurb: "Dice game with AI strategy and game-state management." },
          { name: "Cats", blurb: "Typing test, paragraph selection, word-frequency analysis." },
          { name: "Ants vs. SomeBees", blurb: "Tower-defense with an insect class hierarchy." },
          { name: "Scheme", blurb: "Functional-language interpreter — lexer, parser, evaluator, REPL." },
          { name: "Lambdaing", blurb: "Card-game engine with rule enforcement and command parsing." },
        ],
      },
      {
        code: "CS 61B",
        title: "Data Structures",
        when: "Fa 2022",
        projects: [
          { name: "2048", blurb: "Tile-sliding board game with move logic and end-state detection." },
          { name: "Deque", blurb: "Double-ended queue, linked-list and array implementations." },
          { name: "NGordnet", blurb: "N-gram timeline analysis with time-series plotting and a Spark web server." },
          { name: "BYOW", blurb: "Build-your-own-world: procedural dungeon generation, persistent state, interactive engine." },
        ],
      },
      {
        code: "CS 61C",
        title: "Machine Structures",
        when: "2023",
        projects: [
          { name: "Snek", blurb: "RISC-V interpreter for a snake-style game — instruction decode, execute, memory." },
          { name: "CS61Classify", blurb: "Neural-network inference in RISC-V — matrix ops, dot product, ReLU, all in assembly." },
          { name: "CS61CPU", blurb: "Single-cycle CPU in Logisim — full datapath, control logic, fetch/decode/execute." },
          { name: "Convolution", blurb: "Optimized image convolution with OpenMP threads and SIMD vectorization." },
        ],
      },
      {
        code: "CS 70",
        title: "Discrete Math & Probability",
        when: "Sp 2022",
        projects: [
          { name: "Grade Predictor", blurb: "Personal anxiety tool — given my midterm, what does the final need to look like to hit my target?" },
        ],
      },
      {
        code: "CS 161",
        title: "Computer Security",
        when: "Sp 2024",
        projects: [
          { name: "Project 2", blurb: "End-to-end-encrypted file sharing — key exchange, key revocation, integrity verification." },
          { name: "Project 3", blurb: "Web-security writeup — XSS, CSRF, SQL injection in a controlled playground." },
          { name: "Pwnable VM", blurb: "Binary-exploitation exercises across stack overflows, format-string bugs, return-oriented programming." },
        ],
      },
      {
        code: "CS 164",
        title: "Programming Languages & Compilers",
        when: "Fa 2024",
        projects: [
          { name: "PA1 · Parser", blurb: "ChocoPy lexer + ANTLR parser — operator precedence, error recovery, AST construction." },
          { name: "PA2 · Semantic Analysis", blurb: "Type checking and symbol-table construction over the AST." },
          { name: "PA3 · Code Generation", blurb: "Compile ChocoPy to RISC-V — register allocation, instruction selection, calling conventions." },
        ],
      },
      {
        code: "CS 186",
        title: "Introduction to Database Systems",
        when: "Sp 2025",
        projects: [
          { name: "RookieDB (proj0)", blurb: "Bootstrap a tiny relational database — foundation for everything else." },
          { name: "SQL & Relational Ops (proj1)", blurb: "Query interface and basic relational algebra." },
          { name: "Indices & Joins (proj2)", blurb: "B+ tree indices and three join algorithms — nested loops, hash, sort-merge." },
          { name: "Query Optimization (proj3)", blurb: "Cost-based planner — selectivity estimation and join reordering." },
          { name: "Concurrency (proj4)", blurb: "Multigranularity locking for serializable transactions." },
          { name: "Recovery (proj5)", blurb: "ARIES-style write-ahead logging, checkpoints, crash recovery." },
        ],
      },
      {
        code: "CS 188",
        title: "Introduction to Artificial Intelligence",
        projects: [
          { name: "Search", blurb: "BFS, DFS, UCS, A* on Pacman pathfinding — heuristic design and consistency proofs." },
          { name: "Multiagent", blurb: "Minimax, alpha-beta pruning, expectimax against ghost adversaries." },
          { name: "Reinforcement Learning", blurb: "Q-learning agent with feature extractors and value iteration on gridworld + Pacman." },
        ],
      },
      {
        code: "CS 189",
        title: "Introduction to Machine Learning",
        when: "Sp 2025",
        projects: [
          { name: "HW1 · SVM", blurb: "Kernel SVMs on MNIST and spam classification — C-tuning, cross-validation, Kaggle leaderboard." },
          { name: "HW7 · im2spain", blurb: "Geographic location prediction from CLIP image features — k-NN regression on 28k geo-tagged Spanish photos." },
        ],
      },
      {
        code: "EECS 16A",
        title: "Information Devices & Systems I",
        when: "Fa 2022",
        projects: [
          { name: "Python Bootcamp", blurb: "Numpy + signal-processing primer for circuit problems." },
          { name: "Touch Lab", blurb: "Capacitive touch sensor — hardware build plus signal interpretation." },
          { name: "Imaging Lab", blurb: "Single-pixel camera reconstruction — capture, basis projection, image recovery." },
        ],
      },
      {
        code: "EECS 16B",
        title: "Information Devices & Systems II",
        when: "Fa 2024",
        projects: [
          { name: "Labs 1—5", blurb: "Robotics, motor control, op-amps, signal processing — five hardware lab submissions." },
        ],
      },
    ],
  },
  {
    group: "Berkeley · Data, math, and the rest",
    items: [
      {
        code: "DATA 8",
        title: "Foundations of Data Science",
        projects: [
          { name: "Various", blurb: "Hypothesis testing, bootstrap, regression — the standard Data 8 path through real datasets." },
        ],
      },
      {
        code: "DATA 100",
        title: "Principles & Techniques of Data Science",
        projects: [
          { name: "Homework 1b", blurb: "Pandas, EDA, regression, classification — applied DS workflow." },
        ],
      },
      {
        code: "MATH 1A",
        title: "Calculus",
      },
      {
        code: "ISF 100J",
        title: "International & Area Studies",
        when: "Fa 2022",
        projects: [
          { name: "Three research papers", blurb: "Long-form essays on technology, society, and the politics of knowledge production." },
        ],
      },
      {
        code: "BIOENG 10",
        title: "Introduction to Biomedical Engineering",
        projects: [
          { name: "Final group project", blurb: "Self- and peer-evaluation team build on a biomedical engineering problem." },
        ],
      },
      {
        code: "FRENCH 185",
        title: "Topics in French Cinema",
        when: "Fa 2022",
      },
      {
        code: "AMERSTD",
        title: "American Studies",
        projects: [
          { name: "Research paper", blurb: "Long-form humanities writing on an American cultural artifact." },
        ],
      },
    ],
  },
  {
    group: "Pre-Berkeley · Queen's, high school, contests",
    note: "Transferred in via Queen's University in 2022; programming-contest history before that.",
    items: [
      {
        code: "CISC 124",
        title: "Queen's University · Object-Oriented Programming",
        when: "2022",
        projects: [
          { name: "Mayhem", blurb: "Text-based hangman variant — file-based word lists, interactive gameplay, OO design." },
        ],
      },
      {
        code: "CompSci",
        title: "High-school CS final",
        projects: [
          { name: "2D Java game", blurb: "Entity-component system, collision detection, single- and two-player modes." },
        ],
      },
      {
        code: "CCC",
        title: "Canadian Computing Competition",
        when: "2010 · 2011 · 2021",
        note: "Three years of submissions across the senior division.",
      },
      {
        code: "ECOO",
        title: "Educational Computing Organization of Ontario",
        when: "2020",
        note: "Multi-round competitive programming.",
      },
    ],
  },
];
