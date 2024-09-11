import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import enTranslation from "../Locales/en/translation.json";
import ruTranslation from "../Locales/ru/translation.json";
import ukTranslation from "../Locales/uk/translation.json";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    detection: {
      order: ["cookie", "localStorage", "navigator", "htmlTag", "path", "subdomain"],
    },
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { translation: enTranslation },
      ru: { translation: ruTranslation },
      uk: { translation: ukTranslation },
    },
  });

export default i18n;