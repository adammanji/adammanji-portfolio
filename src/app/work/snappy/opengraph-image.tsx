import { renderOg } from "@/lib/og";

export const alt = "Snappy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    title: "Snappy",
    subtitle: "Ranked fantasy basketball. Built and shipped by Adam Manji.",
  });
}
