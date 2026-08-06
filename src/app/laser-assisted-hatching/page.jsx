import LaserAssistedHatching from '@/pages/Treatment/laserAssistedHatching'
import React from 'react'
import Head from 'next/head';

export const metadata = {
  title: "Laser Assisted Hatching - Sudha Fertility Centre",
  description: "At Sudha Fertility Centre, we offer advanced Laser Assisted Hatching to enhance embryo implantation in IVF. With the state-of-the-art technologies our IVF experts improve the chances of a successful pregnancy.",
  keywords: "Best IVF Centre in South India, Best IUI Centre in South India, Best IVF Centre in Tamil Nadu, Best IUI Centre in Tamil Nadu, Best IUI Hospital in Tamil Nadu, Best IVF Hospital in tamil Nadu, Best Fertility Treatments in South India, Best IVF Treatment in South India, Best IUI Treatment in South India, IVF Specialists in India, IVF Experts in South India",
};

function page() {
  <Head>
    <link rel="alternate" href="https://sudhafertilitycentre.com/laser-assisted-hatching" hreflang="en-in" />
  </Head>
  return (
    <LaserAssistedHatching />
  )
}

export default page