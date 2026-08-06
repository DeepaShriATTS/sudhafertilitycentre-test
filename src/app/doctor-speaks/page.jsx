import InterviewSection from '@/pages/InterviewSection'
import React from 'react'
import Head from 'next/head';

export const metadata = {
  title: "Interview - Sudha Fertility Centre",
  description: "As the best fertility doctors of India, our experts share some valuable insights. Committed to make the dream of parenthood come true, our fertility experts share the knowledge on reproductive health, accessible to everyone from anywhere.",
  keywords: "Best Fertility Centre in India, Best Fertility Hospital in India, Best Fertility Hospital in South India, Best Fertility Centre in South India, Best IVF Centre in South India, Best IVF Hospital in South India, Best Fertility Treatments in South India, Best Fertility Centre in Tamil Nadu, Best Fertility Hospital in Tamil Nadu, Best IVF Centre in Tamil Nadu, Best IVF Hospital in Tamil Nadu, Best Fertility Treatments in Tamil Nadu",
};

function page() {
  <Head>
    <link rel="alternate" href="https://sudhafertilitycentre.com/doctor-speaks" hreflang="en-in" />
  </Head>
  return (
    <InterviewSection />
  )
}

export default page