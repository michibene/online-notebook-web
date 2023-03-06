export function formatDate(dateString: string): string {
    const date = new Date(dateString);

    return `${date.toLocaleDateString("en-US", { weekday: "long" })}, 
            ${date.getDate()} ${date.toLocaleDateString("en-US", { month: "short" })} ${date.getFullYear()}`;
}
