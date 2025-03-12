"use client"

import { Link } from "@/i18n/navigation";
import { LanguageSwitcher, Logo, NavBar } from ".";

export const Header = () => {
return (
    <nav className="bg-color border-gray-200 dark:bg-gray-900 w-full md:p-3 flex items-center justify-center">
        <div className="max-w-screen-2xl w-full md:w-[90vw] flex flex-wrap justify-between items-center justify-between mx-auto p-4 shadow-header md:rounded-2xl">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <Logo />
            </Link>
            <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse md:flex-row-reverse gap-3 text-lg">
                <LanguageSwitcher />
                <NavBar />
            </div>
        </div>
    </nav>
)}
