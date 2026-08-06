"use client";
import React, { useState } from "react";
import Banner from "@/assets/book-appointment.webp";
import Button from "@/components/button/button";
import Link from "next/link";
import { IoCall, IoLocationSharp } from "react-icons/io5";
import Image from "next/image";
import Thumbnail from "@/assets/book-appointment/thumbnail.webp";
import Playbtn from "@/assets/book-appointment/playbtn.svg";
import { IoArrowBackSharp, IoArrowForwardOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import BookAppointmentForm from "@/components/contact/BookAppointmentForm";
import { MarqueeComponent } from "@/components/marqueeSlider";
import Slider from "@/components/slider/slider";

import { Ambattur } from "@/middleware/imagesroute";

import Buttonbottm from "@/components/button";
const testimonials = [
  {
    name: "Viswanath Viswanath",
    text: `மிகச்சிறந்த மருத்தவர்கள் மற்றும் சிறந்த முறையில் செயல்படும் செவிலியர்களைக் கொண்ட ஈரோடு சுதா மருத்துவமனை மிகவும் சிறப்பாக உள்ளது. ஆரோக்கியமான பராமரிப்பு, உணவு வசதி ஆகியவற்றுடன் குழந்தையின்மைக்கு 100 சதவீத வெற்றியை அளிக்கிறது. 12 ஆண்டுகள் கழித்து எங்களுக்கு குழந்தை பேரு கிடைத்துள்ளது. முக்கியமாக எங்களின் ஆரம்பமே Dr. பிரதீபா மேடம் அவர்கள் தான். அவர்களின் அணுகுமுறை மிகவும் சிறப்பு. எங்களுக்கு எந்த வித சலிப்பும் இல்லாமல் எங்களை வழிநடத்தி, "நிச்சயமாக உங்களுக்கு நான் இருக்கிறேன்" என்று எங்களின் வாழ்க்கையில் வெற்றியை ஏற்படுத்தியவர்.
அதுமட்டுமின்றி, அனைத்து செவிலியர்களும் இரவு பகல் நேரம் பார்க்காமல், இமை பாத்துக்காப்பது போலவே எங்களுக்கு தேவையான நேரத்தில் உதவி செய்தது மிகவும் மகிழ்ச்சியை அளிக்கிறது.
அனைவருக்கும் எங்களது மனமார்ந்த நன்றியையும் வாழ்த்துகளையும் தெரிவித்துக் கொள்கிறோம்.`,
    // image: ProfileImage,
  },

  {
    name: "MANI VEL T",
    text: `அனைவருக்கும் வணக்கம். எங்கள் ஊர் வேப்பிலைப்பட்டி புதூர் கிராமம். எங்கள் பெயர் த. மணிவேல், ம. சுகன்யா. எங்களுக்கு 2014 ஆம் ஆண்டு திருமணம் நடைபெற்றது. 10 ஆண்டுகளாக குழந்தையின்மையால் பல மருத்துவமனைகளில் சிகிச்சை பெற்றோம், ஆனால் எங்களுக்கு பயன் கிடைக்கவில்லை.
நான் அரூர் பகுதியில் பணி புரிந்து வந்தேன். சுதா மருத்துவமனையில் இருந்து முகாம் நடைபெற்றது, அதில் நானும் எனது மனைவியும் கலந்து கொண்டோம். அன்று எனக்கு நம்பிக்கை வந்தது. அந்த நாள் முதல் சேலம் சுதா மருத்துவமனையில் சிகிச்சை பெற்று வந்தோம்.
அங்கு உள்ள அனைத்து மருத்துவர்களும் செவிலியர்களும் சிறந்த முறையில் சிகிச்சை அளித்தார்கள். மேலும், கோவை மற்றும் ஈரோடு சுதா மருத்துவமனைகளிலும் சிகிச்சை மற்றும் அறுவை சிகிச்சை பெற்றோம். கடந்த 28.10.2024 அன்று எங்கள் 10 ஆண்டு கனவு நனவாகியுள்ளது. எங்கள் கனவுகளை நனவாக்கிய சேலம், கோவை, ஈரோடு சுதா மருத்துவமனைகளின் அனைத்து மருத்துவர், செவிலியர்கள் மற்றும் பணியாளர்களுக்கு த. மணிவேல், ம. சுகன்யா மற்றும் எங்கள் குடும்பத்தின் சார்பாக நன்றியை தெரிவித்துக் கொள்கிறோம். மிகுந்த மகிழ்ச்சி அடைகிறோம். 💐🙏🙏நன்றி🙏🙏🙏💐`,
    // image: ProfileImage,
  },
  {
    name: "Ponnusamy Vaiyannagownder",
    text: `வணக்கம்!
எனது மகள் தமிழ்ச்செல்விவிற்கு திருமணம் ஆகி, கடந்த 15 ஆண்டுகளாக குழந்தை பாக்கியம் இல்லாமல் பல்வேறு மருத்துவமனைகளில் சிகிச்சை பெற்று வந்தோம். ஆனால் சிகிச்சைகள் பயனளிக்கவில்லை. நாங்கள் சுதா மருத்துவமனை குறித்து வலைதளங்களில் பார்த்து அறிந்துகொண்டோம். மருத்துவமனை சென்றபோது Dr. Dhanabagyam Mam அவர்களின் அறிவுறுத்தலின் படி, சிகிச்சை குறித்து தெளிவாக விளக்கமளித்தார். அவர்களின் வழிகாட்டலின் படி சிகிச்சை மேற்கொண்டோம். அதன் பலனாக இன்று என் மகள் கருவுற்றுள்ளார். இன்று எங்கள் குடும்பம் பெரும் மகிழ்ச்சி அடைகிறது. அதற்கான உறுதுணையாக இருந்த Dr. Dhanabagyam Mam அவர்களை வாழ்த்த வார்த்தைகள் இல்லை. அவர்களை கடவுளின் மருவுறுவம் போலவே உணர்கிறோம். எங்களை தாய் தந்தையாக ஆக்கிய, என் மகளை இன்று தாய் தந்தையாக மாற்றிய சுதா மருத்துவமனை மற்றும் Dr. Dhanabagyam Mam அவர்களுக்கு எங்கள் மனமார்ந்த நன்றியை தெரிவித்துக்கொள்கிறோம்.  அவர்கள் மென்மேலும் வளர என் மனமார்ந்த வாழ்த்துக்கள்!
மனமகிழ்ச்சியுடன் வாழ்த்தும் என் குடும்ப உறுப்பினர்கள்...`,
    // image: ProfileImage,
  },
  // Add more testimonials as needed
];

const slideContent = [

    { 
    title:"திருமயம்",
    date:"நாள்:", 
    time:"நேரம்:", 
    venue:"இடம்:",
    month:"ஜூன் ",
    dateyear:"07-2025,",
    day:"சனிக்கிழமை",
    address:"RSP மருத்துவமனை 3/3741, அகில்கரை தெரு, காமராஜர் சாலை, திருமயம், புதுக்கோட்டை - 622 507",
     morning:"காலை",
    afternoon:"மதியம்",
    timesec:"8",
    etimesec:"4",
    content:"மணி முதல்",
    end:"மணி வரை",
  
  },
   
  { title:"துத்திக்குளம்",
    date:"நாள்:", 
    time:"நேரம்:", 
    venue:"இடம்:",
    month:"ஜூன் ",
    dateyear:"08-2025,",
    day:"ஞாயிற்றுக்கிழமை",
    address:"நலன் சிறப்பு மருத்துவமனை 1/131 (2) நாமக்கல் மெயின் ரோடு, துத்திக்குளம், நாமக்கல்- 637 404",
     morning:"காலை",
    afternoon:"மதியம்",
    timesec:"8",
    etimesec:"4",
    content:"மணி முதல்",
    end:"மணி வரை",
  },

  { title:"வாணியம்பாடி",
    date:"நாள்:", 
    time:"நேரம்:", 
    venue:"இடம்:",
    month:"ஜூன் ",
    dateyear:"08-2025,",
    day:"ஞாயிற்றுக்கிழமை",
    address:"சுதா கருத்தரிப்பு மையம் C/o டேவிட் மல்டிஸ்பெஷாலிட்டி மருத்துவமனை 277/1, ஜமாத் ரோடு. நூருலாப்பேட், வாணியம்பாடி, திருப்பத்தூர் - 635 751",
     morning:"காலை",
    afternoon:"மதியம்",
    timesec:"8",
    etimesec:"4",
    content:"மணி முதல்",
    end:"மணி வரை",
  
  },


   { title:"நாகப்பட்டினம்",
    date:"நாள்:", 
    time:"நேரம்:", 
    venue:"இடம்:",
    month:"ஜூன் ",
    dateyear:"15-2025,",
    day:"ஞாயிற்றுக்கிழமை",
    address:"ஸ்ரீ வெங்கடேஸ்வரா மருத்துவமனை 620, கொத்தான்குளம் கீழ்கரை. நெல்லுக்கடை ஸ்ரீ மாரியம்மன் கோவில் எதிரில், நாகப்பட்டினம் - 611001.",
     morning:"காலை",
    afternoon:"மதியம்",
    timesec:"8",
    etimesec:"4",
    content:"மணி முதல்",
    end:"மணி வரை",
  
  },

  { title:"ஓசூர்",
    date:"நாள்:", 
    time:"நேரம்:", 
    venue:"இடம்:",
    month:"ஜூன் ",
    dateyear:"15-2025,",
    day:"ஞாயிற்றுக்கிழமை",
    address:"C/o டாக்டர் பவி மகளிர் சுகாதாரம் மற்றும் கருவுறுதல் மையம், 100 அடி சாலை, வேளாங்கன்னி பள்ளி பின்புறம், தளி ரோடு, புதிய ASTC ஹட்கோ, ஓசூர் -635 109.",
     morning:"காலை",
    afternoon:"மதியம்",
    timesec:"8",
    etimesec:"4",
    content:"மணி முதல்",
    end:"மணி வரை",
  
  },
    


  
  ];





function BookAppointmentvillupuram() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <div>
      <div className="relative">
        {/* Background Image with Gradient Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center -top-28  md:-top-36"
          style={{
            backgroundImage: `url(${Banner.src})`,
            backgroundSize: "fill",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-[#173366A1] opacity-45"></div>
        </div>
        {/* Content */}
        <div className="relative h-full flex flex-col">
          {/* Main Content */}
          <div className="flex-1 flex items-center justify-center mb-40 mt-28">
            <div className="text-white text-center px-4 font-outfit">
              {/* <h2 className="font-semibold mb-3 text-[#FFC65C]">
            விழுப்புரத்தில்
              </h2> */}
              <h1 className="font-outfit font-semibold ">
                சுதா கருத்தரிப்பு மையம் நடத்தும்


              </h1>

              <h2 className="font-outfit font-semibold mt-3"> மாபெரும் இலவச கருத்தரிப்பு ஆலோசனை முகாம் </h2>

              <div className="button mt-8 flex justify-center items-center">
                <Button
                  title={"இன்றே முன்பதிவு செய்வீர் "}
                  link="#contact-now"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto md:mt-[100px] mt-[70px] ">
        <div className="max-w-5xl mx-auto px-4  sm:px-6 lg:px-8">
          <h2 className="font-semibold text-md text-center">
            பல இலட்சக்கணக்கான குடும்பங்களின் மகிழ்ச்சியில் இயங்குகிறது சுதா
            கருத்தரிப்பு மையம்
          </h2>
        </div>
      </div>

      <div className="container mx-auto md:mt-[100px] mt-[70px] ">
        <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
          <div>
            <div className="tiles grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4  mt-9">
              <div className="tiles-1 border border-[#E7E7E7] pt-6 pb-6 pl-4 pr-4 rounded-lg font-outfit ">
                <div className="main-tail flex items-center justify-center">
                  <div className="content">
                    <div className="title">
                      <h3 className="text-[36px] font-bold text-[#173366] text-center">
                        3.5L+
                      </h3>
                    </div>
                    <div className="des">
                      <p className="text-gray-600 text-center">
                        குழந்தையில்லா தம்பதிகள் மருத்துவ ஆலோசனை பெற்றுள்ளனர்
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-1 border border-[#E7E7E7] pt-6 pb-6 pl-4 pr-4 rounded-lg ">
                <div className="main-tail flex items-center justify-center">
                  <div className="icon mr-4"></div>
                  <div className="content">
                    <div className="title">
                      <h3 className="text-[36px] font-bold text-center text-[#173366]">
                        1L+
                      </h3>
                    </div>
                    <div className="des">
                      <p className="text-gray-600 text-center">
                        லாப்ரோஸ்கோபிக் அறுவை சிகிச்சைகள்
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-1  border border-[#E7E7E7] pt-6 pb-6 pl-4 pr-4 rounded-lg">
                <div className="main-tail flex items-center justify-center ">
                  <div className="content">
                    <div className="title">
                      <h3 className="text-[36px] font-bold text-center text-[#173366]">
                        35k+
                      </h3>
                    </div>
                    <div className="des">
                      <p className="text-gray-600 text-center">
                        (IUI) குழந்தைகள் பிறந்துள்ளன
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-1  border border-[#E7E7E7] pt-6 pb-6 pl-4 pr-4 rounded-lg ">
                <div className="main-tail flex items-center justify-center">
                  <div className="content text-cente">
                    <div className="title">
                      <h3 className="text-[36px] font-bold text-center text-[#173366]">
                        60k+
                      </h3>
                    </div>
                    <div className="des">
                      <p className="text-gray-600 text-center">
                        (IVF) குழந்தைகள் பிறந்துள்ளன
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto md:mt-[100px] mt-[70px] ">
        <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
              <h2 className="font-semibold">தாய்மை ஒரு வரம்!!</h2>
              <p className="mt-3">
                சுதா கருத்தரிப்பு மையம் நடத்தும்
                பெண்களுக்கான இலவச மருத்துவ பரிசோதனை மற்றும் சிறப்பு ஆலோசனை
                முகாம்.
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-3">
                <li>கர்ப்பப்பை நீர்க்கட்டி பிரச்சனைகள்</li>
                <li>கருப்பை நார்த்திசு கட்டிகள்</li>
                <li>கர்ப்பப்பை குறைபாடுகள்</li>
                <li>குழந்தையின்மை சிகிச்சை</li>
              </ul>
              <p className="mt-3">
                என குழந்தையின்மை சார்ந்த அனைத்து நோய்க்கும் இலவச மருத்துவ ஆலோசனை.
              </p>
            </div>
            <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
              {/* <Image
                src={Thumbnail}
                alt="Story Behind Sudha Fertility Centre"
                className="w-full h-auto rounded-lg"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/watch?v=fAoaLHKsQKk",
                      "_blank"
                    )
                  }
                  className=" p-2 rounded-full shadow-lg"
                >
                  <Image src={Playbtn} alt="img" />
                </button>
              </div> */}


              <iframe className="w-full h-[350px] rounded-[30px]" src="https://www.youtube.com/embed/fAoaLHKsQKk?si=Cj8TUQ8Rs-XSoTeV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>



      <div className="container mx-auto md:mt-[100px] mt-[70px] ">
        <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
          <h2 className="font-semibold text-md text-center">
            இலவச மருத்துவ முகாம் நடைபெறவிருக்கும் இடங்கள்
          </h2>
          {/* <div>
            <div className="tiles grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mt-9">
              <div className="tiles-1 shadow-[0px_0px_30px_0px_rgba(0,0,0,0.08)]  bg-white pt-6 pb-6 pl-4 pr-4 rounded-lg font-outfit ">
                <div className="main-tail flex items-center justify-center">
                  <div className="content">
                    <div className="title">
                      <h3 className="font-semibold mb-3 bg-[#173366] p-2 rounded-lg  text-center text-[#ffffff]">
                        துத்திக்குளம்
                      </h3>
                    </div>
                    <div className="flex justify-between  mt-5">
                      <div className="relative w-full leading-[1.6]  p-l-4 p-b-4 p-t-4">
                        <h4 className="font-semibold md:text-left text-center text-[#000000]">
                          நாள்:
                        </h4>
                        <h6 className="text-gray-600 md:text-left text-center leading-[1.6] font-semibold mt-1">
                          ஜூன்{" "}
                          <span className="font-bold text-[#173366]">
                            08-2025
                          </span>{" "}
                          ஞாயிற்றுக்கிழமை
                        </h6>
                      </div>




                      <div className="relative w-full p-l-4 p-b-4 p-t-4 ">
                        <h4 className=" font-semibold md:text-left text-center text-[#000000]">
                          நேரம் :
                        </h4>
                        <h6 className="text-gray-600 md:text-left leading-[1.6] text-center font-semibold mt-1">
                          காலை <span className="font-bold text-[#173366]">8</span> மணி
                          முதல் மதியம் <span className="font-bold text-[#173366]">4</span>{" "}
                          மணி வரை
                        </h6>
                      </div>
                    </div>
                    <hr className="mt-5 mb-5" />
                    <div className="relative w-full  p-l-4 p-b-4 p-t-4 ">
                      <h4 className=" font-semibold md:text-left text-center text-[#000000] mb-2">
                        இடம்:
                      </h4>
                      <h6 className="text-gray-600 leading-[1.6] md:text-left text-center font-semibold mt-1">
                        நலன் சிறப்பு மருத்துவமனை <br />
                        1/131 (2) நாமக்கல் மெயின் ரோடு,
                        துத்திக்குளம், நாமக்கல்- 637 404
                      </h6>
                    </div>


                  </div>
                </div>
              </div>

              <div className="tiles-1 shadow-[0px_0px_30px_0px_rgba(0,0,0,0.08)]  bg-white pt-6 pb-6 pl-4 pr-4 rounded-lg font-outfit ">
                <div className="main-tail flex items-center justify-center">
                  <div className="content">
                    <div className="title">
                      <h3 className="font-semibold mb-3 bg-[#173366] p-2 rounded-lg  text-center text-[#ffffff]">
                        வாணியம்பாடி
                      </h3>
                    </div>
                    <div className="flex justify-between  mt-5">
                      <div className="relative w-full   p-l-4 p-b-4 p-t-4">
                        <h4 className=" font-semibold md:text-left text-center text-[#000000]">
                          நாள்:
                        </h4>
                        <h6 className="text-gray-600 md:text-left text-center leading-[1.6] font-semibold mt-1">
                          ஜூன்{" "}
                          <span className="font-bold text-[#173366]">
                            08-2025
                          </span>{" "}
                          ஞாயிற்றுக்கிழமை
                        </h6>
                      </div>




                      <div className="relative w-full p-l-4 p-b-4 p-t-4 ">
                        <h4 className="font-semibold md:text-left text-center text-[#000000]">
                          நேரம் :
                        </h4>
                        <h6 className="text-gray-600 md:text-left leading-[1.6] text-center font-semibold mt-1">
                          காலை <span className="font-bold text-[#173366]">8</span> மணி
                          முதல் மதியம் <span className="font-bold text-[#173366]">4</span>{" "}
                          மணி வரை
                        </h6>
                      </div>
                    </div>
                    <hr className="mt-5 mb-5" />
                    <div className="relative w-full  p-l-4 p-b-4 p-t-4 ">
                      <h4 className="font-semibold md:text-left text-center text-[#000000] mb-2">
                        இடம்:
                      </h4>
                      <h6 className="text-gray-600 leading-[1.6] md:text-left text-center font-semibold mt-1">
                        சுதா கருத்தரிப்பு மையம் <br />
                        C/o டேவிட் மல்டிஸ்பெஷாலிட்டி மருத்துவமனை
                        277/1, ஜமாத் ரோடு. நூருலாப்பேட், வாணியம்பாடி,
                        திருப்பத்தூர் - 635 751
                      </h6>
                    </div>





                  </div>
                </div>
              </div>

              <div className="tiles-1 shadow-[0px_0px_30px_0px_rgba(0,0,0,0.08)]  bg-white pt-6 pb-6 pl-4 pr-4 rounded-lg font-outfit ">
                <div className="main-tail flex items-center justify-center">
                  <div className="content">
                    <div className="title">
                      <h3 className="font-semibold mb-3 bg-[#173366] p-2 rounded-lg  text-center text-[#ffffff]">
                        திருமயம்
                      </h3>
                    </div>
                    <div className="flex justify-between  mt-5">
                      <div className="relative w-full   p-l-4 p-b-4 p-t-4">
                        <h4 className="font-semibold md:text-left text-center text-[#000000]">
                          நாள்:
                        </h4>
                        <h6 className="text-gray-600 md:text-left leading-[1.6] text-center font-semibold mt-1">
                          ஜூன் {" "}
                          <span className="font-bold text-[#173366]">
                            07-2025
                          </span>{" "}
                          சனிக்கிழமை
                        </h6>
                      </div>




                      <div className="relative w-full p-l-4 p-b-4 p-t-4 ">
                        <h4 className="font-semibold md:text-left text-center text-[#000000]">
                          நேரம் :
                        </h4>
                        <h6 className="text-gray-600 md:text-left leading-[1.6] text-center font-semibold mt-1">
                          காலை <span className="font-bold text-[#173366]">8</span> மணி
                          முதல் மதியம் <span className="font-bold text-[#173366]">4</span>{" "}
                          மணி வரை
                        </h6>
                      </div>
                    </div>
                    <hr className="mt-5 mb-5" />
                    <div className="relative w-full  p-l-4 p-b-4 p-t-4 ">
                      <h4 className="font-semibold md:text-left text-center text-[#000000] mb-2">
                        இடம்:
                      </h4>
                      <h6 className="text-gray-600 md:text-left text-center leading-[1.6] font-semibold mt-1">
                        RSP மருத்துவமனை <br />
                        3/3741, அகில்கரை தெரு, காமராஜர் சாலை,
                        திருமயம், புதுக்கோட்டை - 622 507
                      </h6>
                    </div>





                  </div>
                </div>
              </div>


            </div>
          </div> */}
            <Slider slides={slideContent}/>
        </div>
      </div>

      <div className="container mx-auto mt-5">
        <div className="max-2-6xl mx-auto px-4 sm:px-6 lg:px-6 mt-12 ">
          <div className="flex flex-col  justify-center items-center ">
            <Button className=""
              title={"இன்றே முன்பதிவு செய்வீர்"}
              link="#contact-now"
            />
          </div>

        </div>
      </div>


      <div className="container mx-auto mt-5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x-2 divide-solid divide-[#E7E7E7] p-4 md:p-6">
            <div className="w-full md:w-1/3 flex justify-center md:justify-end items-center text-center p-3">
              <h4 className="font-semibold text-lg text-[#000000]">
                அனுமதி இலவசம்
              </h4>
            </div>

            <div className="w-full md:w-1/3 flex justify-center md:justify-center items-center text-center p-3">
              <h4 className="font-semibold text-lg text-[#000000]">
                இன்றே முன்பதிவு செய்வீர்
              </h4>
            </div>

            <div className="w-full md:w-1/3 flex justify-center md:justify-start items-center text-center p-3">
              <h4 className="font-semibold text-lg text-[#000000]">
                முன்பதிவு அவசியம்
              </h4>
            </div>
          </div>
          <p className="text-center">
            மேலும் விவரங்களுக்கு{" "}
            <span className="text-[#173366] border-b-2 border-[#173366]">
              <Link href={"tel:7670076006"} className="">+91-76-7007-6006</Link>

            </span>{" "}
            என்ற எண்ணுக்கு அழைக்கவும்.
          </p>
        </div>
      </div>

      <section className="md:mt-[100px] mt-[70px]">
        <div className="container mx-auto ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=" text-center relative">
              <div className="flex items-center justify-between">
                <button
                  onClick={prevSlide}
                  className="text-gray-500 hidden md:block hover:text-gray-700"
                >
                  <IoArrowBackSharp />
                </button>
                <motion.div
                  key={current}
                  className="p-[25px]"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-lg font-semibold mb-2 ">
                    {testimonials[current].name}
                  </h3>
                  <p className="text-gray-600 mb-4 mt-4">
                    {testimonials[current].text}
                  </p>
                </motion.div>

                <button
                  onClick={nextSlide}
                  className="text-gray-500 hidden md:block hover:text-gray-700"
                >
                  <IoArrowForwardOutline />
                </button>
              </div>

              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={prevSlide}
                  className="text-gray-500 block md:hidden hover:text-gray-700"
                >
                  <IoArrowBackSharp />
                </button>
                <div className="flex justify-center items-center space-x-2 w-full">
                  <span>{String(current + 1).padStart(2, "0")}</span>
                  <div className="md:w-[200px] w-[100px] bg-gray-300 h-1 rounded-full overflow-hidden">
                    <div
                      className="bg-[#173366] h-full transition-all duration-300"
                      style={{
                        width: `${((current + 1) / testimonials.length) * 100}%`,
                      }}
                    />
                  </div>
                  <span>{String(testimonials.length).padStart(2, "0")}</span>
                </div>
                <button
                  onClick={nextSlide}
                  className="text-gray-500 block md:hidden hover:text-gray-700"
                >
                  <IoArrowForwardOutline />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="md:mt-[100px] mt-[70px]" id="contact-now">
        <BookAppointmentForm />
      </section>

      <section className="mt-[70px] lg:mt-[100px] mb-[70px] lg:mb-[100px]">
        {/* <div className="container mx-auto">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 h-full"> */}
        <MarqueeComponent
          items={Ambattur.gallery}
          direction="left"
          speed="fast"
          className="custom-class"
        />
        <div className="flex justify-center gap-4 items-center flex-wrap mt-4 mb-4">
          <h2 className="text-2xl font-bold text-center ">
            Childless Couples to Happy Parents
          </h2>
          <Buttonbottm text="Watch on Youtube " link="https://www.youtube.com/@sudhafertilitycentre" />
        </div>
        {/* <MarqueeComponent
          items={Ambattur.gallery}
          direction="right"
          speed="fast"
          className="custom-class"
        /> */}
        {/* </div>
          </div> */}
      </section>
    </div>
  );
}

export default BookAppointmentvillupuram;
