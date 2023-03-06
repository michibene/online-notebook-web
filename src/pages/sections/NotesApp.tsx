import { pseudoNoteData } from "data/pseudoNoteData";
import { Note, NoteData } from "data/types/Note";
import AllNotesList from "pages/sections/AllNotesList";
import { useState } from "react";
import NewNoteCard from "ui/cards/NewNoteCard";
import { v4 as uuidv4 } from "uuid";

export default function NotesApp() {
    const [notes, setNotes] = useState<Note[]>(pseudoNoteData.map((note) => ({ id: uuidv4(), ...note })));

    function addNewNote(note: NoteData) {
        const newNote: Note = { id: uuidv4(), ...note };
        console.log(newNote);
        setNotes([newNote, ...notes]);
    }

    return (
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-20">
            <div className="min-w-[35%]">
                <NewNoteCard handleAddNote={addNewNote} />
            </div>

            <AllNotesList notesList={notes} />
        </div>
    );
}
