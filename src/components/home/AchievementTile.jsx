/**
 * AchievementTile
 *
 * Presentational tile showing a stat number + label.
 * Pure Server Component — no hooks, no "use client".
 * Previously defined as an inline function inside Home.jsx.
 *
 * @param {{ number: string, label: string }} props
 */
export default function AchievementTile({ number, label }) {
  return (
    <div className="border border-[#E7E7E7] pt-5 pb-5 pl-2 pr-2 sm:pl-4 sm:pr-4 rounded-lg font-outfit">
      <div className="flex items-center justify-center">
        <div className="content">
          <h3 className="text-[26px] sm:text-[32px] md:text-[36px] font-semibold text-[#173366] text-center leading-tight">
            {number}
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center mt-1.5 leading-snug">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}
