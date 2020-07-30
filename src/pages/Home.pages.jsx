import React from 'react';

import SelectedCityComponent from "../components/SelectedCityComponent/SelectedCity.component";
import CardComponent from '../components/CardComponent/Card.component';

import {Container, MainCardContainer, ListCardContainer} from './Home.styles'


const HomePage = () => {
    return (
      <Container>
          <MainCardContainer>
            <CardComponent>
                <SelectedCityComponent/>
            </CardComponent>
          </MainCardContainer>
          <ListCardContainer>
            <CardComponent>

            </CardComponent>
          </ListCardContainer>
      </Container>
    );
}

export default HomePage;