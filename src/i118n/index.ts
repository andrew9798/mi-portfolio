import { es } from "./es";
import { en } from "./en";
import { de } from "./de";

export const translations = { es, en, de };
export type Lang = keyof typeof translations;

export function useTranslations(lang: Lang) {
  return function t(path: string) {
    return path.split(".").reduce((obj: any, key) => obj[key], translations[lang]);
  };
}
