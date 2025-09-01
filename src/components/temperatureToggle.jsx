import { useState } from "react";

function TemperatureToggle() {
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleTemperature = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-2 cursor-pointer hover:bg-white/20" onClick={toggleTemperature}>
      <div className="flex items-center">
        <button className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300`}>°C</button>
        <button className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300`}>°F</button>
      </div>
    </div>
  );
}

export default TemperatureToggle;
