import ParamakudiPage from '@/pages/Branch/paramakudi'
import React from 'react'
import Script from "next/script";
import Head from "next/head";



export const metadata = {
  title: "Best Fertility Centre in Paramakudi - Sudha Fertility Centre",
  description: "Sudha Fertility Centre in Paramakudi is known for compassionate IVF care, advanced IUI treatments, and expert family guidance. Consult us.",
  keywords: "Fertility Centre in Paramakudi"
};

export default function page() {

  <Head>
    <link rel="alternate" href="https://sudhafertilitycentre.com/fertility-centre-in-paramakudi" hreflang="en-in" />
  </Head>

  return (
    <div>
      <Script
        id="breadcrumb-schema-paramakudi"
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
                "item": "https://sudhafertilitycentre.com/fertility-centre-in-paramakudi"
              }
            ]
          })
        }}
      />
      <Script
        id="faq-schema-paramakudi"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What fertility treatments are available in Paramakudi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "There is a wide range of treatments for fertility, and Sudha Fertility Centre in Paramkudi offers an extensive range of fertility treatments, starting from IVF, ICSI, IUI, and fertility preservation options. We begin with advising an absolute treatment to guiding you on the path all the way.. As the best fertility centre in Paramakudi, we specialise in providing comprehensive care with advanced technologies."
                }
              },
              {
                "@type": "Question",
                "name": "What is the cost of IVF in Paramakudi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Basically, the cost of IVF treatment in Paramakudi is based on factors like your medical history, the required number of cycles, your body’s hormonal levels, etc. So, the IVF cost varies for each individual, depending on their body condition. However, Sudha Fertility Centre offers an excellent tailored IVF treatment to each individual's needs, body condition, and lifestyle."
                }
              },
              {
                "@type": "Question",
                "name": "What is the cost of fertility treatments in Paramakudi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sudha Fertility Centre in Paramakudi offers comprehensive fertility treatment, and each one has different therapy procedures. So the cost of fertility varies depending on the treatment type required for an individual, which is further based on their body condition, medical history, hormone levels, etc. However, Sudha Fertility Centre in Paramkudi offers the best treatments at the best cost with utmost care."
                }
              },
              {
                "@type": "Question",
                "name": "How can I choose the best fertility hospital in Paramakudi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "When selecting a fertility hospital, it is essential to consider various factors, including the treatments offered, available facilities, success rates, the expertise of fertility specialists, and the location. Sudha Fertility Centre stands out with a high success rate, world-class facilities, and top fertility experts."
                }
              },
              {
                "@type": "Question",
                "name": "Which is the best fertility hospital in Paramakudi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sudha Fertility Centre is the best fertility hospital in Paramakudi, as they provide extensive fertility treatments with intelligent, well-equipped fertility doctors, and most importantly, the hospital holds a high success rate."
                }
              },
           
            ]
          })
        }}
      />

      <Script
        type="application/ld+json"
        id="structured-data-paramakudi"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Sudha Fertility Centre",
            "medicalSpecialty": "Fertility",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Gandhiji Main Road, near Taluk Office, SPM Colony,Attupalam,",
              "addressLocality": "Paramakudi",
              "addressRegion": "Tamil Nadu",
              "postalCode": "623707",
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
            "url": "https://sudhafertilitycentre.com/fertility-centre-in-paramakudi",
            "sameAs": [
              "https://www.facebook.com/sudhafertilitycentre",
              "https://www.instagram.com/sudhafertilitycentre/",
              "https://www.youtube.com/@sudhafertilitycentre/"
            ]
          }),
        }}
      />
      <ParamakudiPage />
    </div>
  )
}
