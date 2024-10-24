import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"

function noteUpdate(noteVal){
  return <Note key={noteVal.key} head={noteVal.title} para={noteVal.content}></Note>

}

function App(){
  return <div><Header />
  {notes.map(noteUpdate)}
  
  <Footer />
  </div>
};

export default App;