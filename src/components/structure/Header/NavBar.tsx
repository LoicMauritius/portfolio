"use client"

import { useState } from "react"
import { MenuItem } from "./MenuItem"
import { navItems } from "@/i18n/routing"
import { useTranslations } from "next-intl"

export const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = useTranslations('navigation')

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      <button
        data-collapse-toggle="navbar-language"
        type="button"
        onClick={toggleMobileMenu}
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 dark:text-white dark:hover:bg-white dark:focus:ring-white"
        aria-controls="navbar-language"
        aria-expanded={mobileMenuOpen}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div className={`absolute top-12 right-0 font-text w-2/5 z-50 md:static items-center justify-between ${mobileMenuOpen ? "block" : "hidden"} md:w-full md:flex md:w-auto md:order-1 md:mr-4`} id="navbar-language">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 mr-2 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:mr-0 rounded-lg shadow-sm shadow-rose-600 dark:shadow-sky-400 md:shadow-none bg-color gap-3 md:gap-1">
                {navItems.map((path) => {
                    const pathWithoutSlash = path === "/" ? path : path.replace(/^\/+/, "")

                    return (
                        <MenuItem key={`MenuItem-${path}`} href={path} name={t(pathWithoutSlash)} />
                    )
                })}
            </ul>
      </div>
    </>
  )
}
