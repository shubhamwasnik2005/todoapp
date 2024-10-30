import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../notes"
import CreateArea from "./createArea";
import React from "react";



function App(){
  const [items,setItems]= React.useState([]);
  
  function addItems(inputText){
    setItems((prevItem)=>{
      return [...prevItem,inputText]
    })
  };


  function deleteNote(id){
    setItems(prevItems=>{
      return prevItems.filter((noteItem,index)=>{
        return index !==id;
      })
    })
  };

  return <div><Header />
  <CreateArea onAdd={addItems}/>
  
  {items.map((noteVal,index)=>{
  return <Note key={index} id=
  {index} head={noteVal.title} para={noteVal.content} onDelete={deleteNote}></Note>})}
  
  <Footer />
  </div>
};

export default App;