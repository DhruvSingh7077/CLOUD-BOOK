
import { useState } from "react"
import NoteContext from "./noteContext"

const NoteState = (props)=>{
    const notesInitial = [
  {
    "_id": "6853234e9f8146cd43d37042",
    "user": "68531877a6e9fa8cb4ef661a",
    "title": "new note updated",
    "description": "please wake up qwertyu updated",
    "tag": "personal",
    "date": "2025-06-18T20:36:30.441Z",
    "__v": 0
  },
  {
    "_id": "6853234e9f8106cd43d37042",
    "user": "68531877a6e9fa8cb4ef661a",
    "title": "new note updated",
    "description": "please wake up qwertyu updated",
    "tag": "personal",
    "date": "2025-06-18T20:36:30.441Z",
    "__v": 0
  },
  {
    "_id": "6853234e9f8146cd43d37042",
    "user": "68531877a6e9fa8cb4ef661a",
    "title": "new note updated",
    "description": "please wake up qwertyu updated",
    "tag": "personal",
    "date": "2025-06-18T20:36:30.441Z",
    "__v": 0
  },
  {
    "_id": "6853254e9f8046cd43d37042",
    "user": "68531877a6e9fa8cb4ef661a",
    "title": "new note updated",
    "description": "please wake up qwertyu updated",
    "tag": "personal",
    "date": "2025-06-18T20:36:30.441Z",
    "__v": 0
  },
  {
    "_id": "6853234e5f8146cd43d37042",
    "user": "68531877a6e9fa8cb4ef661a",
    "title": "new note updated",
    "description": "please wake up qwertyu updated",
    "tag": "personal",
    "date": "2025-06-18T20:36:30.441Z",
    "__v": 0
  }
]

const [notes, setNotes] = useState(notesInitial)

// Add a Note
const addNote = (title, description, tag)=>{
  //TODO AP Call
 const note ={
    "_id": "6853234e5f8146cd43d37042",
    "user": "68531877a6e9fa8cb4ef661a",
    "title": title,
    "description": description,
    "tag": tag,
    "date": "2025-06-18T20:36:30.441Z",
    "__v": 0
  };
  setNotes(notes.concat(note))

} 
//Delete a Note

const deleteNote = (id)=>{
  //TODO API call
  const newNotes = notes.filter((note)=>{return note._id!==id})
  setNotes(newNotes)

}
// Edit a Note
const EditNote = (id,title,description,tag)=>{

}
    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote,EditNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;             