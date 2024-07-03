export type Locale = (typeof locales)[number];
export const defaultLocale = "ru" as const;
export const locales = ["en", "ru", "uk", "ge", "am"] as const;
