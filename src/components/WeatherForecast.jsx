import { Calendar, Droplets } from "lucide-react";
import { formatDate, formatTemperature, formatTime } from "../utils/weatherutils";
import * as lucideIcons from "lucide-react"
import { getWeatherIcon } from "../utils/weatherutils";

function WeatherForecast({ forecast, unit }) {

    const dailyforecast = forecast.list.reduce((acc, item) => {
        const date = new Date(item.dt * 1000).toDateString();

        if (!acc[date]) {
            acc[date] = {
                ...item,
                min: item.main.temp_min,
                max: item.main.temp_max
            };
        } else {
            acc[date].min = Math.min(acc[date].min, item.main.temp_min);
            acc[date].max = Math.max(acc[date].max, item.main.temp_max);
        }

        return acc;
    }
        , {});

    const dailyItems = Object.values(dailyforecast).slice(0, 5);

    return (
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
                <div className="p-2 bg-white/10 rounded-full">
                    <Calendar className="text-white/80 w-5 h-5" />
                </div>
                <h2 className="text-white font-bold text-2xl">5 Days Forecast</h2>
            </div>

            <div className="space-y-3">
                {dailyItems.map((item, index) => {

                    const iconName = item.weather[0] ? getWeatherIcon(item.weather[0]) : 'Sun';
                    const IconComponent = lucideIcons[iconName] || lucideIcons['Sun'];

                    return (
                        <div key={index}
                            className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-2xl p-3 hover:bg-white/20 transition-all duration-300 group border border-white/20">
                            <div className="flex items-center space-x-2 flex-1">
                                <div className="text-white group-hover:text-white/80 transition-all transform group-hover:scale-100 duration">
                                    <IconComponent className="w-8 h-8" />
                                </div>
                                <div className="flex-1">
                                    <div className="text-white font-semibold text-lg">
                                        {index === 0 ? "Today" : formatDate(item.dt)}
                                    </div>
                                    <div className="text-white/70 text-medium capitalize font-medium">
                                        {item.weather[0].description}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-1 text-white/70">

                                    <span className="text-sm font-medium"></span>
                                </div>
                                <div className="text-right">
                                    <div className="text-white font-bold text-lg">
                                        {formatTemperature(item.main.temp, unit)}
                                    </div>
                                    <div className="text-white text-sm font-light">
                                        {`H: ${formatTemperature(item.max, unit)}  L: ${formatTemperature(item.min, unit)}`}

                                    </div>
                                </div>
                            </div>
                        </div>)
                }
                )}
            </div>
        </div>
    )
}


export default WeatherForecast;