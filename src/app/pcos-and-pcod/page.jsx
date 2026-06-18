import React from 'react'
import PcosAndPdoc from '@/pages/Treatment/pcos-and-pdoc'
import Head from 'next/head';
export const metadata = {
  title: "PMOS (PCOS) - Sudha fertility Centre",
  description: "PMOS (PCOS) are major problems affecting fertility in women. As the best fertility centre in India, Sudha Fertility Centre provides the best PMOS (PCOS)/PCOD treatments with comprehensive care.",
  keywords: "Best PMOS (PCOS) or PCOD Centre in Tamil Nadu, Best PCOD or PMOS (PCOS) Treatment in Bangalore, PMOS (PCOS) or PCOD Treatment in Hyderabad,Best IVF Centre in South India, Best IUI Centre in South India, Best IVF Centre in Tamil Nadu, Best IUI Centre in Tamil Nadu, Best IUI Hospital in Tamil Nadu, Best IVF Hospital in Tamil Nadu, Best Fertility Treatments in South India, Best IVF Treatment in South India, Best IUI Treatment in South India, IVF Specialists in India, IVF Experts in South India",
};
function page() {
  <Head>
    <link rel="alternate" href="https://sudhafertilitycentre.com/pcos-and-pcod" hreflang="en-in" />
  </Head>
  return (
    <PcosAndPdoc />
  )
}

export default page