import type { Locale } from "@/types/site";

export const locales: Locale[] = ["ar", "en"];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
