"use client";

import { Project, ProjectsList, Title } from "@/components";
import { useTranslations } from "next-intl";

export default function Web() {
    const field = 'web';

    const t = useTranslations('projects');
    const title = t('titres.web');
    const descriptionTitle = t('titres.description');
    const fonctionnalitiesTitle = t('titres.fonctionnalitées');
    const projects:Project[] = t.raw(field);

    return (
        <div className="h-full w-full flex flex-col items-center gap-10 py-5 md:py-15 md:gap-20">
            <Title title={title} />
            <ProjectsList field={field} projects={projects.map(p => ({ ...p, field }))} descriptionTitle={descriptionTitle} fonctionnalitiesTitle={fonctionnalitiesTitle} />
        </div>
    );
}