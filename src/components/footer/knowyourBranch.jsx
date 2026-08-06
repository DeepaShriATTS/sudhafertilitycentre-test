'use client';

import { useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import { Search, MapPin, Navigation, Loader2, MapPinned, Navigation2 } from 'lucide-react';
import { branches } from './footerData';

// Leaflet touches `window` at import time, so it must never run during SSR.
const LocationPickerMap = dynamic(() => import('./LocationPicker'), {
  ssr: false,
  loading: () => (
    <div className="flex h-[320px] w-full items-center justify-center rounded-xl bg-neutral-100 text-sm text-neutral-400">
      Loading map…
    </div>
  ),
});

// Default map center when we don't yet know the user's location (India).
const DEFAULT_MAP_CENTER = [22.9734, 78.6569];

const CITY_PREVIEW_COUNT = 10;

const BRAND_NAVY = 'text-[#1e2a45]';
const BRAND_GOLD = '#FFC65C';

function distanceKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
    Math.cos((lat2 * Math.PI) / 180) *
    Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export default function BranchesDirectory() {
  const [query, setQuery] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [userCoords, setUserCoords] = useState(null);
  const [locating, setLocating] = useState(false);
  const [locationError, setLocationError] = useState(null);
  const [pinMode, setPinMode] = useState(false);

  const isSearching = query.trim().length > 0;

  const handleFindNearest = () => {
    if (!('geolocation' in navigator)) {
      setLocationError('Location is not supported by your browser.');
      return;
    }
    setLocating(true);
    setLocationError(null);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setLocating(false);
      },
      () => {
        setLocationError('Could not access your location. Please allow location access and try again.');
        setLocating(false);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  const handleFindNearestClick = () => {
    setPinMode(false);
    handleFindNearest();
  };

  const handlePinSelect = (coords) => {
    setUserCoords(coords);
    setLocationError(null);
  };

  // Attach distance (km) to every branch that has lat/lng, once we know userCoords.
  const branchesWithDistance = useMemo(() => {
    return branches.map((b) => {
      const hasCoords = userCoords && typeof b.lat === 'number' && typeof b.lng === 'number';
      const distance = hasCoords
        ? distanceKm(userCoords.lat, userCoords.lng, b.lat, b.lng)
        : null;
      return { ...b, distance };
    });
  }, [userCoords]);

  const nearestBranch = useMemo(() => {
    if (!userCoords) return null;
    const withDistance = branchesWithDistance.filter((b) => b.distance !== null);
    if (withDistance.length === 0) return null;
    return withDistance.reduce((closest, b) => (b.distance < closest.distance ? b : closest));
  }, [branchesWithDistance, userCoords]);

  // Sort ascending (nearest → farthest). Branches without coords fall to the end.
  const filteredCities = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = q
      ? branchesWithDistance.filter((b) => b.title.toLowerCase().includes(q))
      : branchesWithDistance;

    if (userCoords) {
      return [...list].sort((a, b) => {
        if (a.distance === null && b.distance === null) return 0;
        if (a.distance === null) return 1;
        if (b.distance === null) return -1;
        return a.distance - b.distance;
      });
    }
    return list;
  }, [branchesWithDistance, query, userCoords]);

  const previewCount = showAll || isSearching ? filteredCities.length : CITY_PREVIEW_COUNT;
  const visibleCities = filteredCities.slice(0, previewCount);
  const remaining = filteredCities.length - visibleCities.length;

 

  return (
    <div className="mx-auto w-full max-w-6xl py-6 md:py-12">
      {/* Eyebrow badge */}
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#E8EDF5] bg-[#F5F8FC] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#1e2a45]">
        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: BRAND_GOLD }} />
        {branches.length} branches
      </div>

      <h1 className={`mb-5 text-3xl font-bold leading-tight tracking-tight md:mb-8 md:text-5xl ${BRAND_NAVY}`}>
        Find your nearest{' '}
        <span style={{ color: '#9A6B00' }}>branch</span>
      </h1>

      <div className="mb-6 rounded-2xl border border-[#E8EDF5] bg-[#F8FAFC] p-5 shadow-sm">
        {!userCoords && !pinMode && (
          <div className="flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={handleFindNearestClick}
              disabled={locating}
              className="flex h-11 items-center gap-2 rounded-xl bg-[#1e2a45] px-4 text-sm font-medium text-white shadow-sm transition-transform active:scale-[0.98] disabled:opacity-60"
            >
              {locating ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              ) : (
                <Navigation className="h-4 w-4" aria-hidden="true" />
              )}
              {locating ? 'Locating you…' : 'Find my nearest branch'}
            </button>
            <button
              type="button"
              onClick={() => setPinMode(true)}
              className={`flex h-11 items-center gap-2 rounded-xl border-2 border-[#1e2a45] bg-white px-4 text-sm font-medium ${BRAND_NAVY} transition-transform active:scale-[0.98] hover:bg-[#1e2a45] hover:text-white`}
            >
              <MapPinned className="h-4 w-4" aria-hidden="true" />
              Pin on map instead
            </button>
          </div>
        )}

        {locationError && (
          <p className="mt-2 text-sm text-red-600">{locationError}</p>
        )}

        {!userCoords && pinMode && (
          <div>
            <p className="mb-2 text-sm text-neutral-600">Tap the map where you are to find your nearest branch.</p>
            <LocationPickerMap center={DEFAULT_MAP_CENTER} marker={null} onSelect={handlePinSelect} />
            <button
              type="button"
              onClick={() => setPinMode(false)}
              className="mt-2 text-sm font-medium text-neutral-500 hover:text-[#1e2a45]"
            >
              Cancel
            </button>
          </div>
        )}

        {userCoords && pinMode && (
          <div>
            <p className="mb-2 text-sm text-neutral-600">Drag your pin below, or tap a new spot to move it.</p>
            <LocationPickerMap center={[userCoords.lat, userCoords.lng]} marker={userCoords} onSelect={handlePinSelect} />
          </div>
        )}

        {userCoords && nearestBranch && (
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[#E8EDF5] bg-white p-4 shadow-sm">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Nearest branch</p>
              <a
                href={`/${nearestBranch.link}`}
                className={`mt-0.5 flex items-center gap-1.5 text-base font-semibold ${BRAND_NAVY} hover:text-[#FFC65C]`}
              >
                <MapPin className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                {nearestBranch.title}
                <span className="ml-1 text-sm font-normal text-neutral-500">
                  {nearestBranch.distance.toFixed(1)} km away
                </span>
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {(nearestBranch.mapsLink || nearestBranch.address) && (
                <a
                  href={
                    nearestBranch.mapsLink ||
                    `https://www.google.com/maps/dir/?api=1&origin=${userCoords.lat},${userCoords.lng}&destination=${encodeURIComponent(nearestBranch.address)}&travelmode=driving`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 items-center gap-1.5 rounded-lg border border-[#1e2a45] px-3 text-xs font-medium text-[#1e2a45] transition-colors hover:bg-[#1e2a45] hover:text-white"
                >
                  <Navigation2 className="h-3.5 w-3.5" aria-hidden="true" />
                  Get directions
                </a>
              )}
              <button
                type="button"
                onClick={handleFindNearestClick}
                className="text-xs font-medium text-neutral-500 hover:text-[#1e2a45]"
              >
                Refresh
              </button>
              <button
                type="button"
                onClick={() => setPinMode(true)}
                className="text-xs font-medium text-neutral-500 hover:text-[#1e2a45]"
              >
                Adjust pin
              </button>
            </div>
          </div>
        )}

        {userCoords && !nearestBranch && (
          <p className="text-sm text-neutral-500">
            We got your location, but branch coordinates aren't available yet to calculate distances.
          </p>
        )}
      </div>

      <div className="w-full">
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
              className="h-11 w-full rounded-xl border border-[#E8EDF5] bg-[#F8FAFC] pl-10 pr-3 text-base text-neutral-900 shadow-sm outline-none transition-colors focus:border-[#1e2a45] focus:ring-2 focus:ring-[#1e2a45]/10 md:h-12 md:max-w-sm"
            />
          </div>
        </div>

        {filteredCities.length === 0 && (
          <p className="py-6 text-center text-sm text-neutral-600">No branches match your search.</p>
        )}

        <div
          className="grid gap-2"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))' }}
        >
          {visibleCities.map((branch) => (
            <a
              key={branch.link}
              href={`/${branch.link}`}
              className={`flex flex-col items-center justify-center gap-0.5 rounded-md px-2 py-2 text-center text-xs font-medium ${BRAND_NAVY} transition-colors hover:bg-[#1e2a45] hover:text-white`}
            >
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
                <span>{branch.title}</span>
              </span>
              {branch.distance !== null && (
                <span className="text-[10px] font-normal text-neutral-500 group-hover:text-white">
                  {branch.distance.toFixed(1)}km
                </span>
              )}
            </a>
          ))}
        </div>

        {!isSearching && remaining > 0 && (
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className={`mt-4 flex min-h-[40px] items-center gap-1 rounded-full border border-[#E8EDF5] bg-white px-4 py-2 text-sm font-medium ${BRAND_NAVY} shadow-sm transition-colors hover:border-[#1e2a45]`}
          >
            Show {remaining} more
          </button>
        )}
        {!isSearching && showAll && filteredCities.length > CITY_PREVIEW_COUNT && (
          <button
            type="button"
            onClick={() => setShowAll(false)}
            className="mt-4 flex min-h-[40px] items-center gap-1 rounded-full border border-[#E8EDF5] bg-white px-4 py-2 text-sm font-medium text-neutral-500 shadow-sm"
          >
            Show less
          </button>
        )}
      </div>
    </div>
  );
}