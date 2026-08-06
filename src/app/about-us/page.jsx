import About from '@/pages/About'
import React from 'react'
import Head from 'next/head';
export const metadata = {
  title: "About Us - Sudha Fertility Centre",
  description: "Your parenthood journey starts in the hands of the best fertility experts in India. Sudha Fertility Centre is offering the compassionate care to help thousands of couples on their parenthood journey. As the best IVF centre in India…",

  keywords: "Best Fertility Centre in India, Best Fertility Hospital in India, Best Fertility Hospital in South India, Best Fertility Centre in South India, Best IVF Centre in South India, Best IVF Hospital in South India, Best Fertility Treatments in South India, Best Fertility Centre in Tamil Nadu, Best Fertility Hospital in Tamil Nadu, Best IVF Centre in Tamil Nadu, Best IVF Hospital in Tamil Nadu, Best Fertility Treatments in Tamil Nadu",
};


function page() {
  <Head>
    <link rel="alternate" href="https://sudhafertilitycentre.com/about-us" hreflang="en-in" />
  </Head>
  return (
    <About />
  )
}

export default page