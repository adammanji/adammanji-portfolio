import { renderOg } from "@/lib/og";

export const alt = "Bashi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    title: "Bashi",
    subtitle: "Credit intelligence for lenders in emerging markets. Adam Manji, co-founder and CTO.",
  });
}
