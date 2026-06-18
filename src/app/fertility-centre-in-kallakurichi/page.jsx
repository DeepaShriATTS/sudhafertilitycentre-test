import React from "react";
import Script from "next/script";
import Head from "next/head";
import KallakurichiPage from "@/pages/Branch/kallakurichi";

export const metadata = {
  title: "Best Fertility Centre in Kallakurichi - Sudha Fertility Centre",
  description:
    "Choosing Sudha Fertility Centre in Kallakurichi ensures you receive innovative IVF & IUI treatments and trusted care. Reserve your slot.",
  keywords:
    "Fertility Centre in Kallakurichi"
};
export default function page() {
  <Head>
    <link
      rel="alternate"
      href="https://sudhafertilitycentre.com/fertility-centre-in-kallakurichi"
      hreflang="en-in"
    />
  </Head>;

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
                item: "https://sudhafertilitycentre.com/fertility-centre-in-kallakurichi",
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
                name: "What fertility treatments are available in Kallakurichi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "There are many fertility treatments available. Sudha Fertility Centre in Kallakurichi provides personalised treatments suitable for your needs, including IVF, ICSI, IUI, and fertility preservation options.",
                },
              },
              {
                "@type": "Question",
                name: "What is the cost of IVF in Kallakurichi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The cost of IVF treatment in Kallakurichi depends on factors like your medical history, number of cycles, and hormonal conditions. The average cost varies for each individual.",
                },
              },
              {
                "@type": "Question",
                name: "What is the cost of fertility treatments in Kallakurichi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Each fertility treatment has different costs depending on processes involved and factors like medical history and hormonal health.",
                },
              },
              {
                "@type": "Question",
                name: "How can I choose the best fertility hospital in Kallakurichi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Consider the hospital's location, treatments offered, facilities, success rates, and doctor expertise when choosing a fertility hospital.",
                },
              },
              {
                "@type": "Question",
                name: "Which is the best fertility hospital in Kallakurichi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sudha Fertility Centre offers advanced fertility treatments in Kallakurichi with experienced doctors and modern facilities.",
                },
              },
              {
                "@type": "Question",
                name: "Which hospital has the best fertility doctors in Kallakurichi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sudha Fertility Centre in Kallakurichi has skilled fertility specialists, including Dr. S. Pradeepa, who has helped thousands of couples conceive.",
                },
              },
              {
                "@type": "Question",
                name: "Which hospital is best for PCOD/PMOS (PCOS) treatment in Kallakurichi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sudha Fertility Centre in Kallakurichi provides diagnosis and treatment for PCOD and PMOS (PCOS) with experienced gynecologists and fertility doctors.",
                },
              },
              {
                "@type": "Question",
                name: "Can I do household work during IVF treatment?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Light household work is generally fine during IVF treatment, but avoid heavy lifting or prolonged activity. Consult your doctor if you experience discomfort.",
                },
              },
              {
                "@type": "Question",
                name: "Which is the No. 1 fertility hospital in South India?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sudha Fertility Centre is known for its high success rates, expert doctors, and advanced facilities in South India.",
                },
              },
              {
                "@type": "Question",
                name: "What reduces male fertility?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Male fertility can be reduced by lifestyle choices, toxins, medications, genetics, surgeries, and tight clothing.",
                },
              },
              {
                "@type": "Question",
                name: "When is the right time to start IVF treatment?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Couples under 35 may consider IVF after one year of trying naturally; those over 35 may consider it after six months. Timing also depends on health and fertility history.",
                },
              },
              {
                "@type": "Question",
                name: "What is the cost of IUI treatment in Kallakurichi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The cost of IUI treatment in Kallakurichi varies based on medical history, medications, and hormonal conditions.",
                },
              },
            ],
          }),
        }}
      />
      <KallakurichiPage />
    </div>
  );
}
