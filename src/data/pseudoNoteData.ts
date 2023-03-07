import { NoteData } from "data/types/Note";

export const pseudoNoteData: NoteData[] = [
    {
        title: "Science",
        body: "Investigating the effect of microplastics on aquatic ecosystems. Analyzing the bioaccumulation and toxicity levels of these pollutants in fish and other organisms.",
        dateCreated: new Date().toISOString().substring(0, 10),
        bgColor: "#FFD155",
    },
    {
        title: "Programming ideas",
        body: "Developing a chatbot with natural language processing capabilities. Implementing machine learning algorithms to enhance its ability to understand and respond to user inquiries.",
        dateCreated: new Date().toISOString().substring(0, 10),
        bgColor: "#FFD155",
    },
    {
        title: "Neighborly relations",
        body: "Creating a community garden initiative to promote sustainable agriculture practices. Providing education on composting and using organic fertilizers to reduce the reliance on harmful chemical pesticides.",
        dateCreated: new Date().toISOString().substring(0, 10),
        bgColor: "#FFD155",
    },
];
