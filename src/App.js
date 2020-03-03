import React from 'react';
import './App.css';
import ComputerClock from './Components/ComputerClock.js';
import WorldClock from './Components/WorldClock.js';

function App(props) {
  return (<div>
    <h1>Se tá funcionando é pq é bom</h1>
    <ComputerClock />
    <WorldClock />
  </div>);
}

export default App;
