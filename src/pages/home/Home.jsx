
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
import Image from "next/image";

// ── Assets ───────────────────────────────────────────────────────────────────
import BookPic from "@/assets/Home/BookPic.webp";
import Vitro from "@/assets/Home/Vitro.svg";
import Intrauterine from "@/assets/Home/Intrauterine.svg";
import Intracytoplasmic from "@/assets/Home/Intracytoplasmic.svg";
import Laser_Assisted from "@/assets/Home/Laser-Assisted.svg";
import Pregnancy from "@/assets/Home/Pregnancy.svg";

// ── Static server-renderable components ──────────────────────────────────────
import BookingButton from "@/components/button/bookingButton";
import Button from "@/components/button/button";
import HeroBannerSlider from "@/components/heroBanner/HeroBannerSlider";

// ── Extracted home sub-components (server-safe, now reusable) ─────────────────
// FIX M-4: Moved out of Home.jsx inline definitions into dedicated files.
import AchievementTile from "@/components/home/AchievementTile";
import TreatmentCard from "@/components/home/TreatmentCard";

// ── Client boundary: LazySection (IntersectionObserver) ──────────────────────
import LazySection from "@/components/ui/LazySection";

// ── Client boundary: FloatingButton deferred mount ───────────────────────────
import HomeClientShell from "./HomeClientShell";

// ── Skeleton loaders (pure presentational — no client hooks) ──────────────────
import ReviewCardSkeleton from "@/components/loaders/ReviewCardSkeleton";
import {
  AchievementTileSkeleton,
  TreatmentCardSkeleton,
  MetricsCardSkeleton,
  IVFProcessTimelineSkeleton,
} from "@/components/loaders/ReviewCardSkeleton";
import { VideoSkeletonRow } from "@/components/loaders/VideoCardSkeleton";
import LoadingSpinner from "@/components/ui/loadingSpinner";

// ── Data — FIX H-1: Import only home-page videos (5 items, ~300 bytes).
// Previously imported the entire 69 KB videosRoute.jsx file.
import { homeVideos } from "@/data/homeVideos";

// ── Dynamic imports — below-fold, loaded on scroll ───────────────────────────
const VideoSlider = dynamic(
  () => import("@/components/videoCard/videoSlider"),
  { loading: () => <VideoSkeletonRow count={3} /> }
);

const Faq = dynamic(() => import("../../components/Faq"), {
  loading: () => <LoadingSpinner height="400px" />,
});

const InfiniteMovingCardsDemo = dynamic(
  () => import("@/components/review_Card/reviewCard"),
  { loading: () => <ReviewCardSkeleton /> }
);

const MetricsTabs = dynamic(() => import("@/components/ui/tab"), {
  loading: () => <MetricsCardSkeleton />,
});

const VideoCard = dynamic(() => import("@/components/videoCard/videoCard"), {
  loading: () => <VideoSkeletonRow count={3} /> 
});

const ContactForm = dynamic(
  () => import("@/components/contact/contactForm"),
  { loading: () => <LoadingSpinner height="400px" /> }
);

const GallerySlider = dynamic(
  () => import("@/components/videoCard/videoPlaylistSlider"),
  { loading: () => <VideoSkeletonRow count={3} badge caption />   },
  
);

const JourneyCard = dynamic(
  () => import("@/components/JourneyCard/journeyCard"),
  { loading: () => <IVFProcessTimelineSkeleton /> }
);

// ── Consistent section spacing — single source of truth ──────────────────────
const SECTION_GAP = "mt-14 lg:mt-20";

// ── Organization Schema (static data — serialised server-side) ────────────────
const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sudha Fertility Centre",
  url: "https://sudhafertilitycentre.com/",
  logo: "https://sudhafertilitycentre.com/_next/static/media/logo-dark.5cc85d6e.svg",
  description:
    "Sudha Fertility Centre is one of India's leading fertility hospitals, offering advanced IVF, IUI, ICSI, egg freezing, and fertility testing services across multiple locations in India.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-76 7007 6006",
    contactType: "Customer Service",
    areaServed: "IN",
    availableLanguage: ["English", "Tamil", "Telugu"],
  },
  sameAs: [
    "https://www.facebook.com/sudhafertilitycentre",
    "https://www.instagram.com/sudhafertilitycentre/",
    "https://www.youtube.com/@sudhafertilitycentre/",
    "https://www.linkedin.com/company/sudha-fertility-centre",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "15000",
  },
  founder: {
    "@type": "Person",
    name: "Dr. S. Dhanabagyam",
  },
  foundingDate: "1995",
  address: {
    "@type": "PostalAddress",
    streetAddress: "151, Perundurai Road, Edayankattuvalasu",
    addressLocality: "Erode",
    addressRegion: "Tamil Nadu",
    postalCode: "638001",
    addressCountry: "IN",
  },
};

