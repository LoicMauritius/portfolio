import { Link } from "@/i18n/navigation";
import { Pathnames } from "@/i18n/routing";

type MenuItemProps = {
    href: Pathnames;
    name: string;
};

export const MenuItem = ({
    href,
    name
}: MenuItemProps) => {
    return (  
        <li>
            <Link
                href={href}
                className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
                {name}
            </Link>
        </li>
    )
}