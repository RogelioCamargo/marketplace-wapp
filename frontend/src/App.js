import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import HomeScreen from "./screens/HomeScreen"; 
import ItemScreen from "./screens/ItemScreen"; 

function App() {
  return (
    <Router>
      <header className="row">
          <div>
            <a className="brand" href="/">OfferUp</a>
          </div>
          <div>
            <a href="/sell">Sell</a>
            <a href="/about">About</a>
            <a href="/login">Log In</a>
            <a href="/signup">Sign Up</a>
          </div>
      </header>

      <main>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/item/:id" component={ItemScreen} />
      </main>

      <footer className="row center">
        <p>All rights reserved</p>
      </footer>
    </Router>
  );
}

export default App;
