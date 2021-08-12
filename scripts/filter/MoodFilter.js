export const MoodFilter = (allMoods) => {
    return `
        <fieldset class="fieldset">
            <legend>Filter Journal Entries by Mood</legend>
            ${allMoods.map((mood) => {
        return `<input type="radio" name="moodFilter" value="${mood.id}"/>
                        <label for="moodFilter--happy">${mood.label}</label>
                        `
    }
    ).join("")
        }
        </fieldset>
        `
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.name === "moodFilter") {
        const customEvent = new CustomEvent("moodChosen", {
            detail: {
                moodChosen: parseInt(changeEvent.target.value)
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})