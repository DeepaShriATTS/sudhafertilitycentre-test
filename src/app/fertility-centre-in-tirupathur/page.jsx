import TirupathurPage from '@/pages/Branch/tirupathur'
import React from 'react'
import Script from "next/script";
import Head from "next/head";


export const metadata = {
  title: "Best Fertility Centre in Tirupathur - Sudha Fertility Centre",
  description: " Sudha Fertility Centre in Tirupathur offers high success rates, advanced IVF, and experienced IUI specialists. Contact us to visit.",
  keywords:"Fertility Centre in Tirupathur"
};

export default function page() {

  <Head>
    <link rel="alternate" href="https://sudhafertilitycentre.com/fertility-centre-in-tirupathur" hreflang="en-in" />
  </Head>

  return (
    <div>
      <Script
        id="breadcrumb-schema-theni"
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
                "item": "https://sudhafertilitycentre.com/fertility-centre-in-tirupathur"
              }
            ]
          })
        }}
      />
      <Script
        id="faq-schema-theni"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
              "mainEntity": [
                  {
                      "@type": "Question",
                      "name": "What fertility treatments are available in Tirupattur?",
                      "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Numerous fertility treatments are available in Tirupattur. However, Sudha Fertility Centre is the only fertility hospital offering all types of fertility counselling and treatments under one roof. We offer various treatments, including IVF, IUI, ICSI, fertility preservation options, and other modern treatments in Tirupattur."
                         
                      }
                  },
                  {
                      "@type": "Question",
                      "name": "What is the cost of IVF in Tirupathur?",
                      "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "The cost of IVF in Tirupattur may vary according to each individual, considering their body health, medical history, hormone levels, etc. At Sudha Fertility Centre, the fertility experts take a complete report of your body condition and treat you with IVF at the best cost."
                        }
                  },
                  {
                      "@type": "Question",
                      "name": "What is the cost of fertility treatments in Tirupathur?",
                      "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "There are plenty of varieties in fertility treatments, as each treatment has different procedures, and each patient requires a different treatment. So, the cost of fertility treatments depends upon the specific treatment, medicine, and number of cycles required. However, Sudha Fertility Centre in Tirupattur offers the best fertility treatments at an affordable cost with utmost care."             
                                 
                        }
                  },
                  {
                      "@type": "Question",
                      "name": "How can I choose the best fertility hospital in Tirupathur?",
                      "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Choosing the best fertility hospital is vital in order to avail the quality treatment. When looking for the best fertility hospital, check for the treatments they offer, facilities, success rates, expertise of the doctors, and location. Nevertheless, Sudha Fertility check all these boxes by providing world-class treatment facilities and the best fertility experts."
                        }
                  },
                  {
                      "@type": "Question",
                      "name": "Which is the best fertility hospital in Tirupathur?",
                      "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Without a doubt, Sudha Fertility Centre is the best fertility hospital in Tirupattur, as they offer numerous fertility treatments, straightforward counselling, and guide you throughout the fertility journey."

                        }
                  }
              ]
          })
        }}
      />

      <Script
        type="application/ld+json"
        id="structured-data-theni"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Sudha Fertility Centre",
            "medicalSpecialty": "Fertility",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Viswalingam Layout, No:1, Thiru Vi Ka Street",
              "addressLocality": "Tirupathur",
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
      <TirupathurPage />
    </div>
  )
}
