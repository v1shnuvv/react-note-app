import Note from "./Note";
import Addnote from "./Addnote"
const NoteList=({notes, handleAddNote, deleteNote})=>{
    return(
        <div className="note_list">
            {notes.map((itm)=>(
                // console.log(itm)
            <Note id={itm.id} text={itm.text} date={itm.date} deleteNote={deleteNote}/>
            ))}
<Addnote handleAddNote={handleAddNote} />
        </div>
    );
}
export default NoteList;