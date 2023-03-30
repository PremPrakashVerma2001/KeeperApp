import React from "react";

// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import Zoom from '@mui/material/Zoom';

function Note(props) {
    
function handleClick(){
    props.onDelete(props.id);
}

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>

      {/* adding functionality button by passing note id to App.js component. */}
      {/* <button onClick={handleClick}>DELETE</button> */}

      {/* using materical ui icons */}
      <Zoom in = {true}>
      <button onClick={handleClick}><DeleteOutlineRoundedIcon color="warning"/></button>
      </Zoom>
    </div>
  );
}

export default Note;