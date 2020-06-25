import React, {useEffect}  from "react";
import '../App.css';

function ShipList(props) {

    useEffect(() => {
        const ShipsURL="http://swapi.dev/api/starships/"
        const makeApiCall = async () => {
            const res = await fetch(ShipsURL)
            const json = await res.json()
            console.log(json)
            let array = json.results
            props.setShips(array)
            }
        makeApiCall()
        },[])

    console.log("props.ships -", props.ships)
    const shipList = props.ships.map((ship, i) => {
        return (
            <li key={i}><button onClick={()=>props.onClick(ship)}><p>{ship.name} </p>  
            <img className="ship-icon" src="https://i.imgur.com/ISVKoiR.png"/>
            </button></li>
        );
      });

    return (
        <div className="ship-list">
            <ul className="ship--list">{shipList}</ul>
        </div>
        );
}

export default ShipList;