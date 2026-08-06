import IUI from '@/pages/Treatment/IUI'
import React from 'react'
import Head from 'next/head';
export const metadata = {
  title: "Intrauterine Insemination - Sudha Fertility Centre",
  description: "Sudha Fertility Centre, known as the best fertility hospital in India provides IUI treatment with the best IUI specialists in India. IUI treatment is less invasive and cost-efficient, with the successrate of 80% in our fertility hospital.",
  keywords: "Best IUI Centre in India, Best IUI Centre in South India, Best IUI Hospital in South India, Best IUI Hospital in India, Best IUI Treatment Centre, Best IUI Treatment Hospital, IUI Experts in India, IUI Specialists in South India",
};
function page() {
  <Head>
    <link rel="alternate" href="https://sudhafertilitycentre.com/intrauterine-insemination" hreflang="en-in" />
  </Head>
  return (
    <IUI />
  )
}

export default page