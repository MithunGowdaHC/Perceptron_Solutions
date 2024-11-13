import { clsx } from "clsx"; // Importing clsx once
import { twMerge } from "tailwind-merge"; // Importing twMerge

export function cn(...inputs) {
  return twMerge(clsx(inputs)); // Combining clsx and twMerge to handle classnames
}
