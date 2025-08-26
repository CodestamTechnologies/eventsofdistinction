import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "maxm-imggenurl.web.val.run",
      },
    ],
  },
};

export default nextConfig;
