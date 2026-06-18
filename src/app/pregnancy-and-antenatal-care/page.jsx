import PregnancyAntenatal from '@/pages/Treatment/PregnancyAntenatal'
import React from 'react'
import Head from 'next/head';


export const metadata = {
  title: "Pregnancy and Antenatal Care - Sudha Fertility Centre",
  description: "Experience personalized care during and after pregnancy with expert support from our dedicated pregnancy and post-pregnancy care services at Sudha Fertility Centre.",
  keywords: "post pregnancy care centre​, Pregnancy Care Centre",
};

function page() {
  <Head>
    <link rel="alternate" href="https://sudhafertilitycentre.com/pregnancy-and-antenatal-care" hreflang="en-in" />
  </Head>
  return (
    <PregnancyAntenatal />
  )
}

export default page