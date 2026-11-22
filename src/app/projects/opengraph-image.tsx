import { renderOg } from "@/lib/og";

export const alt = "Projects";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    title: "Projects",
    subtitle: "Hardware, hackathons and side projects by Adam Manji.",
  });
}
