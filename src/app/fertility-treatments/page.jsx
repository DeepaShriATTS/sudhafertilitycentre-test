import Treatment from '@/pages/Treatment/Treatment'
import React from 'react'
import Head from 'next/head';


export const metadata = {
  title: "Fertility Treatments - Sudha Fertility Centre",
  description: "Sudha Fertility Centre offers the world-class fertility treatments with the empathetic care by the best fertility doctors in India. We provide best quality treatments in an affordable price.",
  keywords: "Best IVF Centre in South India, Best IUI Centre in South India, Best IVF Centre in Tamil Nadu, Best IUI Centre in Tamil Nadu, Best IUI Hospital in Tamil Nadu, Best IVF Hospital in Tamil Nadu, Best Fertility Treatments in South India, Best IVF Treatment in South India, Best IUI Treatment in South India, IVF Specialists in India, IVF Experts in South India",
};


function page() {
  <Head>
    <link rel="alternate" href="https://sudhafertilitycentre.com/fertility-treatments" hreflang="en-in" />
  </Head>
  return (
    <Treatment />
  )
}

export default page