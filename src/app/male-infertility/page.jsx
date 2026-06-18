
import MaleInfertility from '@/pages/Treatment/maleInfertility'
import React from 'react'
import Head from 'next/head';
export const metadata = {
  title: "Male Infertility - Sudha Fertility Centre",
  description: "At Sudha Fertility Centre, our fertility experts diagnose the root cause of the male infertility and provide the advanced solutions to address your specific needs, helping you on your fatherhood journey.",
  keywords: "Male Infertility Treatments in India, male Infertility Treatments in Tamil Nadu, Best IVF Centre in South India, Best IUI Centre in South India, Best IVF Centre in Tamil Nadu, Best IUI Centre in Tamil Nadu, Best IUI Hospital in Tamil Nadu, Best IVF Hospital in Tamil Nadu, Best Fertility Treatments in South India, Best IVF Treatment in South India, Best IUI Treatment in South India, IVF Specialists in India, IVF Experts in South India",
};

export default function page() {
  <Head>
    <link rel="alternate" href="https://sudhafertilitycentre.com/male-infertility" hreflang="en-in" />
  </Head>
  return (
    <div>
      <MaleInfertility />
    </div>
  )
}
