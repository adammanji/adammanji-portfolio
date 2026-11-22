import { site } from "@/lib/content";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    jobTitle: "Co-founder and CTO",
    worksFor: { "@type": "Organization", name: "Bashi AI", url: "https://bashi.app" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "University of California, Berkeley" },
    email: `mailto:${site.email}`,
    sameAs: [site.github, site.linkedin],
    image: `${site.url}/headshot/adam.jpg`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
