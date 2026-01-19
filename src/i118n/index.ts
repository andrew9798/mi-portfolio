import { es } from "./es";
import { en } from "./en";
import { de } from "./de";

export const languages = {
  es,
  en,
  de
};

export const defaultLang = "es";

export type Lang = keyof typeof languages;

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof es) {
    return languages[lang][key];
  };
}