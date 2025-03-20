"use client";

import { PageMaintenance } from "@/components";
import { useTranslations } from "next-intl";

export default function Contact() {
    //const field = 'contact';

    const t = useTranslations('projects');
    const title = t('titles.contact');
    const maintenanceMessage = t('maintenance');

    return (
        <PageMaintenance title={title} maintenanceMessage={maintenanceMessage} />
    );
}