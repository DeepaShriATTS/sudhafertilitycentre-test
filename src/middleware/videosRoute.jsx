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
    videoUrl: "https://www.youtube.com/playlist?list=PLEkCcs1fbilw",
    firstVideoUrl: "https://youtu.be/UbTyi7Hu294?si=WZPNl0qG2IlZGcSL",
    // videoUrl: "https://youtu.be/UbTyi7Hu294?si=WZPNl0qG2IlZGcSL",
    title: "IVF Success Story – Journey to Parenthood",
    description:
      "A heartfelt story of a couple who fulfilled their dream of parenthood with the help of Sudha Fertility Centre.",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/playlist?list=PLBLRXvvbhDUw",
    firstVideoUrl: "https://youtu.be/K5Wh_jxTSWA?si=TnUr_y6J-JlOU2xM",
    // videoUrl: "https://youtu.be/K5Wh_jxTSWA?si=TnUr_y6J-JlOU2xM",
    title: "From Empty Arms to Happy Parents",
    description:
      "After years of waiting, this couple shares their emotional journey and the joy of welcoming their baby.",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/playlist?list=PLC_QvqXkuZhY",
    firstVideoUrl: "https://youtu.be/31pzOTqJx7Y?si=fQJCLA-vf8pvL1Ez",
    // videoUrl: "https://youtu.be/31pzOTqJx7Y?si=fQJCLA-vf8pvL1Ez",
    title: "Our IUI Success – A Dream Come True",
    description:
      "A beautiful testimony of hope and perseverance with successful IUI treatment at Sudha Fertility Centre.",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/playlist?list=PLab233FZPmLc",
    firstVideoUrl: "https://youtu.be/8nYsaqBdH2k?si=VB0v4uaGf8Gj12h8",
    // videoUrl: "https://youtu.be/8nYsaqBdH2k?si=VB0v4uaGf8Gj12h8",
    title: "Twins After 7 Years – Our Miracle Story",
    description:
      "Against all odds, this couple welcomed twins through advanced IVF treatment at Sudha Fertility Centre.",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/playlist?list=PLRjHYI_bECRo",
    firstVideoUrl: "https://youtu.be/ATxCQtY6Ilk?si=Qpp8fQIj6Tbd2LSH",
    // videoUrl: "https://youtu.be/ATxCQtY6Ilk?si=Qpp8fQIj6Tbd2LSH",
    title: "PCOS Treatment & Successful Pregnancy",
    description:
      "Watch how expert PCOS management at Sudha Fertility Centre led to a healthy and joyful pregnancy.",
  },
];


export const ambatturVideos = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/playlist?list=PLaXuFki87NBM",
    firstVideoUrl: "https://youtu.be/IDs0YwhagKo?si=1xG-bgeMoSl5jywZ",
    // videoUrl: "https://youtu.be/UbTyi7Hu294?si=WZPNl0qG2IlZGcSL",
    title: "IVF Success Story – Journey to Parenthood",
    description:
      "A heartfelt story of a couple who fulfilled their dream of parenthood with the help of Sudha Fertility Centre.",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/playlist?list=PLaXuFki87NBM",
    firstVideoUrl: "https://youtu.be/Ma6II9Cw4MY?si=39Q67KeflrIa23xH",
    // videoUrl: "https://youtu.be/K5Wh_jxTSWA?si=TnUr_y6J-JlOU2xM",
    title: "From Empty Arms to Happy Parents",
    description:
      "After years of waiting, this couple shares their emotional journey and the joy of welcoming their baby.",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/playlist?list=PLaXuFki87NBM",
    firstVideoUrl: "https://youtu.be/6jcLO3srNto?si=rXJe6u--dIPMvt5N",
    // videoUrl: "https://youtu.be/31pzOTqJx7Y?si=fQJCLA-vf8pvL1Ez",
    title: "Our IUI Success – A Dream Come True",
    description:
      "A beautiful testimony of hope and perseverance with successful IUI treatment at Sudha Fertility Centre.",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/playlist?list=PLaXuFki87NBM",
    firstVideoUrl: "https://youtu.be/IBdO2ZKyFH8?si=R1TaM8w2JEqcdhg-",
    // videoUrl: "https://youtu.be/8nYsaqBdH2k?si=VB0v4uaGf8Gj12h8",
    title: "Twins After 7 Years – Our Miracle Story",
    description:
      "Against all odds, this couple welcomed twins through advanced IVF treatment at Sudha Fertility Centre.",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/playlist?list=PLaXuFki87NBM",
    firstVideoUrl: "https://youtu.be/f9ZTLwA9u1o?si=vvUivJZX1exxX-_n",
    // videoUrl: "https://youtu.be/ATxCQtY6Ilk?si=Qpp8fQIj6Tbd2LSH",
    title: "PCOS Treatment & Successful Pregnancy",
    description:
      "Watch how expert PCOS management at Sudha Fertility Centre led to a healthy and joyful pregnancy.",
  },
];

export const attapurVideos = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/playlist?list=PLaXuFki87NBM",
    firstVideoUrl: "https://youtu.be/K5Wh_jxTSWA?si=M6FUtiaT7lpV-QTa",
    // videoUrl: "https://youtu.be/UbTyi7Hu294?si=WZPNl0qG2IlZGcSL",
    title: "IVF Success Story – Journey to Parenthood",
    description:
      "A heartfelt story of a couple who fulfilled their dream of parenthood with the help of Sudha Fertility Centre.",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/playlist?list=PLaXuFki87NBM",
    firstVideoUrl: "https://youtu.be/YlzfafmhcZo?si=a7ozw2CjE5nWCkNJ",
    // videoUrl: "https://youtu.be/K5Wh_jxTSWA?si=TnUr_y6J-JlOU2xM",
    title: "From Empty Arms to Happy Parents",
    description:
      "After years of waiting, this couple shares their emotional journey and the joy of welcoming their baby.",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/playlist?list=PLaXuFki87NBM",
    firstVideoUrl: "https://youtu.be/iuxBTa5oWJw?si=kxxS8FlYlWE6F4ID",
    // videoUrl: "https://youtu.be/31pzOTqJx7Y?si=fQJCLA-vf8pvL1Ez",
    title: "Our IUI Success – A Dream Come True",
    description:
      "A beautiful testimony of hope and perseverance with successful IUI treatment at Sudha Fertility Centre.",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/playlist?list=PLaXuFki87NBM",
    firstVideoUrl: "https://youtu.be/Ort1UWqbSvs?si=eUTcksfyS8u6MdPb",
    // videoUrl: "https://youtu.be/8nYsaqBdH2k?si=VB0v4uaGf8Gj12h8",
    title: "Twins After 7 Years – Our Miracle Story",
    description:
      "Against all odds, this couple welcomed twins through advanced IVF treatment at Sudha Fertility Centre.",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/playlist?list=PLaXuFki87NBM",
    firstVideoUrl: "https://youtu.be/Evj-vSKanCs?si=PDsg_AmDQaQwwUys",
    // videoUrl: "https://youtu.be/ATxCQtY6Ilk?si=Qpp8fQIj6Tbd2LSH",
    title: "PCOS Treatment & Successful Pregnancy",
    description:
      "Watch how expert PCOS management at Sudha Fertility Centre led to a healthy and joyful pregnancy.",
  },
];

//need to verify since only one video 
export const bangaloreVideos = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/playlist?list=PLaY7tfuuGDw0",
    firstVideoUrl: "https://youtu.be/K5Wh_jxTSWA?si=M6FUtiaT7lpV-QTa",
    // videoUrl: "https://youtu.be/UbTyi7Hu294?si=WZPNl0qG2IlZGcSL",
    title: "IVF Success Story – Journey to Parenthood",
    description:
      "A heartfelt story of a couple who fulfilled their dream of parenthood with the help of Sudha Fertility Centre.",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/playlist?list=PLaXuFki87NBJ",
    firstVideoUrl: "https://youtu.be/YlzfafmhcZo?si=a7ozw2CjE5nWCkNJ",
    // videoUrl: "https://youtu.be/K5Wh_jxTSWA?si=TnUr_y6J-JlOU2xM",
    title: "From Empty Arms to Happy Parents",
    description:
      "After years of waiting, this couple shares their emotional journey and the joy of welcoming their baby.",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/playlist?list=PLaXuFki87NBJ",
    firstVideoUrl: "https://youtu.be/iuxBTa5oWJw?si=kxxS8FlYlWE6F4ID",
    // videoUrl: "https://youtu.be/31pzOTqJx7Y?si=fQJCLA-vf8pvL1Ez",
    title: "Our IUI Success – A Dream Come True",
    description:
      "A beautiful testimony of hope and perseverance with successful IUI treatment at Sudha Fertility Centre.",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/playlist?list=PLaXuFki87NBJ",
    firstVideoUrl: "https://youtu.be/Ort1UWqbSvs?si=eUTcksfyS8u6MdPb",
    // videoUrl: "https://youtu.be/8nYsaqBdH2k?si=VB0v4uaGf8Gj12h8",
    title: "Twins After 7 Years – Our Miracle Story",
    description:
      "Against all odds, this couple welcomed twins through advanced IVF treatment at Sudha Fertility Centre.",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/playlist?list=PLaXuFki87NBJ",
    firstVideoUrl: "https://youtu.be/Evj-vSKanCs?si=PDsg_AmDQaQwwUys",
    // videoUrl: "https://youtu.be/ATxCQtY6Ilk?si=Qpp8fQIj6Tbd2LSH",
    title: "PCOS Treatment & Successful Pregnancy",
    description:
      "Watch how expert PCOS management at Sudha Fertility Centre led to a healthy and joyful pregnancy.",
  },
];


