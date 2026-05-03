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
    status: "Pre-seed · live",
    href: "https://bashi.app",
    blurb:
      "An AI copilot for commercial credit underwriting. Ingests financial PDFs, extracts 51+ metrics, and generates 5-year, 3-statement projections plus a boardroom-ready credit memo.",
  },
  {
    num: "02",
    slug: "snappy",
    name: "Snappy",
    kind: "Consumer mobile · daily fantasy",
    year: "2024—",
    status: "Pre-seed · TestFlight",
    href: "https://snappyfantasy.com",
    blurb:
      "Real-money daily fantasy built for short attention spans: NBA contests that resolve in a single quarter, MLB 1v1 head-to-head drafts that finish in three innings.",
  },
];

export const featured: Project[] = [
  {
    num: "03",
    slug: "elections",
    name: "American Demographics, 2004—2024",
    kind: "Data analysis · published",
    year: "2024",
    status: "Writeup",
    blurb:
      "Six-cycle voter analysis using Census CPS and Edison exit polls. Headline finding: a 38-point shift in the Hispanic male margin between 2008 and 2024.",
  },
];

export const more: Project[] = [
  {
    num: "04",
    slug: "fantasy-duel",
    name: "Fantasy-Duel",
    kind: "Backend · API design",
    year: "2025",
    status: "Archived",
    blurb:
      "FastAPI + Postgres matchmaking service for 1v1 fantasy contests. Built the data model, auth, and migrations end-to-end before pivoting the idea into Snappy.",
  },
  {
    num: "05",
    slug: "tasertag",
    name: "TaserTag",
    kind: "Hardware · IoT",
    year: "2022",
    status: "Archived",
    blurb:
      "Arduino-based competitive tag system. Embedded firmware, Python backend for match state, and a thin web frontend for scoring.",
  },
  {
    num: "06",
    slug: "calhacks",
    name: "CalHacks 9 & 10",
    kind: "Hackathon · 36 hours",
    year: "2022—2023",
    status: "Submitted",
    blurb:
      "Two consecutive years competing at UC Berkeley's flagship hackathon. Sleep-deprived shipping, demo-day pressure, public repo.",
    repo: "https://github.com/adammanji/calhacks10",
  },
  {
    num: "07",
    slug: "cal-dining",
    name: "Cal-Dining",
    kind: "Side project · scraping",
    year: "2023",
    status: "Archived",
    blurb: "Berkeley dining-hall menu aggregation. Quick public utility built for fellow students.",
    repo: "https://github.com/adammanji/Cal-Dining",
  },
];

export const all = [...flagship, ...featured, ...more];
