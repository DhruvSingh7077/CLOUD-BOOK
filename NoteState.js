
import { useState } from "react"
import NoteContext from "./noteContext"

const NoteState = (props)=>{
  const host = "http://localhost:5000"
    const notesInitial = []

const [notes, setNotes] = useState(notesInitial)

// Get all Notes
const getNotes = async()=>{
  // API Call
  const response = await fetch(`${host}/api/notes/fetchallnotes`, {
  method:'GET',
  headers: {
    'Content-Type': 'application/json',
    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg1MzE4NzdhNmU5ZmE4Y2I0ZWY2NjFhIn0sImlhdCI6MTc1MDI3NzA5OX0.gMQF6TcM6YaawSEpkRRGfcDfXg2YYLoGFcwb98Qgk8M"
  },
});
const json = await response.json()
  console.log(json)
  setNotes(json)

}  

// Add a Note
const addNote = async(title, description, tag)=>{
  //TODO AP Call
  const response = await fetch(`${host}/api/notes/addnote/`, {
  method:'POST',
  headers: {
    'Content-Type': 'application/json',
    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg1MzE4NzdhNmU5ZmE4Y2I0ZWY2NjFhIn0sImlhdCI6MTc1MDI3NzA5OX0.gMQF6TcM6YaawSEpkRRGfcDfXg2YYLoGFcwb98Qgk8M"
  },
  body: JSON.stringify({title, description,tag})
 });
 const note = await response.json();
 setNotes(notes.concat(note))


} 
//Delete a Note

const deleteNote = async (id)=>{
  //API Call
   const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
  method:'DELETE',
  headers: {
    'Content-Type': 'application/json',
    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg1MzE4NzdhNmU5ZmE4Y2I0ZWY2NjFhIn0sImlhdCI6MTc1MDI3NzA5OX0.gMQF6TcM6YaawSEpkRRGfcDfXg2YYLoGFcwb98Qgk8M"
  },
 
 });
 const json = await response.json();
 
  const newNotes = notes.filter((note)=>{return note._id!==id})
  setNotes(newNotes)

}
// Edit a Note
const EditNote = async (id,title,description,tag)=>{
  // API Call
 const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
  method:'PUT',
  headers: {
    'Content-Type': 'application/json',
    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg1MzE4NzdhNmU5ZmE4Y2I0ZWY2NjFhIn0sImlhdCI6MTc1MDI3NzA5OX0.gMQF6TcM6YaawSEpkRRGfcDfXg2YYLoGFcwb98Qgk8M"
  },
  body: JSON.stringify({title, description, tag})
 });
   const json = await response.json();
   console.log(json)

   let newNotes = JSON.parse(JSON.stringify(notes))
  //logic to edit in client
 for (let index = 0; index < newNotes.length; index++) {
  const element = newNotes[index];
  if(element._id === id){
    newNotes[index].title = title;
    newNotes[index].description = description;
    newNotes[index].tag = tag;
    break;
}
 }
 setNotes(newNotes);
}
    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote,EditNote, getNotes,}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;             