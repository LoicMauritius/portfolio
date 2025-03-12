import { usePathname, useRouter } from "@/i18n/navigation";

type LanguageSwitcherProps = {
    children: React.ReactNode;
    defaultValue: string;
    label: string;
}

export const LanguageSwitcherSelect = ({ children, defaultValue, label }:LanguageSwitcherProps) => {

    const router = useRouter();
    const pathname = usePathname();

    function onSelectChange( nextLocale: string) {
        router.replace(pathname, { locale: nextLocale });
    }

    return(
        <>
            <label htmlFor="language" className="sr-only">{label}</label>
            <select
                id="language"
                name="language"
                defaultValue={defaultValue}
                className="rounded-md border p-2 border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                onChange={(e) => onSelectChange(e.target.value)}
            >
                {children}
            </select>
        </>
    )
}