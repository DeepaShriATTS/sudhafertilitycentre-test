import OvulationCalculator from '@/pages/calculation/OvulationCalculator'
import React from 'react'
import Head from 'next/head';

export const metadata = {
  title: "Ovulation Calculator - Sudha Fertility Centre",
  description: "",
  keywords: "",
};

function page() {
  <Head>
    <link rel="alternate" href="https://sudhafertilitycentre.com/free-ovulation-calculator" hreflang="en-in" />
  </Head>
  return (
    <OvulationCalculator />
  )
}

export default page