import Image from "next/image";

export const Logo = () => {
    return (  
        <>
            <Image
            src="LM.svg"
            className="h-10 w-auto"
            width={40}
            height={40}
            alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap title-color">Mauritius Loïc</span>
        </>
)}