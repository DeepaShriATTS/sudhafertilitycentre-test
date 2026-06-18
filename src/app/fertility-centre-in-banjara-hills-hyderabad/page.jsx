import React from "react";
import Script from "next/script";
import Head from "next/head";
import ICSITreatmentHyderabad from "@/pages/Branch/ICSITreatmentinHyderabad";
import IVFCostinHyderabad from "@/pages/Branch/IVFCostinHyderabad";
import FertilityCentreinBanjaraHillsHyderabad from "@/pages/Branch/FertilityCentreinBanjaraHillsHyderabad";

export const metadata = {
  title:
    "Best Fertility Centre in Banjara Hills, Hyderabad | IVF, IUI, ICSI | Sudha ",
  description:
    "ICSI treatment at Sudha Fertility Centre Hyderabad — advanced solution for male factor infertility. Single sperm injection technique with 85%+ fertilisation rate. Book FREE consultation.",
  keywords:
    "fertility centre in Banjara Hills ,IVF clinic Banjara Hills Hyderabad ,best fertility doctor Banjara Hills ,fertility centre Banjara Hills Hyderabad ,IVF centre near Banjara Hills ,fertility treatment near me Banjara Hills ,best IVF centre Banjara Hills ,IVF hospital Banjara Hills ,infertility specialist Banjara Hills ,fertility clinic near me Hyderabad ,fertility centre Jubilee Hills ,IVF clinic near me Hyderabad ,IUI treatment Banjara Hills ,ICSI Banjara Hills ,PMOS (PCOS) doctor Banjara Hills ",
};
export default function page() {
  <Head>
    <link
      rel="alternate"
      href="https://sudhafertilitycentre.com/fertility-centre-in-banjara-hills-hyderabad"
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
                item: "https://sudhafertilitycentre.com/fertility-centre-in-banjara-hills-hyderabad",
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
            "@type": ["MedicalClinic", "LocalBusiness"],
            name: "Sudha Fertility Centre - Banjara Hills",
            url: "https://sudhafertilitycentre.com/fertility-centre-in-banjara-hills",
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
            openingHours: ["Mo-Sa 09:00-18:00", "Su 09:00-13:00"],
            medicalSpecialty: "Reproductive Medicine",
            sameAs: ["https://www.facebook.com/sudhahospitalshyderabad"],
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

      <FertilityCentreinBanjaraHillsHyderabad />
    </div>
  );
}
