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
                  text: "Numerous fertility treatments are available in Kallakurichi. However, Sudha Fertility Centre is the only fertility hospital offering all types of fertility counselling and treatments under one roof. We provide various treatments, including IVF, IUI, ICSI, fertility preservation options, and other modern treatments in Kallakurichi.  "
                },
              },
              {
                "@type": "Question",
                name: "What is the cost of IVF in Kallakurichi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The cost of IVF in Kallakurichi may vary for each individual, considering their body health, medical history, hormone levels, and more. At Sudha Fertility Centre, the fertility experts take a complete report of your body condition and provide IVF at the best cost. "
                },
              },
              {
                "@type": "Question",
                name: "What is the cost of fertility treatments in Kallakurichi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "There are plenty of varieties in fertility treatments, as each treatment has different procedures, and each patient requires a different treatment. Thus, the cost of fertility treatments depends on the specific treatment, medicine, and number of cycles required. However, Sudha Fertility Centre in Kallakurichi offers the best fertility treatments at an affordable cost with utmost care."
                },
              },
              {
                "@type": "Question",
                name: "How can I choose the best fertility hospital in Kallakurichi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Choosing the best fertility hospital is vital to availing quality treatment. When looking for the best fertility hospital, check for the treatments they offer, facilities, success rates, expertise of the doctors, and location. Nevertheless, Sudha Fertility meets all these criteria by providing world-class treatment facilities and the best fertility experts.  "
                },
              },
              {
                "@type": "Question",
                name: "Which is the best fertility hospital in Kallakurichi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Without a doubt, Sudha Fertility Centre is the best fertility hospital in Kallakurichi, as they offer numerous fertility treatments, straightforward counselling, and guide you throughout the fertility journey.  "
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
