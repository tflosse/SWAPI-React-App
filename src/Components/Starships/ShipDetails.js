import React  from "react";
import '../App.css';

function ShipDetails(props) {

  return (
    <div className="ship-card">
      <h3>Name:  <span className="data"></span>{props.currentShip.name}</h3>
      <p>Model:  <span className="data"></span>{props.currentShip.model}</p>
      <p>Max Atm. Speed:  <span className="data"></span>{props.currentShip.max_atmosphering_speed}</p>
      <p>Starship Class:  <span className="data"></span>{props.currentShip.starship_class}</p>
      <p>Manufacturer:  <span className="data"></span>{props.currentShip.manufacturer}</p>
      <p>Hyperdrive Rating:  <span className="data"></span>{props.currentShip.hyperdrive_rating}</p>
      <button onClick={()=>props.addToFleet(props.currentShip)}>Add to your Fleet</button>
    </div>
  );
}

export default ShipDetails;