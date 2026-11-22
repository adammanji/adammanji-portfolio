import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogSize = { width: 1200, height: 630 };

const PAPER = "#eef2e7";
const INK = "#15223b";
const INK_SOFT = "#46536b";
const RULE = "#b3c9ad";
const RED = "#b8342a";

export async function renderOg({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  const [bold, medium] = await Promise.all([
    readFile(join(process.cwd(), "src/assets/fonts/jost-700.ttf")),
    readFile(join(process.cwd(), "src/assets/fonts/jost-500.ttf")),
  ]);

  const upper = title.toUpperCase();
  const titleSize = upper.length <= 7 ? 168 : 112;
  const rules = Array.from({ length: 9 }, (_, i) => 35 + i * 70);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: PAPER,
          fontFamily: "Jost",
        }}
      >
        {rules.map((top) => (
          <div
            key={top}
            style={{
              position: "absolute",
              left: 0,
              top,
              width: 1200,
              height: 2,
              background: RULE,
            }}
          />
        ))}
        <div
          style={{
            position: "absolute",
            left: 84,
            top: 0,
            width: 2,
            height: 630,
            background: RED,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 92,
            top: 0,
            width: 2,
            height: 630,
            background: RED,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 140,
            top: 0,
            width: 1000,
            height: 630,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: titleSize,
              fontWeight: 700,
              letterSpacing: "0.08em",
              lineHeight: 1,
              color: INK,
              textTransform: "uppercase",
            }}
          >
            {upper}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 36,
              fontSize: 38,
              fontWeight: 500,
              lineHeight: 1.3,
              color: INK_SOFT,
              maxWidth: 900,
              maxHeight: 100,
              overflow: "hidden",
            }}
          >
            {subtitle}
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            left: 140,
            bottom: 40,
            display: "flex",
            fontSize: 28,
            fontWeight: 500,
            color: INK,
            background: PAPER,
            padding: "0 8px",
            marginLeft: -8,
          }}
        >
          adammanji.com
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Jost", data: bold, style: "normal", weight: 700 },
        { name: "Jost", data: medium, style: "normal", weight: 500 },
      ],
    },
  );
}
