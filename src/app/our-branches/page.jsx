import Branches from '@/pages/Treatment/branches';
import React from 'react'
import Head from 'next/head';


export const metadata = {
  title: "Our-Branches - Sudha Fertility Centre",
  description: "",
  keywords: "",
  robots: 'noindex, nofollow',
};


function page() {
  <Head>
    <link rel="alternate" href="https://sudhafertilitycentre.com/our-branches" hreflang="en-in" />
  </Head>
  return (
    <Branches />
  )
}

export default page