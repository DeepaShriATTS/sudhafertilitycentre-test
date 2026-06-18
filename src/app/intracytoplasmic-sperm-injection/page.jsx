import ICSI from '@/pages/Treatment/ICSI'
import React from 'react'
import Head from 'next/head';
export const metadata = {
  title: "Intracytoplasmic Sperm Injection - Sudha Fertility Centre",
  description: "Sudha Fertility Centre provides expert ICSI treatments to help couples to treat male infertility. With personalised care and advanced technologies we provide hope and high success rates for couples in their journey towards parenthood.",
  keywords: "Best ICSI Centre in South India, Best ICSI Hospital in South India, ICSI Treatment in India, ICSI Treatment in South India, ICSI Experts in India, ICSI Specialists in India",
};
function page() {
  <Head>
    <link rel="alternate" href="https://sudhafertilitycentre.com/intracytoplasmic-sperm-injection" hreflang="en-in" />
  </Head>
  return (
    <ICSI />
  )
}

export default page