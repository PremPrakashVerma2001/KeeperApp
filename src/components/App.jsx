import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

import { useState } from "react";

function App() {

  //array for notes:

  const [notes, setnotes] = useState([]);

  // notes.map((noteItem=>{

  // }));


function addNote(newNote){
  setnotes((prevNotes)=>{
   return [...prevNotes,newNote];
  })
}

function deleteNote(noteId){

  setnotes( (prevNotes)=>{
    return prevNotes.filter((noteItem,index)=>{
      return noteId !== index; 
    })
  })

}
  return (
    <div>
      <Header />
      <CreateArea onAdd = {addNote} />
      {/* <Note key={1} title="Note title" content="Note content" /> */}

      {
        //using .map() to iterate over notes items. 
        notes.map((noteItem,index)=>{
            return (<Note  key = {index} id = {index} onDelete= {deleteNote} title= {noteItem.title} content = {noteItem.content} />);
        })
      }
      <Footer />
    </div>
  );
}

export default App;