/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
    <section id="entry--${entry.id}" class="journalEntry">
        <h3 class="entryMargin">${entry.concept}</h3>
        <p class="entryMargin">${entry.entry}</p>
        <p class="entryMargin"><b>Instructor:</b> ${entry.instructor.first_name} ${entry.instructor.last_name}</p>
        <p class="entryMargin">${entry.mood.label}</p>
        <p class="entryMargin">${entry.date}</p>
    </section>
    `
}