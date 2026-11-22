/*
  Every fact and line of copy on the site lives here.
  Source of truth: the Sep 2026 resume. Keep Bashi at resume-level detail
  (no customer names, no internal architecture, no screenshots).
*/

export const site = {
  name: "Adam Manji",
  url: "https://adammanji.com",
  role: "Co-founder and CTO, Bashi",
  email: "adam@bashi.app",
  locations: ["Toronto", "San Francisco", "London"],
  github: "https://github.com/adammanji",
  linkedin: "https://www.linkedin.com/in/adam-manji-b883681b2/",
  resumePdf: "/adam-manji-resume.pdf",
  description:
    "Adam Manji is the co-founder and CTO of Bashi, a credit intelligence platform for lenders in emerging markets. He also built and runs Snappy, a ranked fantasy-basketball game.",
};

export const nav = [
  { href: "/work/bashi", label: "Bashi" },
  { href: "/work/snappy", label: "Snappy" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
];

export const home = {
  lede: "I'm the co-founder and CTO of Bashi, a credit intelligence platform for lenders in emerging markets. I led the build, run the engineering team, and own security and compliance. It's in a production pilot with a regulated lender in Latin America.",
  second:
    "I also designed and built Snappy, a ranked fantasy-basketball game, on my own, and relaunched it for the NBA season in November 2026.",
};

export type RecordRow = {
  years: string;
  name: string;
  role: string;
  note?: string;
  highlight?: boolean;
  href?: string;
};

/* The career record, newest first. Shown as the ledger on the home page. */
export const record: RecordRow[] = [
  {
    years: "2026 – now",
    name: "Bashi AI",
    role: "Co-founder and CTO",
    note: "In pilot",
    highlight: true,
    href: "/work/bashi",
  },
  {
    years: "2025 – now",
    name: "Snappy",
    role: "Founder and CEO",
    note: "Relaunched Nov 2026",
    href: "/work/snappy",
  },
  {
    years: "2023",
    name: "Bank of Montreal",
    role: "Software engineering intern, Treasury and Payments Technology",
  },
  {
    years: "2020 – 2025",
    name: "Fiverr",
    role: "Freelance full-stack and game developer",
    note: "4.9 of 5 rating",
  },
  {
    years: "2021 – 2025",
    name: "UC Berkeley",
    role: "B.A. Computer Science",
  },
  {
    years: "2016 – 2021",
    name: "Upper Canada College",
    role: "International Baccalaureate Diploma",
  },
];

export const bashi = {
  title: "Bashi",
  summary:
    "A credit intelligence platform for lenders in emerging markets. It reads a borrower's financial documents, spreads and reconciles the numbers, runs diligence, and drafts the credit memo for an analyst to review.",
  facts: [
    { label: "Role", value: "Co-founder and CTO" },
    { label: "When", value: "May 2026 to now" },
    { label: "Where", value: "San Francisco and London" },
    { label: "Status", value: "Production pilot, Latin America" },
  ],
  link: { href: "https://bashi.app", label: "bashi.app" },
  homeBlurb:
    "Lenders in emerging markets spend days turning a stack of borrower documents into a credit decision. Bashi does the reading, the spreading and the first draft, and keeps an analyst in charge of the judgment.",
  intro: [
    "Commercial lenders decide whether to extend credit by reading a borrower's financial statements, re-keying the numbers into a model, checking them against everything else they know about the company, and writing a memo. In emerging markets the documents are messier and the work is slower.",
    "Bashi takes that workflow end to end. As co-founder and CTO I led the build, and the platform is now in a production pilot with a regulated lender.",
  ],
  /* The analyst's path through the product, in order. */
  pipeline: [
    {
      step: "Document ingestion",
      detail: "Borrower files come in as PDFs and scans and are classified and read.",
    },
    {
      step: "Financial spreading",
      detail: "A language-model pipeline lifts the statements into a standard structure.",
    },
    {
      step: "Reconciliation",
      detail: "Figures are checked against each other so errors surface before an analyst sees them.",
    },
    {
      step: "Borrower diligence",
      detail: "The company is researched and the findings are attached to the file.",
    },
    {
      step: "Analyst review",
      detail: "A credit analyst inspects, corrects and approves every number.",
    },
    {
      step: "Credit memo",
      detail: "The memo is drafted from the approved file, ready for committee.",
    },
  ],
  areas: [
    {
      title: "The platform",
      body: "I led the build for a regulated first customer on Django, PostgreSQL and AWS, with infrastructure as code and CI/CD. The core product is mine: ingestion, spreading and reconciliation, diligence, analyst review and memo generation.",
    },
    {
      title: "Measuring accuracy",
      body: "A model that is usually right is not good enough for a credit decision. The product is backed by an evaluation program that measures extraction accuracy, so a change to a prompt or a model is judged on numbers.",
    },
    {
      title: "Security and compliance",
      body: "I run the SOC 2 program and manage penetration testing and remediation. I designed the multi-tenancy, access control, audit trail and data protection that a regulated lender needs before it will send real borrower files.",
    },
    {
      title: "The team",
      body: "I lead the engineering team through a pull-request workflow with CI and code review, and I own the roadmap, architecture decisions and production releases.",
    },
    {
      title: "Customers and investors",
      body: "I represent the technical side of the company with customers, partners and investors: RFP responses, pilot scoping and technical due diligence.",
    },
  ],
  stack: ["Python", "Django", "PostgreSQL", "AWS", "Terraform", "GitHub Actions", "Claude and OpenAI APIs"],
  closing:
    "The product is private while the pilot runs, so there are no screenshots here. I'm happy to walk through it on a call.",
};

export const snappy = {
  title: "Snappy",
  summary:
    "Ranked fantasy basketball. Draft three real players, play one opponent over a single live quarter, and climb a ladder from Bronze to Legend. Free to play.",
  facts: [
    { label: "Role", value: "Founder and sole engineer" },
    { label: "When", value: "Sep 2025 to now" },
    { label: "Where", value: "San Francisco" },
    { label: "Sport", value: "NBA" },
    { label: "Status", value: "Rebuilt and relaunched, Nov 2026" },
  ],
  link: { href: "https://snappyfantasy.com", label: "snappyfantasy.com" },
  homeBlurb:
    "Daily fantasy asks for an evening and a spreadsheet. Snappy is a match you can finish in one quarter: a 20-second draft, live scoring, and a rank on the line.",
  intro: [
    "Daily fantasy is built for people who will study a slate for an evening. I wanted the version you can play while a game is on: short, head to head, ranked, and free.",
    "I designed and built all of it myself and shipped the first version to a TestFlight beta, then paused it in May 2026 to work on Bashi full time. In November 2026 I rebuilt it for the NBA season: a new data layer, a new game engine, a new app and a new look. The daily five is playable on the website now, and the iOS app is next.",
  ],
  /* A match, in order. */
  match: [
    {
      step: "Match",
      detail:
        "Pick one of tonight's games and get paired with an opponent near your rating, usually within a few seconds. Or send a friend a six-character code.",
    },
    {
      step: "Draft",
      detail:
        "Take turns drafting three players from the quarter about to start. You have 20 seconds a pick.",
    },
    {
      step: "Compete",
      detail:
        "Your three players face theirs in three lanes, scored live over one quarter. Tap any card to see the stat line behind its score.",
    },
  ],
  numbers: [
    { value: "1 v 1", label: "every duel is head to head" },
    { value: "20 s", label: "on the clock for each pick" },
    { value: "8", label: "divisions, Bronze to Legend" },
    { value: "$0", label: "to play" },
  ],
  areas: [
    {
      title: "Real-time systems",
      body: "The hard part is that the game runs on live sports. The rebuilt data layer stores every play as it arrives and derives each player's quarter from the play-by-play, then checks itself against the official box score every night. On top of it sit ranked matchmaking, live scoring and a Glicko-2 ladder.",
    },
    {
      title: "Two ways to play",
      body: "Duels are the ranked one-on-one game in the app. The daily five is a lighter contest that also runs in the browser: five players, a $15 budget, and one crown a night.",
    },
    {
      title: "Shipping it properly",
      body: "The backend runs in production with more than a thousand automated tests and monitoring behind it. I ran a full security review of the new API and fixed what it found.",
    },
    {
      title: "The business",
      body: "I formed the company, worked through fantasy-sports regulation, and pitched investors.",
    },
  ],
  stack: [
    "React Native (Expo)",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "WebSockets",
    "Sign in with Apple",
    "Glicko-2",
    "Railway",
  ],
  screens: [
    { src: "/snappy/home.png", label: "Tonight's games" },
    { src: "/snappy/draft.png", label: "Draft" },
    { src: "/snappy/live.png", label: "Live quarter" },
    { src: "/snappy/stat_line.png", label: "Stat line" },
    { src: "/snappy/won.png", label: "Result" },
    { src: "/snappy/daily_five.png", label: "Daily five" },
  ],
  closing:
    "Tonight's daily five is open at snappyfantasy.com.",
};

export type Project = {
  slug: string;
  name: string;
  year: string;
  kind: string;
  blurb: string;
  detail?: string[];
  stack?: string[];
  links?: { href: string; label: string }[];
};

export const taserTag: Project = {
  slug: "tasertag",
  name: "TaserTag",
  year: "2025",
  kind: "Hardware game",
  blurb:
    "Laser tag where getting hit gives you a mild electric shock. A working prototype built with friends at Berkeley.",
  detail: [
    "Each player wears an infrared receiver wired to an Arduino and a consumer TENS unit, the muscle-stimulation device physiotherapists use. When the receiver catches a coded pulse from another player's emitter, the Arduino closes a relay for a moment and the pads on your forearm fire.",
    "A Flask and SocketIO server referees the game. It runs lobbies, teams, hit points and two modes, team deathmatch and capture the flag, and every hit goes through it before any shock is authorized. Each player carries an iOS app showing health, the scoreboard and a respawn timer.",
    "Three stacks talking in real time taught me to instrument first. Dropped packets, clock skew and flaky infrared hits all look the same until you can see each layer.",
  ],
  stack: ["Arduino (C++)", "Infrared", "TENS units and relays", "Python", "Flask-SocketIO", "Swift (UIKit)"],
};

export const projects: Project[] = [
  {
    slug: "surge",
    name: "Surge",
    year: "2026",
    kind: "Vibecon SF",
    blurb:
      "AI agents that run the front office for small trade shops: taking incoming jobs, forecasting demand, dispatching crews, and referring work a shop can't take to one that can. The agents were trained in reinforcement-learning environments built from real-world data. Designed and built in 20 hours, then demoed at Vibecon SF 2026, held at Y Combinator.",
    stack: ["AI agents", "Reinforcement learning"],
    links: [{ href: "https://garza-surge.emergent.host/", label: "Visit" }],
  },
  {
    slug: "madness",
    name: "Madness 2026",
    year: "2026",
    kind: "Sports modelling",
    blurb:
      "A pipeline for filling out an NCAA bracket. XGBoost win probabilities, calibrated and blended with Vegas lines, feed a 100,000-run Monte Carlo that picks the bracket most likely to finish top three in a 40-person pool. It won the pool.",
    stack: ["Python", "XGBoost", "scikit-learn"],
  },
  {
    slug: "calhacks10",
    name: "Seeing Eye Dog",
    year: "2023",
    kind: "Cal Hacks 10",
    blurb:
      "Computer vision on a Boston Dynamics Spot robot, built in a weekend, so the robot could act as a guide dog.",
    stack: ["Python", "OpenCV"],
    links: [{ href: "https://github.com/adammanji/calhacks10", label: "Code" }],
  },
  {
    slug: "calhacks9",
    name: "Plain-English physics plots",
    year: "2022",
    kind: "Cal Hacks 9",
    blurb:
      "Type a sentence like \"quantum harmonic oscillator\" and get the chart. A fine-tuned Cohere classifier mapped language to plotting actions, a month before ChatGPT came out.",
    stack: ["Cohere", "Three.js", "Matter.js"],
    links: [{ href: "https://github.com/adammanji/calhacks9", label: "Code" }],
  },
  {
    slug: "vinyl",
    name: "Vinyl player",
    year: "2022",
    kind: "Hardware",
    blurb:
      "Tap an NFC-tagged card on the reader and that record starts playing. A physical shelf for a digital library, with hand-cut chipboard sleeves.",
    stack: ["MSP430", "RFID and NFC", "Energia"],
  },
  {
    slug: "croadle",
    name: "Croadle",
    year: "2022",
    kind: "Web game",
    blurb:
      "Wordle, except the answer is something on today's Berkeley dining-hall menu. At its peak about 2,000 people a day were playing.",
    stack: ["Flask", "JavaScript", "App Engine"],
  },
  {
    slug: "tolstoy",
    name: "Tolstoy",
    year: "2024",
    kind: "Recommender",
    blurb:
      "A recommender for 19th-century Russian literature. Tell it which books you already like and it finds lesser-known novels in the same vein, past the famous titles everyone has already been told to read.",
    stack: ["Python", "OpenAI API"],
  },
  {
    slug: "islamophobia",
    name: "Documenting Islamophobia in Canada",
    year: "2024",
    kind: "Research site",
    blurb:
      "A nine-section research site covering media, law, surveillance and countermeasures, with an interactive map.",
    stack: ["HTML and CSS", "Leaflet"],
    links: [{ href: "https://adammanji.github.io", label: "Visit" }],
  },
];

/* Before Berkeley. */
export const earlier = [
  "Founded the Programming 101 club at Upper Canada College and taught other students to code.",
  "Trained a Flappy Bird agent with NEAT and wrote a research paper on genetic algorithms, in 2020.",
  "Canadian Computing Competition 2019 and 2020, and ECOO 2019.",
  "Godot Wild Jam #22.",
];

export const about = {
  bio: [
    "I grew up in Toronto and started programming in tenth grade. I did the International Baccalaureate Diploma at Upper Canada College, where I started a club to teach other students to code, then moved to California for a computer science degree at UC Berkeley and graduated in 2025.",
    "After graduating I started Snappy, a ranked fantasy-basketball game, and built it alone. Since May 2026 I've been co-founder and CTO of Bashi, where I lead the engineering team building a credit intelligence platform for lenders in emerging markets.",
    "I like the part of a problem where messy real-world data has to become something a person can trust and use, whether that's a box score arriving one play at a time or a scanned balance sheet.",
  ],
  outside: [
    "I play basketball every week and watch every Formula 1 race.",
    "I read 19th-century Russian novels and built a recommender to find more of them.",
    "I surf, on a longboard.",
    "I speak English and French.",
  ],
  education: [
    {
      school: "University of California, Berkeley",
      detail: "B.A. Computer Science",
      years: "2021 – 2025",
      notes:
        "CS Mentor. Cal Hacks 8, 9 and 10. Coursework in software engineering, artificial intelligence, computer security, compilers, computer architecture, data structures, and data science.",
    },
    {
      school: "Upper Canada College, Toronto",
      detail: "International Baccalaureate Diploma",
      years: "2016 – 2021",
      notes: "Founded the Programming 101 club.",
    },
  ],
};

export const resume = {
  summary:
    "Software engineer and two-time technical founder, UC Berkeley Computer Science (2025). In the past year, designed, built, and shipped two production products: a real-time mobile fantasy-sports app and an AI commercial credit intelligence platform now in pilot with a regulated lender. Experienced across the full span of building a product: architecture, infrastructure, security and compliance, hiring, and working directly with customers.",
  experience: [
    {
      org: "Bashi AI",
      title: "Co-Founder & CTO",
      when: "May 2026 – Present",
      where: "San Francisco, USA / London, UK",
      link: { href: "https://bashi.app", label: "bashi.app" },
      lead: "Commercial credit intelligence platform for lenders in emerging markets, in production pilot with customers in Latin America.",
      bullets: [
        "Led the build of the platform for a regulated first customer on Django, PostgreSQL, and AWS with infrastructure as code and CI/CD; built the core product: document ingestion, LLM-based financial spreading and reconciliation, borrower diligence, analyst review, and credit-memo generation, backed by an evaluation program to measure accuracy.",
        "Own security and compliance: run the SOC 2 program, penetration testing and remediation, and the multi-tenancy, access-control, audit-trail, and data-protection design.",
        "Lead the engineering team through a PR-based workflow with CI and code review, own the roadmap, architecture decisions, and production releases, and represent the technical side of the company with customers, partners, and investors, from RFP responses to pilot scoping and technical due diligence.",
      ],
    },
    {
      org: "Snappy",
      title: "Founder & CEO",
      when: "Sep 2025 – May 2026",
      where: "San Francisco, USA",
      link: { href: "https://snappyfantasy.com", label: "snappyfantasy.com" },
      lead: "Ranked fantasy-sports app for iOS with live, real-time scoring, built solo and shipped to beta.",
      bullets: [
        "Designed and built the full product: Python backend, React Native iOS app, admin tooling, and website, deployed to production with automated tests, a security review, and monitoring behind it.",
        "Engineered the real-time systems at the core of the game: live sports-data ingestion, in-game scoring, ranked matchmaking, and a competitive rating ladder.",
        "Ran the business alongside the code: formed the company, worked through fantasy-sports regulation, and pitched investors.",
      ],
    },
    {
      org: "Bank of Montreal (BMO)",
      title: "Software Engineering Intern, Treasury & Payments Technology",
      when: "Summer 2023",
      where: "Toronto, Canada",
      bullets: [
        "Rotated across senior management, intake, and development teams supporting the bank's internal services.",
        "Delivered machine-learning, backend, and integration work tied to the Bank of the West acquisition.",
      ],
    },
    {
      org: "Freelance Developer (Fiverr)",
      title: "Full-Stack Web & Game Development",
      when: "2020 – 2025",
      where: "Remote",
      bullets: [
        "Scoped and delivered web apps, bots, and game projects for clients end to end; 4.9★ rating.",
      ],
    },
  ],
  education: [
    {
      org: "University of California, Berkeley",
      title: "B.A. Computer Science",
      when: "Aug 2021 – May 2025",
      body: "Coursework: Software Engineering, Artificial Intelligence, Computer Security, Programming Languages & Compilers, Computer Architecture, Data Structures, Discrete Mathematics & Probability, Linear Algebra & Differential Equations, Foundations of Data Science, Principles & Techniques of Data Science, Social Networks, Designing Information Devices & Systems. CS Mentor. Cal Hacks 8, 9, 10.",
    },
    {
      org: "Upper Canada College, Toronto",
      title: "International Baccalaureate Diploma",
      when: "Sep 2016 – May 2021",
      body: "Founded the Programming 101 club, teaching students to code. Canadian Computing Competition 2019, 2020; ECOO 2019; Godot Wild Jam #22; NEAT-trained Flappy Bird agent and genetic-algorithm research paper.",
    },
  ],
  skills: [
    {
      group: "Languages",
      items:
        "Python, TypeScript / JavaScript, SQL, Java, C, C#, Ruby (Rails), Scheme, GDScript, RISC-V, Arduino",
    },
    {
      group: "Backend",
      items:
        "Django, Django REST Framework, FastAPI, Flask, Node.js, REST API design, PostgreSQL, SQLite, SQLAlchemy, Alembic, Celery, full-text and vector search (pgvector), SSE streaming, OAuth / JWT auth (Auth0), pytest",
    },
    {
      group: "Frontend & mobile",
      items:
        "React, Next.js, TypeScript, Vite, Tailwind CSS, React Router, TanStack Query, Motion, Jinja, React Native (Expo), Expo Router, Reanimated, EAS / TestFlight, Playwright, Vitest, Jest",
    },
    {
      group: "Cloud & infra",
      items:
        "AWS (compute, managed databases, storage, networking, IAM, monitoring), Terraform, Docker, GitHub Actions CI/CD, Railway",
    },
    {
      group: "Security & compliance",
      items:
        "SOC 2 program ownership (Vanta), penetration-test management, LGPD, RBAC and multi-tenancy design, audit logging, secret scanning, dependency auditing",
    },
    {
      group: "AI / ML",
      items:
        "Anthropic Claude and OpenAI APIs, LLM pipelines and eval harnesses, OCR; neural networks with TensorFlow / Keras, neuroevolution (NEAT) and genetic algorithms, NLP, computer vision, reinforcement learning and probabilistic inference; data analysis with pandas and NumPy; Claude Code",
    },
  ],
  leadership: [
    {
      group: "Leadership",
      items:
        "Founded and led two companies; hire and manage a distributed engineering team; founded a coding club",
    },
    {
      group: "Communication",
      items:
        "Investor pitches, customer RFPs and technical diligence, mentoring; fluent in English and French",
    },
    {
      group: "Collaboration",
      items:
        "Agile delivery in small teams; hackathons and game jams; work across product, legal, and compliance",
    },
  ],
};
