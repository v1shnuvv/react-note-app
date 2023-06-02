import { CgDarkMode } from "react-icons/cg";
export default function ({ handleToggleDarkMode }) {
  return (<>
    <div className="header_container">
      <label>Notes</label>
      
      <label><CgDarkMode 
        onClick={() =>
          handleToggleDarkMode((previousDarkmode) => !previousDarkmode)
        }
        className="darkmod_icon"
      /></label>
     
    </div> <span className="header_span">  <small>Your mind is for having ideas, not holding them- David Allen</small> </span>
    </>
  );
}
