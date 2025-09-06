


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

export const getBackgroundImageByWeather = (weatherMain) => {
  const weatherLower = weatherMain?.toLowerCase();
  
  switch (weatherLower) {
    case 'clear':
      return "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop')"; // Sunny
    case 'clouds':
      return "url('https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?w=1200&h=800&fit=crop')"; // Cloudy
    case 'rain':
    case 'drizzle':
      return "url('https://images.unsplash.com/photo-1433863448220-78aaa064ff47?w=1200&h=800&fit=crop')"; // Rainy
    case 'snow':
      return "url('https://images.unsplash.com/photo-1477601263740-65c72ce9b3d2?w=1200&h=800&fit=crop')"; // Snowy
    case 'thunderstorm':
      return "url('https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?w=1200&h=800&fit=crop')"; // Stormy
    default:
      return "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop')"; // Default sunny
  }
};