import React, { useContext, useState, useEffect } from 'react';

import { Container, CityInput } from './CitySearch.styles';

import { City } from '../../services/contextService';
import { locationFetch } from '../../services/webService';

import useDebounce from '../../hooks/useDebounceHook';
import SearchResultComponent from '../SearchResultComponent/SearchResult.component';

const CitySearchComponent = (props) => {
  const [localCity, setLocalCity] = useState('');
  const [cityResult, setCityResult] = useState([]);
  const { selectedCity, setSelectedCity } = useContext(City);

  const localCityDebounced = useDebounce(localCity, 500);

  useEffect(() => {
    (async () => {
      if (
        typeof localCityDebounced === 'string' &&
        localCityDebounced.length
      ) {
        const cityResult = await locationFetch(localCityDebounced);
        setCityResult(cityResult);
      }
    })();
  }, [localCityDebounced]);

  useEffect(() => {
    if (typeof localCity === 'string' && !localCity.length) {
      setCityResult([]);
    }
  }, [localCity]);

  const onSearchClick = (selectedCity) => {
    setSelectedCity(selectedCity);
    setLocalCity('');
    setCityResult([]);
  };

  return (
    <Container>
      <CityInput
        autoFocus={true}
        value={localCity}
        placeholder="Search City"
        onChange={(event) => setLocalCity(event.target.value)}
      />
      <SearchResultComponent
        cityResult={cityResult}
        onSearchClick={onSearchClick}
      />
    </Container>
  );
};

export default CitySearchComponent;
