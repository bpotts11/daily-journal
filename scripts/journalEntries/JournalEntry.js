import { deleteEntry } from "./JournalDataProvider.js"

export const JournalEntryComponent = (entry) => {
    return `
    <section id="entry--${entry.id}" class="journalEntry">
        <h3 class="entryMargin">${entry.concept}</h3>
        <p class="entryMargin">${entry.entry}</p>
        <p class="entryMargin"><b>Instructor:</b> ${entry.instructor.first_name} ${entry.instructor.last_name}</p>
        <p class="entryMargin">${entry.mood.label}</p>
        <p class="entryMargin">${entry.date}</p>
        <button class="background" id="deleteEntry--${entry.id}" type="button">Delete</button>
    </section>
    `
}

const eventHub = document.querySelector(".container")
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEntry--")) {
        const [prefix, id] = clickEvent.target.id.split("--")
        deleteEntry(id)
    }
})