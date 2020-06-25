import React  from "react";
import './App.css';

function Home() {
    return (
      <div className="home-page">
        <h1>This is the homepage!</h1>
        <p>There's not much here, although I'd love to add a <br />
        search bar to allow you to find your favorite characters <br />
        and starships aventually. Here's some info about this App:</p>
        <ul>
          <li>It was built using React and React-Router</li>
          <li>The lists and details data are provided by SWAPI</li>
          <li>It was built as an alternative to a Pokedex assignment <br />
          -- Aren't you glad?</li>
        </ul>
      </div>
    );
}

export default Home;