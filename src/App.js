import React from 'react';
import './App.css';
import Map from './components/Map';
import Quakes from './components/Quakes'

function App() {
  return (
    <div className="app">
    {/* probably add Nav here */}
      <div className="mapContainer">
      {/* map component uses google api  */}
        <Map />
      </div>
      <div className="quakeContainer">
      {/* earthquakes using usgs api */}
        <h1>Earthquakes from the past week:</h1>
        <Quakes />
      </div>
      {/* probably add Footer here */}
    </div>
  );
};

export default App;
