import Gallery from '@/pages/Gallery'
import React from 'react'


export const metadata = {
  title: "Gallery - Sudha Fertility Centre",
  description: "View inspiring moments from fertility treatments, IVF success stories, and joyful parenthood at Sudha Fertility Centre.",
  keywords: "",
  alternates: {
    canonical: "https://sudhafertilitycentre.com/gallery",
    languages: {
      "en-IN": "https://sudhafertilitycentre.com/gallery",
    },
  },
};
function page() {
    return (
    <Gallery />
  )
}

export default page