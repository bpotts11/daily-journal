import { getMoods, useMoods } from "../moods/MoodDataProvider.js"
import { MoodFilter } from "./MoodFilter.js"

const contentTarget = document.querySelector(".filters")

let moods = []

export const FilterBar = () => {
    getMoods()
        .then(() => {
            moods = useMoods()
            render(moods)
        })
}

const render = (moods) => {
    contentTarget.innerHTML = `
        ${MoodFilter(moods)}
    `
}