// ── Main Server Component ─────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      {/* Structured data — injected server-side, zero client cost */}
      <Script
        type="application/ld+json"
        id="organization-jsonld"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
      />

      {/* ── Banner Section ── */}
      <div className="relative w-full lg:mt-[-17px]">
        {/*
          HeroBannerSlider carries its own "use client" (it has a slider + animated
          stats), so it is already a client boundary. Importing it here is fine —
          Next.js will only hydrate that sub-tree on the client.
        */}
        <HeroBannerSlider />

        {/*
          Review cards overlap — deferred until visible.
          FIX H-3: Wrapped in <LazySection> so the JS chunk is not requested
          during the LCP window. Previously this was the only dynamic section
          without a lazy wrapper.
        */}
        <div className="relative z-10 -mt-12 sm:-mt-20 lg:-mt-16">
          <LazySection fallback={<ReviewCardSkeleton />}>
            <Suspense fallback={<ReviewCardSkeleton />}>
              <InfiniteMovingCardsDemo />
            </Suspense>
          </LazySection>
        </div>

        {/* White fade transition — pure CSS class, no inline style */}
        {/* FIX M-3: moved from inline style={{ background: "linear-gradient(...)" }}
            to a Tailwind utility to avoid per-render object allocation. */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      <section className="relative">
        {/* ── Achievement Metrics ── */}
        {/*
          FIX M-5: Removed redundant outer <div className="container mx-auto">
          wrapper. The inner max-w-7xl + mx-auto already centres the content.
          Applies to all sections below.
        */}
        <div className="lg:mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="title text-center">
              <h2 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
                Two lakh parenthood achievements proven through care
              </h2>
              <p className="font-outfit font-semibold lg:block mt-2 text-xl">
                Our Achievements
              </p>
            </div>

            <LazySection
              fallback={
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 xl:px-16 mt-9">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <AchievementTileSkeleton key={i} />
                  ))}
                </div>
              }
            >
              {/* FIX M-4: AchievementTile is now imported from src/components/home/ */}
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:px-16 mt-9">
                <AchievementTile number="3.5L+" label="Infertile Couples Counselled" />
                <AchievementTile number="1L+"   label="Laparoscopic Surgeries" />
                <AchievementTile number="35k+"  label="IUI Babies" />
                <AchievementTile number="60k+"  label="IVF Babies" />
              </div>
            </LazySection>
          </div>
        </div>

        {/* ── Fertility Treatments ── */}
        <section>
          <div className={SECTION_GAP}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="title text-center">
                <h2 className="font-outfit font-semibold">
                  Forty years of advanced treatments for parenthood
                </h2>
                <p className="max-w-5xl flex mx-auto mt-5 text-gray-600">
                  Start your parenthood journey with India's leading fertility
                  specialists. With decades of expertise and world-class
                  treatments, we provide personalized care that supports your
                  dreams and guides you through every step of the way.
                </p>
              </div>

              <LazySection
                height="400px"
                fallback={
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-9 items-stretch">
                    <TreatmentCardSkeleton />
                    <TreatmentCardSkeleton />
                    <TreatmentCardSkeleton />
                    <TreatmentCardSkeleton wide />
                    <TreatmentCardSkeleton />
                  </div>
                }
              >
                {/* FIX M-4: TreatmentCard is now imported from src/components/home/ */}
                {/* FIX M-8: PCOS href corrected from /pcos-and-pdoc → /pcos-and-pcod */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-9 items-stretch">
                  <TreatmentCard icon={Vitro}            title="In Vitro Fertilization"          subtitle="(IVF)"  href="/in-vitro-fertilization" />
                  <TreatmentCard icon={Intrauterine}     title="Intrauterine Insemination"        subtitle="(IUI)"  href="/intrauterine-insemination" />
                  <TreatmentCard icon={Intracytoplasmic} title="Intracytoplasmic Sperm Injection" subtitle="(ICSI)" href="/intracytoplasmic-sperm-injection" />
                  <TreatmentCard icon={Laser_Assisted}   title="PCOS / PCOD"                     href="/pcos-and-pcod" wide />
                  <TreatmentCard icon={Pregnancy}        title="Pregnancy and Antenatal Care"     href="/pregnancy-and-antenatal-care" />
                </div>
              </LazySection>

              <div className="button flex justify-center mt-8">
                <Button title={"View All Treatments"} link="/fertility-treatments" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Where Extraordinary Treatment Meets Affordable Cost ── */}
        <div className={SECTION_GAP}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="title text-center">
              <h2 className="font-outfit font-semibold">
                Where extraordinary treatment care meets affordable cost
              </h2>
            </div>
            <div className="tab mt-8">
              <LazySection height="200px">
                <MetricsTabs />
              </LazySection>
            </div>
          </div>
        </div>

        {/* ── CTA: Parenthood Journey ── */}
        <section>
          <div className={`max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto ${SECTION_GAP}`}>
            <div className="shadow-[0px_0px_30px_0px_rgba(0,0,0,0.06)]">
              <div className="flex flex-col lg:flex-row items-center justify-center space-y-0 lg:space-x-8">
                <div className="content flex-1 text-center px-4 py-11 lg:py-0 sm:px-6 lg:px-8 lg:text-left order-1 lg:order-1">
                  <h2 className="font-outfit font-semibold">
                    Ready to take first step towards parenthood
                  </h2>
                </div>

                <div className="flex flex-col items-center space-y-2 sm:mb-3 lg:space-y-0 lg:items-start order-2 lg:order-2">
                  <Image
                    src={BookPic}
                    alt="Parenting Guide Book"
                    width={BookPic.width}
                    height={BookPic.height}
                    className="max-w-full h-auto"
                    loading="lazy"
                  />
                </div>

                <div className="px-4 sm:px-4 lg:px-8 md:px-3 order-3 lg:order-3 pb-8 lg:pb-0">
                  <BookingButton title={"Don't worry, our expert takes it from here "} />
                </div>
              </div>

              <div className="relative w-full h-2">
                <div className="absolute bottom-0 left-0 w-full h-2 bg-yellow-400" />
                <div className="absolute bottom-0 right-0 w-1/3 h-2 bg-[#173366]" />
              </div>
            </div>
          </div>
        </section>

        {/* ── IVF Journey ── */}
        <section className={SECTION_GAP}>
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="content mx-auto flex-1 text-center lg:text-left">
              <h2 className="font-outfit font-semibold flex justify-center text-black">
                Journey of IVF Process
              </h2>
            </div>
            <div>
              <LazySection height="300px">
                <JourneyCard />
              </LazySection>
            </div>
          </div>
        </section>

        {/* ── Our Specialties / Video Slider ── */}
        <div className={`max-w-7xl mx-auto px-3 py-12 sm:px-6 lg:px-8 ${SECTION_GAP}`}>
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

        {/* ── Video Testimonials ── */}
        <div className={`bg-[#EBF2FE] ${SECTION_GAP}`}>
          <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16 sm:px-6 lg:px-8">
            <div className="title text-center max-w-4xl mx-auto">
              <h2 className="font-outfit font-semibold">
                True inspiring stories hear us out completely
              </h2>
              <p className="text-gray-600 text-center mt-4">
                Behind every testimonial is a journey filled with hope, trust,
                and perseverance. Hearing this happiness is what drives us. All
                the wait, tears, and prayers have been answered. Listen to the
                happy stories of the couples welcoming their love of life.
              </p>
            </div>
            <div className="tab mt-6 sm:mt-8 md:mt-12">
              <LazySection height="300px">
                <VideoCard />
              </LazySection>
            </div>
          </div>
        </div>

        {/* ── FAQ ── */}
        <div className={SECTION_GAP}>
          <Faq />
        </div>

        {/* ── Contact Form ── */}
        <div className={SECTION_GAP}>
          <ContactForm />
        </div>
      </section>

      {/* ── Gallery / Videos Marquee ── */}
      {/*
        FIX M-6: Section gap is now consistent with all other sections.
        Horizontal margins kept here since GallerySlider is a full-bleed component
        that manages its own internal padding differently.
      */}
      <section className={`${SECTION_GAP} mb-14 lg:mb-20 mx-4 sm:mx-6 md:mx-8`}>
        <LazySection height="300px">
          <GallerySlider items={homeVideos} />
        </LazySection>
      </section>

      <HomeClientShell />
    </>
  );
}