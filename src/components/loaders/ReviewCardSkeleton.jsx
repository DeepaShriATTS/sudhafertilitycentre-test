import { Skeleton } from "@/components/ui/loadingSpinner";
import { SkeletonBox, SkeletonCircle, SkeletonText,CardSkeleton } from "./SkeletonCardLoader";

export function SingleReviewCardSkeleton() {
  return (
    <div
      className="bg-white rounded-[20px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.06)] p-[clamp(18px,5vw,30px)] flex flex-col justify-between"
      style={{ width: "clamp(240px, 82vw, 334px)", height: "clamp(270px, 78vw, 334px)" }}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="w-4 h-4 rounded-full" />
          ))}
        </div>
        <Skeleton className="w-7 h-7 rounded-full" />
      </div>
      <div className="flex-grow space-y-3 mt-4">
        <Skeleton className="h-3.5 w-full rounded" />
        <Skeleton className="h-3.5 w-[92%] rounded" />
        <Skeleton className="h-3.5 w-[75%] rounded" />
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Skeleton className="w-8 h-8 rounded-full" />
        <Skeleton className="h-3.5 w-24 rounded" />
      </div>
    </div>
  );
}

export default function ReviewCardSkeleton() {
  return (
    <div className="w-full overflow-hidden" style={{ minHeight: "398px" }}>
      {/* Mobile: single skeleton card */}
      <div className="md:hidden flex justify-center items-center py-8">
        <SingleReviewCardSkeleton />
      </div>
      {/* Desktop: a row of skeleton cards */}
      <div className="hidden md:flex justify-center items-center gap-4 py-8 overflow-hidden w-full px-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="shrink-0">
            <SingleReviewCardSkeleton />
          </div>
        ))}
      </div>
    </div>
  );
}

// Treatment card skeleton — icon + title + subtitle
export  function TreatmentCardSkeleton({ wide }) {
  return (
    <CardSkeleton wide={wide}>
      <div className="flex flex-row sm:flex-col items-center h-full gap-4 sm:gap-0">
        <SkeletonCircle className="w-12 h-12 shrink-0 mb-0 sm:mb-4" />
        <div className="flex flex-col items-start sm:items-center w-full sm:p-5 gap-2">
          <SkeletonText lines={2} />
        </div>
      </div>
    </CardSkeleton>
  );
}

// Achievement tile skeleton — number + label, centered
export  function AchievementTileSkeleton() {
  return (
    <CardSkeleton className="rounded-lg pt-5 pb-5 pl-2 pr-2 sm:pl-4 sm:pr-4">
      <div className="flex flex-col items-center justify-center gap-2.5">
        <SkeletonBox className="h-[26px] sm:h-[32px] md:h-[36px] w-16 sm:w-20 md:w-24" />
        <SkeletonBox className="h-3 sm:h-4 w-20 sm:w-24" />
      </div>
    </CardSkeleton>
  );
}


export function MetricsCardSkeleton() {
  return (
    <CardSkeleton className="!p-6 md:!p-16 bg-gradient-to-br from-[#eef1fb] to-[#f7f8fd] rounded-3xl overflow-hidden relative">
      {/* decorative dot grid (kept static, no shimmer needed) */}
      <div className="absolute left-10 top-10 grid grid-cols-3 gap-2 opacity-40">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className="h-1 w-1 rounded-full bg-slate-300" />
        ))}
      </div>

      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* LEFT: text content skeleton */}
        <div>
          {/* accent underline */}
          <SkeletonBox className="mb-4 h-1 w-10 rounded-full" />

          {/* icon */}
          <SkeletonBox className="mb-3 h-7 w-7 rounded-md" />

          {/* heading */}
          <SkeletonBox className="mb-4 h-9 w-3/4 rounded-md" />

          {/* description paragraph */}
          <SkeletonText lines={5} className="mb-8" lastLineWidth="w-2/3" />

          {/* CTA button */}
          <SkeletonBox className="h-12 w-56 rounded-full" />
        </div>

        {/* RIGHT: image slider skeleton */}
        <div className="relative mx-auto h-[260px] xs:h-[320px] sm:h-[380px] md:h-[420px] w-full max-w-[420px]">
          {/* rear stacked cards */}
          <div className="absolute inset-0 rounded-3xl bg-slate-200/70 translate-x-3 translate-y-3 rotate-[4deg]" />
          <div className="absolute inset-0 rounded-3xl bg-slate-200/90 translate-x-1.5 translate-y-1.5 rotate-[2deg]" />

          {/* front image card */}
          <SkeletonBox className="absolute inset-0 rounded-3xl" />

          {/* navigation controller */}
          <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/95 px-3 py-2 shadow-lg backdrop-blur">
            <SkeletonCircle className="h-9 w-9" />
            <SkeletonCircle className="h-9 w-9" />
            <SkeletonCircle className="h-9 w-9" />
            <span className="mx-1 h-5 w-px bg-slate-200" />
            <SkeletonBox className="h-4 w-10 rounded" />
          </div>
        </div>
      </div>
    </CardSkeleton>
  );
}

