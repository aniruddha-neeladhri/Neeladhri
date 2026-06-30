import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Images are served from Cloudflare R2; skip Vercel Image Optimization to avoid 402 quota limits.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-c09c5323c0124e5e879b38e76ec68aa9.r2.dev",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    serverActions: {
      // Helps align Next body limits with large uploads; also configure your host/reverse proxy for 500MB if needed.
      bodySizeLimit: '500mb',
    },
  },
};

export default nextConfig;
