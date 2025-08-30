import { MapPin, X, Search } from 'lucide-react'

function SearchBar() {
    return (
        <div className="relative w-full max-w-2xl">
            <form className="relative">
                <div className="relative group ">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-0.5 text-white/60 w-5 h-5 group-focus-within:text-white transition-all"></Search>
                    <input type="text" 
                    placeholder="Search for a city or location..."
                    className="w-full pl-12 pr-24 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none foucs:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-300 hover:bg-white/20" />

                    <button className="absolute right-14 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-all p-1.5 rounded-full hover:bg-white/10"><X className='w-5 h-5'/></button>
                    <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-all p-1.5 rounded-full hover:bg-white/10"><MapPin/></button>

                    
                </div>
            </form>
            <div className='absolute top-full left-0 right-0 mt-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden z-50'>
                <div className='p-6 text-center text-white/70'>
                    <div className='animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white/30 border-t-white mx-auto'>
                    </div>
                    <p>Search Cities.....</p>
                </div>
                <button className='w-full px-6 py-4 text-left hover:bg-white/10 transition-all duration-200 flex items-center justify-between group-border-b border-white/10 last:border-b-0'><div className='font-medium text-white group-hover:text-white'>New York, USA
                    <span>View All</span>
                </div>
                <div className='text-sm text-white/50'>Population: 8,336,817</div>
                <Search className='w-5 h-5 text-white/50 group-hover:text-white/60'/>
                </button>
            </div>
        </div>
    )
}

export default SearchBar