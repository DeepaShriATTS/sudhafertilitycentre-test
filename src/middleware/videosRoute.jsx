// import { getYoutubeThumbnail } from "@/components/videoCard/videoCard";

export const getYoutubeThumbnail = (videoUrl) => {
  try {
    const url = new URL(videoUrl);

    let videoId = "";

    if (url.hostname === "youtu.be") {
      videoId = url.pathname.slice(1);
    } else if (
      url.hostname.includes("youtube.com") &&
      url.searchParams.get("v")
    ) {
      videoId = url.searchParams.get("v");
    } else if (url.pathname.includes("/embed/")) {
      videoId = url.pathname.split("/embed/")[1];
    }

    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  } catch {
    return "https://via.placeholder.com/300x200?text=Invalid+Video";
  }
};

export const Homevideos = [
    {
      id: 1,
      thumbnail: getYoutubeThumbnail("https://youtu.be/llt2lwBjACc?si=FAvjlGiysMIU2yms"),
      videoUrl: "https://youtu.be/llt2lwBjACc?si=FAvjlGiysMIU2yms",
      title: "IVF Success Story – Journey to Parenthood",
      description: "A heartfelt story of a couple who fulfilled their dream of parenthood with the help of Sudha Fertility Centre."
    },
    {
      id: 2,
      thumbnail: getYoutubeThumbnail("https://youtu.be/bFPC54oXNEQ?si=VwAe9zaAx-7_UI6A"),
      videoUrl: "https://youtu.be/bFPC54oXNEQ?si=VwAe9zaAx-7_UI6A",
      title: "From Empty Arms to Happy Parents",
      description: "After years of waiting, this couple shares their emotional journey and the joy of welcoming their baby."
    },
    {
      id: 3,
      thumbnail: getYoutubeThumbnail("https://youtu.be/0h4A9RNwnUU?si=w24e981M4ZK0UL9T"),
      videoUrl: "https://youtu.be/0h4A9RNwnUU?si=w24e981M4ZK0UL9T",
      title: "Our IUI Success – A Dream Come True",
      description: "A beautiful testimony of hope and perseverance with successful IUI treatment at Sudha Fertility Centre."
    },
    {
      id: 4,
      thumbnail: getYoutubeThumbnail("https://youtu.be/bwVcz2u0BDQ?si=Ty87iJzmP-BBY-ES"),
      videoUrl: "https://youtu.be/bwVcz2u0BDQ?si=Ty87iJzmP-BBY-ES",
      title: "Twins After 7 Years – Our Miracle Story",
      description: "Against all odds, this couple welcomed twins through advanced IVF treatment at Sudha Fertility Centre."
    },
    {
      id: 5,
      thumbnail: getYoutubeThumbnail("https://youtu.be/8nYsaqBdH2k?si=U3-lH4JSAFpoElYK"),
      videoUrl: "https://youtu.be/8nYsaqBdH2k?si=U3-lH4JSAFpoElYK",
      title: "PCOS Treatment & Successful Pregnancy",
      description: "Watch how expert PCOS management at Sudha Fertility Centre led to a healthy and joyful pregnancy."
    },
   
  ];
