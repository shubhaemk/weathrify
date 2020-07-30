import React, { useState } from 'react';

import { City } from '../services/contextService';

import {
  Container,
  MainCardContainer,
  ListCardContainer,
} from './Home.styles';

import SelectedCityComponent from '../components/SelectedCityComponent/SelectedCity.component';
import CardComponent from '../components/CardComponent/Card.component';
import ExtraCardComponent from '../components/ExtraCardComponent/ExtraCard.component';

const HomePage = () => {
  const [selectedCity, setSelectedCity] = useState('Pune');

  return (
    <City.Provider value={{ selectedCity, setSelectedCity }}>
      <Container>
        <ListCardContainer>
          <CardComponent>
            <ExtraCardComponent />
          </CardComponent>
        </ListCardContainer>
        <MainCardContainer>
          <CardComponent>
            <SelectedCityComponent />
          </CardComponent>
        </MainCardContainer>
      </Container>
    </City.Provider>
  );
};

export default HomePage;
