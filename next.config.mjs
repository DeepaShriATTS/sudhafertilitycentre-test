/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "flowbite.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
    unoptimized: false,
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      "@swiper/react",
      "lucide-react",
      "flowbite-react",
      "react-icons",
      "framer-motion",
    ],
  },
  compiler: {
    // Remove console.log in production but keep console.error
    removeConsole: process.env.NODE_ENV === 'production'
      ? { exclude: ['error', 'warn'] }
      : false,
  },
  async headers() {
    return [
      // Long-lived cache for immutable Next.js static assets
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // HTML pages: always revalidate
      {
        source: '/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/treatment", destination: "/fertility-treatments", permanent: true },
      { source: "/fertility-centre-in-bengaluru", destination: "/fertility-centre-in-bangalore", permanent: true },
      { source: "/pcos-and-pdoc", destination: "/pcos-and-pcod", permanent: true },
      { source: "/fertility-centre-in-puducherry", destination: "/fertility-centre-in-pondicherry", permanent: true },
      { source: "/fertility-centre-in-tiruchirappalli", destination: "/fertility-centre-in-trichy", permanent: true },
      { source: "/the-seven-essential-nutrients-to-boost-ovulation", destination: "/blog/the-seven-essential-nutrients-to-boost-ovulation/", permanent: true },
      { source: "/overcoming-ovulation-changes-with-natural-methods", destination: "/blog/overcoming-ovulation-changes-with-natural-methods/", permanent: true },
      { source: "/indian-foods-increase-sperm-count", destination: "/blog/indian-foods-increase-sperm-count/", permanent: true },
      { source: "/fertility-centre-in-dindgul", destination: "/fertility-centre-in-dindigul", permanent: true },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.sudhafertilitycentre.com" }],
        destination: "https://sudhafertilitycentre.com/:path*",
        permanent: true,
      },
    ];
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
  turbopack: {},
};

import withBundleAnalyzer from '@next/bundle-analyzer';
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});
export default bundleAnalyzer(nextConfig);
