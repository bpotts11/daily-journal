import { getEntries, useEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const entryLog = document.querySelector("#entryLog")
let entries = []

export const entryList = () => {
    getEntries()
        .then(() => {
            entries = useEntries()
            render(entries)
        })
}

const render = (entryArray) => {
    let entriesConvertedToString = entryArray.map(entryObj => {
        return JournalEntryComponent(entryObj)
    }).join("")

    entryLog.innerHTML = `
    <div class="savedEntryContainer">
    <h2>Journal Entries</h2>
        ${entriesConvertedToString}
    </div>
    `
}

const eventHub = document.querySelector(".container")
eventHub.addEventListener("entryStateChanged", Event => {
    entryList()
})