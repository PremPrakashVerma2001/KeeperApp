import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import noteList from "../noteList";
/*
function creatnote(note){
  return (
    <Note 
    unique_key = {note.unique_key}
    title ={note.title}
    content ={note.content}
    emoji = {note.emoji}
    />
  );
  */


function App() {
  return (
    <div>
      <Header />
      {/* props through array*/}
      {/* <Note title={noteList[0].title} content={noteList[0].content} emoji={noteList[0].emoji} />
      <Note title={noteList[1].title} content={noteList[1].content} emoji={noteList[1].emoji} />
      <Note title={noteList[2].title} content={noteList[2].content} emoji={noteList[2].emoji} />
      <Note title={noteList[3].title} content={noteList[3].content} emoji={noteList[3].emoji} />
      <Note title={noteList[4].title} content={noteList[4].content} emoji={noteList[4].emoji} />
       */}
      {/* the above 5 card can be done using only single statement. */}
      {/* use .map() method */}

      {/* {noteList.map(creatnote)} */}
      {/* or */}
      
      {noteList.map(Note)}



      <Footer />
    </div>
  );
}

export default App;
