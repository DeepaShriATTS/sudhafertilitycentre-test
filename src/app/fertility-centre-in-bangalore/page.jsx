
import AttapurPage from '@/pages/Branch/attapur'
import BengaluruPage from '@/pages/Branch/bengaluru'
import React from 'react'
import Script from "next/script";
import Head from 'next/head';





export const metadata = {
  title: "Best Fertility Centre in Bangalore - Sudha Fertility Centre",
  description: "Discover Sudha Fertility Centre in Bangalore, offering top-notch IVF & IUI treatments, expert guidance, and supportive care. Call us today.",
  keywords: "Fertility Centre in Bangalore",
};
function page() {
  <Head>

    <link rel="alternate" href="https://sudhafertilitycentre.com/fertility-centre-in-bangalore" hreflang="en-in" />

  </Head>


  return (
    <>
      <Script
        id="breadcrumb-schema-bangalore"
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
                "item": "https://sudhafertilitycentre.com/fertility-centre-in-bangalore"
              }
            ]
          })
        }}
      />



      <Script
        id="bangalore-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What fertility treatments are available in Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "There are many fertility treatments. Sudha Fertility Centre in Bangalore offers personalized treatments as per your unique needs. We offer In Vitro Fertilization (IVF), Intracytoplasmic Sperm Injection (ICSI), Intrauterine Insemination (IUI) and fertility preservation options. As the top fertility centre in Bangalore, we specialise in providing comprehensive care using the latest technology with a high success rate."
                }
              },
              {
                "@type": "Question",
                "name": "What is the cost of IVF in Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The cost of IVF treatment in Bangalore depends on many factors like your age, medical history, number of cycles it takes, hormonal conditions, etc. The average IVF cost in Bangalore may vary for each individual. At Sudha Fertility Centre, with the best IVF Specialists in Bangalore, we provide customised IVF treatment as per your needs and lifestyle with a high success rate. Our patient-centric approach makes us the best IVF hospital in Bangalore."
                }
              },
              {
                "@type": "Question",
                "name": "What is the cost of fertility treatments in Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Each fertility treatment has different prices as it involves different processes. Also, the prices of infertility treatments depend on multiple factors like age, medical history, health condition, hormonal balance, etc. Sudha Fertility Centre in Bangalore offers the best fertility treatments at an affordable price with a high success rate. As the Best Fertility and IVF center in Bangalore, we treat our patients with utmost care. Our experienced fertility specialists in Bangalore are here to support you at every step of your parenting journey."
                }
              },
              {
                "@type": "Question",
                "name": "How can I choose the best fertility hospital in Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "When choosing the best fertility hospital, you have to look at these factors: the location of the hospital, the treatments they offer, the facilities, the success rates, and the expertise of the fertility specialists in the hospital. Sudha Fertility Centre, the Best Fertility and IVF Hospital in Bangalore, is equipped with world-class facilities, experienced fertility specialists and holds a high success rate."
                }
              },
              {
                "@type": "Question",
                "name": "Which is the best fertility hospital near the HSR layout?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sudha Fertility Centre is the best fertility hospital located on the HSR layout in Bangalore. We offer advanced fertility treatments with intellectually equipped fertility specialists in Bangalore."
                }
              },
              {
                "@type": "Question",
                "name": "Which hospital has the best fertility doctors in Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Dr. S. Pradeepa, the chief consultant of Sudha Fertility Centre in Bangalore, is one of the best fertility experts in Bangalore. This branch is equipped with the best fertility specialists in Bangalore with a record of thousands of couples delivering healthy babies, Free medical camps are conducted every month, and we are proud to share that some of our patients got positive results in the first visit itself."
                }
              },
              {
                "@type": "Question",
                "name": "Which hospital is best for PCOD/PMOS (PCOS) treatment in Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Find the best treatments for Polyendocrine Metabolic Ovarian Syndrome (Polycystic Ovarian Syndrome)  and Polycystic Ovarian Disease by the best fertility specialists and gynaecologists in Bangalore at Sudha Fertility Centre in Bangalore. The doctors examine you completely to diagnose the root cause and provide you with the best PCOD/PMOS (PCOS) treatments."
                }
              },
              {
                "@type": "Question",
                "name": "Can I go to work during IVF treatment?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can continue going to work during IVF treatment. However, balancing fertility treatment and work can be physically and emotionally challenging. Remember to avoid excessive physical exercise and high-stress tasks. Sudha Fertility Centre in Bangalore’s team of IVF doctors is here to support you and guide you through every step of your parenting journey."
                }
              },
              {
                "@type": "Question",
                "name": "What fertility tests should I consider before trying to get pregnant?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "When preparing for pregnancy, these fertility tests are important to discuss with your gynaecologist or fertility doctor. Medical history, especially the menstrual or ovulation cycle issues, blood tests to check the hormone levels and ovarian reserve, and pelvic examination. At Sudha Fertility Centre in Bangalore, we conduct a detailed examination and provide you with the top fertility treatments if necessary."
                }
              },
              {
                "@type": "Question",
                "name": "Which is the best hospital for fertility counselling in Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Going through infertility is emotionally challenging, but it’s important to understand that seeking help is fine. Reaching out to the experts can be helpful and guide you on a positive path. At Sudha Fertility Centre in Bangalore, we empathise with your struggles and challenges and provide trusted fertility counselling by experienced fertility specialists and personalised treatments to overcome your infertility challenges and begin your journey toward parenting"
                }
              },
              {
                "@type": "Question",
                "name": "When is the right time to start IVF treatment?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "If you’re looking to start IVF treatment, the right time to begin the IVF treatment depends on individual factors like your age, fertility history, health condition, and previous treatment history. Couples are advised to opt for IVF if they have tried for pregnancy naturally for more than a year. If you’re over 35, In Vitro Fertilization (IVF) can help you with a successful pregnancy. At Sudha Fertility Centre, the best IVF hospital in Bangalore, our IVF doctors examine you and suggest the best time and approach for your IVF treatment."
                }
              },
              {
                "@type": "Question",
                "name": "What is the cost of Intrauterine Insemination (IUI) treatment in Bangalore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The cost of IUI treatment in Bangalore is based on many factors like your age, medical history, medications, hormonal conditions, etc. The prices of IUI in Bangalore may vary for each individual. At Sudha Fertility Centre, we offer IUI treatments as per your needs and lifestyle. That’s why we are the best IUI hospital in Bangalore."
                }
              }
            ]
          })
        }}
      />
      <Script
        type="application/ld+json"
        id="structured-data-bangalore"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Sudha Fertility Centre",
            "medicalSpecialty": "Fertility",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Door no. - 1534, 21st Main, 7th Cross Road, 1st Sector, HSR Layout",
              "addressLocality": "Bangalore",
              "addressRegion": "Karnataka",
              "postalCode": "560102",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "12.91937637",
              "longitude": "77.64628144"
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
              "ratingValue": "4.8",
              "reviewCount": "141"
            },
            "image": "https://sudhafertilitycentre.com/_next/static/media/logo-dark.5cc85d6e.svg",
            "url": "https://sudhafertilitycentre.com/fertility-centre-in-bangalore",
            "sameAs": [
              "https://www.facebook.com/sudhafertilitycentre",
              "https://www.instagram.com/sudhafertilitycentre/",
              "https://www.youtube.com/@sudhafertilitycentre/"
            ]
          }),
        }}
      />
      <BengaluruPage />
    </>
  )
}

export default page