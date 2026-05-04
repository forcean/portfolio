import { getRequestConfig } from "next-intl/server";

const defaultLocale = "en";

export default getRequestConfig(async ({ locale }) => {
    const currentLocale =
        locale && ["en", "th"].includes(locale)
            ? locale
            : defaultLocale;

    return {
        locale: currentLocale,
        messages: (await import(`./messages/${currentLocale}.json`)).default
    };
});