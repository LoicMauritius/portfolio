import Image from "next/image";

export type TechnologiesProps = {
    technologies: string[]
}

export const Technologies = ({
    technologies
}: TechnologiesProps) => {
    return(
        <>
            <ul className="flex flex-row w-full flex-wrap gap-5">
                {technologies.map((feature, i) => (
                    <>
                        <Image
                            key={i}
                            src={`/technologies/${feature}.png`}
                            className={`${feature === 'html' || feature === 'mongo' ? 'w-[70px] md:w-[150px]' : 'w-auto'} h-10 md:h-15`}
                            width={feature === 'html' || feature === 'mongo' ? 150 : 50}
                            height={50}
                            alt={feature}
                        />
                    </>
                ))}
            </ul>
        </>
        
    )
}