export const chennaiVideos = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/playlist?list=PLPWv-heunvlg",
    firstVideoUrl: "https://youtu.be/zA7dYzZU2L4?si=idC1VEW75CFSUmb-",
    // videoUrl: "https://youtu.be/UbTyi7Hu294?si=WZPNl0qG2IlZGcSL",
    title: "IVF Success Story – Journey to Parenthood",
    description:
      "A heartfelt story of a couple who fulfilled their dream of parenthood with the help of Sudha Fertility Centre.",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/playlist?list=PLPWv-heunvlg",
    firstVideoUrl: "https://youtu.be/QRsLM4df9mQ?si=QscFBXq8wuGOvgET",
    // videoUrl: "https://youtu.be/K5Wh_jxTSWA?si=TnUr_y6J-JlOU2xM",
    title: "From Empty Arms to Happy Parents",
    description:
      "After years of waiting, this couple shares their emotional journey and the joy of welcoming their baby.",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/playlist?list=PLPWv-heunvlg",
    firstVideoUrl: "https://youtu.be/UbTyi7Hu294?si=bl8e1Ne6G7LiNfJs",
    // videoUrl: "https://youtu.be/31pzOTqJx7Y?si=fQJCLA-vf8pvL1Ez",
    title: "Our IUI Success – A Dream Come True",
    description:
      "A beautiful testimony of hope and perseverance with successful IUI treatment at Sudha Fertility Centre.",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/playlist?list=PLPWv-heunvlg",
    firstVideoUrl: "https://youtu.be/0h4A9RNwnUU?si=0zZ7TUXj1-XRFjsE",
    // videoUrl: "https://youtu.be/8nYsaqBdH2k?si=VB0v4uaGf8Gj12h8",
    title: "Twins After 7 Years – Our Miracle Story",
    description:
      "Against all odds, this couple welcomed twins through advanced IVF treatment at Sudha Fertility Centre.",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/playlist?list=PLPWv-heunvlg",
    firstVideoUrl: "https://youtu.be/bwVcz2u0BDQ?si=b1OjPoiVKRLHzvK6",
    // videoUrl: "https://youtu.be/ATxCQtY6Ilk?si=Qpp8fQIj6Tbd2LSH",
    title: "PCOS Treatment & Successful Pregnancy",
    description:
      "Watch how expert PCOS management at Sudha Fertility Centre led to a healthy and joyful pregnancy.",
  },
];

export const chilakaluripet = [
    {
    id: 1,
    videoUrl: "https://www.youtube.com/playlist?list=PLdN42FR9d9LU",
    firstVideoUrl: "https://youtu.be/zA7dYzZU2L4?si=idC1VEW75CFSUmb-",
    // videoUrl: "https://youtu.be/UbTyi7Hu294?si=WZPNl0qG2IlZGcSL",
    title: "IVF Success Story – Journey to Parenthood",
    description:
      "A heartfelt story of a couple who fulfilled their dream of parenthood with the help of Sudha Fertility Centre.",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/playlist?list=PLdN42FR9d9LU",
    firstVideoUrl: "https://youtu.be/Evj-vSKanCs?si=swp3l0q_7dFP2gj_",
    // videoUrl: "https://youtu.be/K5Wh_jxTSWA?si=TnUr_y6J-JlOU2xM",
    title: "From Empty Arms to Happy Parents",
    description:
      "After years of waiting, this couple shares their emotional journey and the joy of welcoming their baby.",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/playlist?list=PLdN42FR9d9LU",
    firstVideoUrl: "hhttps://youtu.be/iuxBTa5oWJw?si=aYidGsfNt9oo1io4",
    // videoUrl: "https://youtu.be/31pzOTqJx7Y?si=fQJCLA-vf8pvL1Ez",
    title: "Our IUI Success – A Dream Come True",
    description:
      "A beautiful testimony of hope and perseverance with successful IUI treatment at Sudha Fertility Centre.",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/playlist?list=PLdN42FR9d9LU",
    firstVideoUrl: "https://youtu.be/0h4A9RNwnUU?si=0zZ7TUXj1-XRFjsE",
    // videoUrl: "https://youtu.be/8nYsaqBdH2k?si=VB0v4uaGf8Gj12h8",
    title: "Twins After 7 Years – Our Miracle Story",
    description:
      "Against all odds, this couple welcomed twins through advanced IVF treatment at Sudha Fertility Centre.",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/playlist?list=PLdN42FR9d9LU",
    firstVideoUrl: "https://youtu.be/oMipXnLGmj4?si=nPzKDmvCq0Ah24PK",
    // videoUrl: "https://youtu.be/ATxCQtY6Ilk?si=Qpp8fQIj6Tbd2LSH",
    title: "PCOS Treatment & Successful Pregnancy",
    description:
      "Watch how expert PCOS management at Sudha Fertility Centre led to a healthy and joyful pregnancy.",
  },
];

export const coimbatoreVideos = [
    {
    id: 1,
    videoUrl: "https://www.youtube.com/playlist?list=PLBLRXvvbhDUw",
    firstVideoUrl: "https://youtu.be/IDs0YwhagKo?si=NkxIqYWTcX9tZ1d3",
    // videoUrl: "https://youtu.be/UbTyi7Hu294?si=WZPNl0qG2IlZGcSL",
    title: "IVF Success Story – Journey to Parenthood",
    description:
      "A heartfelt story of a couple who fulfilled their dream of parenthood with the help of Sudha Fertility Centre.",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/playlist?list=PLBLRXvvbhDUw",
    firstVideoUrl: "https://youtu.be/IDs0YwhagKo?si=xeHRtk2TF5oFDV4j",
    // videoUrl: "https://youtu.be/K5Wh_jxTSWA?si=TnUr_y6J-JlOU2xM",
    title: "From Empty Arms to Happy Parents",
    description:
      "After years of waiting, this couple shares their emotional journey and the joy of welcoming their baby.",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/playlist?list=PLBLRXvvbhDUw",
    firstVideoUrl: "https://youtu.be/oh8VeikFtb8?si=dMxB5DV_tO4YFl_5",
    // videoUrl: "https://youtu.be/31pzOTqJx7Y?si=fQJCLA-vf8pvL1Ez",
    title: "Our IUI Success – A Dream Come True",
    description:
      "A beautiful testimony of hope and perseverance with successful IUI treatment at Sudha Fertility Centre.",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/playlist?list=PLBLRXvvbhDUw",
    firstVideoUrl: "https://youtu.be/BFx3dZrDB38?si=8k4CJhtqQUZUvFXS",
    // videoUrl: "https://youtu.be/8nYsaqBdH2k?si=VB0v4uaGf8Gj12h8",
    title: "Twins After 7 Years – Our Miracle Story",
    description:
      "Against all odds, this couple welcomed twins through advanced IVF treatment at Sudha Fertility Centre.",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/playlist?list=PLBLRXvvbhDUw",
    firstVideoUrl: "https://youtu.be/Ma6II9Cw4MY?si=4CQwMsczRDDE-ob7",
    // videoUrl: "https://youtu.be/ATxCQtY6Ilk?si=Qpp8fQIj6Tbd2LSH",
    title: "PCOS Treatment & Successful Pregnancy",
    description:
      "Watch how expert PCOS management at Sudha Fertility Centre led to a healthy and joyful pregnancy.",
  },
];

export const erodeVideos = [
    {
    id: 1,
    videoUrl: "https://www.youtube.com/playlist?list=PLEkCcs1fbilw",
    firstVideoUrl: "https://youtu.be/UbTyi7Hu294?si=3Rc-VWO-ce-ftsh4",
    // videoUrl: "https://youtu.be/UbTyi7Hu294?si=WZPNl0qG2IlZGcSL",
    title: "IVF Success Story – Journey to Parenthood",
    description:
      "A heartfelt story of a couple who fulfilled their dream of parenthood with the help of Sudha Fertility Centre.",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/playlist?list=PLEkCcs1fbilw",
    firstVideoUrl: "https://youtu.be/YFimzBqUf14?si=adfzwFi-KlVTwIO7",
    // videoUrl: "https://youtu.be/K5Wh_jxTSWA?si=TnUr_y6J-JlOU2xM",
    title: "From Empty Arms to Happy Parents",
    description:
      "After years of waiting, this couple shares their emotional journey and the joy of welcoming their baby.",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/playlist?list=PLEkCcs1fbilw",
    firstVideoUrl: "https://youtu.be/iWEGwQd4wvg?si=9PhIaDDd0zcpj_KS",
    // videoUrl: "https://youtu.be/31pzOTqJx7Y?si=fQJCLA-vf8pvL1Ez",
    title: "Our IUI Success – A Dream Come True",
    description:
      "A beautiful testimony of hope and perseverance with successful IUI treatment at Sudha Fertility Centre.",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/playlist?list=PLEkCcs1fbilw",
    firstVideoUrl: "https://youtu.be/NzhJPHufpzU?si=FyShZhpS8vCI8mvv",
    // videoUrl: "https://youtu.be/8nYsaqBdH2k?si=VB0v4uaGf8Gj12h8",
    title: "Twins After 7 Years – Our Miracle Story",
    description:
      "Against all odds, this couple welcomed twins through advanced IVF treatment at Sudha Fertility Centre.",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/playlist?list=PLEkCcs1fbilw",
    firstVideoUrl: "https://youtu.be/pvwpuElqJZ8?si=7qPd9dulLkjss3hx",
    // videoUrl: "https://youtu.be/ATxCQtY6Ilk?si=Qpp8fQIj6Tbd2LSH",
    title: "PCOS Treatment & Successful Pregnancy",
    description:
      "Watch how expert PCOS management at Sudha Fertility Centre led to a healthy and joyful pregnancy.",
  },
];

