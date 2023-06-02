import {MdDeleteOutline} from 'react-icons/md'
const Note=({id,text,date, deleteNote})=>{
    return(
        <div className="note">
           <span>{text}</span> 
           <div className="note_footer">
                <small>{date}</small>
                <MdDeleteOutline onClick={()=>{deleteNote(id)}} className='delete_icon' size='1.4em'/>
           </div>
        </div>
    )
}
export default Note; 