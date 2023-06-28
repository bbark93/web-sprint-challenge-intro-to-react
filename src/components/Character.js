// Write your Character component here
import React from "react";
import "../App.css"

const Character = (props) => {
    const headers = props.char.map(item => (
        <div className="character-wrapper" >
          <h1>{item.name}</h1> 
          <h1>{item.birth_year}</h1> 
        </div>
    ));
    return (
        <div>
           {headers} 
        </div>
    )
}

export default Character;