export const dindigulVideos = [
    {
    id: 1,
    videoUrl: "https://www.youtube.com/playlist?list=PLC6ttfyMn1Cs",
    firstVideoUrl: "https://youtu.be/oh8VeikFtb8?si=ascEya4xm1ajwKj5",
    // videoUrl: "https://youtu.be/UbTyi7Hu294?si=WZPNl0qG2IlZGcSL",
    title: "IVF Success Story – Journey to Parenthood",
    description:
      "A heartfelt story of a couple who fulfilled their dream of parenthood with the help of Sudha Fertility Centre.",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/playlist?list=PLC6ttfyMn1Cs",
    firstVideoUrl: "https://youtu.be/wynCJJ_EpP8?si=T6MTpmIQoHpmBi3U",
    // videoUrl: "https://youtu.be/K5Wh_jxTSWA?si=TnUr_y6J-JlOU2xM",
    title: "From Empty Arms to Happy Parents",
    description:
      "After years of waiting, this couple shares their emotional journey and the joy of welcoming their baby.",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/playlist?list=PLC6ttfyMn1Cs",
    firstVideoUrl: "https://youtu.be/BFx3dZrDB38?si=obOo4TFrvSnKeyy5",
    // videoUrl: "https://youtu.be/31pzOTqJx7Y?si=fQJCLA-vf8pvL1Ez",
    title: "Our IUI Success – A Dream Come True",
    description:
      "A beautiful testimony of hope and perseverance with successful IUI treatment at Sudha Fertility Centre.",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/playlist?list=PLC6ttfyMn1Cs",
    firstVideoUrl: "https://youtu.be/93y5Wbgv-JE?si=cfhnAPc1BgQsg9GR",
    // videoUrl: "https://youtu.be/8nYsaqBdH2k?si=VB0v4uaGf8Gj12h8",
    title: "Twins After 7 Years – Our Miracle Story",
    description:
      "Against all odds, this couple welcomed twins through advanced IVF treatment at Sudha Fertility Centre.",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/playlist?list=PLC6ttfyMn1Cs",
    firstVideoUrl: "https://youtu.be/pvwpuElqJZ8?si=Gx2Z_DYMakhC9Q7W",
    // videoUrl: "https://youtu.be/ATxCQtY6Ilk?si=Qpp8fQIj6Tbd2LSH",
    title: "PCOS Treatment & Successful Pregnancy",
    description:
      "Watch how expert PCOS management at Sudha Fertility Centre led to a healthy and joyful pregnancy.",
  },
];

export const hyderabadVideos = [
    {
    id: 1,
    videoUrl: "https://www.youtube.com/playlist?list=PLSyi3d2ZsUv8",
    firstVideoUrl: "https://youtu.be/Evj-vSKanCs?si=CeSpdcDm4o5hTk3t",
    // videoUrl: "https://youtu.be/UbTyi7Hu294?si=WZPNl0qG2IlZGcSL",
    title: "IVF Success Story – Journey to Parenthood",
    description:
      "A heartfelt story of a couple who fulfilled their dream of parenthood with the help of Sudha Fertility Centre.",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/playlist?list=PLSyi3d2ZsUv8",
    firstVideoUrl: "https://youtu.be/oMipXnLGmj4?si=2lM54KuNrVQvzS96",
    // videoUrl: "https://youtu.be/K5Wh_jxTSWA?si=TnUr_y6J-JlOU2xM",
    title: "From Empty Arms to Happy Parents",
    description:
      "After years of waiting, this couple shares their emotional journey and the joy of welcoming their baby.",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/playlist?list=PLSyi3d2ZsUv8",
    firstVideoUrl: "https://youtu.be/Ort1UWqbSvs?si=Cr6qPFQO_VB5yIuY",
    // videoUrl: "https://youtu.be/31pzOTqJx7Y?si=fQJCLA-vf8pvL1Ez",
    title: "Our IUI Success – A Dream Come True",
    description:
      "A beautiful testimony of hope and perseverance with successful IUI treatment at Sudha Fertility Centre.",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/playlist?list=PLSyi3d2ZsUv8",
    firstVideoUrl: "https://youtu.be/DxC6p3Q38tM?si=SQJDwxWX2lI6PLUi",
    // videoUrl: "https://youtu.be/8nYsaqBdH2k?si=VB0v4uaGf8Gj12h8",
    title: "Twins After 7 Years – Our Miracle Story",
    description:
      "Against all odds, this couple welcomed twins through advanced IVF treatment at Sudha Fertility Centre.",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/playlist?list=PLSyi3d2ZsUv8",
    firstVideoUrl: "https://youtu.be/YlzfafmhcZo?si=TLkk6Q1eAqYW7rs_",
    // videoUrl: "https://youtu.be/ATxCQtY6Ilk?si=Qpp8fQIj6Tbd2LSH",
    title: "PCOS Treatment & Successful Pregnancy",
    description:
      "Watch how expert PCOS management at Sudha Fertility Centre led to a healthy and joyful pregnancy.",
  },
];

export const hanamkondaVideos = [
    {
    id: 1,
    videoUrl: "https://www.youtube.com/playlist?list=PLC_QvqXkuZhY",
    firstVideoUrl: "https://youtu.be/Evj-vSKanCs?si=CeSpdcDm4o5hTk3t",
    // videoUrl: "https://youtu.be/UbTyi7Hu294?si=WZPNl0qG2IlZGcSL",
    title: "IVF Success Story – Journey to Parenthood",
    description:
      "A heartfelt story of a couple who fulfilled their dream of parenthood with the help of Sudha Fertility Centre.",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/playlist?list=PLC_QvqXkuZhY",
    firstVideoUrl: "https://youtu.be/oMipXnLGmj4?si=2lM54KuNrVQvzS96",
    // videoUrl: "https://youtu.be/K5Wh_jxTSWA?si=TnUr_y6J-JlOU2xM",
    title: "From Empty Arms to Happy Parents",
    description:
      "After years of waiting, this couple shares their emotional journey and the joy of welcoming their baby.",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/playlist?list=PLC_QvqXkuZhY",
    firstVideoUrl: "https://youtu.be/Ort1UWqbSvs?si=Cr6qPFQO_VB5yIuY",
    // videoUrl: "https://youtu.be/31pzOTqJx7Y?si=fQJCLA-vf8pvL1Ez",
    title: "Our IUI Success – A Dream Come True",
    description:
      "A beautiful testimony of hope and perseverance with successful IUI treatment at Sudha Fertility Centre.",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/playlist?list=PLC_QvqXkuZhY",
    firstVideoUrl: "https://youtu.be/DxC6p3Q38tM?si=SQJDwxWX2lI6PLUi",
    // videoUrl: "https://youtu.be/8nYsaqBdH2k?si=VB0v4uaGf8Gj12h8",
    title: "Twins After 7 Years – Our Miracle Story",
    description:
      "Against all odds, this couple welcomed twins through advanced IVF treatment at Sudha Fertility Centre.",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/playlist?list=PLC_QvqXkuZhY",
    firstVideoUrl: "https://youtu.be/YlzfafmhcZo?si=TLkk6Q1eAqYW7rs_",
    // videoUrl: "https://youtu.be/ATxCQtY6Ilk?si=Qpp8fQIj6Tbd2LSH",
    title: "PCOS Treatment & Successful Pregnancy",
    description:
      "Watch how expert PCOS management at Sudha Fertility Centre led to a healthy and joyful pregnancy.",
  },
];

export const krishnagiriVideos = [
    {
    id: 1,
    videoUrl: "https://www.youtube.com/playlist?list=PLfrMv1vsZnVg",
    firstVideoUrl: "https://youtu.be/4KYvWWMCJY8?si=NeBk2RJUjlbr_g1D",
    // videoUrl: "https://youtu.be/UbTyi7Hu294?si=WZPNl0qG2IlZGcSL",
    title: "IVF Success Story – Journey to Parenthood",
    description:
      "A heartfelt story of a couple who fulfilled their dream of parenthood with the help of Sudha Fertility Centre.",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/playlist?list=PLfrMv1vsZnVg",
    firstVideoUrl: "https://youtu.be/-uGoBuOlSLw?si=VLWW1AqcFJt3krPT",
    // videoUrl: "https://youtu.be/K5Wh_jxTSWA?si=TnUr_y6J-JlOU2xM",
    title: "From Empty Arms to Happy Parents",
    description:
      "After years of waiting, this couple shares their emotional journey and the joy of welcoming their baby.",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/playlist?list=PLfrMv1vsZnVg",
    firstVideoUrl: "https://youtu.be/YFimzBqUf14?si=YaVe27uoV4Y7AJsw",
    // videoUrl: "https://youtu.be/31pzOTqJx7Y?si=fQJCLA-vf8pvL1Ez",
    title: "Our IUI Success – A Dream Come True",
    description:
      "A beautiful testimony of hope and perseverance with successful IUI treatment at Sudha Fertility Centre.",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/playlist?list=PLfrMv1vsZnVg",
    firstVideoUrl: "https://youtu.be/VdEKqS2n39U?si=RwKUOn0oSWmxnSpZ",
    // videoUrl: "https://youtu.be/8nYsaqBdH2k?si=VB0v4uaGf8Gj12h8",
    title: "Twins After 7 Years – Our Miracle Story",
    description:
      "Against all odds, this couple welcomed twins through advanced IVF treatment at Sudha Fertility Centre.",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/playlist?list=PLfrMv1vsZnVg",
    firstVideoUrl: "https://youtu.be/OqOZXX1Bz3Q?si=1ir6FMRrHY6MMxmW",
    // videoUrl: "https://youtu.be/ATxCQtY6Ilk?si=Qpp8fQIj6Tbd2LSH",
    title: "PCOS Treatment & Successful Pregnancy",
    description:
      "Watch how expert PCOS management at Sudha Fertility Centre led to a healthy and joyful pregnancy.",
  },
];

