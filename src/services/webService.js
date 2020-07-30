import { getWeatherURL, getBackgroundURL } from '../services/urlService';

const weatherFetch = (city) => {
    return new Promise(async (resolvePromise, rejectPromise) => {
        const FULL_URL = getWeatherURL(city);
        const response = await fetch(FULL_URL);
        if (response.status === 200) {
            const cityWeather = await response.json();
            resolvePromise(cityWeather);
        } else {
            const error = await response.text();
            rejectPromise(JSON.parse(error));
        }
    })
}

const backgroundFetch = blur => {
    return new Promise(async (resolvePromise, rejectPromise) => {
        const FULL_URL = getBackgroundURL(blur);
        const response = await fetch(FULL_URL);
        if(response.status === 200) {
            const background = response.url;
            resolvePromise(background);
        } else {
            rejectPromise();
        }
    })
}

export default {
  weatherFetch,
  backgroundFetch,
};

export { weatherFetch, backgroundFetch };