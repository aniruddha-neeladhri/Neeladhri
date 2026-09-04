import type { NextConfig } from "next";

const R2_HOST = "pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev";

const nextConfig: NextConfig = {
  images: {
    // Images are served from Cloudflare R2; skip Vercel Image Optimization to avoid 402 quota limits.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: R2_HOST,
        pathname: "/**",
      },
    ],
  },
  async headers() {
    const longCache = [
      {
        key: "Cache-Control",
        value: "public, max-age=31536000, immutable",
      },
    ];

    return [
      { source: "/logo.png", headers: longCache },
      { source: "/tileimage.png", headers: longCache },
      { source: "/chatbot.png", headers: longCache },
      { source: "/favicon.ico", headers: longCache },
      { source: "/_next/static/:path*", headers: longCache },
    ];
  },
  experimental: {
    serverActions: {
      // Helps align Next body limits with large uploads; also configure your host/reverse proxy for 500MB if needed.
      bodySizeLimit: "500mb",
    },
  },
};

export default nextConfig;
