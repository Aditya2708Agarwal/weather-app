import { MapPin } from "lucide-react"


function WeatherCard() {
    return (
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl hover:bg-white/20 transition duration-300">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                    <div className="p-2 bg-white/10 rounded-full ">
                        <MapPin className="text-white/80 w-5 h-5" />
                    </div>
                    <div className="">
                        <h2 className="text-white font-semibold text-lg">Weather Name</h2>
                        <p className="text-white/60 text-sm">Weather Country</p>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-white/70 text-sm">

                    </div>
                    <div className="text-white/50 text-xs">

                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between mb-6">
                <div className="flex-1">
                    <div className="text-6xl font-bold text-white mb-3 tracking-tight">
                        Main temp
                    </div>
                    <div className="text-white/70 text-xl capitalize mb-2 font-medium">
                        Weather description
                    </div>
                    <div className="text-white/50 text-sm flex items-center space-x-2">
                        <span>MAX TEMP</span>
                        <span>MIN TEMP</span>
                    </div>
                </div>
                <div className="text-white/90 transform hover:scale-150 transition-transform duration-300">

                </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bh-white/10 backdrop-blur-xl rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 group">
                    <div className="flex items-center space-x-3 mb-2">
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard