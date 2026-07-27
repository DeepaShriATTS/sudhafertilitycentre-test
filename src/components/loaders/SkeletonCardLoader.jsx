// ── Skeleton primitives ──
export function SkeletonBox({ className = "" }) {
  return <div className={`bg-gray-200 rounded animate-pulse ${className}`} />;
}

export function SkeletonCircle({ className = "" }) {
  return <div className={`bg-gray-200 rounded-full animate-pulse ${className}`} />;
}

export function SkeletonText({ lines = 1, className = "", lastLineWidth = "w-1/2" }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {Array.from({ length: lines }).map((_, i) => (
        <SkeletonBox
          key={i}
          className={`h-4 ${
            i === lines - 1 && lines > 1 ? lastLineWidth : "w-full"
          } ${className}`}
        />
      ))}
    </div>
  );
}

// ── Generic Card Skeleton shell ──
export function CardSkeleton({
  className = "",
  wide = false,
  children,
}) {
  return (
    <div
      className={`h-full border border-[#E7E7E7] rounded-2xl font-outfit p-4 ${
        wide ? "md:col-span-2 lg:col-span-1" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

