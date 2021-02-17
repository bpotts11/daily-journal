import { saveJournalEntry } from "./JournalDataProvider.js"

const contentTarget = document.querySelector(".entryForm")
const eventHub = document.querySelector(".container")

const render = () => {
    contentTarget.innerHTML = `
    <div class="date">
        <label for="date">Date of entry</label>
        <input class="background" type="date" id="date">
    </div>
    <div class="concept">
        <label for="concept"> Concepts covered</label>
        <input class="background" type="text" id="concept">
    </div>
    <div class="mood">
        <label for="mood">Mood</label>
        <select class="background" name="mood" id="mood">
            <option value="happy">😃</option>
            <option value="sad">😞</option>
            <option value="angry">😡</option>
            <option value="tired">😴</option>
            <option value="indifferent">😐</option>
        </select>
    </div>
    <div class="textArea">
        <label for="entry">Journal Entry</label>
        <textarea class="background" id="entry"></textarea>
    </div>
    
    <button class="background" id="saveEntry" type="button">Record Journal Entry</button>
    `
}

export const JournalFormComponent = () => {
    render()
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEntry") {

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

        const concept = document.querySelector("#concept").value
        const entry = document.querySelector("#entry").value
        const mood = document.querySelector("#mood").value
        const date = document.querySelector("#date").value

        const newJournalEntry = {
            "concept": concept,
            "entry": entry,
            "mood": mood,
            "date": date,
        }
        // debugger
        saveJournalEntry(newJournalEntry)
    }
})