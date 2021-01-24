/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    },
    {
        id: 2,
        date: "07/25/2025",
        concept: "Flexbox",
        entry: "We talked about Flexbox components. I was able to use it to create two sections side by side.",
        mood: "Happy"
    },
    {
        id: 3,
        date: "07/26/2025",
        concept: "JavaScript",
        entry: "We talked about JavaScript. It is a lot to take in. I need to spend more time learning functions",
        mood: "sad"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}