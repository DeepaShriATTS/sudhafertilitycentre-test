import ErodePage from '@/pages/Branch/erode'
import FemaleInfertility from '@/pages/Treatment/FemaleInfertility'
import React from 'react'
export const metadata = {
  title: "Female Infertility - Sudha Fertility Centre",
  description: "At Sudha Fertility Centre, we perform tests to identify the root cause of the female infertility and provide the personalised treatments helping them increase the chance of conception.",
  keywords: "Female Infertility Treatments in India, Female Infertility Treatments in Tamil Nadu, Best IVF Centre in South India, Best IUI Centre in South India, Best IVF Centre in Tamil Nadu, Best IUI Centre in Tamil Nadu, Best IUI Hospital in Tamil Nadu, Best IVF Hospital in Tamil Nadu, Best Fertility Treatments in South India, Best IVF Treatment in South India, Best IUI Treatment in South India, IVF Specialists in India, IVF Experts in South India",
  alternates: {
    canonical: "https://sudhafertilitycentre.com/female-infertility",
    languages: {
      "en-IN": "https://sudhafertilitycentre.com/female-infertility",
    },
  },
};

export default function page() {
    return (
    <div>
      <FemaleInfertility />
    </div>
  )
}
