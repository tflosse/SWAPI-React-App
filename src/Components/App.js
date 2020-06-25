import React, {useState} from 'react';
import {Route, Link, Switch, Redirect} from "react-router-dom";
import Home from "./Home"
import People from "./People/People";
import Starships from "./Starships/Starships";
import MyFleet from "./MyFleet";
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">
          <h1>Build your 
          <img src="https://clipart.info/images/ccovers/1513370389Star%20Wars%20Logo%20transparent%20PNG.png" alt="logo"/>
          Fleet</h1>
        </Link>
        <Link to="/people">
          People
        </Link>
        <Link to="/starships">
          Starships
        </Link>
        <Link to="/myfleet">
          MY FLEET
        </Link>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/people" component={People} />
          <Route path="/starships" component={Starships} />
          <Route path="/myfleet" component={MyFleet} />
          <Route path="*" 
            render={()=> 
            <Redirect to="/home"/> } 
            />
        </Switch>
      </main>
    </div>
  );
}

export default App;
