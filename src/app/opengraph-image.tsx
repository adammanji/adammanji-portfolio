import { renderOg } from "@/lib/og";

export const alt = "Adam Manji";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    title: "Adam Manji",
    subtitle: "Co-founder and CTO of Bashi. Credit intelligence for lenders in emerging markets.",
  });
}
