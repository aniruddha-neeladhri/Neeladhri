import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      // Helps align Next body limits with large uploads; also configure your host/reverse proxy for 500MB if needed.
      bodySizeLimit: '500mb',
    },
  },
};

export default nextConfig;
