export function formatDate(dateString: string) {
    const [weekday, month, day, year] = dateString.split(" ");

    return `${weekday}, ${day} ${month} ${year}`;
}
