import React from "react";

import { useState } from "react";


function CreateArea(props) {

  const [note, setnote] = useState({
    title : "this is title t1",
    content : "this is content c1"
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

  return (
    <div>
      <form>
        <input onChange={handleChange} value = {note.title} name="title" placeholder="Title" />
        <textarea onChange={handleChange} value = {note.content} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
