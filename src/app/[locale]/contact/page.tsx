"use client";

import { ContactForm, Title } from "@/components";
import { useTranslations } from "next-intl";

export default function Contact() {
    //const field = 'contact';

    const t = useTranslations('contact');
    const title = t('title');
    const personalInformation = t('personalInformation');
    const contactMe = t('contactMe');
    const formEmail = t('form.email');
    const formPhone = t('form.phone');
    const formMessage = t('form.message');

    return (
        <div className="h-full w-full flex flex-col items-center gap-10 py-5 md:py-15 md:gap-10 overflow-y-hidden">
            <Title title={title} />
            <ContactForm 
                personalInformation={personalInformation} 
                contactMe={contactMe} 
                formEmail={formEmail} 
                formPhone={formPhone}
                formMessage={formMessage} />
        </div>
    );
}