import React from "react";
import Script from "next/script";
import Head from "next/head";
import IUITreatmentHyderabad from "@/pages/Branch/IUITreatmentinHyderabad";

export const metadata = {
  title:
    "Best IUI Treatment in Hyderabad | Intrauterine Insemination | Sudha Fertility Centre",
  description:
    "Sudha Fertility Centre offers expert IUI treatment in Hyderabad with high success rates. Affordable, minimally invasive fertility treatment for eligible couples. Book FREE consultation.",
  keywords:
    "IUI treatment in Hyderabad ,IUI procedure Hyderabad ,IUI vs IVF which is better ,intrauterine insemination Hyderabad ,IUI success rate Hyderabad ,how many IUI cycles before IVF ,IUI clinic Hyderabad ,IUI cost in Hyderabad ,who is eligible for IUI treatment ,best IUI centre Hyderabad ,IUI treatment process India ,IUI treatment near me ,IUI specialist Hyderabad ,IUI for unexplained infertility ,IUI with donor sperm Hyderabad ",
};
export default function page() {
  <Head>
    <link
      rel="alternate"
      href="https://sudhafertilitycentre.com/iui-treatment-in-hyderabad"
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
            "@context": "https://schema.org",
            "@type": ["MedicalClinic", "LocalBusiness"],
            name: "Sudha Fertility Centre - IUI Treatment Hyderabad",
            description:
              "Expert IUI (Intrauterine Insemination) treatment in Hyderabad at Sudha Fertility Centre, Banjara Hills. Affordable, minimally invasive first-line fertility care. 35,000+ IUI babies delivered.",
            url: "https://sudhafertilitycentre.com/iui-treatment-in-hyderabad",
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
                name: "Is IUI treatment painful?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "IUI is generally painless. Some women experience mild cramping during or after the procedure, similar to period pain. Most patients go home within 30 minutes.",
                },
              },
              {
                "@type": "Question",
                name: "How many IUI attempts should I try before moving to IVF?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most fertility specialists recommend 3-4 IUI cycles. If pregnancy is not achieved after 3-4 cycles, IVF is usually the next recommended step.",
                },
              },
              {
                "@type": "Question",
                name: "What is the cost of IUI treatment in Hyderabad?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "IUI treatment at Sudha Fertility Centre Hyderabad costs between Rs.8,000 and Rs.25,000 per cycle including sperm preparation and monitoring scans. Final pricing is confirmed after your initial consultation.",
                },
              },
              {
                "@type": "Question",
                name: "Can IUI be done with donor sperm in Hyderabad?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Sudha Fertility Centre offers IUI with donor sperm for eligible couples and single women. Our donor programme is conducted with full confidentiality and in compliance with ICMR guidelines.",
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
            "@type": "MedicalClinic",
            name: "Sudha Fertility Centre",
            medicalSpecialty: "Fertility",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "D.No. 8-2-335/2 A/T, Green Valley Road, No 5, Banjara Hills",
              addressLocality: "Hyderabad",
              addressRegion: "Telangana",
              postalCode: "500034",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "17.42488478",
              longitude: "78.43947312",
            },
            telephone: "+91-76 7007 6006",
            openingHours: "Mo-Su 24:00",
            availableService: [
              {
                "@type": "MedicalProcedure",
                name: "Intracytoplasmic Sperm Injection (ICSI)",
              },
              {
                "@type": "MedicalProcedure",
                name: "In Vitro Fertilization (IVF)",
              },
              {
                "@type": "MedicalProcedure",
                name: "Intrauterine Insemination (IUI)",
              },
              { "@type": "MedicalProcedure", name: "Fertility Testing" },
              { "@type": "MedicalProcedure", name: "Egg Freezing" },
              { "@type": "MedicalProcedure", name: "Sperm Freezing" },
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "261",
            },
            image:
              "https://sudhafertilitycentre.com/_next/static/media/logo-dark.5cc85d6e.svg",
            url: "https://sudhafertilitycentre.com/fertility-centre-in-hyderabad",
            sameAs: [
              "https://www.facebook.com/sudhafertilitycentre",
              "https://www.instagram.com/sudhafertilitycentre/",
              "https://www.youtube.com/@sudhafertilitycentre/",
            ],
          }),
        }}
      />

      <IUITreatmentHyderabad />
    </div>
  );
}
