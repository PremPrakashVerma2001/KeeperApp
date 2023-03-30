import React from "react";

import { useState } from "react";

// import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import AddTaskRoundedIcon from '@mui/icons-material/AddTaskRounded';
// import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [note, setnote] = useState({
    title : "",
    content : ""
  });


  function handleChange(event){
    const {name,value} = event.target;
    if(name==="title"){
      setnote({ title : value, content : note.content});
    }else{
      setnote({title : note.title , content : value});
    }
    
    // setnote(prevNote => {
    //   return {
    //     ...prevNote,
    //     [name]: value
    //   };
    // });
  }

  function handleClick(event){
    //will submit the note to array to render it.
     props.onAdd(note);
    setnote({
      title: "", content:""
    });

    //will prevent from going to default state.
    event.preventDefault();
  }

  // hook for text area :
  const [isexpanded, setisexpanded] = useState(false);

  function expand(){
    setisexpanded(true)
  }

  function inputArea(){
    return <input onChange={handleChange} value = {note.title} name="title" placeholder="Title" />
  }

  return (
    <div>
      <form className="create-note">
        
        { isexpanded ? inputArea() : null}

         
        
        <textarea 
         onChange={handleChange}
         onClick = {expand}
         value = {note.content}
          name="content" 
          placeholder="Take a note..." 
          rows={isexpanded ? 3 : 1} />


        {/* <button onClick={handleClick}>Add</button> */}

        {/* using material ui */}
        
        {/* <button onClick={handleClick}>< AddIcon /></button> */}
        

        {/*usign floating action button  */}

        <Zoom in = {isexpanded ? true : false}>

          {/* Zoom component for using transition effect in buttons. */}

        <Fab onClick={handleClick}>
        < AddTaskRoundedIcon />
        </Fab>
        
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
