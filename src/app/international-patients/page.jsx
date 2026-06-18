import International from '@/pages/International'
import React from 'react'
import Head from 'next/head';

export const metadata = {
  title: "International Patients - Sudha Fertility Centre",
  description: "Sudha Fertility Centre, the best fertility center in India, offers comprehensive care and world-class fertility treatments for international patients. We offer the best IVF treatment in India, with the leading fertility experts in India.",
  keywords: "Best Fertility Centre in India, Best IVF Centre Provide World Class Treatments, Best IVF Centre in India for International Patients, Best IVF Centre in South India, Best IUI Centre in South India, Best IVF Centre in Tamil Nadu, Best IUI Centre in Tamil Nadu, Best IUI Hospital in Tamil Nadu, Best IVF Hospital in tamil Nadu, Best Fertility Treatments in South India, Best IVF Treatment in South India, Best IUI Treatment in South India, IVF Specialists in India, IVF Experts in South India",
};

function page() {
  <Head>
    <link rel="alternate" href="https://sudhafertilitycentre.com/international-patients" hreflang="en-in" />
  </Head>
  return (
    <International />
  )
}

export default page