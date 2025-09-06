import { useState } from "react";

function TemperatureToggle({ unit, onToggle }) {
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleTemperature = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-1.5 cursor-pointer hover:bg-white/20" onClick={toggleTemperature}>
      <div className="flex items-center">
        <button className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${unit === 'C' ? "bg-white/60 text-blue-600 shadow-lg transform scale-105" : "text-white/70 hover:text-white hover:bg-white/10"}`} onClick={onToggle}>°C</button>
        <button className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${unit === 'F' ? "bg-white/60 text-blue-600 shadow-lg transform scale-105" : "text-white/70 hover:text-white hover:bg-white/10"}`} onClick={onToggle}>°F</button>
      </div>
    </div>
  );
}

export default TemperatureToggle;
