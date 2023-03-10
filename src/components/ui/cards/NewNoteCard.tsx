import { Note, NoteData } from "data/types/Note";
import { RefObject, useRef, useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import ColorPicker from "ui/buttons/ColorPicker";
import PrimaryButton from "ui/buttons/PrimaryButton";
import { compareTwoStrings } from "utilities/compareStringSimilarity";
import SmallModal from "ui/modals/SmallModal";

type NewNoteCardProps = {
    handleAddNote: (note: NoteData) => void;
};

export default function NewNoteCard({ handleAddNote }: NewNoteCardProps) {
    const titleRef = useRef<HTMLInputElement>(null);
    const bodyRef = useRef<HTMLTextAreaElement>(null);
    const dateRef = useRef<HTMLInputElement>(null);
    const [bgColor, setBgColor] = useState("#FFD155");
    const [isWarningModalOpen, setIsWarningModalOpen] = useState(false);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // Check for null even if the given references are required
        if (!titleRef.current || !bodyRef.current || !dateRef.current) {
            return;
        }

        // Check if note is matching at 80% on the same day
        if (!isNoteValid(bodyRef, dateRef)) {
            setIsWarningModalOpen(true);
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

    function isNoteValid(bodyRef: RefObject<HTMLTextAreaElement>, dateRef: RefObject<HTMLInputElement>): boolean {
        const storedNotes = localStorage.getItem("notes");
        if (storedNotes === null) {
            return false;
        }

        const notesList: Note[] = JSON.parse(storedNotes);
        const isSimilar = notesList.some((note) => {
            if (dateRef.current!.value === note.dateCreated) {
                const similarity = compareTwoStrings(bodyRef.current!.value, note.body);
                return similarity >= 0.8;
            }
        });

        return !isSimilar;
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

    function handleShowWarningModal() {
        setIsWarningModalOpen(!isWarningModalOpen);
    }

    return (
        <section className="p-4 lg:p-5 relative bg-[#474749] rounded-[2rem] rounded-tl-none drop-shadow-[4px_4px_30px_rgba(97,104,112,0.40)] lg:drop-shadow-[8px_8px_70px_rgba(97,104,112,0.50)]">
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

            {isWarningModalOpen && (
                <SmallModal
                    type="error"
                    message="The note you want to add has already been saved with the same date."
                    handleClose={handleShowWarningModal}
                />
            )}
        </section>
    );
}
