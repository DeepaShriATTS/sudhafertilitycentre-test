import ViluppuramPage from '@/pages/Branch/viluppuram'
import React from 'react'
import Script from "next/script";
import Head from "next/head";


export const metadata = {
  title: "Best Fertility Centre in Viluppuram - Sudha Fertility Centre",
  description: "Overcome infertility at Sudha Fertility Centre in Villupuram, where high-tech IVF & IUI setups map out your care. Book a slot today.",
  keywords: "Fertility Centre in Viluppuram",

};

export default function page() {

  <Head>
    <link rel="alternate" href="https://sudhafertilitycentre.com/fertility-centre-in-viluppuram" hreflang="en-in" />
  </Head>

  return (
    <div>
      <Script
        id="breadcrumb-schema-viluppuram"
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
                "item": "https://sudhafertilitycentre.com/fertility-centre-in-viluppuram"
              }
            ]
          })
        }}
      />
      <Script
        id="faq-schema-viluppuram"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
              "mainEntity": [
                  {
                      "@type": "Question",
                      "name": "What fertility treatments are available in Viluppuram?",
                      "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "There is a wide range of fertility treatments in Viluppuram. At Sudha Fertility Centre in Viluppuram, we offer a wide range of fertility treatments tailored to meet your individual needs. Our services include IVF, ICSI, IUI, and options for fertility preservation. Recognised as the leading fertility centre in Viluppuram, we are committed to delivering comprehensive care using the latest technologies."
                      }
                  },
                  {
                      "@type": "Question",
                      "name": "What is the cost of IVF in Viluppuram?",
                      "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "The cost of IVF treatment in Viluppuran varies based on several factors, including your medical history, the number of cycles needed, and hormonal conditions. Each individual's average cost may differ. At Sudha Fertility Centre, we have top IVF doctors in Viluppuram who offer outstanding IVF treatments customised to fit your needs and lifestyle."
                      }
                  },
                  {
                      "@type": "Question",
                      "name": "What is the cost of fertility treatments in Viluppuram?",
                      "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Fertility treatments vary in cost due to the different processes involved. The price of these treatments is influenced by various factors, including medical history, health conditions, and hormonal imbalances. Sudha Fertility Centre in Viluppuram offers top-quality fertility treatments at affordable prices. Above all, we prioritise patient care, and our experienced fertility specialists are dedicated to supporting you throughout your journey to parenthood."
                      }
                  },
                  {
                      "@type": "Question",
                      "name": "How can I choose the best fertility hospital in Viluppuram?",
                      "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Choose the best fertility hospital by considering the treatments they offer, facilities, success rates, expertise of the fertility specialists, and the location of the fertility hospital. On a note, Sudha Fertility Centre in Viluppuram tick all these boxes, emerging as the best fertility care in the town."
                      }
                  },
                  {
                      "@type": "Question",
                      "name": "Which is the best fertility hospital in Viluppuram?",
                      "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "With the utmost care, modern fertility technology, highly knowledgeable experts, well-equipped laboratory, Sudha Fertility Centre stands out as the best fertility hospital in Viluppuram."
                      }
                  }
              ]
          })
        }}
      />

      <Script
        type="application/ld+json"
        id="structured-data-viluppuram"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Sudha Fertility Centre",
            "medicalSpecialty": "Fertility",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Viswalingam Layout, No:1, Thiru Vi Ka Street",
              "addressLocality": "Viluppuram",
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
            "url": "https://sudhafertilitycentre.com/fertility-centre-in-villuppuram",
            "sameAs": [
              "https://www.facebook.com/sudhafertilitycentre",
              "https://www.instagram.com/sudhafertilitycentre/",
              "https://www.youtube.com/@sudhafertilitycentre/"
            ]
          }),
        }}
      />
      <ViluppuramPage />
    </div>
  )
}
