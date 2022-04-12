let notes = []

let titleDisplay = document.querySelector("#note-title");
let textAreaDisplay = document.querySelector("#note-content");
let noteStorageDisplay = document.querySelector("#notes");

let createNoteElement = (index, title, content) => {
    return`
    <button class='stored-note' onclick="toggleNote(${index})">
        <h3>${title}</h3>
        <p>${content.length > 24 ? content.slice(0, 24) : content}...</p>
    </button>`
}


const toggleNote = (index) => {
    // This is called deconstruction.
    // essentially just removes an extra step
    // to get to the information you want.

    // It's the same as saying:
    // let title = notes[index].title;
    // let content = notes[index].content;
    const { title, content } = notes[index];
    
    let selectedNote = document.querySelectorAll(".stored-note")[index];
    
    let oldInnerHTML = `
        <h3>${title}</h3>
        <p>${content.length > 24 ? content.slice(0, 24) : content}...</p>
    `;
    let newInnerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
    `
    let storedNoteClassName = 'stored-note-full';
    
    if (selectedNote.classList.contains(storedNoteClassName))
    {
        selectedNote.classList.remove(storedNoteClassName);
        selectedNote.innerHTML = oldInnerHTML;
    }
    else
    {
        selectedNote.classList.add(storedNoteClassName);
        selectedNote.innerHTML = newInnerHTML;
    }
    
    console.log("Selected Note: " + selectedNote.innerHTML);
}

const updateStoredNotesDisplay = () => {
    let storedNoteElements = []
    for (let i = 0; i < notes.length; i++) {
        let note = notes[i];
        let title = note.title;
        let content = note.content;
        let storedNoteElement = createNoteElement(i, title, content);

        storedNoteElements[i] = storedNoteElement;
    }

    noteStorageDisplay.innerHTML = "";

    storedNoteElements.forEach(element => { noteStorageDisplay.innerHTML += element; });
}

const saveNote = () => {
    console.log("Saving note...")

    if (titleDisplay.value === "")
    {
        return console.error("Please specify a title for the note");
    }

    notes.push({ index: notes.length, title: titleDisplay.value, content: textAreaDisplay.value });

    updateStoredNotesDisplay();
}

const clearNote = () => {
    titleDisplay.value = "";
    textAreaDisplay.value = "";
}

const deleteStoredNotes = () => {
    notes = [];
    noteStorageDisplay.innerHTML = "";
}