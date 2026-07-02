'use client';

import { useMemo, useState } from 'react';
import { Search, MapPin, Phone, MessageCircle } from 'lucide-react';
import { branches } from './footer';

const WHATSAPP_NUMBER = '911234567890';
const CALL_NUMBER = '+911234567890';
const CITY_PREVIEW_COUNT = 10;

// Centralized brand tokens — swap these to match your exact palette.
const BRAND_NAVY = 'text-[#1e2a45]';

export default function BranchesDirectory() {
  const [query, setQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  const isSearching = query.trim().length > 0;

  const filteredCities = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? branches.filter((b) => b.title.toLowerCase().includes(q)) : branches;
  }, [query]);

  const previewCount = showAll || isSearching
    ? filteredCities.length
    : CITY_PREVIEW_COUNT;
  const visibleCities = filteredCities.slice(0, previewCount);
  const remaining = filteredCities.length - visibleCities.length;

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6 md:py-12">
      <p className="mb-1 text-sm text-neutral-500">{branches.length} branches</p>
      <h1 className={`mb-5 text-xl font-semibold md:text-3xl ${BRAND_NAVY} md:mb-8`}>
        Find your nearest branch
      </h1>

      <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
        {/* Main column */}
        <div>
          <div className="sticky top-0 z-10 -mx-4 bg-white px-4 pb-3 pt-1 lg:static lg:mx-0 lg:px-0 lg:pb-6">
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400"
                aria-hidden="true"
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by city"
                aria-label="Search by city"
                className="h-11 w-full rounded-lg border border-neutral-200 bg-neutral-50 pl-10 pr-3 text-base text-neutral-900 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 md:h-12 md:max-w-sm"
              />
            </div>
          </div>

          {filteredCities.length === 0 && (
            <p className="py-6 text-center text-sm text-neutral-400">No branches match your search.</p>
          )}

          <div
            role="list"
            className="divide-y divide-neutral-200 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:divide-y-0 lg:grid-cols-3 xl:grid-cols-4"
          >
            {visibleCities.map((branch) => (
              <a
                key={branch.link}
                href={`/${branch.link}`}
                role="listitem"
                className={`group flex min-h-[44px] items-center gap-2.5 py-2 text-base font-medium ${BRAND_NAVY} transition-colors hover:text-[#FFC65C] md:min-h-0 md:py-1.5`}
              >
                <MapPin className={`h-4 w-4 flex-shrink-0 ${BRAND_NAVY} transition-colors group-hover:text-[#FFC65C]`} aria-hidden="true" />
                {branch.title}
              </a>
            ))}
          </div>

          {!isSearching && remaining > 0 && (
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className={`flex min-h-[40px] items-center gap-1 py-2 text-sm font-medium ${BRAND_NAVY} transition-colors hover:text-[#FFC65C]`}
            >
              Show {remaining} more
            </button>
          )}
          {!isSearching && showAll && filteredCities.length > CITY_PREVIEW_COUNT && (
            <button
              type="button"
              onClick={() => setShowAll(false)}
              className="flex min-h-[40px] items-center gap-1 py-2 text-sm font-medium text-neutral-500"
            >
              Show less
            </button>
          )}
        </div>

        {/* Sidebar CTA — sticky on desktop, always a row */}
        {/* <div className="mt-5 flex flex-row gap-2.5 border-t border-neutral-200 pt-5 lg:sticky lg:top-8 lg:mt-0 lg:h-fit lg:border-t-0 lg:pt-0">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 flex-1 items-center justify-center gap-2 rounded-lg bg-[#25D366] text-base font-medium text-white transition-transform active:scale-[0.98] hover:bg-[#1fb958]"
          >
            <MessageCircle className="h-[18px] w-[18px]" aria-hidden="true" />
            WhatsApp
          </a>
          <a
            href={`tel:${CALL_NUMBER}`}
            className={`flex h-12 flex-1 items-center justify-center gap-2 rounded-lg border-2 border-[#1e2a45] bg-transparent text-base font-medium ${BRAND_NAVY} transition-transform active:scale-[0.98] hover:bg-[#1e2a45] hover:text-white`}
          >
            <Phone className="h-[18px] w-[18px]" aria-hidden="true" />
            Call a branch
          </a>
        </div> */}
      </div>
    </div>
  );
}