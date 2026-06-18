import NellorePage from '@/pages/Branch/nellore'
import React from 'react'
import Script from "next/script";
import Head from "next/head";



export const metadata = {
  title: "Best Fertility Centre in Nellore - Sudha Fertility Centre",
  description: "Hopeful parents choose Sudha Fertility Centre in Nellore for modern IVF & IUI labs, expert doctors, and care. Schedule a clinic visit.",
  keywords: "Fertility Centre in Nellore"
};

export default function page() {

  <Head>
    <link rel="alternate" href="https://sudhafertilitycentre.com/fertility-centre-in-nellore" hrefLang="en-in" />
  </Head>

  return (
    <div>
      <Script
        id="breadcrumb-schema-nellore"
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
                "item": "https://sudhafertilitycentre.com/fertility-centre-in-nellore"
              }
            ]
          })
        }}
      />
      <Script
        id="faq-schema-nellore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": " What fertility treatments are available in Nellore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A variety of fertility treatments are available at Sudha Fertility Centre in Nellore, offering personalised options tailored to individual needs. Treatments include IVF, ICSI, IUI, and fertility preservation. Recognised as the leading fertility centre in Nellore, the focus is on delivering comprehensive care using advanced technologies."
                }
              },
              {
                "@type": "Question",
                "name": " What is the cost of IVF in Nellore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The cost of IVF treatment in Nellore is influenced by various factors, including medical history, the number of cycles required, and hormonal conditions. The average cost may differ for each individual. Sudha Fertility Centre offers exceptional IVF treatments tailored to individual needs and lifestyles, supported by experienced IVF doctors in Nellore."
                }
              },
              {
                "@type": "Question",
                "name": "What is the cost of fertility treatments in Nellore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Fertility treatments are available at varying costs due to the different processes involved. The expense of these treatments is influenced by factors such as medical history, health conditions, and hormonal imbalances. Sudha Fertility Centre in Nellore offers high-quality fertility treatments at competitive prices. Recognized as a leading fertility hospital in Nellore, the center prioritizes patient care and is supported by experienced fertility specialists dedicated to assisting individuals throughout their parenthood journey."
                }
              },
              {
                "@type": "Question",
                "name": "How can I choose the best fertility hospital in Nellore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "When selecting the ideal fertility hospital, several factors should be considered: the hospital's location, the treatments available, the facilities provided, the success rates, and the expertise of the fertility specialists. Sudha Fertility Centre, recognized as the leading fertility hospital in Nellore, offers world-class facilities, top fertility experts, and boasts a high success rate."
                }
              },
              {
                "@type": "Question",
                "name": "Which is the best fertility hospital in Nellore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sudha Fertility Centre stands out as the premier fertility hospital in Nellore, providing world-class fertility treatments delivered by highly qualified fertility specialists, all backed by a strong success rate."
                }
              },
           
            ]
          })
        }}
      />

      <Script
        type="application/ld+json"
        id="structured-data-nellore"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Sudha Fertility Centre",
            "medicalSpecialty": "Fertility",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "16/2/254, Swatantra Park road, Gandhinagar, Gandhinagar, Brindavan Colony, Nellore, Andhra Pradesh 524001",
              "addressLocality": "Nellore",
              "addressRegion": "Andhra Pradesh",
              "postalCode": "524001",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "14.436767678393434",
              "longitude": "79.98140350770069"
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
            "url": "https://sudhafertilitycentre.com/fertility-centre-in-nellore",
            "sameAs": [
              "https://www.facebook.com/sudhafertilitycentre",
              "https://www.instagram.com/sudhafertilitycentre/",
              "https://www.youtube.com/@sudhafertilitycentre/"
            ]
          }),
        }}
      />
      <NellorePage />
    </div>
  )
}
