import React, { useContext, useState } from 'react';

import { City } from '../../services/contextService';

import { locationFetch } from '../../services/webService';
import useFetchData from '../../hooks/fetchDataHook';

const CitySearchComponent = (props) => {
  const [localCity, setLocalCity] = useState('');
  const { selectedCity, setSelectedCity } = useContext(City);
  const [loading, cityResult, error] = useFetchData(
    locationFetch,
    'san',
  );

  return (
    <div>
      <input
        value={localCity}
        onChange={(event) => setLocalCity(event.target.value)}
      />
    </div>
  );
};

export default CitySearchComponent;
