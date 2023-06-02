import NoteList from "./components/NoteList";
import Search from "./components/Search";
import Header from "./components/Header";

import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

const App = () => {
  const [notes, setNotes] = useState([
    
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    setTimeout(()=>{
      localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
    },100);
    
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleTimeString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((notes) => notes.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "darkmode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NoteList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText.toLowerCase())
          )}
          handleAddNote={addNote}
          deleteNote={deleteNote}
        />
      </div>
    </div>
  );
};
export default App;
