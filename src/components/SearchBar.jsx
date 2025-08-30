import { MapPin, X } from 'lucide-react'

function SearchBar() {
    return (
        <div className="relative w-full max-w-2xl">
            <form className="relative">
                <div className="relative group ">
                    <search className="absolute left-4 top-1/2 transform -translate-y-0.5 text-white/60 w-5 h-5 group-focus-within:text-white transition-all"></search>
                    <input type="text" 
                    placeholder="Search for a city or location..."
                    className="w-full pl-12 pr-24 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none foucs: ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-300 hover:bg-white/20" />

                    <button className="absolute right-14 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-all p-1.5 rounded-full hover:bg-white/10"><X className='w-5 h-5'/></button>
                    <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-all p-1.5 rounded-full hover:bg-white/10"><MapPin/></button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar