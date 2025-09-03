import {  useEffect, useState } from "react";
import { getCurrentWeather, 
    getCurrentWeatherByCoords, 
    getWeatherForecast 
} from "../services/weatherAPIs";

export const useWeather = () => {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    cosnt [LucideClockFading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [unit, setUnit] = useState('C'); // 'metric' for Celsius, 'imperial' for Fahrenheit

    
    const fetchWeatherByCity = async (city) => {
        setLoading(true);
        setError(null);
        try {
            const [weatherData, forecast] = await Promise.all([
                getCurrentWeather(city),
                getWeatherForecast(city)
            ]);
            setCurrentWeather(weatherData);
            setForecast(forecast); 
        } catch (err) {
            setError(err.message);
        }
        setLoading(false);
    };

    const fetchWeatherByLoacation = async () => {
        if(!navigator.geolocation) {
            setError("Geolocation is not supported by your browser");
            return;
        }
        setLoading(true);
        setError(null);
        navigator.geolocation.getCurrentPosition(async (position) => {
            try {

                const { latitude, longitude } = position.coords;
                const weatherData = await getCurrentWeatherByCoords(latitude, longitude);
                setCurrentWeather(weatherData);
                const forecastData = await getWeatherForecast(weatherData.name);
                setForecast(forecastData);
                
            } catch (err) {
                setError(
                    err instanceof Error? err.message : "An unknown error occurred"
                )
            }
            setLoading(false);
        }, (err) => {
            setError("Unable to retrieve your location");
            setLoading(false);
        });
    }

    const toggleUnit = () => {
        setUnit((prevUnit) => (prevUnit === 'C' ? 'F' : 'C'));
    }


    useEffect(() => {
        fetchWeatherByCity("Delhi");
    });

    return {
        currentWeather,
        forecast,
        loading,
        error,
        unit,   
        fetchWeatherByCity,
        fetchWeatherByLoacation,
        toggleUnit
    };
}

