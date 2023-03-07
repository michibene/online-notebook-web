type SecondaryButtonProps = {
    buttonText: string;
    buttonType: "button" | "submit" | "reset" | undefined;
    isFullSize?: boolean;
    onClick: () => void;
};

export default function SecondaryButton({ buttonText, buttonType, isFullSize, onClick }: SecondaryButtonProps) {
    return (
        <button
            type={buttonType}
            onClick={onClick}
            className={`pt-[0.6rem] pb-2 px-8 rounded-full border border-mainBlack
                        hover:text-mainWhite hover:bg-mainBlack hover:bg-opacity-95 hover:drop-shadow-[6px_6px_18px_rgba(25,25,27,0.3)]
                        ${isFullSize && "w-full"}`}
        >
            <p>{buttonText}</p>
        </button>
    );
}
