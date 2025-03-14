import { useLocale } from "next-intl";
import { LanguageSwitcherSelect } from ".";

export const LanguageSwitcher = () => {
    const locale = useLocale();

    return(
        <>
            <div className="flex items-center gap-2">
                <LanguageSwitcherSelect defaultValue={locale} label="Select a language" />
            </div>
        </>
    )
}