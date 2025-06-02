import React, { useState } from 'react';
import '../../../styles/addNotes.css';

type Note = {
  id: number;
  content: string;
};

export default function AddNotes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [noteContent, setNoteContent] = useState('');

  const handleAddNote = () => {
    if (noteContent.trim() === '') return;

    const newNote: Note = {
      id: Date.now(),
      content: noteContent.trim(),
    };

    setNotes([...notes, newNote]);
    setNoteContent('');
  };

  const handleDeleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="add-notes-container">
      <h3>Agregar Notas</h3>
      <div className="add-note-input">
        <textarea
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
          placeholder="Escribe tu nota aquí..."
        />
        <button onClick={handleAddNote}>Agregar Nota</button>
      </div>
      <ul className="notes-list">
        {notes.map((note) => (
          <li key={note.id} className="note-item">
            <p>{note.content}</p>
            <button onClick={() => handleDeleteNote(note.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}