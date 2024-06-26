import i18nConfig from "@/i18nConfig";
import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";

export default async function initTranslations(
    locale,
    namespaces,
    i18nInstance,
    resources
) {
    i18nInstance = i18nInstance || createInstance();

    i18nInstance.use(initReactI18next);

    if (!resources) {
        await i18nInstance.use(
            resourcesToBackend(async (language, namespace, callback) => {
                try {
                    const resource = await import(
                        `../public/locales/${language}/${namespace}.json`
                    );
                    callback(null, resource);
                } catch (error) {
                    console.error(
                        `Failed to load: ${language}/${namespace}`,
                        error
                    );
                    callback(error, null);
                }
            })
        );
    }

    await i18nInstance.init({
        lng: locale,
        resources,
        fallbackLng: i18nConfig.defaultLocale,
        supportedLngs: i18nConfig.locales,
        defaultNS: namespaces[0],
        fallbackNS: namespaces[0],
        ns: namespaces,
        preload: resources ? [] : i18nConfig.locales,
    });

    return {
        i18n: i18nInstance,
        resources: i18nInstance.services.resourceStore.data,
        t: i18nInstance.t,
    };
}
