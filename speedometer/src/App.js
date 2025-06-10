import React, { useState } from 'react';
import './App.css';
import speedometerImage from './speedometer.png';

function App() {
  const [speed, setSpeed] = useState(10);

  const speedIncrease = () => {
    setSpeed(prevSpeed => (prevSpeed < 200 ? prevSpeed + 10 : 200));
  }

  const speedDecrease = () => {
    setSpeed(prevSpeed => (prevSpeed > 0 ? prevSpeed - 10 : 0));
  }
  return (
    <div className="container">
    <div className="speedometer-img">
    <img src={speedometerImage} alt="Speedometer" />
    </div>
    <h2 className="speed-display">Speed is {speed}mph</h2>
    <p className="limits">Min Limit is 0mph, Max Limit is 200mph</p>
    <div className="buttons">
    <button className="accelerate" onClick={speedIncrease}>Accelerate</button>
    <button className="brake" onClick={speedDecrease}>Apply Brake</button>
      </div>
    </div>
  );
}

export default App;
