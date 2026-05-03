import type { Metadata } from "next";
import { Fraunces, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adam Manji — Founder & engineer",
  description:
    "Founder & engineer. Building in fintech and sports. Currently shipping Bashi (AI credit underwriting) and Snappy (real-money daily fantasy).",
  metadataBase: new URL("https://adammanji.com"),
  openGraph: {
    title: "Adam Manji",
    description:
      "Founder & engineer. Building in fintech and sports.",
    url: "https://adammanji.com",
    siteName: "Adam Manji",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adam Manji",
    description: "Founder & engineer. Building in fintech and sports.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} ${jetbrains.variable}`}
    >
      <body className="bg-ink text-bone antialiased selection:bg-ember selection:text-ink">
        <div className="grain pointer-events-none fixed inset-0 z-[100] opacity-[0.06] mix-blend-overlay" />
        {children}
      </body>
    </html>
  );
}
