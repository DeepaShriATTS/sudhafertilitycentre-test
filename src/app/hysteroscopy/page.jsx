import Hysteroscopy from '@/pages/Treatment/Hysteroscopy'
import React from 'react'
import Head from 'next/head';

export const metadata = {
  title: "Hysteroscopy - Sudha Fertility Centre",
  description: "As a leading fertility centre in India, Sudha Fertility Centre provied the advanced hysteroscopy services to diagnose and treat uterine conditions affecting fertility. With experience and expertise we provide comprehensive care to support your parenthood journey.",
  keywords: "Best IVF Centre in South India, Best IUI Centre in South India, Best IVF Centre in Tamil Nadu, Best IUI Centre in Tamil Nadu, Best IUI Hospital in Tamil Nadu, Best IVF Hospital in tamil Nadu, Best Fertility Treatments in South India, Best IVF Treatment in South India, Best IUI Treatment in South India, IVF Specialists in India, IVF Experts in South India",
};
function page() {
  <Head>
    <link rel="alternate" href="https://sudhafertilitycentre.com/hysteroscopy" hreflang="en-in" />
  </Head>
  return (
    <Hysteroscopy />
  )
}

export default page