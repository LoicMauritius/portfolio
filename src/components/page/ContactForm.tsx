import Image from "next/image";

type ContactFormProps = {
    personalInformation: string,
    contactMe: string,
    formEmail: string,
    formPhone: string,
    formMessage: string,
}

export const ContactForm = ({
    personalInformation,
    contactMe,
    formEmail,
    formPhone,
    formMessage
}: ContactFormProps) => {
    return (
        <>
            <div className="w-full flex flex-row p-3">
                <div className="flex-1 p-5">
                    <h1 className="font-title subtitle-color text-2xl lg:text-4xl">{personalInformation}</h1>
                    <div className="flex flex-col py-5 px-2">
                        <div className="flex flex-row justify-left content-center gap-3">
                            <Image
                                src={"/contact/email.png"}
                                className={`w-auto dark:invert`}
                                width={100}
                                height={100}
                                alt={"email"} />
                            <h3 className="font-text text-color text-lg lg:text-xl justify-center content-center">loic.mauritius@gmail.com</h3>
                        </div>
                        <div className="flex flex-row justify-left content-center gap-3">
                            <Image
                                src={"/contact/phone.png"}
                                className={`w-auto dark:invert`}
                                width={100}
                                height={100}
                                alt={"email"} />
                            <h3 className="font-text text-color text-lg lg:text-xl justify-center content-center">(+33)6 59 57 44 76</h3>
                        </div>
                    </div>
                </div>
                <div className="flex-1 p-5 rounded-2xl shadow-sm shadow-rose-600 dark:shadow-sky-400">
                    <h1 className="font-title subtitle-color text-2xl lg:text-4xl">{contactMe}</h1>
                    <form className="flex flex-col py-4 justify-center content-center flex-wrap gap-2">
                        <div className="w-[90%] flex-1 flex flex-col">
                            <label className="font-text text-color text-lg lg:text-xl" htmlFor="email">{formEmail}</label>
                            <input className="inset-shadow-sm shadow-rose-600 dark:shadow-none dark:inset-shadow-sm dark:inset-shadow-sky-400 rounded-sm border p-2" type="email" name="email" />
                        </div>
                        <div className="flex-1 flex flex-col">
                            <label className="font-text text-color text-lg lg:text-xl" htmlFor="phone">{formPhone}</label>
                            <input className="inset-shadow-sm shadow-rose-600 dark:shadow-none dark:inset-shadow-sm dark:inset-shadow-sky-400 rounded-sm border p-2" type="tel" name="phone" />
                        </div>
                        <div className="flex-3 flex flex-col">
                            <label className="font-text text-color text-lg lg:text-xl" htmlFor="message">{formMessage}</label>
                            <textarea className="inset-shadow-sm shadow-rose-600 dark:shadow-none dark:inset-shadow-sm dark:inset-shadow-sky-400 rounded-sm border p-2" name="message" rows={5} required/>
                        </div>
                        <div className="flex-3 flex flex-row justify-center">
                        <input type="submit" className="max-w-[200px] px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" value="Envoyer" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}