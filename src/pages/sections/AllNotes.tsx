import { pseudoNoteData } from "data/pseudoNoteData";
import { Note } from "data/types/Note";
import { useState } from "react";
import NoteCard from "ui/cards/NoteCard";
import { v4 as uuidv4 } from "uuid";

export default function AllNotes() {
    const [notes, setNotes] = useState<Note[]>(pseudoNoteData.map((note) => ({ id: uuidv4(), ...note })));

    return (
        <section className="mb-16 grid lg:grid-cols-2 gap-6">
            {notes.map((note: Note) => (
                <NoteCard key={note.id} title={note.title} body={note.body} dateCreated={note.dateCreated} />
            ))}
        </section>
    );
}
