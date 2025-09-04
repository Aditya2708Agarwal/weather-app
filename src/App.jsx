import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import TemperatureToggle from './components/temperatureToggle'
import LoadingSpinner from './components/LoadinSpinner'
import ErrorMessage from './components/ErrorMessage'
import WeatherCard from './components/WeatherCard'
import WeatherForecast from './components/WeatherForecast'
import { useWeather } from './hooks/useWeather'


function App() {
  const [count, setCount] = useState(0)

  const { currentWeather, forecast, loading, error, unit, toggleUnit, fetchWeatherByCity, fetchWeatherByLoacation } = useWeather();



  return (
    <>
      <div className=' min-h-screen   relative overflow-hidden '>
        <div className='absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" }}>
          <div className='absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-indigo-900/40'></div>
          <div className='absolute inset-0 bg-black-10'></div>
        </div>
        <div className='relative z-10 container py-8 px-4 min-h-screen'>
          <div className='max-w-7xl mx-auto'>
            {/* Your content goes here */}
            <div className='text-center mb-12'>
              <div className='mb-8'>
                <h1 className='text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl tracking-tight'>weather <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>Pro</span></h1>
                <p className='text-white/80 text-lg md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed'>Your ultimate weather companion  32r3202 23r 23r  32 t2tr924tq4 9t4u90t290t2  490244 9r 490 r8yw8ifgogh8wtw 89t w48 8w80
                </p>
              </div>
              <div className='flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-6 mb-12'>
                <SearchBar
                 onSearch={fetchWeatherByCity}
                  onLocation={fetchWeatherByLoacation}
                  loading={loading}
                 />
                <TemperatureToggle />
              </div>
            </div>

            <div className='space-y-8'>
              {loading && (
                <div className='flex justify-center'>
                  <div className='bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20'>
                    <LoadingSpinner />

                    <p className='text-white/80 text-center mt-2 font-small'>
                      Fetching latest weather Data.....
                    </p>
                  </div>
                </div>)}


              {error && !loading && (
                <div className='max-w-2xl mx-auto'>
                <ErrorMessage />
              </div>)}

              {
                currentWeather && !loading && !error && (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className='xl:col-span-2'>
                  <WeatherCard />
                </div>
                <div className='xl:col-span-1'>
                  {forecast && <WeatherForecast forecast={forecast} unit={unit} />}
                </div>
              </div>)
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
