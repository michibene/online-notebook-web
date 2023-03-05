type PrimaryButtonProps = {
    buttonText: string;
    icon?: JSX.Element;
    buttonType: "button" | "submit" | "reset" | undefined;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    isFullSize?: boolean;
};

export default function PrimaryButton({ buttonText, icon, buttonType, onClick, isFullSize }: PrimaryButtonProps) {
    return (
        <button
            type={buttonType}
            onClick={onClick}
            className={`pt-[0.85rem] pb-3 px-8 inline-flex justify-center items-center gap-3 rounded-full text-mainWhite bg-mainBlack
                        hover:bg-opacity-95 hover:drop-shadow-[6px_6px_18px_rgba(25,25,27,0.3)]
                        ${isFullSize && "w-full"}`}
        >
            {icon && <span className="mb-[0.15rem] text-xl">{icon}</span>}
            <p>{buttonText}</p>
        </button>
    );
}
