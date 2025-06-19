
import noteContext from '../context/notes/noteContext';
import React, { useContext } from 'react';
const Noteitem = (props) => {
  const context = useContext(noteContext);
    const {deletenote} = context;
    const {note} = props;
  return (
    <div className="col-md-3">
       
       <div className="card my-3" >
 
  <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}</p>
    <i className="fa-solid fa-trash-arrow-up mx-2" onClick={()=>{deletenote(note._id)}}></i>
    <i className="fa-solid fa-pencil mx-2"></i>
    
  </div>
</div>
    </div>
  )
}

export default Noteitem
