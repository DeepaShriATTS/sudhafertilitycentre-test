import PregnancyCalculator from '@/pages/calculation/PregnancyCalculator'
import React from 'react'

export const metadata = {
  title: "Online Pregnancy Calculator - Sudha Fertility Centre",
  description: "",
  keywords: "",
  alternates: {
    canonical: "https://sudhafertilitycentre.com/free-online-pregnancy-calculator",
    languages: {
      "en-IN": "https://sudhafertilitycentre.com/free-online-pregnancy-calculator",
    },
  },
};


function page() {
    return (
    <PregnancyCalculator />
  )
}

export default page