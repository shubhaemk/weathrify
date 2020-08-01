import React from 'react';
import moment from 'moment';

import {
  Container,
  HeaderContainer,
  TemperatureContainer,
  HighLowContainer,
  DescriptionContainer,
  DateContainer,
  CityContainer
} from "./Overview.styles";

const OverviewComponent = props => {


  const { weatherData, selectedCity } = props;

  const {
    main: { temp, temp_max, temp_min },
    weather
  } = weatherData;

  const { description } = weather[0];
  const currentDate = new moment();
  const formatTemperature = temperature => Math.round(temperature);

  const mainTemperature = formatTemperature(temp);
  const maxTemperature = formatTemperature(temp_max);
  const minTemperature = formatTemperature(temp_min);

  return (
    <Container>
      <HeaderContainer>
        <TemperatureContainer>
          <p>{mainTemperature}&#176;C</p>
        </TemperatureContainer>
        <HighLowContainer>
          <p>{maxTemperature}&#176; &uarr;</p>
          <p>{minTemperature}&#176; &darr;</p>
        </HighLowContainer>
      </HeaderContainer>
      <DescriptionContainer>
        <DateContainer>
          <p>
            {currentDate.format('DD MMMM YYYY')} - {description}
          </p>
        </DateContainer>
        <CityContainer>
          <p>{selectedCity}</p>
        </CityContainer>
      </DescriptionContainer>
    </Container>
  );
}

export default OverviewComponent;