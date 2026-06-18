import PregancyConception from '@/pages/calculation/PregancyConception'
import React from 'react'
import Head from 'next/head';


export const metadata = {
  title: "Conception calculator - Sudha Fertility Centre",
  description: "",
  keywords: "",
};

function page() {
  <Head>
    <link rel="alternate" href="https://sudhafertilitycentre.com/free-conception-calculator" hreflang="en-in" />
  </Head>
  return (
    <PregancyConception />
  )
}

export default page