import TindivanamPage from '@/pages/Branch/tindivanam'
import React from 'react'
import Script from "next/script";
import Head from "next/head";


export const metadata = {
  title: "Best Fertility Centre in Tindivanam - Sudha Fertility Centre",
  description: "Trust Sudha Fertility Centre in Tindivanam to combine innovation, trusted IVF/IUI specialists, and heartfelt support. Schedule now.",
  keywords: " Fertility Centre in Tindivanam"
};

export default function page() {

  <Head>
    <link rel="alternate" href="https://sudhafertilitycentre.com/fertility-centre-in-tindivanam" hreflang="en-in" />
  </Head>

  return (
    <div>
      <Script
        id="breadcrumb-schema-tindivanam"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "HOME",
                "item": "https://sudhafertilitycentre.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "BRANCH",
                "item": "https://sudhafertilitycentre.com/fertility-centre-in-tindivanam"
              }
            ]
          })
        }}
      />
      <Script
        id="faq-schema-tindivanam"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
              "mainEntity": [
                  {
                      "@type": "Question",
                      "name": "What fertility treatments are available in Tindivanam?",
                      "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "A wide range of fertility treatments is available in Tindivanam. Sudha Fertility Centre in Tindivanam provides various fertility treatments tailored to individual needs. Services include IVF, ICSI, IUI, and options for fertility preservation. Recognised as the best fertility centre in Tindivanam, the centre is dedicated to delivering comprehensive care using the latest technologies." 
                      }
                  },
                  {
                      "@type": "Question",
                      "name": "What is the cost of IVF in Tindivanam?",
                      "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "The cost of IVF treatment in Tindivanam varies based on several factors, including medical history, the number of cycles required, and hormonal conditions. The average cost may differ for each individual. Sudha Fertility Centre features top IVF doctors in Tindivanam who provide exceptional IVF treatments tailored to individual needs and lifestyles."
                        }
                  },
                  {
                      "@type": "Question",
                      "name": "What is the cost of fertility treatments in Tindivanam?",
                      "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "The cost of fertility treatments varies based on the fertility treatment you require, as each treatment has different procedures, different medicine & cycles, etc. At Sudha Fertility Centre in Tindivanam, we provide high-quality fertility treatments at competitive prices. Our primary focus is on patient care, and our skilled fertility specialists are committed to guiding you through every step of your journey to parenthood."
                        }
                  },
                  {
                      "@type": "Question",
                      "name": "How can I choose the best fertility hospital in Tindivanam?",
                      "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "When selecting the ideal fertility hospital, it is essential to evaluate various factors, including the range of treatments provided, the quality of facilities, success rates, the expertise of fertility specialists, and the hospital's location. In this regard, Sudha Fertility Centre in Tindivanam stands out by meeting all these criteria, establishing itself as the leading provider of fertility care in the area."
                        }
                  },
                  {
                      "@type": "Question",
                      "name": "Which is the best fertility hospital in Tindivanam?",
                      "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "No brainer that Sudha Fertility Centre is the fertility hospital in Tindivanam as they offer advanced treatments, personalised counselling and more than that, a high success rate."
                        }
                  }
              ]
          })
        }}
      />

      <Script
        type="application/ld+json"
        id="structured-data-tindivanam"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Sudha Fertility Centre",
            "medicalSpecialty": "Fertility",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Viswalingam Layout, No:1, Thiru Vi Ka Street",
              "addressLocality": "Tindivanam",
              "addressRegion": "Tamil Nadu",
              "postalCode": "605602",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "10.0178474",
              "longitude": "77.4769026"
            },
            "telephone": "+91-76 7007 6006",
            "openingHours": "Mo-Su 24:00",
            "availableService": [
              { "@type": "MedicalProcedure", "name": "Intracytoplasmic Sperm Injection (ICSI)" },
              { "@type": "MedicalProcedure", "name": "In Vitro Fertilization (IVF)" },
              { "@type": "MedicalProcedure", "name": "Intrauterine Insemination (IUI)" },
              { "@type": "MedicalProcedure", "name": "Fertility Testing" },
              { "@type": "MedicalProcedure", "name": "Egg Freezing" },
              { "@type": "MedicalProcedure", "name": "Sperm Freezing" }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "99"
            },
            "image": "https://sudhafertilitycentre.com/_next/static/media/logo-dark.5cc85d6e.svg",
            "url": "https://sudhafertilitycentre.com/fertility-centre-in-tindivanam",
            "sameAs": [
              "https://www.facebook.com/sudhafertilitycentre",
              "https://www.instagram.com/sudhafertilitycentre/",
              "https://www.youtube.com/@sudhafertilitycentre/"
            ]
          }),
        }}
      />
      <TindivanamPage />
    </div>
  )
}
