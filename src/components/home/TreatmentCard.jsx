import Image from "next/image";
import Link from "next/link";

/**
 * TreatmentCard
 *
 * Presentational card linking to a treatment page.
 * Pure Server Component — no hooks, no "use client".
 * Previously defined as an inline function inside Home.jsx.
 *
 * @param {{
 *   icon: import("next/image").StaticImageData,
 *   title: string,
 *   subtitle?: string,
 *   href: string,
 *   wide?: boolean,
 * }} props
 */
export default function TreatmentCard({
  icon: Icon,
  title,
  subtitle,
  href,
  wide = false,
}) {
  return (
    <Link href={href} className={`h-full ${wide ? "md:col-span-2 lg:col-span-1" : ""}`}>
      <div className="h-full border border-[#E7E7E7] p-4 rounded-2xl font-outfit hover:bg-[#EBF2FE] cursor-pointer transition-colors">
        <div className="flex flex-row sm:flex-col items-center h-full gap-4 sm:gap-0">
          <div className="w-12 h-12 flex items-center justify-center mb-0 sm:mb-4 shrink-0">
            <Image src={Icon} alt="" width={48} height={48} aria-hidden="true" />

          </div>
          <div className="flex flex-col items-start sm:items-center w-full sm:p-5">
            <p className="text-[#000] font-semibold text-left sm:text-center leading">
              {title}
            </p>
            {subtitle && (
              <p className="text-[#000] text-left sm:text-center mt-1 sm:mt-2 font-semibold">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
