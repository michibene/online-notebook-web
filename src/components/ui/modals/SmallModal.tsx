import { HiOutlineCheck } from "react-icons/hi";
import { MdErrorOutline } from "react-icons/md";
import SecondaryButton from "ui/buttons/SecondaryButton";

type SmallModalProps = {
    type: "success" | "error";
    message: string;
    handleClose: () => void;
};

export default function SmallModal({ type, message, handleClose }: SmallModalProps) {
    const colorVariants = {
        success: "bg-emerald-500 text-mainBlack",
        error: "bg-[rgb(249,109,109)] text-mainBlack",
    };
    const headerVariants = {
        success: "Success",
        error: "Error",
    };

    return (
        <div className="absolute inset-0 z-50 flex justify-center items-center overflow-hidden rounded-[2rem]">
            <span
                className="absolute inset-0 w-full h-full bg-whiteLight bg-opacity-60 backdrop-filter backdrop-blur-md"
                onClick={handleClose}
            />

            <div className="flex items-center p-12 lg:p-20">
                <div
                    className={`mx-auto py-6 px-8 lg:pb-8 lg:px-10 relative max-w-sm flex flex-col items-center gap-3
                                rounded-3xl text-center ${colorVariants[type]}`}
                    role="alert"
                >
                    {type === "success" ? (
                        <HiOutlineCheck className="mx-auto text-4xl lg:text-5xl " />
                    ) : (
                        <MdErrorOutline className="mx-auto text-4xl lg:text-5xl" />
                    )}

                    <div>
                        <h2>{headerVariants[type]}</h2>
                        <p className="mt-1 text-sm lg:text-base whitespace-pre-line">{message}</p>
                    </div>

                    <div className="mt-3">
                        <SecondaryButton buttonText="Close" buttonType="button" onClick={handleClose} />
                    </div>
                </div>
            </div>
        </div>
    );
}
