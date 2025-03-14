import type { Metadata } from "next";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {Locale, routing} from '@/i18n/routing';
import { Jacques_Francois, Karla } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";

const jacquesFrancois = Jacques_Francois({
  weight: ['400'],
  variable: "--font-jacques-francois",
  subsets: ["latin"],
});

const karla = Karla({
  weight: ['300','400','600'],
  variable: "--font-karla-mono",
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Mauritius Loïc",
  description: "My protfolio",
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body
        className={`${jacquesFrancois.variable} ${karla.variable} antialiased md:p-8 md:m-2`}
      >
        <NextIntlClientProvider messages={messages}>
          <>
            <Header />
            <main className="w-full max-w-screen-2xl mx-auto">
              {children}
            </main>
          </>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
