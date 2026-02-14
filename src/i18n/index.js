import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import uz from "./locales/uz.json";
import eng from "./locales/eng.json";

i18next.use(initReactI18next).init({
  resources: {
    uz: { translation: uz },
    eng: { translation: eng },
  },
  lng: localStorage.getItem("lang"),
  fallbackLng: "uz",
});

export default i18next;
