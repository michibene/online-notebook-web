import PrimaryButton from "ui/buttons/PrimaryButton";
import { NoteData } from "data/types/Note";
import { RefObject, useRef } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import ColorPicker from "ui/buttons/ColorPicker";
import { useState } from "react";

type NewNoteCardProps = {
    handleAddNote: (note: NoteData) => void;
};

export default function NewNoteCard({ handleAddNote }: NewNoteCardProps) {
    const titleRef = useRef<HTMLInputElement>(null);
    const bodyRef = useRef<HTMLTextAreaElement>(null);
    const dateRef = useRef<HTMLInputElement>(null);
    const [bgColor, setBgColor] = useState("#FFD155");

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // Check for null even if the given references are required
        if (!titleRef.current || !bodyRef.current || !dateRef.current) {
            return;
        }

        const newNoteData: NoteData = {
            title: titleRef.current.value,
            body: bodyRef.current.value,
            dateCreated: dateRef.current.value,
            bgColor: bgColor,
        };

        handleAddNote(newNoteData);
        resetNoteValues(titleRef, bodyRef, dateRef);
    }

    function resetNoteValues(
        titleRef: RefObject<HTMLInputElement>,
        bodyRef: RefObject<HTMLTextAreaElement>,
        dateRef: RefObject<HTMLInputElement>
    ) {
        titleRef.current!.value = "";
        bodyRef.current!.value = "";
        dateRef.current!.value = new Date().toISOString().substring(0, 10);
    }

    return (
        <section className="p-4 lg:p-5 bg-[#474749] rounded-[2rem] rounded-tl-none drop-shadow-[4px_4px_30px_rgba(97,104,112,0.40)] lg:drop-shadow-[8px_8px_70px_rgba(97,104,112,0.50)]">
            <form
                className="p-8 bg-customGrayLight text-mainBlack space-y-4 rounded-3xl rounded-tl-none"
                onSubmit={(e) => handleSubmit(e)}
            >
                <input
                    type="text"
                    ref={titleRef}
                    name="title"
                    required
                    placeholder="New note title"
                    className="pb-1 w-full bg-customGrayLight text-2xl lg:text-3xl font-semibold
                            focus:outline-none focus:border-solid focus:border-b-2 focus:border-customGray"
                />

                <textarea
                    ref={bodyRef}
                    name="body"
                    rows={8}
                    required
                    placeholder="Write your text"
                    className="w-full bg-customGrayLight lg:text-lg focus:outline-none resize-none"
                />

                <div className="space-y-3 lg:space-y-4">
                    <div className="flex justify-between items-center gap-6">
                        <label htmlFor="date">Set a date:</label>
                        <input
                            type="date"
                            ref={dateRef}
                            id="date"
                            defaultValue={new Date().toISOString().substring(0, 10)}
                            min="2000-01-01"
                            max="2100-01-01"
                            required
                            className="bg-customGrayLight lg:text-lg focus:outline-none"
                        />
                    </div>

                    <div className="flex justify-between items-center gap-6">
                        <label htmlFor="color">Choose a color:</label>
                        <ColorPicker id="color" selectedColor={bgColor} setColor={setBgColor} />
                    </div>

                    <div className="pt-1 lg:pt-2">
                        <PrimaryButton
                            buttonText="Add note"
                            icon={<HiOutlinePlus />}
                            buttonType={"submit"}
                            isFullSize
                        />
                    </div>
                </div>
            </form>
        </section>
    );
}
