const eventHub = document.querySelector(".container")
/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { getEntries, useEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog")

// I am importing from journal data provider to get the entries from the api so I can map them and turn them into strings so they can be impoted into the HTML rep from journal entry
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

eventHub.addEventListener("journalStateChanged", event => {
    entryList()
})