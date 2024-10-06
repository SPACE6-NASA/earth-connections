import { useState } from 'react';

function Simulator() {
  const [co2Level, setCo2Level] = useState(50); // Default CO2 level

  const handleSliderChange = (e) => {
    setCo2Level(e.target.value);
  };

  return (
    <div className="simulator">
      <h3>CO2 Impact Simulator</h3>
      <input type="range" min="0" max="100" value={co2Level} onChange={handleSliderChange} />
      <p>Current CO2 Level: {co2Level}</p>
      <p>Effect on Temperature: {Math.round(co2Level * 0.1)}°C increase</p>
    </div>
  );
}

export default Simulator;
