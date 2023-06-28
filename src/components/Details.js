import React from "react";
import "../App.css"

const Details = (props) => {
    return(
        <div className="details-wrapper" >
            <h3>{props.details.name}:</h3>
            <p>Mass: {props.details.mass}kg</p>
            <p>Height: {props.details.height}cm</p>
            <p>Gender: {props.details.gender}</p>
            <p>Hair Color: {props.details.hair_color}</p>
            <p>Eye Color: {props.details.eye_color}</p>
        </div>
    )
}

export default Details;