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
    // videoUrl: "https://www.youtube.com/playlist?list=PLEkCcs1fbilw",
    firstVideoUrl: "https://youtu.be/UbTyi7Hu294?si=WZPNl0qG2IlZGcSL",
    videoUrl: "https://youtu.be/UbTyi7Hu294?si=WZPNl0qG2IlZGcSL",
    title: "IVF Success Story – Journey to Parenthood",
    description:
      "A heartfelt story of a couple who fulfilled their dream of parenthood with the help of Sudha Fertility Centre.",
  },
  {
    id: 2,
    // videoUrl: "https://www.youtube.com/playlist?list=PLBLRXvvbhDUw",
    firstVideoUrl: "https://youtu.be/K5Wh_jxTSWA?si=TnUr_y6J-JlOU2xM",
    videoUrl: "https://youtu.be/K5Wh_jxTSWA?si=TnUr_y6J-JlOU2xM",
    title: "From Empty Arms to Happy Parents",
    description:
      "After years of waiting, this couple shares their emotional journey and the joy of welcoming their baby.",
  },
  {
    id: 3,
    // videoUrl: "https://www.youtube.com/playlist?list=PLSyi3d2ZsUv8",
    firstVideoUrl: "https://youtu.be/31pzOTqJx7Y?si=fQJCLA-vf8pvL1Ez",
    videoUrl: "https://youtu.be/31pzOTqJx7Y?si=fQJCLA-vf8pvL1Ez",
    title: "Our IUI Success – A Dream Come True",
    description:
      "A beautiful testimony of hope and perseverance with successful IUI treatment at Sudha Fertility Centre.",
  },
  {
    id: 4,
    // videoUrl: "https://www.youtube.com/playlist?list=PLab233FZPmLc",
    firstVideoUrl: "https://youtu.be/8nYsaqBdH2k?si=VB0v4uaGf8Gj12h8",
    videoUrl: "https://youtu.be/8nYsaqBdH2k?si=VB0v4uaGf8Gj12h8",
    title: "Twins After 7 Years – Our Miracle Story",
    description:
      "Against all odds, this couple welcomed twins through advanced IVF treatment at Sudha Fertility Centre.",
  },
  {
    id: 5,
    // videoUrl: "https://www.youtube.com/playlist?list=PLRjHYI_bECRo",
    firstVideoUrl: "https://youtu.be/ATxCQtY6Ilk?si=Qpp8fQIj6Tbd2LSH",
    videoUrl: "https://youtu.be/ATxCQtY6Ilk?si=Qpp8fQIj6Tbd2LSH",
    title: "PCOS Treatment & Successful Pregnancy",
    description:
      "Watch how expert PCOS management at Sudha Fertility Centre led to a healthy and joyful pregnancy.",
  },
];