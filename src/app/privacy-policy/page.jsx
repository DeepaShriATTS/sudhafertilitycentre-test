import PrivacyPolicy from '@/pages/PrivacyPolicy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
  title: " Privacy Policy - Sudha Fertility Centre",
  description: "",
  keywords: "Best Fertility Centre in India, Best Fertility Hospital in India, Best Fertility Hospital in South India, Best Fertility Centre in South India, Best IVF Centre in South India, Best IVF Hospital in South India, Best Fertility Treatments in South India, Best Fertility Centre in Tamil Nadu, Best Fertility Hospital in Tamil Nadu, Best IVF Centre in Tamil Nadu, Best IVF Hospital in Tamil Nadu, Best Fertility Treatments in Tamil Nadu",
};
function page() {
  <Head>
    <link rel="alternate" href="https://sudhafertilitycentre.com/privacy-policy" hreflang="en-in" />
  </Head>
  return (
    <PrivacyPolicy />
  )
}

export default page