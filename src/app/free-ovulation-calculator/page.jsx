import OvulationCalculator from '@/pages/calculation/OvulationCalculator'
import React from 'react'

export const metadata = {
  title: "Ovulation Calculator - Sudha Fertility Centre",
  description: "",
  keywords: "",
  alternates: {
    canonical: "https://sudhafertilitycentre.com/free-ovulation-calculator",
    languages: {
      "en-IN": "https://sudhafertilitycentre.com/free-ovulation-calculator",
    },
  },
};

function page() {
    return (
    <OvulationCalculator />
  )
}

export default page