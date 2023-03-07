import { Note } from "data/types/Note";
import { formatDate } from "utilities/helpers";
import { AiFillDelete } from "react-icons/ai";

type NoteCardProps = {
    handleDeleteNote: (id: string) => void;
} & Note;

export default function NoteCard({ id, title, body, dateCreated, bgColor, handleDeleteNote }: NoteCardProps) {
    return (
        <div
            className="p-8 min-h-[16rem] flex flex-col gap-4 text-mainBlack rounded-[2rem]"
            style={{ backgroundColor: bgColor ? bgColor : "#FFD155" }}
        >
            <h2>{title}</h2>
            <p>{body}</p>

            <div className="mt-auto flex justify-between">
                <p className="pt-[0.3rem] text-[#616870] text-opacity-80">{formatDate(dateCreated)}</p>

                <button
                    type="button"
                    onClick={() => handleDeleteNote(id)}
                    className="text-[#616870] text-opacity-60 
                            hover:text-[#dd2f45] hover:text-opacity-100 hover:drop-shadow-[2px_2px_16px_rgba(221,47,69,0.7)]"
                >
                    <AiFillDelete className="text-2xl" />
                </button>
            </div>
        </div>
    );
}
