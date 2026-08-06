import PregancyConception from '@/pages/calculation/PregancyConception'
import React from 'react'


export const metadata = {
  title: "Conception calculator - Sudha Fertility Centre",
  description: "",
  keywords: "",
  alternates: {
    canonical: "https://sudhafertilitycentre.com/free-conception-calculator",
    languages: {
      "en-IN": "https://sudhafertilitycentre.com/free-conception-calculator",
    },
  },
};

function page() {
    return (
    <PregancyConception />
  )
}

export default page