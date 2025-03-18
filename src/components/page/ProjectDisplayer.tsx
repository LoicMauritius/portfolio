import Image from "next/image";
import { Technologies } from ".";

export type Project = {
    field: string;
    title: string;
    descriptionTitle:string;
    fonctionnalitiesTitle:string;
    description: string;
    technologies: string[];
    fonctionnalitees_principale: string[];
    images: string[];
}

export const ProjectDisplayer = ({
    field,
    title,
    descriptionTitle,
    fonctionnalitiesTitle,
    description,
    technologies,
    fonctionnalitees_principale,
    images,
}: Project) => {

    return (
        <>
            {images.length > 1 ?
                <div className="flex flex-col px-3 gap-5">
                    <h2 className="text-2xl lg:text-4xl pl-3 font-text">{title}</h2>
                    <div className="flex flex-col gap-5 font-text">
                        <div className="flex flex-col gap-3 md:flex-row md:gap-10">
                        <Image
                                src={`/${field}/${images[0]}`}
                                className={`w-full shadow-sm shadow-rose-600 dark:shadow-sky-300 rounded-sm md:flex-1`}
                                width={500}
                                height={500}
                                alt={images[0]}
                            />
                            <div className="flex flex-col gap-2 md:flex-2 md:justify-between">
                                <div className="flex flex-col">
                                    <h3 className="font-title text-2xl md:text-4xl pb-3">{descriptionTitle}</h3>
                                    <p className="text-sm md:text-lg">{description}</p> 
                                </div>
                                <Technologies technologies={technologies} />
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-3 md:flex-row md:gap-10">
                            <div className="flex flex-col flex-2">
                                <h3 className="font-title text-2xl md:text-4xl py-3">{fonctionnalitiesTitle}</h3>
                                <ul className="list-disc md:pt-5">
                                    {fonctionnalitees_principale.map((feature, i) => (
                                        <li className="text-sm md:text-lg" key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                            <Image
                                src={`/${field}/${images[1]}`}
                                className={`w-full shadow-sm shadow-rose-600 dark:shadow-sky-300 rounded-sm flex-1`}
                                width={500}
                                height={500}
                                alt={images[0]}
                            />
                        </div>
                    </div>
                </div>
            :
            <div className="flex flex-col px-3 gap-5">
                <h2 className="text-2xl lg:text-4xl pl-3 font-text">{title}</h2>
                <div className="flex flex-col gap-5 font-text">
                    <div className="flex flex-col gap-3 md:flex-row md:gap-10">
                    <Image
                            src={`/${field}/${images[0]}`}
                            className={`w-full shadow-sm shadow-rose-600 dark:shadow-sky-300 rounded-sm md:flex-1`}
                            width={500}
                            height={500}
                            alt={images[0]}
                        />
                        <div className="flex flex-col gap-2 py-4 md:flex-2 md:justify-between">
                            <div>
                                <p className="text-sm md:text-lg">{description}</p> 
                                <Technologies technologies={technologies} />
                            </div>
                            <ul>
                                {fonctionnalitees_principale.map((feature, i) => (
                                    <li className="text-sm md:text-lg" key={i}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            }
        </>
    );
}