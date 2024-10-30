import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../notes"
import CreateArea from "./createArea";
import React from "react";

function noteUpdate(noteVal){
  return <Note head={noteVal.title} para={noteVal.content}></Note>

}


function App(){
  const [items,setItems]= React.useState([]);
  
  function addItems(inputText){
    setItems((prevItem)=>{
      return [...prevItem,inputText]
    })
  };

  return <div><Header />
  <CreateArea onAdd={addItems}/>
  
  {items.map(noteUpdate)}
  
  <Footer />
  </div>
};

export default App;