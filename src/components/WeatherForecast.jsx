import { Calendar, Droplets } from "lucide-react";

function WeatherForecast() {
    return (
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
                <div className="p-2 bg-white/10 rounded-full">
                    <Calendar className="text-white/80 w-5 h-5" />
                </div>
                <h2 className="text-white font-bold text-2xl">5 Days Forecast</h2>
            </div>

            <div className="space-y-3">
                <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-2xl p-3 hover:bg-white/20 transition-all duration-300 group border border-white/20">
                    <div className="flex items-center space-x-1 flex-1">
                        <div className="text-white group-hover:text-white/80 transition-all transform group-hover:scale-100 duration">
                        </div>
                        <div className="flex-1">
                            <div className="text-white font-semibold text-lg">

                            </div>
                            <div className="text-white/70 text-medium capitalize font-medium">
                                Weather Description
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1 text-white/70">
                            <Droplets className="w-5 h-5 text-blue-400" />
                            <span className="text-sm font-medium"></span>
                        </div>
                        <div className="text-right">
                            <div className="text-white font-bold text-lg">
                                Temperature
                            </div>
                            <div className="text-white text-sm font-medium">
                                Main Temp
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>     
    )
}


export default WeatherForecast;