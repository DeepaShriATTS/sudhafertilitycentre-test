

import ManapparaiPage from '@/pages/Branch/manapparai'
import React from 'react'
import Script from "next/script";

import Head from "next/head";

function ManapparaiFaqSchema() {



  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <link rel="alternate" href="https://sudhafertilitycentre.com/fertility-centre-in-manapparai" hreflang="en-in" />

    </Head>
  );
}


export const metadata = {
  title: "Best Fertility Centre in Manapparai - Sudha Fertility Centre",
  description: "The team at Sudha Fertility Centre in Manapparai combines clinical innovation and expert IVF & IUI care to help couples conceive. Call us.",
  keywords: "Fertility Centre in Manapparai"
};

export default function page() {
  return (
    <div>

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "HOME",
                item: "https://sudhafertilitycentre.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "BRANCH",
                item: "https://sudhafertilitycentre.com/fertility-centre-in-manapparai",
              },
            ],
          }),
        }}
      />


      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What fertility treatments are available in Manapparai?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fertility treatments available in Manapparai include IVF, ICSI, IUI, and fertility preservation options. Treatment plans are personalised to individual needs.",
                },
              },
              {
                "@type": "Question",
                name: "What is the cost of IVF in Manapparai?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The cost of IVF in Manapparai depends on factors such as medical history, number of cycles, and hormonal health. The average cost varies for each patient.",
                },
              },
              {
                "@type": "Question",
                name: "What is the cost of fertility treatments in Manapparai?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Costs vary depending on the type of fertility treatment and factors such as medical history, health condition, and hormonal balance.",
                },
              },
              {
                "@type": "Question",
                name: "How can I choose the best fertility hospital in Manapparai?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "When choosing a fertility hospital, consider the location, available treatments, facilities, success rates, and the expertise of fertility specialists.",
                },
              },
              {
                "@type": "Question",
                name: "Which hospital has experienced fertility doctors in Manapparai?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "There are fertility centres in Manapparai with experienced specialists who have supported many couples in achieving successful pregnancies.",
                },
              },
              {
                "@type": "Question",
                name: "Where can I get PCOD/PMOS (PCOS) treatment in Manapparai?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hospitals and fertility clinics in Manapparai offer diagnosis and treatment for PCOD and PMOS (PCOS), with care tailored to each patient's needs.",
                },
              },
              {
                "@type": "Question",
                name: "Can I do household work during IVF treatment?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Light household work is generally fine during IVF treatment, but prolonged activity or heavy lifting should be avoided. Consult your doctor for personalised advice.",
                },
              },
              {
                "@type": "Question",
                name: "What reduces male fertility?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Male fertility can be affected by factors such as lifestyle choices, exposure to toxins, medications, genetics, certain surgeries, and tight clothing.",
                },
              },
              {
                "@type": "Question",
                name: "When is the right time to start IVF treatment?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Couples under 35 are generally advised to consider IVF after trying naturally for one year. Those over 35 may consider it after six months. Other health factors also influence timing.",
                },
              },
              {
                "@type": "Question",
                name: "What is the cost of IUI treatment in Manapparai?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The cost of IUI in Manapparai depends on factors such as medical history, medications, and hormonal health. Prices vary from patient to patient.",
                },
              },
            ],
          }),
        }}
      />

      <ManapparaiPage />
    </div>
  )
}
