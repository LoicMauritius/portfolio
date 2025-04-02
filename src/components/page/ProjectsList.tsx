import { Project, ProjectDisplayer, ProjectSeparator } from ".";

type ProjectsListsProps = {
    field:string;
    descriptionTitle:string;
    fonctionnalitiesTitle:string;
    projects: Project[];
}
export const ProjectsList = ({
    field,
    descriptionTitle,
    fonctionnalitiesTitle,
    projects
}: ProjectsListsProps) => {

    return (
        <>
            <div className="w-full flex flex-col">
                {projects.map((project, index) => (
                    <>
                        {index !== 0 && <ProjectSeparator key={`${field}-separator-${index}-${project.title}`} />}
                        <ProjectDisplayer 
                            key={`${field}-project-${index}-${project.title}`}
                            field={field}
                            title={project.title}
                            descriptionTitle={descriptionTitle} 
                            fonctionnalitiesTitle={fonctionnalitiesTitle}    
                            description={project.description}
                            technologies={project.technologies}
                            fonctionnalitees_principale={project.fonctionnalitees_principale}
                            images={project.images} 
                        />
                    </>
                ))}
            </div>
            
        </>
    );
}