let journal = []

export const useEntries = () => journal.slice()

export const getEntries = () => {
    return fetch("http://localhost:8088/entries?_expand=mood&_expand=instructor") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(parsedEntries => journal = parsedEntries)
}

export const saveJournalEntry = (entry) => {
    return fetch("http://localhost:8088/entries?_expand=mood&_expand=instructor", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
        .then(getEntries)  // <-- Get all journal entries
        .then(dispatchStateChangeEvent)  // <-- Broadcast the state change event
}

export const deleteEntry = entryId => {
    return fetch(`http://localhost:8088/entries/${entryId}`, {
        method: "DELETE"
    })
        .then(getEntries)
        .then(dispatchStateChangeEvent)
}
const eventHub = document.querySelector(".container")
const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("entryStateChanged"))
}