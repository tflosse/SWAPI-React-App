import React, {useEffect}  from "react";
import '../App.css';

function CharacterList(props) {
    // const [loopArr, updateLoopArr] = useState([])
    // Attempted to make API calls for multiple pages
    // And store each new 10 array items in loopArr
    // Tried: spread operator, states, .concat() method
    //`http://swapi.dev/api/people/?page=${i}`


    useEffect(() => {
        // for (let i=1; i<9; i++){
            let PeopleURL="http://swapi.dev/api/people/"
            const makeApiCall = async () => {
                const res = await fetch(PeopleURL)
                const json = await res.json()
                console.log(json)
                let array = json.results
                props.setCharacters(array)
            }
        makeApiCall() 
        },[])

    console.log("props.characters -", props.characters)
    const charList = props.characters.map((char, i) => {
        return (
            <li key={i}><button onClick={()=>props.onClick(char)}><p>{char.name} </p>    
            <img className="saber-icon" src="https://i.imgur.com/wog5YdQ.png"/>
            </button></li>
        );
      });

    return (
        <div className="char-list">
            <ul className="char--list">{charList}</ul>
        </div>
        );
}

export default CharacterList;

 