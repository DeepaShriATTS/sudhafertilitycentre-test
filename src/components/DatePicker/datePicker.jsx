import { useState, useEffect, useRef } from "react";




// ─── Helpers ───────────────────────────────────────────────────────────────

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const MONTHS_SHORT = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const YEAR_MIN = 1924;
const YEAR_MAX = 2124;

function isSameDay(a, b) {
  if (!a || !b) return false;
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function getCalendarDays(year, month) {
  const first = new Date(year, month, 1);
  const last  = new Date(year, month + 1, 0);
  const days = [];

  for (let i = 0; i < first.getDay(); i++) {
    days.push({ date: new Date(year, month, -first.getDay() + i + 1), current: false });
  }
  for (let i = 1; i <= last.getDate(); i++) {
    days.push({ date: new Date(year, month, i), current: true });
  }
  while (days.length % 7 !== 0) {
    days.push({
      date: new Date(year, month + 1, days.length - last.getDate() - first.getDay() + 1),
      current: false,
    });
  }
  return days;
}

function formatDate(d) {
  if (!d) return "";
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

// ─── Icon ──────────────────────────────────────────────────────────────────

const CalendarIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="text-gray-400 shrink-0">
    <rect x="1" y="2" width="13" height="12" rx="2" stroke="currentColor" strokeWidth="1" />
    <line x1="1" y1="6" x2="14" y2="6" stroke="currentColor" strokeWidth="1" />
    <line x1="5" y1="0.5" x2="5" y2="4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <line x1="10" y1="0.5" x2="10" y2="4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

// ─── Calendar Grid (Day Panel) ─────────────────────────────────────────────

const CalendarGrid  = ({
  view, onPrev, onNext, onSelect, onMonthClick, onYearClick, selectedDate,
}) => {
  const today = new Date();
  const days  = getCalendarDays(view.year, view.month);

  return (
    <div className="border border-[#B1B2B3] rounded-xl shadow-lg p-4 w-72 bg-white">
      <div className="flex items-center justify-between mb-3">
        <button
          type="button"
          onClick={onPrev}
          className="w-7 h-7 flex items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 hover:bg-neutral-100 transition-colors text-sm"
        >
          ‹
        </button>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={onMonthClick}
            className="text-sm font-medium hover:text-[#1C315E] transition-colors px-1.5 py-0.5 rounded-md hover:bg-neutral-100"
          >
            {MONTHS[view.month]}
          </button>
          <button
            type="button"
            onClick={onYearClick}
            className="text-sm font-medium hover:text-[#1C315E] transition-colors px-1.5 py-0.5 rounded-md hover:bg-neutral-100"
          >
            {view.year}
          </button>
        </div>
        <button
          type="button"
          onClick={onNext}
          className="w-7 h-7 flex items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 hover:bg-neutral-100 transition-colors text-sm"
        >
          ›
        </button>
      </div>

      <div className="grid grid-cols-7 mb-1">
        {DAYS.map((d) => (
          <div key={d} className="text-center text-[10px] font-medium text-neutral-400 uppercase tracking-wide py-1">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-0.5">
        {days.map((d, i) => {
          const isToday    = isSameDay(d.date, today);
          const isSelected = isSameDay(d.date, selectedDate);

          let cellCls =
            "h-8 w-full flex items-center justify-center text-xs cursor-pointer transition-colors relative select-none rounded-lg";

          if (!d.current) {
            cellCls += " text-neutral-300";
          } else if (isSelected) {
            cellCls += " bg-[#1C315E] text-white";
          } else {
            cellCls += " text-neutral-700 hover:bg-neutral-100";
          }
          if (isToday && !isSelected) cellCls += " font-semibold";

          return (
            <button
              key={i}
              type="button"
              className={cellCls}
              onClick={() => d.current && onSelect(d.date)}
            >
              {d.date.getDate()}
              {isToday && !isSelected && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#1C315E]" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

// ─── Month Picker ──────────────────────────────────────────────────────────

const MonthPicker = ({ view, onSelect, selectedDate }) => (
  <div className="border border-[#B1B2B3] rounded-xl shadow-lg p-4 w-72 bg-white">
    <div className="grid grid-cols-3 gap-1.5">
      {MONTHS_SHORT.map((m, i) => {
        const isSelected =
          selectedDate !== null &&
          selectedDate.getMonth() === i &&
          selectedDate.getFullYear() === view.year;
        const isCurrent =
          new Date().getMonth() === i &&
          new Date().getFullYear() === view.year;

        return (
          <button
            key={m}
            type="button"
            onClick={() => onSelect(i)}
            className={[
              "h-9 rounded-lg text-sm transition-colors font-medium",
              isSelected
                ? "bg-[#1C315E] text-white"
                : isCurrent
                  ? "border border-[#1C315E] text-[#1C315E] hover:bg-neutral-100"
                  : "text-neutral-700 hover:bg-neutral-100",
            ].join(" ")}
          >
            {m}
          </button>
        );
      })}
    </div>
  </div>
);

// ─── Year Picker (scrollable) ──────────────────────────────────────────────

const YearPicker = ({ view, onSelect, selectedDate }) => {
  const scrollRef  = useRef(null);
  const todayYear  = new Date().getFullYear();
  const years      = Array.from({ length: YEAR_MAX - YEAR_MIN + 1 }, (_, i) => YEAR_MIN + i);
  const ROW_H      = 42; // h-9 (36px) + gap-1.5 (6px)
  const VISIBLE_H  = 216;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const targetYear = selectedDate?.getFullYear() ?? view.year;
    const rowIndex   = Math.floor((targetYear - YEAR_MIN) / 3);
    el.scrollTop     = rowIndex * ROW_H - VISIBLE_H / 2 + ROW_H / 2;
  }, []);

  return (
    <div className="border border-[#B1B2B3] rounded-xl shadow-lg p-4 w-72 bg-white">
      <div className="relative">
        {/* Fade — top */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-8 z-10"
          style={{ background: "linear-gradient(to bottom, white 40%, transparent)" }}
        />

        <div
          ref={scrollRef}
          style={{ height: `${VISIBLE_H}px`, overflowY: "scroll", scrollbarWidth: "none" }}
        >
          {/* hide webkit scrollbar */}
          <style>{`.ypicker::-webkit-scrollbar{display:none}`}</style>
          <div className="ypicker" />

          <div className="grid grid-cols-3 gap-1.5">
            {years.map((y) => {
              const isSelected = selectedDate !== null && selectedDate.getFullYear() === y;
              const isCurrent  = todayYear === y;

              return (
                <button
                  key={y}
                  type="button"
                  onClick={() => onSelect(y)}
                  className={[
                    "h-9 rounded-lg text-sm transition-colors font-medium",
                    isSelected
                      ? "bg-[#1C315E] text-white"
                      : isCurrent
                        ? "border border-[#1C315E] text-[#1C315E] hover:bg-neutral-100"
                        : "text-neutral-700 hover:bg-neutral-100",
                  ].join(" ")}
                >
                  {y}
                </button>
              );
            })}
          </div>
        </div>

        {/* Fade — bottom */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-8 z-10"
          style={{ background: "linear-gradient(to top, white 40%, transparent)" }}
        />
      </div>
    </div>
  );
};

// ─── Date Input ────────────────────────────────────────────────────────────

const DateInput = ({
  value, placeholder, isOpen, hasError, required, onClick, readOnly,
}) => (
  <div className="flex flex-col gap-1.5">
    {placeholder && (
      <label className="text-sm font-medium text-gray-900 flex items-center gap-1">
        {placeholder}
        {required && <span className="text-[#EB3C3C]"> *</span>}
      </label>
    )}
    <button
      type="button"
      onClick={onClick}
      className={[
        "flex items-center gap-2 px-3 h-10 rounded-lg text-sm w-full",
        "border transition-all cursor-pointer text-left",
        readOnly
          ? "opacity-50 bg-gray-50 cursor-not-allowed border-[#B1B2B3]"
          : hasError
            ? "border-[#EB3C3C] bg-[#FFF9F9]"
            : isOpen
              ? "border-[#1C315E] ring-1 ring-[#1C315E] bg-white"
              : "border-[#B1B2B3] hover:border-neutral-400 bg-white",
      ].join(" ")}
    >
      <span className={value ? "text-neutral-800" : "text-neutral-400"}>
        {value ? formatDate(value) : "DD/MM/YYYY"}
      </span>
      <span className="ml-auto">
        <CalendarIcon />
      </span>
    </button>
  </div>
);

// ─── DatePicker ────────────────────────────────────────────────────────────

export const DatePicker = ({
  value,
  onChange,
  onBlur,
  placeholder = "Pick a date",
  required = false,
  error,
  readOnly = false,
  align = "bottom",
}) => {
  const today = new Date();
  const [open,    setOpen]    = useState(false);
  const [panel,   setPanel]   = useState("day");
  const [touched, setTouched] = useState(false);
  const [focused, setFocused] = useState(false);
  const [view,    setView]    = useState({
    year:  today.getFullYear(),
    month: today.getMonth(),
  });
  const ref = useRef(null);

  useEffect(() => {
    if (value) setView({ year: value.getFullYear(), month: value.getMonth() });
  }, [value]);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target) && focused) {
        setOpen(false);
        setPanel("day");
        setTouched(true);
        setFocused(false);
        onBlur?.();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [focused, onBlur]);

  const prevMonth = () =>
    setView((v) => v.month === 0
      ? { year: v.year - 1, month: 11 }
      : { year: v.year, month: v.month - 1 });

  const nextMonth = () =>
    setView((v) => v.month === 11
      ? { year: v.year + 1, month: 0 }
      : { year: v.year, month: v.month + 1 });

  const handleMonthSelect = (month) => {
    setView((v) => ({ ...v, month }));
    setPanel("day");
  };

  const handleYearSelect = (year) => {
    setView((v) => ({ ...v, year }));
    setPanel("day");
  };

  const showError = (touched || !!error) && required && !value;

  const handleOpen = () => {
    if (readOnly) return;
    setOpen((o) => !o);
    setPanel("day");
    setFocused(true);
  };

  return (
    <div ref={ref} className="relative inline-block w-full">
      <input
        type="text"
        readOnly
        tabIndex={0}
        aria-label="Date Picker Input"
        onFocus={() => setFocused(true)}
        onBlur={() => {
          if (!open) {
            setTouched(true);
            setFocused(false);
            onBlur?.();
          }
        }}
        className="sr-only"
      />

      <DateInput
        required={required}
        value={value}
        placeholder={placeholder}
        minDate={new Date()}
        isOpen={open}
        hasError={showError || !!error}
        onClick={handleOpen}
        onClear={() => { onChange(null); setTouched(true); }}
        readOnly={readOnly}
      />

      {(error || showError) && (
        <span className="text-[10px] text-[#EB3C3C] font-medium flex items-center gap-1 mt-1.5 ms-1">
          {error ?? `${placeholder} is required`}
        </span>
      )}

      {open && (
        <div className={`absolute left-0 z-50 ${align === "top" ? "bottom-[calc(100%+6px)]" : "top-[calc(100%+6px)]"}`}>
          {panel === "day" && (
            <CalendarGrid
              view={view}
              onPrev={prevMonth}
              onNext={nextMonth}
              selectedDate={value}
               minDate={today}
              onMonthClick={() => setPanel("month")}
              onYearClick={() => setPanel("year")}
              onSelect={(date) => {
                onChange(date);
                setOpen(false);
                setPanel("day");
                setTouched(true);
                setFocused(false);
              }}
            />
          )}

          {panel === "month" && (
            <MonthPicker
              view={view}
              selectedDate={value}
              onSelect={handleMonthSelect}
            />
          )}

          {panel === "year" && (
            <YearPicker
              view={view}
              selectedDate={value}
              onSelect={handleYearSelect}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default DatePicker;