import React from "react";
import Script from "next/script";
import Head from "next/head";
import IVFTreatmentHyderabad from "@/pages/Branch/IVFTreatmentinHyderabad ";

export const metadata = {
  title:
    "Best IVF Treatment in Hyderabad | High Success Rate | Sudha Fertility Centre ",
  description:
    "Looking for the best IVF treatment in Hyderabad? Sudha Fertility Centre offers advanced IVF with personalised protocols, expert embryologists & 85% success rate. Book your FREE consultation today. ",
  keywords:
    "IVF treatment in Hyderabad ,IVF specialist in Hyderabad ,how many IVF cycles are needed ,best IVF centre in Hyderabad ,IVF procedure steps ,IVF treatment cost Hyderabad ,IVF in Hyderabad ,IVF success rate Hyderabad ,who needs IVF treatment ,IVF hospital Hyderabad ,test tube baby centre Hyderabad ,IVF vs ICSI difference ,IVF clinic Hyderabad ,IVF treatment process India ,IVF treatment near me Hyderabad ",
};
export default function page() {
  <Head>
    <link
      rel="alternate"
      href="https://sudhafertilitycentre.com/ivf-treatment-in-hyderabad"
      hreflang="en-in"
    />
  </Head>;

  return (
    <div>
      <Script
        id="breadcrumb-schema-hyderabad"
        type="application/ld+json"
        strategy="afterInteractive"
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
                item: "https://sudhafertilitycentre.com/ivf-treatment-in-hyderabad",
              },
            ],
          }),
        }}
      />

      <Script
        id="faq-schema-hyderabad"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the success rate of IVF treatment at Sudha Fertility Centre Hyderabad?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sudha Fertility Centre achieves an 85% IVF success rate — among the highest in Hyderabad. Success rates vary by age, with women under 35 achieving the best outcomes. Our specialists will give you a personalised success estimate during your consultation.",
                },
              },
              {
                "@type": "Question",
                name: "How much does IVF treatment cost in Hyderabad?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "IVF treatment costs in Hyderabad typically range from Rs.1.5 lakhs to Rs.3 lakhs per cycle depending on the protocol required and any additional procedures like ICSI or PGT.",
                },
              },
              {
                "@type": "Question",
                name: "How many IVF cycles will I need?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Many couples conceive in their first IVF cycle. However, some may need 2-3 cycles. Our specialists evaluate your medical history, embryo quality, and response to stimulation to recommend the optimal number of cycles for your situation.",
                },
              },
              {
                "@type": "Question",
                name: "Is IVF treatment painful?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The ovarian stimulation injections may cause mild bloating and discomfort. The egg retrieval procedure is performed under sedation, so patients do not feel pain during the procedure. Most patients return home the same day.",
                },
              },
              {
                "@type": "Question",
                name: "How long does one IVF cycle take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A complete IVF cycle takes approximately 4-6 weeks from the start of stimulation to the pregnancy test.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between IVF and ICSI?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "In IVF, eggs and sperm are placed together in a dish and fertilisation occurs naturally. In ICSI, a single sperm is injected directly into each egg — used when sperm count or motility is low. At Sudha Hyderabad, we recommend the best approach based on your semen analysis results.",
                },
              },
              {
                "@type": "Question",
                name: "Can I do IVF if I have PMOS (PCOS)?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. PMOS (PCOS) is one of the most common reasons couples undergo IVF. Our specialists use modified stimulation protocols to reduce the risk of OHSS while still achieving excellent egg numbers.",
                },
              },
              {
                "@type": "Question",
                name: "Does Sudha Fertility Centre offer IVF in Hyderabad for single women or unmarried couples?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Please contact our Hyderabad centre directly to discuss your specific situation. Our counsellors provide confidential guidance and will advise on the treatment options available.",
                },
              },
            ],
          }),
        }}
      />
      <Script
        type="application/ld+json"
        id="structured-data-hyderabad-banjara"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["MedicalClinic", "LocalBusiness"],
            name: "Sudha Fertility Centre - IVF Treatment Hyderabad",
            description:
              "Advanced IVF treatment in Hyderabad at Sudha Fertility Centre, Banjara Hills. 85% success rate, 40+ years of expertise, personalised protocols by experienced IVF specialists.",
            url: "https://sudhafertilitycentre.com/ivf-treatment-in-hyderabad",
            telephone: "+917670076006",
            email: "care@sudhahospitals.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "D.No. 8-2-335/2 A/T, Green Valley Road No. 5",
              addressLocality: "Banjara Hills",
              addressRegion: "Telangana",
              postalCode: "500034",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "17.4259",
              longitude: "78.4384",
            },
            openingHours: ["Mo-Sa 09:00-18:00", "Su 09:00-13:00"],
            medicalSpecialty: "Reproductive Medicine",
            sameAs: ["https://www.facebook.com/sudhahospitalshyderabad"],
            parentOrganization: {
              "@type": "Organization",
              name: "Sudha Fertility Centre",
              url: "https://sudhafertilitycentre.com",
            },
            hasMap: "https://maps.app.goo.gl/1j6HjWA7kSvZW7LNA",
          }),
        }}
      />

      <IVFTreatmentHyderabad />
    </div>
  );
}
