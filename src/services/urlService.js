const getWeatherURL = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city},in&units=metric&APPID=${process.env.REACT_APP_WEATHER_KEY}`;

const getBackgroundURL = (blur) =>
  `https://picsum.photos/600/400${blur ? `/?blur=1` : ``}`;

export default {
  getWeatherURL,
  getBackgroundURL,
};

export { getWeatherURL, getBackgroundURL };
