import AssistedReproductive from '@/pages/Treatment/AssistedReproductive'
import React from 'react'
import Head from 'next/head';
export const metadata = {
  title: "Assisted Reproductive Technology - Sudha Fertility Centre",
  description: "Sudha Fertility Centre provides a wide range of ART treatments tailored to the patients' need and health history. With the advanced technology and personlised care so far we have delivered 1 lakh+ babies.",
  keywords: "Best ART treatments in Tamil Nadu, Assisted reproductive Technoogy in Tamil Nadu, Best IVF Centre in South India, Best IUI Centre in South India, Best IVF Centre in Tamil Nadu, Best IUI Centre in Tamil Nadu, Best IUI Hospital in Tamil Nadu, Best IVF Hospital in tamil Nadu, Best Fertility Treatments in South India, Best IVF Treatment in South India, Best IUI Treatment in South India, IVF Specialists in India, IVF Experts in South India",
};

function page() {
  <Head>
    <link rel="alternate" href="https://sudhafertilitycentre.com/assisted-reproductive-technology" hreflang="en-in" />
  </Head>
  return (
    <AssistedReproductive />
  )
}

export default page