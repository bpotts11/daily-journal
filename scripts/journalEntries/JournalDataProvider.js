const eventHub = document.querySelector(".container")

let journal = []

export const getEntries = () => {
    return fetch("http://localhost:8088/entries?_expand=mood&_expand=instructor") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(parsedEntries => {
            journal = parsedEntries
            // console.log(journal)
            // What should happen when we finally have the array?
        })
}

export const useEntries = () => {
    return journal.slice()
}

export const saveJournalEntry = (entry) => {
    return fetch("http://localhost:8088/entries?_expand=mood&_expand=instructor", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
        .then(() => getEntries())  // <-- Get all journal entries
        .then(dispatchStateChangeEvent)  // <-- Broadcast the state change event
}


const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))
}