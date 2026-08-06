import PregnancyCalculator from '@/pages/calculation/PregnancyCalculator'
import React from 'react'
import Head from 'next/head';

export const metadata = {
  title: "Online Pregnancy Calculator - Sudha Fertility Centre",
  description: "",
  keywords: "",
};


function page() {
  <Head>
    <link rel="alternate" href="https://sudhafertilitycentre.com/free-online-pregnancy-calculator" hreflang="en-in" />
  </Head>
  return (
    <PregnancyCalculator />
  )
}

export default page