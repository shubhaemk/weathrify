import {
  getWeatherURL,
  getBackgroundURL,
  getLocationSuggestion,
} from '../services/urlService';

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
  });
};

const backgroundFetch = (blur) => {
  return new Promise(async (resolvePromise, rejectPromise) => {
    const FULL_URL = getBackgroundURL(blur);
    const response = await fetch(FULL_URL);
    if (response.status === 200) {
      const background = response.url;
      resolvePromise(background);
    } else {
      rejectPromise();
    }
  });
};

const locationFetch = (location) => {
  return new Promise(async (resolvePromise, rejectPromise) => {
    const FULL_URL = getLocationSuggestion(location);
    const response = await fetch(FULL_URL, {
      headers: {
        Accept: 'application / vnd.teleport.v1 + json',
      },
    });

    if (response.status === 200) {
      const rawData = await response.json();
      if (!rawData.count) {
        rejectPromise({ error: 'not-found' });
      } else {
        const { _embedded } = rawData;
        const searchResults = _embedded[`city:search-results`];
        //console.log(searchResults);
        const filteredData = searchResults.map((result) => {
          return {
            city: result[`matching_full_name`],
          };
        });
        //console.log({ filteredData });
        resolvePromise(filteredData);
      }
    } else {
      rejectPromise();
    }
  });
};

export default {
  weatherFetch,
  backgroundFetch,
  locationFetch,
};

export { weatherFetch, backgroundFetch, locationFetch };
