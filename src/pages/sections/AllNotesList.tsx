import { Note } from "data/types/Note";
import NoteCard from "ui/cards/NoteCard";

type AllNotesListProps = {
    notesList: Note[];
};

export default function AllNotesList({ notesList }: AllNotesListProps) {
    return (
        <>
            {Array.isArray(notesList) && notesList.length ? (
                <section className="mb-16 grid lg:grid-cols-2 gap-6">
                    {notesList.map((note: Note) => (
                        <NoteCard key={note.id} title={note.title} body={note.body} dateCreated={note.dateCreated} />
                    ))}
                </section>
            ) : (
                <section className="mb-16 space-y-2">
                    <h2 className="text-customGray font-semibold">No ideas in your notebook</h2>
                    <p>Add a new idea using the form to create a note.</p>
                </section>
            )}
        </>
    );
}
