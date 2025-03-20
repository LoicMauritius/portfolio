"use client";

import { PageMaintenance } from "@/components";
import { useTranslations } from "next-intl";

export default function Hobbie() {
    //const field = 'hobbie';

    const t = useTranslations('projects');
    const title = t('titles.hobbie');
    const maintenanceMessage = t('maintenance');

    return (
        <PageMaintenance title={title} maintenanceMessage={maintenanceMessage} />
    );
}