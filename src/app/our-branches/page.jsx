import Branches from '@/pages/Treatment/branches';
import React from 'react'


export const metadata = {
  title: "Our-Branches - Sudha Fertility Centre",
  description: "",
  keywords: "",
  robots: 'noindex, nofollow',
  alternates: {
    canonical: "https://sudhafertilitycentre.com/our-branches",
    languages: {
      "en-IN": "https://sudhafertilitycentre.com/our-branches",
    },
  },
};


function page() {
    return (
    <Branches />
  )
}

export default page