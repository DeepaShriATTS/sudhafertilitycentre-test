import Gallery from '@/pages/Gallery'
import React from 'react'
import Head from 'next/head';


export const metadata = {
  title: "Gallery - Sudha Fertility Centre",
  description: "View inspiring moments from fertility treatments, IVF success stories, and joyful parenthood at Sudha Fertility Centre.",
  keywords: "",
};
function page() {
  <Head>
    <link rel="alternate" href="https://sudhafertilitycentre.com/gallery" hreflang="en-in" />
  </Head>
  return (
    <Gallery />
  )
}

export default page