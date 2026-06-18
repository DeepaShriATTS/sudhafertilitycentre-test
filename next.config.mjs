/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // ✅ Allows all external images
      },
    ],
    domains: ["flowbite.s3.amazonaws.com", "img.youtube.com"], // ✅ Keep existing domains
    formats: ["image/avif", "image/webp"],
    unoptimized: false,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Cache-Control", value: "no-store, must-revalidate" },
          { key: "X-Content-Type-Options", value: "nosniff" }, // Prevent MIME sniffing
          { key: "X-Frame-Options", value: "DENY" }, // Prevent Clickjacking
          { key: "X-XSS-Protection", value: "1; mode=block" }, // Protect against XSS
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" }, // Secure referrer policy
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" }, // Enforce HTTPS
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
                source: "/:path*", // ✅ Match all paths
                has: [{ type: "host", value: "www.sudhafertilitycentre.com" }], // ✅ Only for "www"
                destination: "https://sudhafertilitycentre.com/:path*",
                permanent: true,
              },
    ];
  },
  
};


export default nextConfig;









// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "**", // ✅ Allows all external images
//       },
//       {
//         protocol: "http",
//         hostname: "localhost", // ✅ Allows localhost images
//       },
//     ],
//     domains: [
//       "flowbite.s3.amazonaws.com",
//       "img.youtube.com",
//       "your-image-source.com", // ✅ Add your image sources here
//     ],
//     formats: ["image/avif", "image/webp"],
//   },

//   async headers() {
//     return [
//       {
//         source: "/(.*)", // ✅ Apply security headers to all routes
//         headers: [
//           { key: "Cache-Control", value: "no-store, must-revalidate" },
//           { key: "X-Content-Type-Options", value: "nosniff" }, // Prevent MIME sniffing
//           { key: "X-Frame-Options", value: "DENY" }, // Prevent Clickjacking
//           { key: "X-XSS-Protection", value: "1; mode=block" }, // Protect against XSS
//           { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" }, // Secure referrer policy
//           { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" }, // Enforce HTTPS
//           {
//             key: "Content-Security-Policy",
//             value:
//               "default-src 'self'; script-src 'self' 'unsafe-inline' https://trusted-cdn.com; " +
//               "style-src 'self' 'unsafe-inline'; img-src 'self' data: https://trusted-images.com https://flowbite.s3.amazonaws.com https://img.youtube.com https://your-image-source.com; " +
//               "font-src 'self' https://trusted-fonts.com; media-src 'self' https://your-video-source.com",
//           },
//         ],
//       },
//     ];
//   },

//   async redirects() {
//     return [
//       { source: "/treatment", destination: "/fertility-treatments", permanent: true },
//       { source: "/fertility-centre-in-bengaluru", destination: "/fertility-centre-in-bangalore", permanent: true },
//       { source: "/pcos-and-pdoc", destination: "/pcos-and-pcod", permanent: true },
//       {
//         source: "/:path*", // ✅ Match all paths
//         has: [{ type: "host", value: "www.sudhafertilitycentre.com" }], // ✅ Only for "www"
//         destination: "https://sudhafertilitycentre.com/:path*",
//         permanent: true,
//       },
//     ];
//   },
// };

// export default nextConfig;



