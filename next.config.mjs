import bundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "i3.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "ship-crm-img.s3.eu-north-1.amazonaws.com",
      },
    ],

    deviceSizes: [375, 414, 640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 64, 128, 256, 384, 512, 645],
    formats: ["image/avif", "image/webp"],

    minimumCacheTTL: 2592000,
  },
  experimental: {
    optimizeCss: true,

    inlineCss: true,
    optimizePackageImports: [
      "swiper",
      "lucide-react",
      "react-icons",
      "framer-motion",
        "react-leaflet",
    ],
  },
  compiler: {

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

    // Better vendor chunk splitting — isolates large libraries into cacheable chunks
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          ...config.optimization?.splitChunks,
          cacheGroups: {
            ...config.optimization?.splitChunks?.cacheGroups,
            // Isolate swiper so it doesn't bloat the main bundle
            swiper: {
              test: /[\\/]node_modules[\\/]swiper[\\/]/,
              name: 'vendor-swiper',
              chunks: 'async',
              priority: 20,
            },
            // Isolate framer-motion
            framerMotion: {
              test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
              name: 'vendor-framer',
              chunks: 'async',
              priority: 20,
            },

          },
        },
      };
    }

    return config;
  },
  turbopack: {},

};

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(nextConfig);


