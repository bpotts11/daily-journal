import { getInstructors, useInstructors } from "../instructors/InstructorProvider.js"
import { getMoods, useMoods } from "../moods/MoodDataProvider.js"
import { saveJournalEntry } from "./JournalDataProvider.js"

// this is where I am putting my form in index.html & where I am putting my event listener
const contentTarget = document.querySelector(".entryForm")
const eventHub = document.querySelector(".container")


const render = () => {
    getMoods()
        .then(() => getInstructors())
        .then(() => {
            const allMoods = useMoods()
            const allInstructors = useInstructors()


            contentTarget.innerHTML = `
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
            }).join("")
                }
        </select>
        </div>
        <div class="mood">
            <label for="mood">Mood</label>
            <select class="background" name="mood" id="mood">
                <option value="0">Select Mood</option>
                ${allMoods.map((mood) => {
                    return `<option value="${mood.id}">${mood.label}</option>`
                }).join("")
                }
            </select>
        </div>
        <div class="textArea">
            <label for="entry">Journal Entry</label>
            <textarea class="background" id="entry"></textarea>
        </div>
        
        <button class="background" id="saveEntry" type="button">Record Journal Entry</button>
        `
        })
}

export const JournalFormComponent = () => {
    render()
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEntry") {

        const newJournalEntry = {
            "concept": document.querySelector("#concept").value,
            "entry": document.querySelector("#entry").value,
            "instructorId": parseInt(document.querySelector("#instructor").value),
            "moodId": parseInt(document.querySelector("#mood").value),
            "date": document.querySelector("#date").value,
        }
        // debugger
        saveJournalEntry(newJournalEntry)



        // comeback and finish working on max length alert
        // if (document.querySelector("#concept").value.length > 15 {
        //     alert("Concept entry is too long")
        // })

        // not working on returning entries with profanity censored

        // function escapeRegExp(string) {
        //     return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
        // }
        // function convertWordToRegexString(word) {
        //     // Start by escaping any special characters that might be in the string:
        //     word = escapeRegExp(word);
        //     // Replace all vowels with alternations of their l33t alternatives:
        //     const l33t = { a: "4@", e: "3", i: "1|!", o: "0" };
        //     return word.replace(/[aeio]/g, c => `[${c}${l33t[c]}]+`);
        // }
        // const badWords = ["bitch", "shit"];
        // const badWordsRegexString = "\\b(" + badWords.map(convertWordToRegexString).join("|") + ")\\b";
        // const badWordsRegex = new RegExp(badWordsRegexString, 'ig');

        // const censored = document.querySelector("#entry").value.replace(badWordsRegex,
        //     badWord => "*".repeat(badWord.length)
        // );

        // console.log(censored);

    }
})