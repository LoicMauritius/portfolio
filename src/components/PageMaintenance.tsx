import { Title } from ".";

type PageMaintenanceProps = {
    title: string;
    maintenanceMessage:string;
}

export const PageMaintenance = ({
    title,
    maintenanceMessage
}:PageMaintenanceProps) => {

    return (
        <>
            <div className="h-full w-full flex flex-col items-center gap-10 py-5 md:py-15 md:gap-20">
                <Title title={title} />
                <h1 className="font-title text-color text-4xl lg:text-6xl font-medium text-left w-full px-5">
                    {maintenanceMessage}
                </h1>
            </div>
        </>
    );
}