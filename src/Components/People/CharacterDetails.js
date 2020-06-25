import React from "react";
import '../App.css';

function CharacterDetails(props) {

    return (
      <div className="char-card">
        <h3>Name:  <span className="name"></span>{props.currentChar.name}</h3>
        <p>Birth Year:  <span className="data"></span>{props.currentChar.birth_year}</p>
        <p>Height:  <span className="data"></span>{props.currentChar.height}</p>
        <p>Hair Color:  <span className="data"></span>{props.currentChar.hair_color}</p>
        <p>Eye Color:  <span className="data"></span>{props.currentChar.eye_color}</p>
        <p>Gender:  <span className="data"></span>{props.currentChar.gender}</p>
        <button onClick={()=>props.addToFleet(props.currentChar)}>Add to your Fleet</button>
      </div>
    );
}

export default CharacterDetails;