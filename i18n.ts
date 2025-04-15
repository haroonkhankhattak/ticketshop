import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./public/locales/en/common.json";
import es from "./public/locales/es/common.json";
import fr from "./public/locales/fr/common.json";
import de from "./public/locales/de/common.json";
import nl from "./public/locales/nl/common.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      fr: { translation: fr },
      nl: { translation: nl },
      de: { translation: de },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
