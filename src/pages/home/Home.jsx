"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Script from 'next/script';
import Image from "next/image";
import Link from "next/link";

// ── Assets
import Founder from "@/assets/Home/Founder.webp";
import BookPic from "@/assets/Home/BookPic.webp";
import Vitro from "@/assets/Home/Vitro.svg";
import Intrauterine from "@/assets/Home/Intrauterine.svg";
import Intracytoplasmic from "@/assets/Home/Intracytoplasmic.svg";
import Laser_Assisted from "@/assets/Home/Laser-Assisted.svg";
import Pregnancy from "@/assets/Home/Pregnancy.svg";

// ── Components
import BookingButton from "@/components/button/bookingButton";
import Buttonbottm from "@/components/button";
import Button from "@/components/button/button";
import LoadingSpinner from '@/components/ui/loadingSpinner';

// ── Data
import { testimonials, tabs, reviews } from "../../utils/homepageData";
import { Homevideos } from "@/middleware/videosRoute";

// ── Dynamic imports (performance optimized)
// const ProfileButton = dynamic(() => import("@/components/button/profileButton"));

const FloatingButton = dynamic(
  () => import("@/components/FloatingButton"),
  { ssr: false, loading: () => null }
);

const BannerSlider = dynamic(
  () => import("@/components/bannerSlider/bannerSlider"),
  {
    ssr: false,
    loading: () => <div className="banner-slider-wrap w-full" aria-hidden="true" />,
  }
);

const VideoSlider = dynamic(() => import("@/components/videoCard/videoSlider"));
const Faq = dynamic(() => import("../Faq"), {
  loading: () => <LoadingSpinner height="300px" />
});

const InfiniteMovingCardsDemo = dynamic(
  () => import('@/components/review_Card/reviewCard'),
  { loading: () => <LoadingSpinner height="398px" /> }
);

const MetricsTabs = dynamic(() => import("@/components/ui/tab"), {
  loading: () => <LoadingSpinner height="200px" />
});

const VideoCard = dynamic(() => import("@/components/videoCard/videoCard"), {
  loading: () => <LoadingSpinner height="300px" />
});

const ContactForm = dynamic(() => import("@/components/contact/contactForm"), {
  loading: () => <LoadingSpinner height="400px" />
});

const GallerySlider = dynamic(() => import("@/components/videoCard/videoPlaylistSlider"), {
  loading: () => <LoadingSpinner height="300px" />
});

const JourneyCard = dynamic(() => import("@/components/JourneyCard/journeyCard"), {
  loading: () => <LoadingSpinner height="300px" />
});

const FertilityChatbot = dynamic(
  () => import('@/components/fertilityChatbot/fertilityChatbot'),
  { ssr: false, loading: () => null }
);

// ── LazySection: viewport-triggered lazy loading ──
function LazySection({ children, height = "300px", className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {visible ? children : <div style={{ minHeight: height }} aria-hidden="true" />}
    </div>
  );
}

// ── Achievement Metrics Tile ──
function AchievementTile({number, label}) {
  return (
    <div className="border border-[#E7E7E7] pt-6 pb-6 pl-4 pr-4 rounded-lg font-outfit">
      <div className="flex items-center justify-center">
        <div className="content">
          <h3 className="text-[36px] font-semibold text-[#173366] text-center">{number}</h3>
          <p className="text-gray-600 text-center mt-2">{label}</p>
        </div>
      </div>
    </div>
  );
}


function TreatmentCard({ icon: Icon, title, subtitle, href }) {
  return (
    <Link href={href}>
      <div className="border border-[#E7E7E7] p-4 rounded-2xl font-outfit hover:bg-[#EBF2FE] cursor-pointer transition-colors">
        <div className="flex flex-col items-center justify-center">
          <div className="w-12 h-12 flex items-center justify-center mb-4">
            <Image src={Icon} alt={title} width={48} height={48} />
          </div>
          <p className="text-[#000] font-semibold text-center">{title}</p>
          {subtitle && <p className="text-[#000] text-center mt-2 font-semibold">{subtitle}</p>}
        </div>
      </div>
    </Link>
  );
}

// ── Organization Schema ──
const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sudha Fertility Centre",
  "url": "https://sudhafertilitycentre.com/",
  "logo": "https://sudhafertilitycentre.com/_next/static/media/logo-dark.5cc85d6e.svg",
  "description": "Sudha Fertility Centre is one of India's leading fertility hospitals, offering advanced IVF, IUI, ICSI, egg freezing, and fertility testing services across multiple locations in India.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-76 7007 6006",
    "contactType": "Customer Service",
    "areaServed": "IN",
    "availableLanguage": ["English", "Tamil", "Telugu"]
  },
  "sameAs": [
    "https://www.facebook.com/sudhafertilitycentre",
    "https://www.instagram.com/sudhafertilitycentre/",
    "https://www.youtube.com/@sudhafertilitycentre/",
    "https://www.linkedin.com/company/sudha-fertility-centre"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "15000"
  },
  "founder": {
    "@type": "Person",
    "name": "Dr. S. Dhanabagyam"
  },
  "foundingDate": "1995",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "151, Perundurai Road, Edayankattuvalasu",
    "addressLocality": "Erode",
    "addressRegion": "Tamil Nadu",
    "postalCode": "638001",
    "addressCountry": "IN"
  }
};

