import { getEntries, useEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const eventHub = document.querySelector(".container")
const entryLog = document.querySelector("#entryLog")

const render = (entryArray) => {
    const entriesConvertedToString = entryArray.map(entryObj => {
        return JournalEntryComponent(entryObj)
    }).join("")

    entryLog.innerHTML += `
    <div class="savedEntryContainer">
        ${entriesConvertedToString}
    </div>
    `
}

export const entryList = () => {
    getEntries()
        .then(() => {
            const allEntries = useEntries()
            render(allEntries)
        })
}
eventHub.addEventListener("entryStateChanged", e => {
    entryList()
})