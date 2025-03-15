"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Contact() {
    const t = useTranslations('contact');
    return (
        <main>
            <h1>{t('title')}</h1>
            <Link href="/">{"Home"}</Link>
        </main>
    );
}