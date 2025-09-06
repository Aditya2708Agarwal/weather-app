import './App.css'
import SearchBar from './components/SearchBar'
import TemperatureToggle from './components/temperatureToggle'
import LoadingSpinner from './components/LoadinSpinner'
import ErrorMessage from './components/ErrorMessage'
import WeatherCard from './components/WeatherCard'
import WeatherForecast from './components/WeatherForecast'
import { useWeather } from './hooks/useWeather'
import { getBackgroundImageByWeather } from './utils/weatherutils'


function App() {

  const { 
    currentWeather, 
    forecast, 
    loading, 
    error, 
    unit, 
    toggleUnit, 
    fetchWeatherByCity, 
    fetchWeatherByLocation
  } = useWeather();


  const handleRetry = () => {
    if (currentWeather) {
      fetchWeatherByCity(currentWeather.name);
    }else{
      fetchWeatherByCity('Delhi');
    }
  };


  const bgImage = getBackgroundImageByWeather(currentWeather?.weather[0]?.main) || getBackgroundImageByWeather('Clear');

  return (
    <>
      <div className=' min-h-screen   relative overflow-hidden '>
        <div className='absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: bgImage}}>
          <div className='absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-indigo-900/40'></div>
          <div className='absolute inset-0 bg-black/10'></div>
        </div>
        <div className='relative z-10 container py-8 px-4 min-h-screen'>
          <div className='max-w-7xl mx-auto'>
            {/* Your content goes here */}
            <div className='text-center mb-12'>
              <div className='mb-8'>
                <h1 className='text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl tracking-tight'>weather <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>Pro</span></h1>
                <p className='text-white/80 text-lg md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed'>Your daily weather companion, providing accurate forecasts and real-time updates at your fingertips
                </p>
              </div>
              <div className='flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-6 mb-12'>
                <SearchBar
                 onSearch={fetchWeatherByCity}
                  onLocation={fetchWeatherByLocation}
                  loading={loading}
                 />
                <TemperatureToggle unit={unit} onToggle={toggleUnit} />
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
                <ErrorMessage message={error} onRetry={handleRetry} />
              </div>)}

              {
                currentWeather && !loading && (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className='xl:col-span-2'>
                  <WeatherCard weather={currentWeather} unit={unit} />
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
