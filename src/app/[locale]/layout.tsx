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
    <html lang={locale} className="w-full h-full min-h-full min-w-full overflow-hidden maw-w-full maw-h-full">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body
        className={`${jacquesFrancois.variable} ${karla.variable} antialiased md:p-8 w-full h-full flex flex-col w-full`}
      >
        <NextIntlClientProvider messages={messages}>
          <>
            <Header />
            <main className="flex-grow overflow-y-scroll overflow-x-hidden flex justify-center items-center">
              {children}
            </main>
          </>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
