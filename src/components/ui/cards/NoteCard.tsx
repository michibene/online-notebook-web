type Note = {
    title: string;
    body: string;
    dateCreated: string;
};

export default function NoteCard({ title, body, dateCreated }: Note) {
    return (
        <div
            className={`p-8 min-h-[16rem] flex flex-col gap-4 text-mainBlack rounded-[2rem] 
                    bg-noteYellow`}
        >
            <h2>{title}</h2>
            <p>{body}</p>
            <p className="mt-auto text-[#616870] text-opacity-80">{dateCreated}</p>
        </div>
    );
}
