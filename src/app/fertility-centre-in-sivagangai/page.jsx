import SivangangaiPage from '@/pages/Branch/sivangangai'
import React from 'react'
import Script from "next/script";
import Head from "next/head";


export const metadata = {
  title: "Best Fertility Centre in Sivangangai - Sudha Fertility Centre",
  description: "As the leading choice, Sudha Fertility Centre in Sivagangai provides heartfelt support and innovative IVF & IUI treatments. Consult us today.",
  keywords: "Fertility Centre in Sivagangai"
};
export default function page() {

  <Head>

    <link rel="alternate" href="https://sudhafertilitycentre.com/fertility-centre-in-sivangangai" hreflang="en-in" />
  </Head>



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
                  item: "https://sudhafertilitycentre.com/fertility-centre-in-sivagangai",
                },
              ],
            }),
          }}
        />

        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What fertility treatments are available in Sivagangai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":"Sivagangai has a diverse range of fertility treatments. However, Sudha Fertility Centre is the exclusive provider of all these fertility services. We provide a variety of fertility treatments, including IUI, IVF, ICSI, fertility preservation options, and numerous additional treatments."

                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the cost of IVF in Sivagangai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The cost of IVF treatment differs for each person, influenced by factors such as hormone levels, medical history, and overall health. At Sudha Fertility Centre, we simplify this process by assessing your health and delivering a tailored treatment plan that ensures you receive the best care."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the cost of fertility treatments in Sivagangai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Fertility treatments in Sivagangai differ greatly because each one includes various procedures, and every patient needs a tailored approach. As a result, the cost of these treatments depends on the specific procedure, medication, and the number of cycles required. Sudha Fertility Centre in Sivagangai provides top-quality fertility treatments at an affordable price while ensuring excellent care."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I choose the best fertility hospital in Sivagangai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                    "Selecting the right fertility hospital is crucial for receiving quality care. Several factors should guide your decision in finding the best option, including the available treatments, facilities, success rates, doctors' expertise, and location. Sudha Fertility Centre stands out by offering excellent treatment facilities and a team of highly skilled fertility specialists."
                  
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which is the best fertility hospital in Sivagangai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sudha Fertility Centre stands out as the best fertility hospital in Sivagangai, providing numerous fertility treatments, clear counselling, and guidance throughout the fertility journey."
                  }
                },
               
              ]
            })
          }}
        />
      <SivangangaiPage />
    </div>
  )
}
