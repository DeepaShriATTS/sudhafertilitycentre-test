// components/HeroBannerSkeleton.jsx
import { SkeletonBox, SkeletonCircle, SkeletonText } from "./SkeletonCardLoader";

export default function HeroBannerSkeleton() {
  return (
    <div className="w-full min-h-[600px] md:min-h-[650px] flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-12 py-10">
      
      {/* Left: text content */}
      <div className="flex-1 flex flex-col gap-5 max-w-xl">
        {/* Glassmorphic badge */}
        <SkeletonBox className="h-7 w-40 rounded-full" />

        {/* Heading */}
        <div className="flex flex-col gap-3">
          <SkeletonBox className="h-10 md:h-14 w-full rounded-lg" />
          <SkeletonBox className="h-10 md:h-14 w-3/4 rounded-lg" />
        </div>

        {/* hero-description paragraph — LCP element, match its real line-height/width */}
        <SkeletonText lines={3} lastLineWidth="w-2/3" />

        {/* CTA buttons */}
        <div className="flex gap-4 mt-2">
          <SkeletonBox className="h-12 w-40 rounded-full" />
          <SkeletonBox className="h-12 w-40 rounded-full" />
        </div>
      </div>

      {/* Right: flower-shaped image frame */}
      <div className="flex-1 flex items-center justify-center relative">
        <SkeletonCircle className="w-[280px] h-[280px] md:w-[380px] md:h-[380px]" />
      </div>

      {/* Pagination dots — absolute positioned at bottom, matches hero-pg-dot */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <SkeletonCircle key={i} className="w-2.5 h-2.5" />
        ))}
      </div>
    </div>
  );
}