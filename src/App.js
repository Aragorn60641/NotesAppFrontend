import { useEffect, useState } from "react";
import "./App.css";
import DUMMY_NOTES from "./DUMMY_NOTES";
import Note from "./Components/Note/Note";

function App() {
  const [notesList, setNotesList] = useState([]);
  
  
  useEffect(() => {
    // const listFromStorageString = localStorage.getItem("my-notes");
    // if (listFromStorageString) {
    //   const listFromStorageArray = JSON.parse(listFromStorageString);
    //   setNotesList(listFromStorageArray);
    // } 
    // else {
    //   setNotesList(DUMMY_NOTES);
    // }
    setNotesList(DUMMY_NOTES)
  }, []);

  useEffect(() => {
    const textString = JSON.stringify(notesList);
    localStorage.setItem("my-notes", textString);
  }, [notesList]);

  const updateNoteItem = (text) => {
    console.log("Text updated");
    console.log(text);
    const updatedList = notesList.map((noteItem) => {
      if (noteItem._id === text._id) {
        return text;
      }
      return noteItem;
    });
    setNotesList(updatedList);
  };
  return (
    <div className="App">
      <div className="notes-list">
        {notesList.map((noteItem, index) => {
          return (
            <Note note={noteItem} onNoteUpdate={updateNoteItem} key={index} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