export const maduraiVideos = [
    {
    id: 1,
    videoUrl: "https://www.youtube.com/playlist?list=PLRjHYI_bECRo",
    firstVideoUrl: "https://youtu.be/xBYjBSSrl4s?si=Td7mgtX7twjU49IW",
    // videoUrl: "https://youtu.be/UbTyi7Hu294?si=WZPNl0qG2IlZGcSL",
    title: "IVF Success Story – Journey to Parenthood",
    description:
      "A heartfelt story of a couple who fulfilled their dream of parenthood with the help of Sudha Fertility Centre.",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/playlist?list=PLRjHYI_bECRo",
    firstVideoUrl: "https://youtu.be/llt2lwBjACc?si=DWggvHOFaFv684E2",
    // videoUrl: "https://youtu.be/K5Wh_jxTSWA?si=TnUr_y6J-JlOU2xM",
    title: "From Empty Arms to Happy Parents",
    description:
      "After years of waiting, this couple shares their emotional journey and the joy of welcoming their baby.",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/playlist?list=PLRjHYI_bECRo",
    firstVideoUrl: "https://youtu.be/cntFBWcv62A?si=3DdYRX1s_r6d2AR2",
    // videoUrl: "https://youtu.be/31pzOTqJx7Y?si=fQJCLA-vf8pvL1Ez",
    title: "Our IUI Success – A Dream Come True",
    description:
      "A beautiful testimony of hope and perseverance with successful IUI treatment at Sudha Fertility Centre.",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/playlist?list=PLRjHYI_bECRo",
    firstVideoUrl: "https://youtu.be/xRXOoEXK3Vk?si=jrohY00laY_ubWWN",
    // videoUrl: "https://youtu.be/8nYsaqBdH2k?si=VB0v4uaGf8Gj12h8",
    title: "Twins After 7 Years – Our Miracle Story",
    description:
      "Against all odds, this couple welcomed twins through advanced IVF treatment at Sudha Fertility Centre.",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/playlist?list=PLRjHYI_bECRo",
    firstVideoUrl: "https://youtu.be/G7XR2ntqF-k?si=izyH3AUUdI43z-Xv",
    // videoUrl: "https://youtu.be/ATxCQtY6Ilk?si=Qpp8fQIj6Tbd2LSH",
    title: "PCOS Treatment & Successful Pregnancy",
    description:
      "Watch how expert PCOS management at Sudha Fertility Centre led to a healthy and joyful pregnancy.",
  },
];

export const nagercoilVideos = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/playlist?list=PLTzCzXr7G0oA",
    firstVideoUrl: "https://youtu.be/1XyLY1tiz48?si=aDnpbrLNTZDbLtsl",
    // videoUrl: "https://youtu.be/UbTyi7Hu294?si=WZPNl0qG2IlZGcSL",
    title: "IVF Success Story – Journey to Parenthood",
    description:
      "A heartfelt story of a couple who fulfilled their dream of parenthood with the help of Sudha Fertility Centre.",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/playlist?list=PLTzCzXr7G0oA",
    firstVideoUrl: "https://youtu.be/xRXOoEXK3Vk?si=0OX07OQnDeRkx9uj",
    // videoUrl: "https://youtu.be/K5Wh_jxTSWA?si=TnUr_y6J-JlOU2xM",
    title: "From Empty Arms to Happy Parents",
    description:
      "After years of waiting, this couple shares their emotional journey and the joy of welcoming their baby.",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/playlist?list=PLTzCzXr7G0oA",
    firstVideoUrl: "https://youtu.be/fAoaLHKsQKk?si=XFdeMDR1OJ-4T_Je",
    // videoUrl: "https://youtu.be/31pzOTqJx7Y?si=fQJCLA-vf8pvL1Ez",
    title: "Our IUI Success – A Dream Come True",
    description:
      "A beautiful testimony of hope and perseverance with successful IUI treatment at Sudha Fertility Centre.",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/playlist?list=PLTzCzXr7G0oA",
    firstVideoUrl: "https://youtu.be/G7XR2ntqF-k?si=wGKFivwlV5IJJxXf",
    // videoUrl: "https://youtu.be/8nYsaqBdH2k?si=VB0v4uaGf8Gj12h8",
    title: "Twins After 7 Years – Our Miracle Story",
    description:
      "Against all odds, this couple welcomed twins through advanced IVF treatment at Sudha Fertility Centre.",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/playlist?list=PLTzCzXr7G0oA",
    firstVideoUrl: "https://youtu.be/hhKex-BzyNo?si=KtaRv2MuBsIm9bSM",
    // videoUrl: "https://youtu.be/ATxCQtY6Ilk?si=Qpp8fQIj6Tbd2LSH",
    title: "PCOS Treatment & Successful Pregnancy",
    description:
      "Watch how expert PCOS management at Sudha Fertility Centre led to a healthy and joyful pregnancy.",
  },
]

export const ongoleVideos = [
   {
    id: 1,
    videoUrl: "https://www.youtube.com/playlist?list=PLC_QvqXkuZhY",
    firstVideoUrl: "https://youtu.be/Evj-vSKanCs?si=CeSpdcDm4o5hTk3t",
    // videoUrl: "https://youtu.be/UbTyi7Hu294?si=WZPNl0qG2IlZGcSL",
    title: "IVF Success Story – Journey to Parenthood",
    description:
      "A heartfelt story of a couple who fulfilled their dream of parenthood with the help of Sudha Fertility Centre.",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/playlist?list=PLC_QvqXkuZhY",
    firstVideoUrl: "https://youtu.be/oMipXnLGmj4?si=2lM54KuNrVQvzS96",
    // videoUrl: "https://youtu.be/K5Wh_jxTSWA?si=TnUr_y6J-JlOU2xM",
    title: "From Empty Arms to Happy Parents",
    description:
      "After years of waiting, this couple shares their emotional journey and the joy of welcoming their baby.",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/playlist?list=PLC_QvqXkuZhY",
    firstVideoUrl: "https://youtu.be/Ort1UWqbSvs?si=Cr6qPFQO_VB5yIuY",
    // videoUrl: "https://youtu.be/31pzOTqJx7Y?si=fQJCLA-vf8pvL1Ez",
    title: "Our IUI Success – A Dream Come True",
    description:
      "A beautiful testimony of hope and perseverance with successful IUI treatment at Sudha Fertility Centre.",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/playlist?list=PLC_QvqXkuZhY",
    firstVideoUrl: "https://youtu.be/DxC6p3Q38tM?si=SQJDwxWX2lI6PLUi",
    // videoUrl: "https://youtu.be/8nYsaqBdH2k?si=VB0v4uaGf8Gj12h8",
    title: "Twins After 7 Years – Our Miracle Story",
    description:
      "Against all odds, this couple welcomed twins through advanced IVF treatment at Sudha Fertility Centre.",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/playlist?list=PLC_QvqXkuZhY",
    firstVideoUrl: "https://youtu.be/YlzfafmhcZo?si=TLkk6Q1eAqYW7rs_",
    // videoUrl: "https://youtu.be/ATxCQtY6Ilk?si=Qpp8fQIj6Tbd2LSH",
    title: "PCOS Treatment & Successful Pregnancy",
    description:
      "Watch how expert PCOS management at Sudha Fertility Centre led to a healthy and joyful pregnancy.",
  },
]

export const pondyVideos = [
   {
    id: 1,
    videoUrl: "https://www.youtube.com/playlist?list=PLMrkzXyEnbZE",
    firstVideoUrl: "https://youtu.be/oh8VeikFtb8?si=no-eLLnUa7q_zTHf",
    // videoUrl: "https://youtu.be/UbTyi7Hu294?si=WZPNl0qG2IlZGcSL",
    title: "IVF Success Story – Journey to Parenthood",
    description:
      "A heartfelt story of a couple who fulfilled their dream of parenthood with the help of Sudha Fertility Centre.",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/playlist?list=PLMrkzXyEnbZE",
    firstVideoUrl: "https://youtu.be/wynCJJ_EpP8?si=ZzmirxDKIX1fz_dl",
    // videoUrl: "https://youtu.be/K5Wh_jxTSWA?si=TnUr_y6J-JlOU2xM",
    title: "From Empty Arms to Happy Parents",
    description:
      "After years of waiting, this couple shares their emotional journey and the joy of welcoming their baby.",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/playlist?list=PLMrkzXyEnbZE",
    firstVideoUrl: "https://youtu.be/93y5Wbgv-JE?si=FTy7uJ59YfxExREk",
    // videoUrl: "https://youtu.be/31pzOTqJx7Y?si=fQJCLA-vf8pvL1Ez",
    title: "Our IUI Success – A Dream Come True",
    description:
      "A beautiful testimony of hope and perseverance with successful IUI treatment at Sudha Fertility Centre.",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/playlist?list=PLMrkzXyEnbZE",
    firstVideoUrl: "https://youtu.be/qfGDgOgyrt8?si=K4HjXVS0aqt-pjyi",
    // videoUrl: "https://youtu.be/8nYsaqBdH2k?si=VB0v4uaGf8Gj12h8",
    title: "Twins After 7 Years – Our Miracle Story",
    description:
      "Against all odds, this couple welcomed twins through advanced IVF treatment at Sudha Fertility Centre.",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/playlist?list=PLMrkzXyEnbZE",
    firstVideoUrl: "https://youtu.be/IDs0YwhagKo?si=ACE9wRNY6I9tYRWX",
    // videoUrl: "https://youtu.be/ATxCQtY6Ilk?si=Qpp8fQIj6Tbd2LSH",
    title: "PCOS Treatment & Successful Pregnancy",
    description:
      "Watch how expert PCOS management at Sudha Fertility Centre led to a healthy and joyful pregnancy.",
  },
]

