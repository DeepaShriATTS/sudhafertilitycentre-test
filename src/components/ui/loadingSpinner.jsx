export default function LoadingSpinner({ height = '400px' }) {
  return (
    <div className="flex items-center justify-center" style={{ minHeight: height }}>
      <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin" />
    </div>
  );
}