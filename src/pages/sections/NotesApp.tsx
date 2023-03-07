import { pseudoNoteData } from "data/pseudoNoteData";
import { Note, NoteData } from "data/types/Note";
import { useLocalStorage } from "hooks/useLocalStorage";
import AllNotesList from "pages/sections/AllNotesList";
import NewNoteCard from "ui/cards/NewNoteCard";
import { v4 as uuidv4 } from "uuid";

export default function NotesApp() {
    const pseudoNotes = pseudoNoteData.map((note) => ({ id: uuidv4(), ...note }));
    const [notes, setNotes] = useLocalStorage<Note[]>("notes", pseudoNotes);

    function addNewNote(note: NoteData) {
        const newNote: Note = { id: uuidv4(), ...note };
        setNotes([newNote, ...notes]);
    }

    function deleteNote(id: string) {
        setNotes((prevNotes) => {
            return prevNotes.filter((note) => note.id !== id);
        });
    }

    return (
        <div className="grid lg:grid-cols-5 gap-16 xl:gap-20">
            <div className="lg:col-span-2">
                <NewNoteCard handleAddNote={addNewNote} />
            </div>
            <div className="lg:col-span-3 mb-16">
                <AllNotesList notesList={notes} handleDeleteNote={deleteNote} />
            </div>
        </div>
    );
}
