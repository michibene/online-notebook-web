import NoteCard from "ui/cards/NoteCard";

export default function AllNotes() {
    return (
        <section className="mb-16 grid lg:grid-cols-2 gap-6">
            <NoteCard
                title="Science"
                body="Investigating the effect of microplastics on aquatic ecosystems. Analyzing the bioaccumulation and toxicity levels of these pollutants in fish and other organisms."
                dateCreated="Monday, 23. Feb"
            />
            <NoteCard
                title="Science"
                body="Investigating the effect of microplastics on aquatic ecosystems. Analyzing the bioaccumulation and toxicity levels of these pollutants in fish and other organisms."
                dateCreated="Monday, 23. Feb"
            />
            <NoteCard
                title="Science"
                body="Investigating"
                dateCreated="Monday, 23. Feb"
            />
        </section>
    );
}
