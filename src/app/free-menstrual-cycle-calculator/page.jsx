import Periodcalculation from '@/pages/calculation/PeriodCalculator'
import React from 'react'
import Head from 'next/head';


export const metadata = {
  title: "Period Calculator - Sudha Fertility Centre",
  description: "",
  keywords: "",
};
export default function page() {
  <Head>
    <link rel="alternate" href="https://sudhafertilitycentre.com/free-menstrual-cycle-calculator" hreflang="en-in" />
  </Head>
  return (
    <Periodcalculation />
  )
}