// ── Main Component ──
export default function Home() {
  // FloatingButton: show only after browser idle
  const [showFloat, setShowFloat] = useState(false);
  useEffect(() => {
    const launch = () => setShowFloat(true);
    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(launch, { timeout: 2000 });
      return () => cancelIdleCallback(id);
    }
    const t = setTimeout(launch, 2000);
    return () => clearTimeout(t);
  }, []);

  // FertilityChatbot: mount after scroll or 5s timeout
  const [chatReady, setChatReady] = useState(false);
  useEffect(() => {
    const enable = () => setChatReady(true);
    const onScroll = () => {
      enable();
      window.removeEventListener('scroll', onScroll);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    const t = setTimeout(enable, 5000);
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(t);
    };
  }, []);

  return (
    <>
      <Script
        type="application/ld+json"
        id="organization-jsonld"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
      />

      {/* ── Banner Section ── */}
      <div className="relative w-full -mt-[150px]">
        <div className="banner-slider-wrap w-full">
          <BannerSlider />
        </div>

        {/* Review cards overlap */}
        <div className="relative z-10 -mt-16 sm:-mt-20 lg:-mt-24 pb-4">
          <LazySection height="398px">
            <InfiniteMovingCardsDemo reviews={reviews} />
          </LazySection>
        </div>

        {/* White fade transition */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 w-full h-32"
          style={{
            background: "linear-gradient(to top, rgba(255,255,255,1) 0%, transparent 100%)",
          }}
        />
      </div>

      <section className="relative">
        {/* ── Achievement Metrics ── */}
        <div className="mt-5 sm:mt-3 lg:mt-5">
          <div className="container mx-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="title text-center">
                <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
                  Baby's smile in every hopeless home marks our proudest milestone.
                </h1>
                <h2 className="font-outfit font-semibold lg:block mt-2 text-xl">Our Achievements</h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:px-16 mt-9">
                <AchievementTile number="3.5L+" label="Infertile Couples Counselled" />
                <AchievementTile number="1L+" label="Laparoscopic Surgeries" />
                <AchievementTile number="35k+" label="IUI Babies" />
                <AchievementTile number="60k+" label="IVF Babies" />
              </div>
            </div>
          </div>
        </div>

        {/* ── Profile Button (Sticky) ── */}
        {/* <section className="hidden md:block sticky top-[500px] right-0 z-[22]">
          <div className="absolute right-0 flex top-[-100px] flex-col space-y-3">
            <ProfileButton />
          </div>
        </section> */}

        {/* ── Fertility Treatments ── */}
        <section>
          <div className="mt-[70px] lg:mt-[100px]">
            <div className="container mx-auto">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="title text-center">
                  <h2 className="font-outfit font-semibold">
                    Advanced and Expert medical treatment
                    <span className="lg:block">for your parenthood dream</span>
                  </h2>
                  <p className="max-w-5xl flex mx-auto mt-5 text-gray-600">
                    Start your parenthood journey with India's leading fertility
                    specialists. With decades of expertise and world-class
                    treatments, we provide personalized care that supports your
                    dreams and guides you through every step of the way.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-9">
                  <TreatmentCard icon={Vitro} title="In Vitro Fertilization" subtitle="(IVF)" href="/in-vitro-fertilization" />
                  <TreatmentCard icon={Intrauterine} title="Intrauterine Insemination" subtitle="(IUI)" href="/intrauterine-insemination" />
                  <TreatmentCard icon={Intracytoplasmic} title="Intracytoplasmic Sperm Injection" subtitle="(ICSI)" href="/intracytoplasmic-sperm-injection" />
                  <TreatmentCard icon={Laser_Assisted} title="PCOS (PCOS)/PCOD" href="/pcos-and-pdoc" />
                  <TreatmentCard icon={Pregnancy} title="Pregnancy and Antenatal Care" href="/pregnancy-and-antenatal-care" />
                </div>

                <div className="button hidden lg:flex justify-center mt-8">
                  <Button title={"View All Treatments"} link="/fertility-treatments" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Sudha Feels Like Home ── */}
        <div className="mt-[70px] lg:mt-[100px]">
          <div className="container mx-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="title text-center">
                <h2 className="font-outfit font-semibold">
                  The reasons Sudha Fertility feels like Home for Motherhood
                </h2>
              </div>
              <div className="tab mt-12">
                <MetricsTabs tabs={tabs} />
              </div>
            </div>
          </div>
        </div>

        {/* ── CTA: Parenthood Journey ── */}
        <section>
          <div className="container mx-auto mt-[70px] lg:mt-[100px]">
            <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
              <div className="shadow-[0px_0px_30px_0px_rgba(0,0,0,0.06)]">
                <div className="flex flex-col lg:flex-row items-center justify-center space-y-0 lg:space-x-8">
                  <div className="content flex-1 text-center px-4 py-11 lg:py-0 sm:px-6 lg:px-8 lg:text-left order-1 lg:order-1">
                    <h2 className="font-outfit font-semibold">
                      Fill your home with tiny footsteps and celebrate the quiet joy of parenthood.
                    </h2>
                  </div>

                  <div className="flex flex-col items-center space-y-2 lg:space-y-0 lg:items-start order-3 lg:order-2">
                    <Image
                      src={BookPic}
                      alt="Parenting Guide Book"
                      className="max-w-full"
                    />
                  </div>

                  <div className="button px-4 sm:px-4 lg:px-8 order-2 lg:order-3">
                    <BookingButton title={"Take your free step toward parenthood"} />
                  </div>
                </div>

                <div className="relative w-full">
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-yellow-400" />
                  <div className="absolute bottom-0 right-0 w-1/3 h-2 bg-[#173366]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── IVF Journey ── */}
        <section className="mt-[70px] lg:mt-[100px]">
          <div className="container mx-auto relative">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
              <div className="content mx-auto flex-1 text-center lg:text-left">
                <h2 className="font-outfit font-semibold flex justify-center text-[#e3a008]">
                  Journey of IVF Process
                </h2>
              </div>
              <div className="mt-2">
                <LazySection height="300px">
                  <JourneyCard />
                </LazySection>
              </div>
            </div>
          </div>
        </section>

        {/* ── Specialties/Videos ── */}
        <div className="container mx-auto mt-[70px] lg:mt-[100px]">
          <div className="max-w-7xl mx-auto px-3 py-12 sm:px-6 lg:px-8">
            <div className="max-w-5xl px-3 flex-1 mx-auto">
              <div className="content h-auto flex flex-col justify-center items-center text-center">
                <h2 className="font-outfit font-semibold">Our Specialties</h2>
              </div>
            </div>

            <div className="mt-4">
              <LazySection height="300px">
                <VideoSlider />
              </LazySection>
            </div>
          </div>
        </div>

        {/* ── Video Testimonials ── */}
        <div className="bg-[#EBF2FE] mt-[70px] lg:mt-[100px]">
          <div className="container mx-auto">
            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
              <div className="title text-center max-w-4xl mx-auto">
                <h2 className="font-outfit font-semibold">
                  From empty hearts to carrying tiny ones in their arms:
                  <br />
                  The beautiful stories of our happy families.
                </h2>
                <p className="text-gray-600 text-center mt-4">
                  Behind every testimonial is a journey filled with hope, trust, and perseverance. Hearing this happiness is what drives us. All the wait, tears, and prayers have been answered. Listen to the happy stories of the couples welcoming their love of life.
                </p>
              </div>
              <div className="tab mt-12">
                <LazySection height="300px">
                  <VideoCard tabs={tabs} />
                </LazySection>
              </div>
            </div>
          </div>
        </div>

        {/* ── FAQ ── */}
        <div className="mt-[70px] lg:mt-[100px]">
          <Faq />
        </div>

        {/* ── Contact Form ── */}
        <div className="mt-[70px] lg:mt-[100px]">
          <ContactForm />
        </div>
      </section>

      {/* ── Gallery/Videos Marquee ── */}
      <section className="mt-[70px] lg:mt-[100px] mb-[70px] lg:mb-[100px] mx-3">
        <LazySection height="300px" className="mt-[70px] lg:mt-[100px] mb-[70px] lg:mb-[100px] mx-3">
          <GallerySlider items={Homevideos} />
          <div className="flex justify-center gap-4 items-center flex-wrap mt-4 mb-4">
            <h3 className="font-bold text-center">Childless Couples to Happy Parents</h3>
            <Buttonbottm text="Watch on Youtube" link="https://www.youtube.com/@sudhafertilitycentre" />
          </div>
        </LazySection>
      </section>

      {/* ── Floating Elements ── */}
      {showFloat && <FloatingButton />}
      
      {/* ── Fixed Floating Chatbot ── */}
      {chatReady && (
        <div className="fixed bottom-6 right-6 z-50">
          <FertilityChatbot />
        </div>
      )}
    </>
  );
}