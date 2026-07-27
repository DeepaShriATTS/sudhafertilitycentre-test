import { SkeletonBox, SkeletonCircle } from "./SkeletonCardLoader";


export function VideoCardSkeleton({
  className = "",
  aspect = "aspect-video", // e.g. "aspect-video" (16:9) or a fixed h-52 / h-56 to match a specific slider
  badge = false,
  caption = false,
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl bg-white shadow-lg ${className}`}
    >
      <div className={`relative w-full ${aspect}`}>
        {/* thumbnail */}
        <SkeletonBox className="absolute inset-0 rounded-none" />

        {/* playlist / video-count badge */}
        {badge && (
          <div className="absolute top-3 left-3 z-10">
            <SkeletonBox className="h-6 w-20 rounded-full !bg-white/60" />
          </div>
        )}

        {/* centered play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <SkeletonCircle className="h-14 w-14 !bg-white/70" />
        </div>

        {/* bottom caption (location + title), overlaid like GallerySlider's gs-card-caption */}
        {caption && (
          <div className="absolute bottom-0 left-0 right-0 z-10 p-3 flex flex-col gap-1.5">
            <SkeletonBox className="h-3 w-24 rounded !bg-white/50" />
            <SkeletonBox className="h-4 w-3/4 rounded !bg-white/70" />
          </div>
        )}
      </div>
    </div>
  );
}


export function VideoSkeletonRow({
  count = 3,
  gap = "gap-4",
  aspect = "aspect-video",
  badge = false,
  caption = false,
}) {
  return (
    <div className={`flex ${gap} overflow-hidden w-full`}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3">
          <VideoCardSkeleton aspect={aspect} badge={badge} caption={caption} />
        </div>
      ))}
    </div>
  );
}