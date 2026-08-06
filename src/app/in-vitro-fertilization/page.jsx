import IVF from '@/pages/Treatment/IVF'
import React from 'react'
import Head from 'next/head';
export const metadata = {
  title: "In Vitro Fertilization - Sudha Fertility Centre",
  description: "Sudha Fertility Centre, the best IVF centre in India has delivered 60k+ healthy babies. Our dedicated team is infused with best IVF doctors in India, experienced lab technicians. Our IVF laboratory…",
  keywords: "Best IVF Centre in India, Best IVF Centre in South India, Best IVF Hospital in South India, Best IVF Hospital in India, Best IVF Treatment Centre, Best IVF Treatment Hospital, IVF Experts in India, IVF Specialists in South India",
};

function page() {
  <Head>
    <link rel="alternate" href="https://sudhafertilitycentre.com/in-vitro-fertilization" hreflang="en-in" />
  </Head>
  return (
    <IVF />
  )
}

export default page