import Header from "pages/sections/Header";
import NotesApp from "pages/sections/NotesApp";

export default function LandingPage() {
    return (
        <div className="max-w-screen-xl mx-auto px-8">
            <Header />
            <NotesApp />
        </div>
    );
}
