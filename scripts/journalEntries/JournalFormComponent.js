import { getInstructors, useInstructors } from "../instructors/InstructorProvider.js"
import { getMoods, useMoods } from "../moods/MoodDataProvider.js"
import { saveJournalEntry } from "./JournalDataProvider.js"

// this is where I am putting my form in index.html & where I am putting my event listener
const contentTarget = document.querySelector(".entryFormContainer")
const eventHub = document.querySelector(".container")


const render = () => {
    getMoods()
        .then(() => getInstructors())
        .then(() => {
            const allMoods = useMoods()
            const allInstructors = useInstructors()


            contentTarget.innerHTML = `
            <form class="entryForm" action="">
                <div class="date">
                    <label for="date">Date of entry</label>
                    <input class="background" type="date" id="date">
                </div>
                <div class="concept">
                    <label for="concept"> Concepts covered</label>
                    <input class="background" type="text" id="concept">
                </div>
                <div class="instructor">
                    <label for="instructor">Instructor</label>
                    <select class="background" name="instructor" id="instructor">
                        <option value="0">Select Instructor</option>
                        ${allInstructors.map((instructor) => {
                return `<option value="${instructor.id}">${instructor.first_name} ${instructor.last_name}</option>`
            }).join("")}
                    </select>
                </div>
                <div class="mood">
                    <label for="mood">Mood</label>
                    <select class="background" name="mood" id="mood">
                        <option value="0">Select Mood</option>
                        ${allMoods.map((mood) => {
                return `<option value="${mood.id}">${mood.label}</option>`
            }).join("")}
                    </select>
                </div>
                <div class="textArea">
                    <label for="entry">Journal Entry</label>
                    <textarea class="background" id="entry"></textarea>
                </div>
            </form>
        
                <button class="background" id="saveEntry" type="button">Record Journal Entry</button>
        `
        })
}

export const JournalFormComponent = () => {
    render()
}

eventHub.addEventListener("input", e => {
    if (e.target.id === "concept") {
        const entryLength = document.querySelector("#concept").value.length
        if (entryLength > 25) {
            alert("Too many characters for: Concepts Covered")
        }
    }
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEntry") {
        clickEvent.preventDefault()

        const newJournalEntry = {
            "concept": document.querySelector("#concept").value,
            "entry": document.querySelector("#entry").value,
            "instructorId": parseInt(document.querySelector("#instructor").value),
            "moodId": parseInt(document.querySelector("#mood").value),
            "date": document.querySelector("#date").value,
        }
        document.querySelector(".entryForm").reset()
        saveJournalEntry(newJournalEntry)
    }
})