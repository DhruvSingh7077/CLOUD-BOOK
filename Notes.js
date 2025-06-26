import '../Home.css';

import noteContext from '../context/notes/noteContext';
import React, { useContext, useEffect, useRef, useState } from 'react';
import Noteitem from './Noteitem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';
const Notes = (props) => {
      const context = useContext(noteContext);
      const navigate = useNavigate();
      const {notes, getNotes, EditNote} = context;
      useEffect(()=>{
        if(localStorage.getItem('token')){

          getNotes()
        }
        else{
         navigate("/login")
        }
        // eslint-disable-next-line
      }, [])
   const [note, setNote] = useState({id:"",etitle:"", edescription:"", etag:""})

      const updateNote = (currentNote)=>{
         ref.current.click();
         setNote({id: currentNote._id, etitle:currentNote.title, edescription: currentNote.description, etag:currentNote.tag})
        
      }
      const ref = useRef(null)
      const refClose = useRef(null)

      const handleClick = (e)=>{
         console.log("updating the note", note);
         EditNote(note.id, note.etitle,note.edescription, note.etag)
          e.preventDefault();
          refClose.current.click()
          props.showAlert("Updated successfully", "success");
          
      }
      const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
      }
  return (
    <>
    <AddNote showAlert={props.showAlert}/>
    <button  ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>

<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
 aria-labelledby="staticBackdropLabel"  aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Edit Note</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
         <form className="my-3">
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle}
    aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="edescripton" name="edescription" value={note.edescription} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange}  minLength={5} required/>
  </div>
 
</form> 
      </div>
      <div className="modal-footer">
        <button  ref={refClose}type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button disabled={note.etitle.length<5 || note.edescription.length<5}onClick={handleClick}type="button" className="btn btn-primary">Update Note</button>
      </div>
    </div>
  </div>
</div>
     <div className="container my-3">
  <h2>Your Notes</h2>
  {notes.length === 0 && <p className="no-notes">No notes to display</p>}

  <div className="notes-grid">
    {notes.map((note) => (
      <div className="note-card" key={note._id} >
      <Noteitem  note={note} updateNote={updateNote} showAlert={props.showAlert}  />
      </div>
    ))}
  </div>
</div>
    </>
  )
}

export default Notes
