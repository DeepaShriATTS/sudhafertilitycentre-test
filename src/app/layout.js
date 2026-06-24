import "./globals.css";
import "./critical.css";
import { Outfit, Inter, Noto_Sans_Kannada } from "next/font/google";
import Header from "@/components/Header/header";
import Footer from "@/components/footer/footer";
import ClientLayout from "@/components/Header/ClientLayout";
import { NotFoundProvider } from "@/context/NotFoundContext";
import Script from "next/script";
import { DeferredFBPixel } from "@/components/DeferredFBPixel";
import ogimg from "@/assets/og_sudha.jpeg";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

// Reduced from 9 weights to 2 — saves ~60 KB of font payload for most visitors
const notoSansKannada = Noto_Sans_Kannada({
  variable: "--font-noto-kannada",
  subsets: ["kannada"],
  display: "swap",
  weight: ["400", "700"],
  preload: false, // Only load on demand — most pages don't need Kannada script
});

const ogimgURL = ogimg.src;

export const metadata = {
  metadataBase: new URL("https://sudhafertilitycentre.com"),
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

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        {/* Preconnect hints for third-party performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://analytics.google.com" />

        <meta name="robots" content="index" />

        {/*
          GTM deferred to lazyOnload + requestIdleCallback.
          This means GTM only initialises after the page is idle,
          so it does NOT block hydration or TBT.
          Strategy "lazyOnload" = script loads after all other resources.
          The inner requestIdleCallback defers execution even further
          to after the browser's first idle period (max 3 s fallback).
        */}
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function initGTM() {
                  if (window._gtmInitialised) return;
                  window._gtmInitialised = true;
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-MZ5ZGW6');
                }
                if ('requestIdleCallback' in window) {
                  requestIdleCallback(initGTM, { timeout: 3000 });
                } else {
                  setTimeout(initGTM, 3000);
                }
              })();
            `
          }}
        />
      </head>
      <body className={` ${outfit.variable} ${inter.variable} ${notoSansKannada.variable} antialiased font-outfit`}>
        {/* Google Tag Manager - Noscript fallback */}
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
          <main>
            <ClientLayout>{children}</ClientLayout>
          </main>
          <Footer />
        </NotFoundProvider>
        <DeferredFBPixel />

      </body>
    </html>
  );
}
