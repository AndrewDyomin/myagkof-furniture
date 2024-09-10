"use client";

import i18n from "i18next";
import { I18nextProvider } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import enTranslation from "../Locales/en/translation.json";
import ruTranslation from "../Locales/ru/translation.json";
import ukTranslation from "../Locales/uk/translation.json";

export default function I18n({ children }) {
  i18n
    .use(Backend)
    .use(LanguageDetector)
    .init({
      fallbackLng: "en",
      debug: false,
      detection: {
        order: [
          "cookie",
          "localStorage",
          "navigator",
          "htmlTag",
          "path",
          "subdomain",
        ],
      },
      interpolation: {
        escapeValue: false,
      },
      resources: {
        en: {
          translation: enTranslation,
        },
        ru: {
          translation: ruTranslation,
        },
        uk: {
          translation: ukTranslation,
        },
      },
    });

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