export const ramanathapuramVideos = [
   {
    id: 1,
    videoUrl: "https://www.youtube.com/playlist?list=PLCbNdvVgVq04",
    firstVideoUrl: "https://youtu.be/oh8VeikFtb8?si=NUN2lqUonN1fX0H7",
    // videoUrl: "https://youtu.be/UbTyi7Hu294?si=WZPNl0qG2IlZGcSL",
    title: "IVF Success Story – Journey to Parenthood",
    description:
      "A heartfelt story of a couple who fulfilled their dream of parenthood with the help of Sudha Fertility Centre.",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/playlist?list=PLCbNdvVgVq04",
    firstVideoUrl: "https://youtu.be/pvwpuElqJZ8?si=Kz25RcTCzEMRHg2M",
    // videoUrl: "https://youtu.be/K5Wh_jxTSWA?si=TnUr_y6J-JlOU2xM",
    title: "From Empty Arms to Happy Parents",
    description:
      "After years of waiting, this couple shares their emotional journey and the joy of welcoming their baby.",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/playlist?list=PLCbNdvVgVq04",
    firstVideoUrl: "https://youtu.be/IDs0YwhagKo?si=zQydx98AfcqM8LxX",
    // videoUrl: "https://youtu.be/31pzOTqJx7Y?si=fQJCLA-vf8pvL1Ez",
    title: "Our IUI Success – A Dream Come True",
    description:
      "A beautiful testimony of hope and perseverance with successful IUI treatment at Sudha Fertility Centre.",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/playlist?list=PLCbNdvVgVq04",
    firstVideoUrl: "https://youtu.be/Ma6II9Cw4MY?si=f77oEEUPxxHyBdVX",
    // videoUrl: "https://youtu.be/8nYsaqBdH2k?si=VB0v4uaGf8Gj12h8",
    title: "Twins After 7 Years – Our Miracle Story",
    description:
      "Against all odds, this couple welcomed twins through advanced IVF treatment at Sudha Fertility Centre.",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/playlist?list=PLCbNdvVgVq04",
    firstVideoUrl: "https://youtu.be/1IBiq-xw5Q8?si=cxK_XDEOZelmEpQT",
    // videoUrl: "https://youtu.be/ATxCQtY6Ilk?si=Qpp8fQIj6Tbd2LSH",
    title: "PCOS Treatment & Successful Pregnancy",
    description:
      "Watch how expert PCOS management at Sudha Fertility Centre led to a healthy and joyful pregnancy.",
  },
]

export const salemVideos = [
   {
    id: 1,
    videoUrl: "https://www.youtube.com/playlist?list=PLab233FZPmLc",
    firstVideoUrl: "https://youtu.be/qchvH4h_M3M?si=Rqzo-5XRkIuGhUBK",
    // videoUrl: "https://youtu.be/UbTyi7Hu294?si=WZPNl0qG2IlZGcSL",
    title: "IVF Success Story – Journey to Parenthood",
    description:
      "A heartfelt story of a couple who fulfilled their dream of parenthood with the help of Sudha Fertility Centre.",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/playlist?list=PLab233FZPmLc",
    firstVideoUrl: "https://youtu.be/8F0jctOyQ6k?si=M12nULv9xFAPhrv0",
    // videoUrl: "https://youtu.be/K5Wh_jxTSWA?si=TnUr_y6J-JlOU2xM",
    title: "From Empty Arms to Happy Parents",
    description:
      "After years of waiting, this couple shares their emotional journey and the joy of welcoming their baby.",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/playlist?list=PLab233FZPmLc",
    firstVideoUrl: "https://youtu.be/cntFBWcv62A?si=uslfe-_dKMVKBsXD",
    // videoUrl: "https://youtu.be/31pzOTqJx7Y?si=fQJCLA-vf8pvL1Ez",
    title: "Our IUI Success – A Dream Come True",
    description:
      "A beautiful testimony of hope and perseverance with successful IUI treatment at Sudha Fertility Centre.",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/playlist?list=PLab233FZPmLc",
    firstVideoUrl: "https://youtu.be/ATxCQtY6Ilk?si=iEaDcUQNOeAXYfqo",
    // videoUrl: "https://youtu.be/8nYsaqBdH2k?si=VB0v4uaGf8Gj12h8",
    title: "Twins After 7 Years – Our Miracle Story",
    description:
      "Against all odds, this couple welcomed twins through advanced IVF treatment at Sudha Fertility Centre.",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/playlist?list=PLab233FZPmLc",
    firstVideoUrl: "https://youtu.be/ATxCQtY6Ilk?si=wnYV-E_D42PT6Tva",
    // videoUrl: "https://youtu.be/ATxCQtY6Ilk?si=Qpp8fQIj6Tbd2LSH",
    title: "PCOS Treatment & Successful Pregnancy",
    description:
      "Watch how expert PCOS management at Sudha Fertility Centre led to a healthy and joyful pregnancy.",
  },
]

export const tiruvannamalaiVideos = [
   {
    id: 1,
    videoUrl: "https://www.youtube.com/playlist?list=PLFwxJVl8YOLQ",
    firstVideoUrl: "https://youtu.be/QRsLM4df9mQ?si=cQE9wDahryovIHQO",
    // videoUrl: "https://youtu.be/UbTyi7Hu294?si=WZPNl0qG2IlZGcSL",
    title: "IVF Success Story – Journey to Parenthood",
    description:
      "A heartfelt story of a couple who fulfilled their dream of parenthood with the help of Sudha Fertility Centre.",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/playlist?list=PLFwxJVl8YOLQ",
    firstVideoUrl: "https://youtu.be/4KYvWWMCJY8?si=f_e2_u3JoV8K6jJK",
    // videoUrl: "https://youtu.be/K5Wh_jxTSWA?si=TnUr_y6J-JlOU2xM",
    title: "From Empty Arms to Happy Parents",
    description:
      "After years of waiting, this couple shares their emotional journey and the joy of welcoming their baby.",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/playlist?list=PLFwxJVl8YOLQ",
    firstVideoUrl: "https://youtu.be/zA7dYzZU2L4?si=M9yK91lloFhh0r2v",
    // videoUrl: "https://youtu.be/31pzOTqJx7Y?si=fQJCLA-vf8pvL1Ez",
    title: "Our IUI Success – A Dream Come True",
    description:
      "A beautiful testimony of hope and perseverance with successful IUI treatment at Sudha Fertility Centre.",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/playlist?list=PLFwxJVl8YOLQ",
    firstVideoUrl: "https://youtu.be/8F0jctOyQ6k?si=QHCzf1RSBAyn7-zk",
    // videoUrl: "https://youtu.be/8nYsaqBdH2k?si=VB0v4uaGf8Gj12h8",
    title: "Twins After 7 Years – Our Miracle Story",
    description:
      "Against all odds, this couple welcomed twins through advanced IVF treatment at Sudha Fertility Centre.",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/playlist?list=PLFwxJVl8YOLQ",
    firstVideoUrl: "https://youtu.be/-uGoBuOlSLw?si=kjb4S_29B-fcAxuA",
    // videoUrl: "https://youtu.be/ATxCQtY6Ilk?si=Qpp8fQIj6Tbd2LSH",
    title: "PCOS Treatment & Successful Pregnancy",
    description:
      "Watch how expert PCOS management at Sudha Fertility Centre led to a healthy and joyful pregnancy.",
  },
]

export const trichyVideos = [
   {
    id: 1,
    videoUrl: "https://www.youtube.com/playlist?list=PLG4fmVvw8ks0",
    firstVideoUrl: "https://youtu.be/6jcLO3srNto?si=fymk_6M815RA4AfJ",
    // videoUrl: "https://youtu.be/UbTyi7Hu294?si=WZPNl0qG2IlZGcSL",
    title: "IVF Success Story – Journey to Parenthood",
    description:
      "A heartfelt story of a couple who fulfilled their dream of parenthood with the help of Sudha Fertility Centre.",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/playlist?list=PLG4fmVvw8ks0",
    firstVideoUrl: "https://youtu.be/IBdO2ZKyFH8?si=BuNGyfnSinfHmvfh",
    // videoUrl: "https://youtu.be/K5Wh_jxTSWA?si=TnUr_y6J-JlOU2xM",
    title: "From Empty Arms to Happy Parents",
    description:
      "After years of waiting, this couple shares their emotional journey and the joy of welcoming their baby.",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/playlist?list=PLG4fmVvw8ks0",
    firstVideoUrl: "https://youtu.be/1XyLY1tiz48?si=8sYgAw51ElptbQES",
    // videoUrl: "https://youtu.be/31pzOTqJx7Y?si=fQJCLA-vf8pvL1Ez",
    title: "Our IUI Success – A Dream Come True",
    description:
      "A beautiful testimony of hope and perseverance with successful IUI treatment at Sudha Fertility Centre.",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/playlist?list=PLG4fmVvw8ks0",
    firstVideoUrl: "https://youtu.be/xRXOoEXK3Vk?si=cI-80Kb67lNU3jFB ",
    // videoUrl: "https://youtu.be/8nYsaqBdH2k?si=VB0v4uaGf8Gj12h8",
    title: "Twins After 7 Years – Our Miracle Story",
    description:
      "Against all odds, this couple welcomed twins through advanced IVF treatment at Sudha Fertility Centre.",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/playlist?list=PLG4fmVvw8ks0",
    firstVideoUrl: "https://youtu.be/G7XR2ntqF-k?si=WcJqTwMxUagvMOOp ",
    // videoUrl: "https://youtu.be/ATxCQtY6Ilk?si=Qpp8fQIj6Tbd2LSH",
    title: "PCOS Treatment & Successful Pregnancy",
    description:
      "Watch how expert PCOS management at Sudha Fertility Centre led to a healthy and joyful pregnancy.",
  },
]

