import Newsandevents from '@/pages/newsandevents'
import React from 'react'
import Head from 'next/head';


export const metadata = {
  title: "News And Events - Sudha Fertility Centre",
  description: "As the leading fertility centre in India, Sudha Fertility Centre has been featured and marking milestones in the fertility care. Driven by the motto of helping couples in their parenthood journey, we have delivered 1 lakh+ healthy babies, renowned as one of the best fertility hospitals in India.",
  keywords: "Best Fertility Centre in India, Best Fertility Hospital in India, Best Fertility Hospital in South India, Best Fertility Centre in South India, Best IVF Centre in South India, Best IVF Hospital in South India, Best Fertility Treatments in South India, Best Fertility Centre in Tamil Nadu, Best Fertility Hospital in Tamil Nadu, Best IVF Centre in Tamil Nadu, Best IVF Hospital in Tamil Nadu, Best Fertility Treatments in Tamil Nadu",
};

function page() {
  <Head>
    <link rel="alternate" href="https://sudhafertilitycentre.com/news-and-events" hreflang="en-in" />
  </Head>

  return (
    <Newsandevents />
  )
}

export default page