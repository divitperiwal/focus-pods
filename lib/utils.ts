import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function TimeStringtoNumber(time: string) {
  const minutes = parseInt(time);
  return minutes;
}