export const thanjavurVideos = [
   {
    id: 1,
    videoUrl: "https://www.youtube.com/playlist?list=PLG4fmVvw8ks4",
    firstVideoUrl: "https://youtu.be/iWEGwQd4wvg?si=H072blXXy4RCl1b0",
    // videoUrl: "https://youtu.be/UbTyi7Hu294?si=WZPNl0qG2IlZGcSL",
    title: "IVF Success Story – Journey to Parenthood",
    description:
      "A heartfelt story of a couple who fulfilled their dream of parenthood with the help of Sudha Fertility Centre.",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/playlist?list=PLG4fmVvw8ks4",
    firstVideoUrl: "https://youtu.be/v8yhBEnwYGI?si=XbLjRnYjsHI6m0jG",
    // videoUrl: "https://youtu.be/K5Wh_jxTSWA?si=TnUr_y6J-JlOU2xM",
    title: "From Empty Arms to Happy Parents",
    description:
      "After years of waiting, this couple shares their emotional journey and the joy of welcoming their baby.",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/playlist?list=PLG4fmVvw8ks4",
    firstVideoUrl: "https://youtu.be/NzhJPHufpzU?si=PXYmQ5BQSwrco8m_ ",
    // videoUrl: "https://youtu.be/31pzOTqJx7Y?si=fQJCLA-vf8pvL1Ez",
    title: "Our IUI Success – A Dream Come True",
    description:
      "A beautiful testimony of hope and perseverance with successful IUI treatment at Sudha Fertility Centre.",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/playlist?list=PLG4fmVvw8ks4",
    firstVideoUrl: "https://youtu.be/oh8VeikFtb8?si=tXdErg9-VggH2MjG ",
    // videoUrl: "https://youtu.be/8nYsaqBdH2k?si=VB0v4uaGf8Gj12h8",
    title: "Twins After 7 Years – Our Miracle Story",
    description:
      "Against all odds, this couple welcomed twins through advanced IVF treatment at Sudha Fertility Centre.",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/playlist?list=PLG4fmVvw8ks4",
    firstVideoUrl: "https://youtu.be/zM5GIh-qUGQ?si=p7UmmRjmHdffXbwk",
    // videoUrl: "https://youtu.be/ATxCQtY6Ilk?si=Qpp8fQIj6Tbd2LSH",
    title: "PCOS Treatment & Successful Pregnancy",
    description:
      "Watch how expert PCOS management at Sudha Fertility Centre led to a healthy and joyful pregnancy.",
  },
]

export const thoothukudiVideos = [
   {
    id: 1,
    videoUrl: "https://www.youtube.com/playlist?list=PLM8lBfiQNBSw",
    firstVideoUrl: "https://youtu.be/4KYvWWMCJY8?si=5Z7EvFnKW_fHrye5",
    // videoUrl: "https://youtu.be/UbTyi7Hu294?si=WZPNl0qG2IlZGcSL",
    title: "IVF Success Story – Journey to Parenthood",
    description:
      "A heartfelt story of a couple who fulfilled their dream of parenthood with the help of Sudha Fertility Centre.",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/playlist?list=PLM8lBfiQNBSw",
    firstVideoUrl: "https://youtu.be/QRsLM4df9mQ?si=S5rFk5gnAfS-g9to",
    // videoUrl: "https://youtu.be/K5Wh_jxTSWA?si=TnUr_y6J-JlOU2xM",
    title: "From Empty Arms to Happy Parents",
    description:
      "After years of waiting, this couple shares their emotional journey and the joy of welcoming their baby.",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/playlist?list=PLM8lBfiQNBSw",
    firstVideoUrl: "https://youtu.be/zA7dYzZU2L4?si=AcJDhP3LlFgPZ7sh",
    // videoUrl: "https://youtu.be/31pzOTqJx7Y?si=fQJCLA-vf8pvL1Ez",
    title: "Our IUI Success – A Dream Come True",
    description:
      "A beautiful testimony of hope and perseverance with successful IUI treatment at Sudha Fertility Centre.",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/playlist?list=PLM8lBfiQNBSw",
    firstVideoUrl: "https://youtu.be/xBYjBSSrl4s?si=dkM9J2VJutwRurY2",
    // videoUrl: "https://youtu.be/8nYsaqBdH2k?si=VB0v4uaGf8Gj12h8",
    title: "Twins After 7 Years – Our Miracle Story",
    description:
      "Against all odds, this couple welcomed twins through advanced IVF treatment at Sudha Fertility Centre.",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/playlist?list=PLM8lBfiQNBSw",
    firstVideoUrl: "https://youtu.be/YFimzBqUf14?si=z-q1RNRxAjF_uspZ",
    // videoUrl: "https://youtu.be/ATxCQtY6Ilk?si=Qpp8fQIj6Tbd2LSH",
    title: "PCOS Treatment & Successful Pregnancy",
    description:
      "Watch how expert PCOS management at Sudha Fertility Centre led to a healthy and joyful pregnancy.",
  },
]

export const tiruppurVideos = [
   {
    id: 1,
    videoUrl: "https://www.youtube.com/playlist?list=PLYplBH2gHJKI",
    firstVideoUrl: "https://youtu.be/YFimzBqUf14?si=8DR2BoEXammRQgZJ",
    // videoUrl: "https://youtu.be/UbTyi7Hu294?si=WZPNl0qG2IlZGcSL",
    title: "IVF Success Story – Journey to Parenthood",
    description:
      "A heartfelt story of a couple who fulfilled their dream of parenthood with the help of Sudha Fertility Centre.",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/playlist?list=PLYplBH2gHJKI",
    firstVideoUrl: "https://youtu.be/llt2lwBjACc?si=1acj89ib-2KiF5UA",
    // videoUrl: "https://youtu.be/K5Wh_jxTSWA?si=TnUr_y6J-JlOU2xM",
    title: "From Empty Arms to Happy Parents",
    description:
      "After years of waiting, this couple shares their emotional journey and the joy of welcoming their baby.",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/playlist?list=PLYplBH2gHJKI",
    firstVideoUrl: "https://youtu.be/cntFBWcv62A?si=Bbl2tx6rqP1H7ZQg",
    // videoUrl: "https://youtu.be/31pzOTqJx7Y?si=fQJCLA-vf8pvL1Ez",
    title: "Our IUI Success – A Dream Come True",
    description:
      "A beautiful testimony of hope and perseverance with successful IUI treatment at Sudha Fertility Centre.",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/playlist?list=PLYplBH2gHJKI",
    firstVideoUrl: "https://youtu.be/G7XR2ntqF-k?si=kqCkdpJyn4CoVjsq",
    // videoUrl: "https://youtu.be/8nYsaqBdH2k?si=VB0v4uaGf8Gj12h8",
    title: "Twins After 7 Years – Our Miracle Story",
    description:
      "Against all odds, this couple welcomed twins through advanced IVF treatment at Sudha Fertility Centre.",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/playlist?list=PLYplBH2gHJKI",
    firstVideoUrl: "https://youtu.be/I4lGbG66mJQ?si=MaTMj5tvtrsXLZQ9",
    // videoUrl: "https://youtu.be/ATxCQtY6Ilk?si=Qpp8fQIj6Tbd2LSH",
    title: "PCOS Treatment & Successful Pregnancy",
    description:
      "Watch how expert PCOS management at Sudha Fertility Centre led to a healthy and joyful pregnancy.",
  },
]

export const theniVideos = [
   {
    id: 1,
    videoUrl: "https://www.youtube.com/playlist?list=PLBIdJskPmjdw",
    firstVideoUrl: "https://youtu.be/oh8VeikFtb8?si=kkEUrJT04G4hnkC7",
    // videoUrl: "https://youtu.be/UbTyi7Hu294?si=WZPNl0qG2IlZGcSL",
    title: "IVF Success Story – Journey to Parenthood",
    description:
      "A heartfelt story of a couple who fulfilled their dream of parenthood with the help of Sudha Fertility Centre.",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/playlist?list=PLBIdJskPmjdw",
    firstVideoUrl: "https://youtu.be/wynCJJ_EpP8?si=9BDhCGsMYdfMo7BT",
    // videoUrl: "https://youtu.be/K5Wh_jxTSWA?si=TnUr_y6J-JlOU2xM",
    title: "From Empty Arms to Happy Parents",
    description:
      "After years of waiting, this couple shares their emotional journey and the joy of welcoming their baby.",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/playlist?list=PLBIdJskPmjdw",
    firstVideoUrl: "https://youtu.be/BFx3dZrDB38?si=ZN-mV1GWZjjbBOQ5",
    // videoUrl: "https://youtu.be/31pzOTqJx7Y?si=fQJCLA-vf8pvL1Ez",
    title: "Our IUI Success – A Dream Come True",
    description:
      "A beautiful testimony of hope and perseverance with successful IUI treatment at Sudha Fertility Centre.",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/playlist?list=PLBIdJskPmjdw",
    firstVideoUrl: "https://youtu.be/qfGDgOgyrt8?si=OjBiYJQu0za8JK1j",
    // videoUrl: "https://youtu.be/8nYsaqBdH2k?si=VB0v4uaGf8Gj12h8",
    title: "Twins After 7 Years – Our Miracle Story",
    description:
      "Against all odds, this couple welcomed twins through advanced IVF treatment at Sudha Fertility Centre.",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/playlist?list=PLBIdJskPmjdw",
    firstVideoUrl: "https://youtu.be/Ma6II9Cw4MY?si=wIEY-L3TsueWj9ig",
    // videoUrl: "https://youtu.be/ATxCQtY6Ilk?si=Qpp8fQIj6Tbd2LSH",
    title: "PCOS Treatment & Successful Pregnancy",
    description:
      "Watch how expert PCOS management at Sudha Fertility Centre led to a healthy and joyful pregnancy.",
  },
]

