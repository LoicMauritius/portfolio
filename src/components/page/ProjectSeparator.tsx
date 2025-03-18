import Image from "next/image";

export const ProjectSeparator = () => {
    return (
        <div className="flex items-center w-full my-8 h-30 md:h-auto">
            <Image
                src="/separator/left.svg"
                width={40}
                height={40}
                alt="Left Separator"
                className="w-auto h-[30%] md:h-auto"
            />

            <div className="flex-grow border-t border-gray-300 mx-4"></div>

            <Image
                src="/separator/right.svg"
                width={40}
                height={40}
                alt="Right Separator"
                className="w-auto h-[30%] md:h-auto"
            />
        </div>
    );
};