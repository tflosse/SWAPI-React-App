import React, {useState, useEffect}  from "react";
import CharacterDetails from "./CharacterDetails";
import CharacterList from "./CharacterList";
import '../App.css';

function People() {
    // let user = [{name:"your-name"}]
    // // To be collected from user via form and added as a 
    // // first obj. in the fleet array
    const [characters, setCharacters] = useState([])
    const [currentChar, updateCurrentChar] = useState({})
    const [fleet, updateFleet] = useState([]) 

    const handleClick = char => {
        console.log("current charater - ", char)
        updateCurrentChar(char)
    }    

    const addToFleet = char => {
        console.log("adding ", char, " to fleet")
        updateFleet([...fleet,char])
        console.log("new fleet array: ", fleet)
    };

    return (
      <div className="people">
        <CharacterList 
            className="char-list"
            characters={characters}
            setCharacters={setCharacters}
            onClick={handleClick}
            />
        <CharacterDetails 
            className="current-char"
            characters={characters}
            currentChar={currentChar}
            updateCurrentChar={updateCurrentChar}
            addToFleet={addToFleet}
            />
      </div>
    );
}

export default People;