export const tirunelveliVideos = [
   {
    id: 1,
    videoUrl: "https://www.youtube.com/playlist?list=PLE8kY8zsDwz8",
    firstVideoUrl: "https://youtu.be/8nYsaqBdH2k?si=qQAxZhicU5HZnmBu",
    // videoUrl: "https://youtu.be/UbTyi7Hu294?si=WZPNl0qG2IlZGcSL",
    title: "IVF Success Story – Journey to Parenthood",
    description:
      "A heartfelt story of a couple who fulfilled their dream of parenthood with the help of Sudha Fertility Centre.",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/playlist?list=PLE8kY8zsDwz8",
    firstVideoUrl: "https://youtu.be/ay2iqI5UPfQ?si=9CaR-BMrsRRHVTjC",
    // videoUrl: "https://youtu.be/K5Wh_jxTSWA?si=TnUr_y6J-JlOU2xM",
    title: "From Empty Arms to Happy Parents",
    description:
      "After years of waiting, this couple shares their emotional journey and the joy of welcoming their baby.",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/playlist?list=PLE8kY8zsDwz8",
    firstVideoUrl: "https://youtu.be/xBYjBSSrl4s?si=dBsCSZG06ISx5P6s",
    // videoUrl: "https://youtu.be/31pzOTqJx7Y?si=fQJCLA-vf8pvL1Ez",
    title: "Our IUI Success – A Dream Come True",
    description:
      "A beautiful testimony of hope and perseverance with successful IUI treatment at Sudha Fertility Centre.",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/playlist?list=PLE8kY8zsDwz8",
    firstVideoUrl: "https://youtu.be/-uGoBuOlSLw?si=EWjVsHiazrQCZ-3l",
    // videoUrl: "https://youtu.be/8nYsaqBdH2k?si=VB0v4uaGf8Gj12h8",
    title: "Twins After 7 Years – Our Miracle Story",
    description:
      "Against all odds, this couple welcomed twins through advanced IVF treatment at Sudha Fertility Centre.",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/playlist?list=PLE8kY8zsDwz8",
    firstVideoUrl: "https://youtu.be/YFimzBqUf14?si=jcG5DR-y1Ce_0edk",
    // videoUrl: "https://youtu.be/ATxCQtY6Ilk?si=Qpp8fQIj6Tbd2LSH",
    title: "PCOS Treatment & Successful Pregnancy",
    description:
      "Watch how expert PCOS management at Sudha Fertility Centre led to a healthy and joyful pregnancy.",
  },
]

export const velloreVideos = [
   {
    id: 1,
    videoUrl: "https://www.youtube.com/playlist?list=PLF8jCszmlCB8",
    firstVideoUrl: "https://youtu.be/0h4A9RNwnUU?si=D-BfkI6D110LFHXO",
    // videoUrl: "https://youtu.be/UbTyi7Hu294?si=WZPNl0qG2IlZGcSL",
    title: "IVF Success Story – Journey to Parenthood",
    description:
      "A heartfelt story of a couple who fulfilled their dream of parenthood with the help of Sudha Fertility Centre.",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/playlist?list=PLF8jCszmlCB8",
    firstVideoUrl: "https://youtu.be/bwVcz2u0BDQ?si=ucm8izU4EdVAmE-R",
    // videoUrl: "https://youtu.be/K5Wh_jxTSWA?si=TnUr_y6J-JlOU2xM",
    title: "From Empty Arms to Happy Parents",
    description:
      "After years of waiting, this couple shares their emotional journey and the joy of welcoming their baby.",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/playlist?list=PLF8jCszmlCB8",
    firstVideoUrl: "https://youtu.be/YFimzBqUf14?si=5uv7u-5J_ITcdgLa",
    // videoUrl: "https://youtu.be/31pzOTqJx7Y?si=fQJCLA-vf8pvL1Ez",
    title: "Our IUI Success – A Dream Come True",
    description:
      "A beautiful testimony of hope and perseverance with successful IUI treatment at Sudha Fertility Centre.",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/playlist?list=PLF8jCszmlCB8",
    firstVideoUrl: "https://youtu.be/NzhJPHufpzU?si=qgA44xxTaPBlOfvM",
    // videoUrl: "https://youtu.be/8nYsaqBdH2k?si=VB0v4uaGf8Gj12h8",
    title: "Twins After 7 Years – Our Miracle Story",
    description:
      "Against all odds, this couple welcomed twins through advanced IVF treatment at Sudha Fertility Centre.",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/playlist?list=PLF8jCszmlCB8",
    firstVideoUrl: "https://youtu.be/oh8VeikFtb8?si=oAmf_E2jwOJkGMM5",
    // videoUrl: "https://youtu.be/ATxCQtY6Ilk?si=Qpp8fQIj6Tbd2LSH",
    title: "PCOS Treatment & Successful Pregnancy",
    description:
      "Watch how expert PCOS management at Sudha Fertility Centre led to a healthy and joyful pregnancy.",
  },
]

export const vijayawadaVideos = [
   {
    id: 1,
    videoUrl: "https://www.youtube.com/playlist?list=PLGsu4aKE7gdM",
    firstVideoUrl: "https://youtu.be/YlzfafmhcZo?si=5i4FylmlGNoow0ek",
    // videoUrl: "https://youtu.be/UbTyi7Hu294?si=WZPNl0qG2IlZGcSL",
    title: "IVF Success Story – Journey to Parenthood",
    description:
      "A heartfelt story of a couple who fulfilled their dream of parenthood with the help of Sudha Fertility Centre.",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/playlist?list=PLGsu4aKE7gdM",
    firstVideoUrl: "https://youtu.be/Evj-vSKanCs?si=7TOP-zD2guL5mn_v",
    // videoUrl: "https://youtu.be/K5Wh_jxTSWA?si=TnUr_y6J-JlOU2xM",
    title: "From Empty Arms to Happy Parents",
    description:
      "After years of waiting, this couple shares their emotional journey and the joy of welcoming their baby.",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/playlist?list=PLGsu4aKE7gdM",
    firstVideoUrl: "https://youtu.be/Evj-vSKanCs?si=HIMdPCbug_PC4HMh",
    // videoUrl: "https://youtu.be/31pzOTqJx7Y?si=fQJCLA-vf8pvL1Ez",
    title: "Our IUI Success – A Dream Come True",
    description:
      "A beautiful testimony of hope and perseverance with successful IUI treatment at Sudha Fertility Centre.",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/playlist?list=PLGsu4aKE7gdM",
    firstVideoUrl: "https://youtu.be/YlzfafmhcZo?si=mCm0pTiEIV9BuN4o",
    // videoUrl: "https://youtu.be/8nYsaqBdH2k?si=VB0v4uaGf8Gj12h8",
    title: "Twins After 7 Years – Our Miracle Story",
    description:
      "Against all odds, this couple welcomed twins through advanced IVF treatment at Sudha Fertility Centre.",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/playlist?list=PLGsu4aKE7gdM",
    firstVideoUrl: "https://youtu.be/YlzfafmhcZo?si=5i4FylmlGNoow0ek",
    // videoUrl: "https://youtu.be/ATxCQtY6Ilk?si=Qpp8fQIj6Tbd2LSH",
    title: "PCOS Treatment & Successful Pregnancy",
    description:
      "Watch how expert PCOS management at Sudha Fertility Centre led to a healthy and joyful pregnancy.",
  },
]

export const nelloreVideos = [
   {
    id: 1,
    videoUrl: "https://www.youtube.com/playlist?list=PLXD04tf7_Y3k",
    firstVideoUrl: "https://youtu.be/NzhJPHufpzU?si=RbNO7rMW3CclTFWC",
    // videoUrl: "https://youtu.be/UbTyi7Hu294?si=WZPNl0qG2IlZGcSL",
    title: "IVF Success Story – Journey to Parenthood",
    description:
      "A heartfelt story of a couple who fulfilled their dream of parenthood with the help of Sudha Fertility Centre.",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/playlist?list=PLXD04tf7_Y3k",
    firstVideoUrl: "https://youtu.be/wynCJJ_EpP8?si=FoQiCpbrmmH9e0FH",
    // videoUrl: "https://youtu.be/K5Wh_jxTSWA?si=TnUr_y6J-JlOU2xM",
    title: "From Empty Arms to Happy Parents",
    description:
      "After years of waiting, this couple shares their emotional journey and the joy of welcoming their baby.",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/playlist?list=PLXD04tf7_Y3k",
    firstVideoUrl: "https://youtu.be/IDs0YwhagKo?si=PTOn7IPaDmfMqEPw",
    // videoUrl: "https://youtu.be/31pzOTqJx7Y?si=fQJCLA-vf8pvL1Ez",
    title: "Our IUI Success – A Dream Come True",
    description:
      "A beautiful testimony of hope and perseverance with successful IUI treatment at Sudha Fertility Centre.",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/playlist?list=PLXD04tf7_Y3k",
    firstVideoUrl: "https://youtu.be/Ma6II9Cw4MY?si=nSunOcYUMK7fsCiN",
    // videoUrl: "https://youtu.be/8nYsaqBdH2k?si=VB0v4uaGf8Gj12h8",
    title: "Twins After 7 Years – Our Miracle Story",
    description:
      "Against all odds, this couple welcomed twins through advanced IVF treatment at Sudha Fertility Centre.",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/playlist?list=PLXD04tf7_Y3k",
    firstVideoUrl: "https://youtu.be/3vMPqaEFzfw?si=OkQhToyoLPBmth3k",
    // videoUrl: "https://youtu.be/ATxCQtY6Ilk?si=Qpp8fQIj6Tbd2LSH",
    title: "PCOS Treatment & Successful Pregnancy",
    description:
      "Watch how expert PCOS management at Sudha Fertility Centre led to a healthy and joyful pregnancy.",
  },
]

