import React from "react";

function Note(props) {
  function haldleClick(){
    props.onDelete(props.id)
  };

  return (
    <div className="note">
        <h1>{props.head}</h1>
        <p>{props.para}</p>
        <button onClick={haldleClick}>DELETE</button>
    </div>);

};

export default Note