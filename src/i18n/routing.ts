import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    pathnames: {
        "/": "/",
        "/web": {
            en: "/web",
            fr: "/web"
        },
        "/mobile": {
            en: "/mobile",
            fr: "/mobile"
        },
        "/other": {
            en: "/others",
            fr: "/autres"
        },
        "/hobbie": {
            en: "/hobbies",
            fr: "/loisirs"
        },
        "/contact": {
            en: "/contact-me",
            fr: "/contactez-moi"
        }
    }
});

export type Locale = (typeof routing.locales)[number];
export type Pathnames = keyof typeof routing.pathnames;
export const navItems: Pathnames[] = ["/", "/web", "/mobile", "/other", "/hobbie", "/contact"];