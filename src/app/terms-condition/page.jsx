import TermCondition from '@/pages/TermCondition'
import React from 'react'
import Head from 'next/head';


export const metadata = {
  title: "Terms and Conditions - Sudha Fertility Centre",
  description: "Read the terms and conditions for using the official website of Sudha Fertility Centre, including user responsibilities and legal disclaimers.",
  keywords: "",
};
function page() {
  <Head>
    <link rel="alternate" href="https://sudhafertilitycentre.com/terms-condition" hreflang="en-in" />
  </Head>
  return (
    <TermCondition />
  )
}

export default page