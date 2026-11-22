import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

const routes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/work/bashi", priority: 0.9 },
  { path: "/work/snappy", priority: 0.9 },
  { path: "/projects", priority: 0.7 },
  { path: "/about", priority: 0.7 },
  { path: "/resume", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority }) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified,
    priority,
  }));
}
