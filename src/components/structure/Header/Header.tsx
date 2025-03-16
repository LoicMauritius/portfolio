"use client";

import { Link } from "@/i18n/navigation";
import { LanguageSwitcher, Logo, NavBar, ThemeSwitcher } from "..";

export const Header = () => {
return (
    <nav className="w-full md:p-8 flex items-center justify-center">
        <div className="max-w-screen-2xl w-full flex flex-wrap justify-between items-center justify-between p-4 md:rounded-2xl md:shadow-lg md:shadow-gray-300 md:dark:shadow-none md:dark:inset-shadow-sm md:dark:inset-shadow-sky-400">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <Logo image={"LM.svg"} alt={"Mauritius Loïc"} text={"Mauritius Loïc"} style="h-10" inverted/>
            </Link>
            <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse md:flex-row-reverse gap-3 text-lg">
                <ThemeSwitcher />
                <LanguageSwitcher />
                <NavBar />
            </div>
        </div>
    </nav>
)}
