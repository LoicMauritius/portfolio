"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Logo } from "./Logo";
import { useState } from "react";

type LanguageSwitcherProps = {
    defaultValue: string;
    label: string;
}

export const LanguageSwitcherSelect = ({ defaultValue, label }:LanguageSwitcherProps) => {

    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    function handleChange(locale: string) {
        onSelectChange(locale);
        setIsOpen(false);
    }

    function onSelectChange( nextLocale: string) {
        router.replace(pathname, { locale: nextLocale });
    }

    return(
        <>
            <label htmlFor="language" className="sr-only">{label}</label>
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="w-full rounded-md border p-1 border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-800 dark:text-white dark:border-gray-600"
            >
                <Logo image={`/drapeau/${defaultValue}.png`} alt={defaultValue.toUpperCase()} style="h-7"/>
            </button>

            {/* Liste déroulante qui s'affiche/masque */}
            {isOpen && (
                <ul
                    id="language"
                    className="absolute z-99 top-14 md:top-30 right-9 sm:right-30 xl:right-25 w-auto mt-2 rounded-md border p-1 border-gray-300 shadow-sm bg-white dark:bg-gray-800 dark:border-gray-600"
                >
                    {routing.locales.map((locale) => (
                        <li
                            key={locale}
                            onClick={() => handleChange(locale)}
                            className="py-1 flex flex-row justify-left items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 gap-2"
                        >
                            <Logo image={`/drapeau/${locale}.png`} alt={locale.toUpperCase()} />
                            <span className="ml-2">{locale.toUpperCase()}</span>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}