export const paramakudiVideos = [
   {
    id: 1,
    videoUrl: "https://www.youtube.com/playlist?list=PLXD04tf7_Y3k",
    firstVideoUrl: "https://youtu.be/NzhJPHufpzU?si=RbNO7rMW3CclTFWC",
    // videoUrl: "https://youtu.be/UbTyi7Hu294?si=WZPNl0qG2IlZGcSL",
    title: "IVF Success Story – Journey to Parenthood",
    description:
      "A heartfelt story of a couple who fulfilled their dream of parenthood with the help of Sudha Fertility Centre.",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/playlist?list=PLXD04tf7_Y3k",
    firstVideoUrl: "https://youtu.be/wynCJJ_EpP8?si=FoQiCpbrmmH9e0FH",
    // videoUrl: "https://youtu.be/K5Wh_jxTSWA?si=TnUr_y6J-JlOU2xM",
    title: "From Empty Arms to Happy Parents",
    description:
      "After years of waiting, this couple shares their emotional journey and the joy of welcoming their baby.",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/playlist?list=PLXD04tf7_Y3k",
    firstVideoUrl: "https://youtu.be/IDs0YwhagKo?si=PTOn7IPaDmfMqEPw",
    // videoUrl: "https://youtu.be/31pzOTqJx7Y?si=fQJCLA-vf8pvL1Ez",
    title: "Our IUI Success – A Dream Come True",
    description:
      "A beautiful testimony of hope and perseverance with successful IUI treatment at Sudha Fertility Centre.",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/playlist?list=PLXD04tf7_Y3k",
    firstVideoUrl: "https://youtu.be/Ma6II9Cw4MY?si=nSunOcYUMK7fsCiN",
    // videoUrl: "https://youtu.be/8nYsaqBdH2k?si=VB0v4uaGf8Gj12h8",
    title: "Twins After 7 Years – Our Miracle Story",
    description:
      "Against all odds, this couple welcomed twins through advanced IVF treatment at Sudha Fertility Centre.",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/playlist?list=PLXD04tf7_Y3k",
    firstVideoUrl: "https://youtu.be/3vMPqaEFzfw?si=OkQhToyoLPBmth3k",
    // videoUrl: "https://youtu.be/ATxCQtY6Ilk?si=Qpp8fQIj6Tbd2LSH",
    title: "PCOS Treatment & Successful Pregnancy",
    description:
      "Watch how expert PCOS management at Sudha Fertility Centre led to a healthy and joyful pregnancy.",
  },
]

export const tindivanamVideos = [
   {
    id: 1,
    videoUrl: "https://www.youtube.com/playlist?list=PLKoq1xly2G7s",
    firstVideoUrl: "https://youtu.be/bwVcz2u0BDQ?si=QqBJ-wOhDA98w6jh",
    // videoUrl: "https://youtu.be/UbTyi7Hu294?si=WZPNl0qG2IlZGcSL",
    title: "IVF Success Story – Journey to Parenthood",
    description:
      "A heartfelt story of a couple who fulfilled their dream of parenthood with the help of Sudha Fertility Centre.",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/playlist?list=PLN3-szv_fClE",
    firstVideoUrl: "https://youtu.be/iWEGwQd4wvg?si=4-be6U29Rog9r4qp",
    // videoUrl: "https://youtu.be/K5Wh_jxTSWA?si=TnUr_y6J-JlOU2xM",
    title: "From Empty Arms to Happy Parents",
    description:
      "After years of waiting, this couple shares their emotional journey and the joy of welcoming their baby.",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/playlist?list=PLN3-szv_fClE",
    firstVideoUrl: "https://youtu.be/VdEKqS2n39U?si=fTOlz407YKtc3Ga3",
    // videoUrl: "https://youtu.be/31pzOTqJx7Y?si=fQJCLA-vf8pvL1Ez",
    title: "Our IUI Success – A Dream Come True",
    description:
      "A beautiful testimony of hope and perseverance with successful IUI treatment at Sudha Fertility Centre.",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/playlist?list=PLN3-szv_fClE",
    firstVideoUrl: "https://youtu.be/qfGDgOgyrt8?si=M5KfwTNwXhLp7bfp",
    // videoUrl: "https://youtu.be/8nYsaqBdH2k?si=VB0v4uaGf8Gj12h8",
    title: "Twins After 7 Years – Our Miracle Story",
    description:
      "Against all odds, this couple welcomed twins through advanced IVF treatment at Sudha Fertility Centre.",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/playlist?list=PLN3-szv_fClE",
    firstVideoUrl: "https://youtu.be/Ma6II9Cw4MY?si=QUfx1OGMgUqLaqYq",
    // videoUrl: "https://youtu.be/ATxCQtY6Ilk?si=Qpp8fQIj6Tbd2LSH",
    title: "PCOS Treatment & Successful Pregnancy",
    description:
      "Watch how expert PCOS management at Sudha Fertility Centre led to a healthy and joyful pregnancy.",
  },
]

export const tirupathurVideos = [
   {
    id: 1,
    videoUrl: "https://www.youtube.com/playlist?list=PLKoq1xly2G7s",
    firstVideoUrl: "https://youtu.be/oh8VeikFtb8?si=kwx91iWM31kJb2P3",
    // videoUrl: "https://youtu.be/UbTyi7Hu294?si=WZPNl0qG2IlZGcSL",
    title: "IVF Success Story – Journey to Parenthood",
    description:
      "A heartfelt story of a couple who fulfilled their dream of parenthood with the help of Sudha Fertility Centre.",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/playlist?list=PLKoq1xly2G7s",
    firstVideoUrl: "https://youtu.be/93y5Wbgv-JE?si=5bycxirWODRVNkDY",
    // videoUrl: "https://youtu.be/K5Wh_jxTSWA?si=TnUr_y6J-JlOU2xM",
    title: "From Empty Arms to Happy Parents",
    description:
      "After years of waiting, this couple shares their emotional journey and the joy of welcoming their baby.",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/playlist?list=PLKoq1xly2G7s",
    firstVideoUrl: "https://youtu.be/Ma6II9Cw4MY?si=DV8s4bwT_IgNeSWH",
    // videoUrl: "https://youtu.be/31pzOTqJx7Y?si=fQJCLA-vf8pvL1Ez",
    title: "Our IUI Success – A Dream Come True",
    description:
      "A beautiful testimony of hope and perseverance with successful IUI treatment at Sudha Fertility Centre.",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/playlist?list=PLKoq1xly2G7s",
    firstVideoUrl: "https://youtu.be/1IBiq-xw5Q8?si=-vz-8WvIdL0_Di58",
    // videoUrl: "https://youtu.be/8nYsaqBdH2k?si=VB0v4uaGf8Gj12h8",
    title: "Twins After 7 Years – Our Miracle Story",
    description:
      "Against all odds, this couple welcomed twins through advanced IVF treatment at Sudha Fertility Centre.",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/playlist?list=PLKoq1xly2G7s",
    firstVideoUrl: "https://youtu.be/zM5GIh-qUGQ?si=VrJgvao-WcPSjPLX",
    // videoUrl: "https://youtu.be/ATxCQtY6Ilk?si=Qpp8fQIj6Tbd2LSH",
    title: "PCOS Treatment & Successful Pregnancy",
    description:
      "Watch how expert PCOS management at Sudha Fertility Centre led to a healthy and joyful pregnancy.",
  },
]

export const villupuramVideos = [
   {
    id: 1,
    videoUrl: "https://www.youtube.com/playlist?list=PLGva6-9fOteA",
    firstVideoUrl: "hhttps://youtu.be/v8yhBEnwYGI?si=QiDzs1K05pkuLtBJ",
    // videoUrl: "https://youtu.be/UbTyi7Hu294?si=WZPNl0qG2IlZGcSL",
    title: "IVF Success Story – Journey to Parenthood",
    description:
      "A heartfelt story of a couple who fulfilled their dream of parenthood with the help of Sudha Fertility Centre.",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/playlist?list=PLGva6-9fOteA",
    firstVideoUrl: "https://youtu.be/qfGDgOgyrt8?si=K-mURU8KxzHueJga",
    // videoUrl: "https://youtu.be/K5Wh_jxTSWA?si=TnUr_y6J-JlOU2xM",
    title: "From Empty Arms to Happy Parents",
    description:
      "After years of waiting, this couple shares their emotional journey and the joy of welcoming their baby.",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/playlist?list=PLGva6-9fOteA",
    firstVideoUrl: "https://youtu.be/V9VdIxphb3U?si=e3SZGmFEFubDLPdZ",
    // videoUrl: "https://youtu.be/31pzOTqJx7Y?si=fQJCLA-vf8pvL1Ez",
    title: "Our IUI Success – A Dream Come True",
    description:
      "A beautiful testimony of hope and perseverance with successful IUI treatment at Sudha Fertility Centre.",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/playlist?list=PLGva6-9fOteA",
    firstVideoUrl: "https://youtu.be/zM5GIh-qUGQ?si=hyGl5098fmZV_xa9",
    // videoUrl: "https://youtu.be/8nYsaqBdH2k?si=VB0v4uaGf8Gj12h8",
    title: "Twins After 7 Years – Our Miracle Story",
    description:
      "Against all odds, this couple welcomed twins through advanced IVF treatment at Sudha Fertility Centre.",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/playlist?list=PLGva6-9fOteA",
    firstVideoUrl: "https://youtu.be/1XyLY1tiz48?si=GjwRuseWm8-XvE7q",
    // videoUrl: "https://youtu.be/ATxCQtY6Ilk?si=Qpp8fQIj6Tbd2LSH",
    title: "PCOS Treatment & Successful Pregnancy",
    description:
      "Watch how expert PCOS management at Sudha Fertility Centre led to a healthy and joyful pregnancy.",
  },
]