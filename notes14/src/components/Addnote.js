import { useState } from "react";


export default function Addnote({ handleAddNote }) {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

    const handleChange=(e)=>{
        if(characterLimit - e.target.value.length>=0){
            setNoteText(e.target.value);
        }
        
    }

  const handleClickSave = () => {
    if(noteText.trim().length>0){
        handleAddNote(noteText);
        setNoteText("");
    }
    

  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add new note"
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note_footer">
        <small>{characterLimit - noteText.length} remaining</small>
        <button onClick={handleClickSave} className="save">
          Save
        </button>
      </div>
    </div>
  );
}
