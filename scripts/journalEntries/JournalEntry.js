import { deleteEntry } from "./JournalDataProvider.js"

const eventHub = document.querySelector(".container")

export const JournalEntryComponent = (entry) => {
    return `
    <section id="entry--${entry.id}" class="journalEntry">
        <h3 class="entryMargin">${entry.concept}</h3>
        <p class="entryMargin">${entry.entry}</p>
        <p class="entryMargin"><b>Instructor:</b> ${entry.instructor.first_name} ${entry.instructor.last_name}</p>
        <p class="entryMargin">${entry.mood.label}</p>
        <p class="entryMargin">${entry.date}</p>
        <button id="deleteEntry--${entry.id}">Delete</button>
    </section>
    `
}


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEntry--")) {
        const [prefix, id] = clickEvent.target.id.split("--")
        deleteEntry(id)
    }
})

// eventHub.addEventListener("click", e => {
//     if (e.target.id.includes("deleteButton--")) {
//         const [prefix, entryId] = e.target.id.split("--")
//         const cE = new CustomEvent("deleteRequested", {
//             detail: {
//                 entryId: entryId
//             }
//         })
//         eventHub.dispatchEvent(cE)
//     }
// })