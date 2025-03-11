"use client";

import { useLocale, useTranslations } from 'next-intl';
import { getPathname, Link } from '@/i18n/navigation';

export default function HomePage() {
  const t = useTranslations('HomePage');
  const locale = useLocale();

  console.log("URL de getPath :",getPathname({
    href: "/contact",
    locale: locale
  }));

  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href="/contact">{t('contact')}</Link>
    </div>
  );
}
