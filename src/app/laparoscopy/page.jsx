import Laparoscopy from '@/pages/Treatment/laparoscopy'
import React from 'react'
import Head from 'next/head';
export const metadata = {
  title: "Laparoscopy - Sudha Fertility Centre",
  description: "Sudha Fertility Centre provides advanced laproscopy for treating fertility conditions. Our experienced surgeons provide the utmost care to improve the reproductive health and increase the chances of conception.",
  keywords: "Sudha Fertility Centre, Best Laparoscopy Centre, Best Laparoscopy Hospital in Tamil Nadu, Best IVF Centre in South India, Best IVF Centre in Tamil Nadu, Best IVF Hospital in tamil Nadu, Best Fertility Treatments in South India, Best IVF Treatment in South India, IVF Specialists in India, IVF Experts in South India",
};

function page() {
  <Head>
    <link rel="alternate" href="https://sudhafertilitycentre.com/laparoscopy" hreflang="en-in" />
  </Head>
  return (
    <Laparoscopy />
  )
}

export default page