import Header from "pages/sections/Header";
import NewNote from "pages/sections/NewNote";

export default function LandingPage() {
    return (
        <div className="max-w-screen-xl mx-auto min-h-screen px-8 xl:px-0">
            <Header />

            <div>
                <NewNote />
            </div>
        </div>
    );
}
