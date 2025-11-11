let maxId = 1;

let notesList = [];

function getMaxId() {
    for (let note of notesList) {
        if (note.id > maxId) {
            maxId = note.id;
        }
    }
}

getMaxId();

export function allNotes() {
    return notesList;
}

export function createNote(dto) {
    const newNote = {
        "id": ++maxId,
        "title": dto.title,
        "tag": dto.tag,
        "date": dto.date,
        "content": dto.content || ""  
    };
    notesList.push(newNote);
}

export function updateNote(dto) { 
    const index = notesList.findIndex((note) => note.id === dto.id);
    if (index === -1) {
        return false;
    }
    notesList[index] = {
        id: dto.id,
        title: dto.title,
        tag: dto.tag,
        date: dto.date,
        content: dto.content || ""
    };
    return true;
}

export function deleteNote(dto) {
    const index = notesList.findIndex((i) => i.id === dto.id);
    if (index === -1) {
        return false;
    }
    notesList.splice(index, 1);
    return true;  
}