import Blastocyst from '@/pages/Treatment/Blastocyst'
import React from 'react'
import Head from 'next/head';

export const metadata = {
  title: "Blastocyst Culture And Transfer - Sudha Fertility Centre",
  description: "Sudha Fertility Centre specialises in the blastocyst culture and transfer process, a vital process in IVF to increase the chances of successful pregnancy. We are equipped with a team of fertility experts in India offering the solutions to your ferility problems..",
  keywords: "Best IVF Centre in South India, Best IUI Centre in South India, Best IVF Centre in Tamil Nadu, Best IUI Centre in Tamil Nadu, Best IUI Hospital in Tamil Nadu, Best IVF Hospital in tamil Nadu, Best Fertility Treatments in South India, Best IVF Treatment in South India, Best IUI Treatment in South India, IVF Specialists in India, IVF Experts in South India",
};

function page() {
  <Head>
    <link rel="alternate" href="https://sudhafertilitycentre.com/blastocyst-culture-and-transfer" hreflang="en-in" />
  </Head>
  return (
    <Blastocyst />
  )
}

export default page