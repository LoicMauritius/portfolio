import { Link, usePathname } from "@/i18n/navigation";
import { Pathnames } from "@/i18n/routing";

type MenuItemProps = {
    href: Pathnames;
    name: string;
};

export const MenuItem = ({
    href,
    name
}: MenuItemProps) => {
    const pathname = usePathname();

    return (  
        <li className="block px-3 md:p-0 rounded-sm">
            <Link
                href={href}
                className={`py-2 dark:text-white hover:text-rose-600 focus:text-rose-600 dark:hover:text-sky-300 dark:focus:text-sky-300 pl-2 md:pl-0 ${pathname === href ? "font-bold border-l-3 border-rose-600 dark:border-sky-300 md:border-l-0 md:border-b-3 border-double rounded-sm" : ""}`}
            >
                {name}
            </Link>
        </li>
    )
}