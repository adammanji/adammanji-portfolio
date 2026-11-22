import { renderOg } from "@/lib/og";

export const alt = "Resume";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    title: "Resume",
    subtitle: "Adam Manji. Co-founder and CTO, Bashi.",
  });
}
