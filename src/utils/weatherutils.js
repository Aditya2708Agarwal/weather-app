export const getWeatherIcon = (weather) => {


    const iconMap = {
        clear: "Sun",
        clouds: "Cloud",
        rain: "CloudRain",
        drizzle: "CloudDrizzle",
        thunderstorm: "CloudLightning",
        snow: "Snowflake",
        mist: "CloudFog",
        smoke: "Smoke",
        haze: "SunHaze",
        dust: "SunDust",
        fog: "CloudFog",
        sand: "SunDust",
        ash: "Volcano",
        squall: "Wind",
        tornado: "Tornado",
    };


    const key = weather.main.toLowerCase();
    return iconMap[key] || "sun";
}


export const formatTemperature = (tempCelsius, unit) => {
    if (unit === 'C') {
        return `${Math.round(tempCelsius)}°C`;
    }
    else{
        const tempFahrenheit = (tempCelsius * 9/5) + 32;
        return `${Math.round(tempFahrenheit)}°F`;
    }
}


export const formatTime = (timestampInSeconds) => {
  return new Date(timestampInSeconds * 1000).toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit'
  });
};


export const formatDate = (timestamp, timezoneOffset = 0) => {
    const date = new Date((timestamp + timezoneOffset) * 1000);
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-IN', options);
}

export const getWindDirection = (degree) => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(degree / 45) % 8;
    return directions[index];
}