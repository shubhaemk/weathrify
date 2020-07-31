import React, { useContext } from 'react';

import { City } from '../../services/contextService';

import useFetchData from '../../hooks/fetchDataHook';
import { weatherFetch } from '../../services/webService';

import {
  Container,
  MainContainer,
  DetailContainer,
  BackgroundContainer,
  OverviewContainer,
} from './SelectedCity.styles';

import BackgroundComponent from '../BackgroundComponent/Background.component';
import OverviewComponent from '../OverviewComponent/Overview.component';
import DetailComponent from '../DetailComponent/Detail.component';

const SelectedCityComponent = (props) => {
  const { selectedCity } = useContext(City);
  const splitSelectedCity = selectedCity.split(',')[0];

  const [
    weatherDataLoading,
    weatherData,
    weatherError,
  ] = useFetchData(weatherFetch, splitSelectedCity);

  /* console.log({
    splitSelectedCity,
    weatherDataLoading,
    weatherData,
    weatherError,
  }); */

  if (weatherError) {
    return <Container>Error</Container>;
  }

  if (weatherDataLoading) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <MainContainer>
        <BackgroundContainer>
          <BackgroundComponent />
        </BackgroundContainer>
        <OverviewContainer>
          <OverviewComponent
            weatherData={weatherData}
            selectedCity={selectedCity}
          />
        </OverviewContainer>
      </MainContainer>
      <DetailContainer>
        <DetailComponent weatherData={weatherData} />
      </DetailContainer>
    </Container>
  );
};

export default SelectedCityComponent;
