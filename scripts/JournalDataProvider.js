let journal = [

]

export const getEntries = () => {
    return fetch("http://localhost:8088/entries") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(entries => {
            journal = entries
            // console.log(journal)
            // What should happen when we finally have the array?
        })
}

export const useEntries = () => {
    return journal.slice()
}