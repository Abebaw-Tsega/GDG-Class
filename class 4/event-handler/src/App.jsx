import { useState } from 'react';
import './index.css'

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;

    if (editId) {
      // Edit existing note
      setNotes(notes.map(note =>
        note.id === editId ? { ...note, title, content } : note
      ));
    } else {
      // Add new note
      const newNote = {
        id: Date.now(),
        title,
        content
      };
      setNotes([...notes, newNote]);
    }

    setTitle('');
    setContent('');
    setEditId(null);
  };

  const handleDelete = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const handleEdit = (note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditId(note.id);
  };

  return (
    <div className="min-h-screen bg-gray-100  p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Note Taking App</h1>

        {/* Note Form */}
        <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Note title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Note content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full mb-4 p-2 border rounded h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {editId ? 'Update Note' : 'Add Note'}
          </button>
        </form>

        {/* Notes List */}
        <div className=" grid gap-4">
          {notes.map((note) => (
            <div key={note.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{note.title}</h3>
              <p className="text-gray-600 mb-4">{note.content}</p>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(note)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(note.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;