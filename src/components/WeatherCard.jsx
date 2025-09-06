import { 
    MapPin, 
    Sunrise, 
    Sunset,
    Wind,
    Droplets,
    Gauge,
    Eye,
    Thermometer } from "lucide-react"
import { formatTemperature, formatTime, getWeatherIcon } from "../utils/weatherutils"
import * as lucideIcons from "lucide-react"


function WeatherCard({weather, unit}) {

    const iconName = getWeatherIcon(weather.weather[0]);
    const IconComponent = lucideIcons[iconName] || lucideIcons['Sun'];
    console.log("Icon Name:", IconComponent); // Debugging line


    const weatherStats = [
        { label: 'Wind', value: `${weather.wind.speed} m/s`, icon: Wind, color: 'text-cyan-300' },
        { label: 'Humidity', value: `${weather.main.humidity}%`, icon: Droplets, color: 'text-blue-600' },
        { label: 'Pressure', value: `${weather.main.pressure} hPa`, icon: Gauge, color: 'text-green-500' },
        { label: 'Visibility', value: `${(weather.visibility / 1000).toFixed(1)} km`, icon: Eye, color: 'text-yellow-400' },
        { label: 'Feels Like', value: `${Math.round(weather.main.feels_like)}°${unit}`, icon: Thermometer, color: 'text-red-400' },
    ];

    return (
        <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl hover:bg-white/20 transition duration-300">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                    <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300">
                        <MapPin className="text-white/80 w-5 h-5 " />
                    </div>
                    <div className="">
                        <h2 className="text-white font-semibold text-lg">{weather.name}</h2>
                        <p className="text-white/60 text-sm">{weather.sys.country}</p>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-white/70 text-md">
                        {new Date((weather.dt + weather.timezone) * 1000).toLocaleDateString('en-IN', {
                            weekday: 'short',
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            timeZone: 'UTC'
                        })}
                    </div>
                    <div className="text-white/50 text-sm">
                        {new Date((weather.dt + weather.timezone)*1000).toLocaleTimeString('en-IN', {
                            hour: '2-digit',
                            minute: '2-digit',
                            timeZone: 'UTC'
                        })}
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between mb-6">
                <div className="flex-1">
                    <div className="text-6xl font-bold text-white mb-3 tracking-tight">
                        {formatTemperature(weather.main.temp, unit)}
                    </div>
                    <div className="text-white/70 text-xl capitalize mb-2 font-medium">
                        {weather.weather[0].description}
                    </div>
                    <div className="text-white/50 text-sm flex items-center space-x-2">
                        <span>HIGH: {formatTemperature(weather.main.temp_max, unit)}</span>
                        <span>LOW: {formatTemperature(weather.main.temp_min, unit)}</span>
                    </div>
                </div>
                <div className="text-white/90 transform hover:scale-120 transition-transform duration-300">
                    <IconComponent className="w-14 h-14 mx-3" />
                </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {weatherStats.map((stat) => (
                    <div key={stat.label}
                     className="bh-white/10 backdrop-blur-xl rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 group">
                    <div className="flex items-center space-x-3 mb-2">
                        <div className={`p-1 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300`}>
                        <stat.icon className={`w-5 h-5 ${stat.color}`} /> 
                        </div>
                        <span className="text-white/70 text-sm font-medium">{stat.label}</span>
                    </div>
                    <div className="text-white font-semibold text-lg pl-11">
                        {stat.value}
                    </div>
                </div>))}
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-orange-500/20 to-yellow-600/20 backdrop-blur-sm rounded-2xl p-4 text-white/90 border-orange-400/20">
                    <div className="flex items-center space-x-3 mb-2">
                        <div className="p-2 bg-orange-400/20 rounded-full">
                            <Sunrise className="w-5 h-5 text-orange-500" />
                        </div>
                        <span className="text-white/80 text-md font-medium">Sunrise</span>
                    </div>
                    <div className="text-white font-semibold text-lg pl-11">
                        {formatTime(weather.sys.sunrise)}
                    </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-4 border border-purple-400/20">
                    <div className="flex items-center space-x-3 mb-2">
                        <div className="p-2 bg-purple-400/20 rounded-full">
                            <Sunset className="w-5 h-5 text-purple-600" />
                        </div>
                        <span className="text-white/80 text-md font-medium">Sunset</span>
                    </div>
                    <div className="text-white font-semibold text-lg pl-11">
                        {formatTime(weather.sys.sunset)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard