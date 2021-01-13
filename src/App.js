import './App.css';
import React from 'react';
import {Router} from "@reach/router";

import Home from "./components/HomeComponent";
import Numbers from "./components/NumberComponent";
import Word from "./components/WordComponent";
import Colors from "./components/ColorsComponent";

// Hint: use the isNaN method (is Not a Number). For example: isNaN(+"35") is false, isNaN(+"hello") is true

function App() {
  return (
    <div className="App">
    <h3>App.js Routing Practice</h3>
    <Router>
      <Home path="/home"/>
      <Numbers path="/:num"/>
      <Word path="/:word"/>
      <Colors path="/:word/:color1/:color2" />
    </Router>

    </div>
  );
}

export default App;
