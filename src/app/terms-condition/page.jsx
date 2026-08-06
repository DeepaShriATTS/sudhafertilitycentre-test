import TermCondition from '@/pages/TermCondition'
import React from 'react'


export const metadata = {
  title: "Terms and Conditions - Sudha Fertility Centre",
  description: "Read the terms and conditions for using the official website of Sudha Fertility Centre, including user responsibilities and legal disclaimers.",
  keywords: "",
  alternates: {
    canonical: "https://sudhafertilitycentre.com/terms-condition",
    languages: {
      "en-IN": "https://sudhafertilitycentre.com/terms-condition",
    },
  },
};
function page() {
    return (
    <TermCondition />
  )
}

export default page