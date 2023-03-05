import { Note } from "data/types/Note";
import NoteCard from "ui/cards/NoteCard";

type AllNotesProps = {
    notesList: Note[];
};

export default function AllNotes({ notesList }: AllNotesProps) {
    return (
        <section className="mb-16 grid lg:grid-cols-2 gap-6">
            {notesList.map((note: Note) => (
                <NoteCard key={note.id} title={note.title} body={note.body} dateCreated={note.dateCreated} />
            ))}
        </section>
    );
}
