import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";

function NoteFour(props){
  return (
      <div className="note">
          <h1>{props.title.t_value}</h1>
          <p>{props.content.cont_value}</p>
          <p>{props.emoji.emj}</p>
      </div>
  );
  }
function App() {
//passing varible through props
  const t_value  = "T3";
  const cont_value = "c3"; 
  const emj  = "👽";

//passing object through props

var noteinfo4 = {
   t_value  :"T4",
   cont_value :"c4", 
   emj : "😵‍💫"
}

  return (
    <div>
     <Header />
     {/* simple props */}
     <Note title= "T1" content ="c1" emoji="😀" />
     <Note title= "T2" content ="c2" emoji="😶‍🌫️"/>
     {/* props through variable */}
     <Note title= {t_value} content = {cont_value} emoji={emj}/>


    {/* props through objects */}
     <NoteFour title= {noteinfo4} content ={noteinfo4} emoji={noteinfo4}/>
     <Footer/>
    </div>
  );
}

export default App;
