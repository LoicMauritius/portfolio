
type TitleProps = {
    title: string;
}
export const Title = ({ title }: TitleProps) => {
    return (
        <h1 className="font-title text-color text-4xl lg:text-6xl font-medium text-left w-full px-5">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 dark:from-sky-300 to-[var(--foreground)]">
                {title}
            </span>
        </h1>
    );
}