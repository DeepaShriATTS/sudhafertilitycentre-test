import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

   export const cns = (...classes) => {
    return classes.filter(Boolean).join(' ');
  };

export function cleanPhone(phone) {
  const clean = String(phone || "").replace(/\D/g, "");
  return clean.startsWith("91") && clean.length === 12 ? clean.substring(2) : clean;
}