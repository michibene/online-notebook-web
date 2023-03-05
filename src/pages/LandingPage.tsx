import { pseudoNoteData } from "data/pseudoNoteData";
import { Note, NoteData } from "data/types/Note";
import AllNotes from "pages/sections/AllNotes";
import Header from "pages/sections/Header";
import NewNote from "pages/sections/NewNote";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function LandingPage() {
    const [notes, setNotes] = useState<Note[]>(pseudoNoteData.map((note) => ({ id: uuidv4(), ...note })));

    function addNewNote(note: NoteData) {
        const newNote: Note = { id: uuidv4(), ...note };
        console.log(newNote);
        setNotes([...notes, newNote]);
    }

    return (
        <div className="max-w-screen-xl mx-auto px-8">
            <Header />

            <div className="flex flex-col lg:flex-row gap-16 xl:gap-20">
                <div className="min-w-[35%]">
                    <NewNote handleAddNote={addNewNote} />
                </div>

                <AllNotes notesList={notes} />
            </div>
        </div>
    );
}
