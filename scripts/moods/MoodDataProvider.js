let mood = []

export const getMoods = () => {
    return fetch("http://localhost:8088/moods")
        .then(response => response.json())
        .then(parsedMoods => {
            mood = parsedMoods
        })
}

export const useMoods = () => {
    return mood.slice()
}