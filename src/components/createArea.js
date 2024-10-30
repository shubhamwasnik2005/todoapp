import React from "react";


function CreateArea(props){

    const [inputText,setInputText] = React.useState({
        title:"",
        content:""
    });

    function addNote(event){
        const {name,value} =event.target

        setInputText((preval)=>{
            
            return {
                ...preval,
                [name]:value
            }
        })
        
    }

    function submitNote(event){

        props.onAdd(inputText);
        setInputText({
            title:"",
            content:""
        })
        event.preventDefault();

    }
    console.log(inputText)

    return(<div>
        <form>
            <input onChange={addNote} name="title" placeholder="Title" value={inputText.title}/>
            <textarea onChange={addNote} name="content" placeholder="Take a Note ..." rows="3" value={inputText.content}/>
            <button onClick={submitNote}>add</button>

        </form>
        
    </div>);
};

export default CreateArea;