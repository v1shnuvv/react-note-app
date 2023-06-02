import {MdSearch} from "react-icons/md"
export default function Search({handleSearchNote}){
    return(
        <div className="search_container">
<MdSearch className="search_icons" size='1.3rem'/> <input onChange={(e)=>handleSearchNote(e.target.value)} type="text" placeholder="Type to search"/>
        </div>
    )
}