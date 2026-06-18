import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

   export const cns = (...classes) => {
    return classes.filter(Boolean).join(' ');
  };