import React, {useState, useEffect}  from "react";
import ShipDetails from "./ShipDetails";
import ShipList from "./ShipList";
import '../App.css';

function Starships() {
    const [ships, setShips] = useState([])
    const [currentShip, updateCurrentShip] = useState({})
    const [fleet, updateFleet] = useState([]) 

    const handleClick = ship => {
        console.log("current ship - ", ship)
        updateCurrentShip(ship)
    }    

    const addToFleet = ship => {
        console.log("adding ", ship, " to fleet")
        updateFleet([...fleet,ship])
        console.log("new fleet array: ", fleet)
    };

    return (
      <div className="starships">
        <ShipList 
            className="ship-list"
            ships={ships}
            setShips={setShips}
            onClick={handleClick}
            />
        <ShipDetails 
            className="current-ship"
            ships={ships}
            currentShip={currentShip}
            updateCurrentShip={updateCurrentShip}
            addToFleet={addToFleet}
            />
      </div>
    );
}

export default Starships;