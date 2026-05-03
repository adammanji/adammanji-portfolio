import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.adammanji.com" }],
        destination: "https://adammanji.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
