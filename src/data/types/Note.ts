export type Note = {
    id: string;
} & NoteData;

export type NoteData = {
    title: string;
    body: string;
    dateCreated: string;
};
