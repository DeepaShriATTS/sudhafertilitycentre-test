import Document, { Html, Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {
  render() {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      "name": "Sudha Fertility Centre",
      "url": "https://sudhafertilitycentre.com",
      "logo": "https://sudhafertilitycentre.com/src/assets/logo-dark.svg", // Replace with actual hosted URL
      "image": "https://sudhafertilitycentre.com/src/assets/og_sudha.jpeg",
      "description": "Sudha Fertility Centre is a leading fertility clinic specializing in IVF, IUI, and advanced reproductive treatments.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Perundurai Rd, Edayankattuvalasu, Erode, Tamil Nadu, 638009",
        "addressLocality": "Erode",
        "addressRegion": "Tamil Nadu",
        "postalCode": "638009",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 7670076006",
        "contactType": "customer service",
        "availableLanguage": ["English", "Tamil"]
      },
      "sameAs": [
        "https://www.facebook.com/sudhafertilitycentre",
        "https://www.instagram.com/sudhafertilitycentre",
        "https://www.youtube.com/@sudhafertilitycentre"
      ],
      "medicalSpecialty": ["Infertility", "IVF", "IUI", "Reproductive Health"],
      "openingHours": "Mo-Sa 09:00-18:00",
      "department": [
        {
          "@type": "MedicalClinic",
          "name": "IVF Treatment",
          "url": "https://sudhafertilitycentre.com/in-vitro-fertilization"
        },
        {
          "@type": "MedicalClinic",
          "name": "IUI Treatment",
          "url": "https://sudhafertilitycentre.com/intrauterine-insemination"
        }
      ],
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4.8",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Happy Patient"
        }
      }
    };

    return (
      <Html lang="en">
        <Head>
          {/* ✅ Structured Data for SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
