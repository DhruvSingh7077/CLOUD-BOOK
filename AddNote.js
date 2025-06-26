import '../Home.css';
import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Added successfully", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="add-note-section">
      <h2>Add a Note</h2>
      <form className="note-form">
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={note.title}
          onChange={onChange}
          minLength={5}
          required
        />
        <textarea
          placeholder="Description"
          name="description"
          value={note.description}
          onChange={onChange}
          minLength={5}
          required
        ></textarea>
        <input
          type="text"
          placeholder="Tag"
          name="tag"
          value={note.tag}
          onChange={onChange}
          minLength={5}
          required
        />
        <button
          disabled={note.title.length < 5 || note.description.length < 5}
          onClick={handleClick}
          type="submit"
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
