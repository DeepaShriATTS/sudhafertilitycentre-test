// src/app/layout.js (SERVER COMPONENT ✅)
import "./globals.css";
import { Outfit } from "next/font/google";
import Header from "@/components/Header/header";
import Footer from "@/components/footer/footer";
import ClientLayout from "@/components/Header/ClientLayout";
import { NotFoundProvider } from "@/context/NotFoundContext";
import Script from "next/script";
import ogimg from "@/assets/og_sudha.jpeg";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const ogimgURL = ogimg.src; // Use the .src if using Next.js image import

export const metadata = {
  title: "Best Fertility Centre in South India - Sudha Fertility Centre",
  description:
    "With over 40+ years of expertise, 40+ Branches, Sudha is identified as the best IVF centre in India with an 85% success rate. Sudha holds the pride of delivering 1 lakh+ healthy babies.",
  keywords: [
    "Fertility Centre in Hyderabad",
    "IVF Centre in Bangalore",
    "Best Fertility Centre in South India",
    "Best IVF Centre in India",
    "Best Fertility Treatments in Tamil Nadu",
  ],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Sudha Fertility Centre | Best Fertility Hospital",
    description: "Sudha Fertility Centre offers advanced infertility treatments with high success rates. Book your consultation today!",
    url: "https://sudhafertilitycentre.com/",
    type: "website",
    siteName: "Sudha Fertility Centre",
    images: [
      {
        url: ogimgURL,
        width: 1200,
        height: 630,
        alt: "Sudha Fertility Centre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sudha Fertility Centre | Best Fertility Hospital",
    description: "Sudha Fertility Centre offers advanced infertility treatments with high success rates. Book your consultation today!",
    images: [ogimgURL],
  },
};

<Script
  type="application/ld+json"
  id="structured-data-organization"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Sudha Fertility Centre",
      "url": "https://sudhafertilitycentre.com/",
      "logo": "https://sudhafertilitycentre.com/_next/static/media/logo-dark.5cc85d6e.svg",
      "description":
        "Sudha Fertility Centre is one of India's leading fertility hospitals, offering advanced IVF, IUI, ICSI, egg freezing, and fertility testing services across multiple locations in India.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-76 7007 6006",
        "contactType": "Customer Service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Tamil", "Telugu"]
      },
      "sameAs": [
        "https://www.facebook.com/sudhafertilitycentre",
        "https://www.instagram.com/sudhafertilitycentre/",
        "https://www.youtube.com/@sudhafertilitycentre/",
        "https://www.linkedin.com/company/sudha-fertility-centre"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "15000"
      },
      "founder": {
        "@type": "Person",
        "name": "Dr. S. Dhanabagyam"
      },
      "foundingDate": "1995",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "151, Perundurai Road, Edayankattuvalasu",
        "addressLocality": "Erode",
        "addressRegion": "Tamil Nadu",
        "postalCode": "638001",
        "addressCountry": "IN"
      }
    })
  }}
/>


export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        <meta name="robots" content="index" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sudha Fertility Centre - Advanced Fertility Treatments in India" />
        <meta property="og:description" content="Sudha Fertility Centre offers world-class IVF, IUI, ICSI, egg and sperm freezing, and personalized fertility care in 20+ cities across India." />
        <meta property="og:url" content="https://sudhafertilitycentre.com/" />
        <meta property="og:image" content="https://sudhafertilitycentre.com/_next/image?url=%2Fassets%2Fog_sudha.jpeg&w=1200&q=75" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Sudha Fertility Centre" />
        <meta property="og:locale" content="en_IN" />


        {/* ✅ Google Tag Manager - Script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MZ5ZGW6');`,
          }}
        />




      </head>
      <body className={` ${outfit.variable} antialiased font-outfit`}>
        {/* ✅ Google Tag Manager - Noscript (For <body>) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MZ5ZGW6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <NotFoundProvider>
          <Header />
          <ClientLayout>{children}</ClientLayout>
          <Footer />
        </NotFoundProvider>
      </body>
    </html>
  );
}
