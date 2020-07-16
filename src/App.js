import React, { useState }from "react";

import "./App.css";
//import apod from apod.js
import Picture from './components/Picture'


function App() {
  return (
  
      <div className="App">
        <h1 className= "App-header">
          NASA Photo of the Day <span role="img" aria-label='go!'>🚀</span>!
        </h1>
      <Picture />
      </div>
   
  );
}

export default App;
