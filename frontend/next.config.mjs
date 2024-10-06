/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_BACKEND_CLIENT_URL:
      process.env.NEXT_PUBLIC_BACKEND_CLIENT_URL || "http://localhost:2000",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.wongnai.com",
      },
    ],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
