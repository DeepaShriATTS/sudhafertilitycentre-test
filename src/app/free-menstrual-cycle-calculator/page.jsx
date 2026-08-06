import Periodcalculation from '@/pages/calculation/PeriodCalculator'
import React from 'react'


export const metadata = {
  title: "Period Calculator - Sudha Fertility Centre",
  description: "",
  keywords: "",
  alternates: {
    canonical: "https://sudhafertilitycentre.com/free-menstrual-cycle-calculator",
    languages: {
      "en-IN": "https://sudhafertilitycentre.com/free-menstrual-cycle-calculator",
    },
  },
};
export default function page() {
    return (
    <Periodcalculation />
  )
}
