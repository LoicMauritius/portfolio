import { routing } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { LanguageSwitcherSelect } from ".";

export const LanguageSwitcher = () => {
    const locale = useLocale();

    return(
        <>
            <div className="flex items-center gap-2">
                <LanguageSwitcherSelect defaultValue={locale} label="Select a language">
                    {routing.locales.map((locale) => (
                        <option key={locale} value={locale} className="py-1 subtitle-color bg-color">{locale}</option>
                    ))}
                </LanguageSwitcherSelect>
            </div>
        </>
    )
}