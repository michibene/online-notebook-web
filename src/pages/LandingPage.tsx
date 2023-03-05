import Header from "pages/sections/Header";
import NewNote from "pages/sections/NewNote";
import AllNotes from "pages/sections/AllNotes";

export default function LandingPage() {
    return (
        <div className="max-w-screen-xl mx-auto px-8">
            <Header />

            <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">
                <div className="min-w-[35%]">
                    <NewNote />
                </div>
                
                <AllNotes />
            </div>
        </div>
    );
}
