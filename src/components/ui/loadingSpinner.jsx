export default function LoadingSpinner({ height = '400px' }) {
  return (
    <div className="flex items-center justify-center" style={{ minHeight: height }}>
      <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin" />
    </div>
  );
}

export function Skeleton({ className = "" }) {
  return (
    <div
      className={`relative overflow-hidden bg-[#E7E7E7]/60 rounded-md ${className}`}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/70 to-transparent" />
    </div>
  );
}