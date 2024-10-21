import React from "react";

function Note(props){
    return <div class="note">
        <h1>{props.head}</h1>
        <p>{props.para}</p>
    </div>

};

export default Note