const SKELETON_STEPS = Array.from({ length: 5 });


export function IVFProcessTimelineSkeleton() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-5 flex flex-col items-center gap-2">
        <SkeletonBox className="h-3 w-28 rounded" />
        <SkeletonBox className="h-4 w-72 max-w-full rounded" />
      </div>

      {/* ---------- MOBILE LAYOUT (horizontal timeline list) ---------- */}
      <div className="flex flex-col md:hidden">
        {SKELETON_STEPS.map((_, idx) => {
          const isLast = idx === SKELETON_STEPS.length - 1;
          return (
            <div key={idx} className="flex gap-3">
              {/* Left column: icon + connector */}
              <div className="flex flex-col items-center shrink-0 w-14">
                <SkeletonCircle className="w-14 h-14 shrink-0" />
                {!isLast && <div className="w-[2px] flex-1 min-h-[24px] bg-gray-200 my-2" />}
              </div>

              {/* Right column: badges, title, description */}
              <div className={`flex-1 min-w-0 ${isLast ? "pb-1" : "pb-5"}`}>
                <div className="flex items-center flex-wrap gap-2 mb-1.5 pt-1">
                  <SkeletonBox className="h-4 w-16 rounded-md" />
                  <SkeletonBox className="h-4 w-24 rounded-full" />
                </div>

                <SkeletonBox className="h-4 w-40 rounded mb-2" />

                <SkeletonText lines={3} lastLineWidth="w-2/3" />
              </div>
            </div>
          );
        })}
      </div>

      {/* ---------- DESKTOP LAYOUT (card grid) ---------- */}
      <div className="relative hidden md:block">
        {/* Horizontal connector line */}
        <div
          className="absolute"
          style={{
            top: 40,
            left: "calc(10% + 40px)",
            right: "calc(10% + 40px)",
            height: 1,
            backgroundColor: "#e5e7eb",
          }}
        />

        <div className="grid grid-cols-5 gap-6 items-start">
          {SKELETON_STEPS.map((_, idx) => (
            <div key={idx} className="flex flex-col items-center text-center relative">
              <SkeletonCircle className="relative z-10 w-20 h-20 mb-5 shrink-0" />

              <SkeletonBox className="h-5 w-16 rounded-md mb-3" />

              <SkeletonBox className="h-5 w-24 rounded-full mb-3" />

              {/* Card */}
              <div
                className="flex flex-col items-center w-[200px] min-h-[200px] box-border rounded-2xl px-2 py-4"
                style={{ border: "1px solid #EEF2F8", backgroundColor: "#FAFBFE" }}
              >
                <SkeletonBox className="h-4 w-3/4 rounded mb-3" />
                <SkeletonText lines={4} className="px-1" lastLineWidth="w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA button */}
      <div className="button flex justify-center mt-5 md:mt-8">
        <SkeletonBox className="h-12 w-72 max-w-full rounded-full" />
      </div>
    </div>
  );
}