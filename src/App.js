import React, { useState, useEffect }from "react";

import "./App.css";
//import axios
import axios from 'axios'
//import apod from apod.js
import Picture from './components/Picture'


function App() {
  return (
    <div className="App">
      <p>
        NASA Photo of the Day <span role="img" aria-label='go!'>🚀</span>!
      </p>
    <Picture />
    </div>
  );
}

export default App;
