import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { getTimeDifference } from "./time";

export { getTimeDifference };

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
