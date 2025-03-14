import Image from "next/image";

type LogoProps = {
    image: string;
    alt: string;
    text?: string;
    inverted?: boolean;
    style?: string;
}

export const Logo = ({
    image,
    alt,
    text,
    inverted,
    style
}: LogoProps) => {
    return (  
        <>
            <Image
            src={image}
            className={`w-auto ${inverted && 'dark:invert'} ${style}`}
            width={40}
            height={40}
            alt={alt}
            />
            {text && <span className="self-center text-lg md:text-xl font-semibold whitespace-nowrap title-color">{text}</span>}
        </>
)}