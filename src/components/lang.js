import React, { useEffect } from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import Cookies from "js-cookie";



i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        fallbackLng: "ar",
        detection: {
            order: ['cookie', 'htmlTag', 'localStorage', 'sessionStorage', 'navigator', 'path', 'subdomain'],
            Caches: ["cookie"],

        },

        backend: {
            loadPath: './locale/{{lng}}/{{ns}}.json',

        }
    });

function Lang() {
    const { t } = useTranslation();

    const lng = Cookies.get("i18next")
    useEffect(
        () => {
            window.document.dir = i18n.dir()
        }, [lng]);

    return (
        <>
            <button onClick={() => {
                i18n.changeLanguage("en")
            }}>english</button>
            <button onClick={() => {
                i18n.changeLanguage("ar")
            }}>عربي</button>
            <h2>{t('Welcome to React')}</h2>;
        </>
    );
}

export default Lang;