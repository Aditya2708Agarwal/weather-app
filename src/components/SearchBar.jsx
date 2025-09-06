import { MapPin, X, Search } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'
import { searchCities } from '../services/weatherAPIs'

function SearchBar({ onSearch, onLocation, loading }) {

    const [query, setQuery] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)
    const [searchLoading, setSearchLoading] = useState(false)

    const searchRef = useRef();
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, []);


    useEffect(() => {
        const searchTimeOut = setTimeout(async () => {
            if (query.length > 2) {
                setSearchLoading(true)
                try {
                    const result = await searchCities(query)
                    setSuggestions(result)
                    setShowSuggestions(true)
                } catch (error) {
                    console.error("Error fetching city suggestions:", error)
                } finally {
                    setSearchLoading(false)
                }
            } else {
                setSuggestions([])
                setShowSuggestions(false)
            }
        }, 300)

        return () => clearTimeout(searchTimeOut)
    }, [query])



    const handleSubmit = (e) => {
        e.preventDefault()
        if (query.trim() === '') return
        onSearch(query.trim())
        setShowSuggestions(false)
        setQuery('')

        console.log('Searching for:', query)
    }

    const clearSearch = () => {
        setQuery('')
        setSuggestions([])
        setShowSuggestions(false)
    }

    const fetchSuggestions = async (input) => {
        const cityName = input.name ? `${input.name}, ${input.state}` : input.name;
        onSearch(cityName)
        setQuery('')
        setShowSuggestions(false)
    }

    return (
        <div className="relative w-full max-w-2xl " ref={searchRef}>
            <form className="relative" onSubmit={handleSubmit}>
                <div className="relative group ">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-0.5 text-white/60 w-5 h-5 group-focus-within:text-white transition-all"></Search>
                    <input type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for a city or location..."
                        className="w-full pl-12 pr-24 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none foucs:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-300 hover:bg-white/20"
                        disabled={loading} />

                    {query && (
                        <button className="absolute right-14 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-all p-1.5 rounded-full hover:bg-white/10" onClick={clearSearch}><X /></button>
                    )}
                    <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-all p-1.5 rounded-full hover:bg-white/10" onClick={onLocation} disabled={loading}><MapPin /></button>


                </div>
            </form>
            {
                showSuggestions && (suggestions.length > 0 || searchLoading) && (
                    <div className='absolute top-full left-0 right-0 mt-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden z-50'>
                        {
                            searchLoading ? (
                                <div className='p-4 text-center text-white/70'>
                                    <div className='animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white/30 border-t-white mx-auto'>
                                    </div>
                                    <p>Search Cities.....</p>
                                </div>
                            ) : (
                                suggestions.map((item, index) => {
                                    return (
                                        <button className='w-full px-6 py-3 text-left hover:bg-white/10 transition-all duration-200 flex items-center justify-between group-border-b border-white/10 last:border-b-0'
                                        key={`${item.name}-${item.country}-${index}`}
                                        onClick={() => fetchSuggestions(item)}><div className='font-medium text-white group-hover:text-white w-1/4'
                                         >{item.name}
                                            {item.state && <span className='text-white/70'>{",    "+item.state}</span>}
                                        </div>
                                            <div className='text-md text-white/50'>{item.country}</div>
                                            <Search className='w-6 h-6 text-white/50 group-hover:text-white/60 transition-all' />
                                        </button>
                                    )
                                }
                                )
                            )    
                }

                    </div>
                )
            }
        </div>
    )
}

export default SearchBar