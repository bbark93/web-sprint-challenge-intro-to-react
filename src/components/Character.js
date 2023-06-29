// Write your Character component here
import React from "react";
import "../App.css"
import styled from "styled-components";

const CharacterDiv = styled.div`
    height: 50px;
    border: 2px solid rgb(17, 142, 232);
    background-color: rgba(17, 142, 232, 0.2);
    margin: 5px;
    display: flex;
    justify-content: space-between;
    font-family: 'Agdasima', sans-serif;
    color: #fff;
`

const Character = (props) => {
    const headers = props.char.map(item => (
        <CharacterDiv >
          <h1>{item.name}</h1> 
          <h1>{item.birth_year}</h1> 
        </CharacterDiv>
    ));
    return (
        <div>
           {headers} 
        </div>
    )
}

export default Character;