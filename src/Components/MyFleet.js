import React, {useState}  from "react";
import CharacterDetails from "./People/CharacterDetails"
import './App.css';

function MyFleet(props) {

let searchURL = `https://swapi.dev/api/people/?search=${props.name}`
// Map over the array of character names
// Make API calls for speciafic characters with more details in this section
//Pass only an array of names rather that whole objects and arrays
  // Easier to push(), pop(), splice()

    return (
      <div className="my-fleet">
        {/* <CharacterDetails addToFleet={addToFleet} /> */}
      </div>
    );
}

export default MyFleet;