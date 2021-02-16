const contentTarget = document.querySelector(".entryForm")

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
    
    <button class="background" type="button">Record Journal Entry</button>
    `
}

export const JournalFormComponent = () => {
    render()
}