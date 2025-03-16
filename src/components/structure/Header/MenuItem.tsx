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
        <li className="block py-2 px-3 md:p-0 rounded-sm">
            <Link
                href={href}
                className={`dark:text-white hover:text-rose-600 focus:text-rose-600 dark:hover:text-sky-300 dark:focus:text-sky-300 border-l-3 border-rose-600 dark:border-sky-300 md:border-none pl-2 md:pl-0 ${pathname === href ? "font-bold" : ""}`}
            >
                {name}
            </Link>
        </li>
    )
}