import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import esConstants from "./esConstants";
import enConstants from "./enConstants";


const resources = {
  es:  {
    translation: esConstants,
  },
  en:  {
    translation: enConstants,
  },
};
i18next.use(initReactI18next).init({
  resources,
  lng: "es",
  interpolation: {
    escapeValue: false,
  },
});
export default i18next;
