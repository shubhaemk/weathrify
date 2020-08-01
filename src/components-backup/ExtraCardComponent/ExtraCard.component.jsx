import React from 'react';
import styled from 'styled-components';
import LogoComponent from '../LogoComponent/LogoComponent';
import CitySearchComponent from '../CItySearchComponent/CitySearch.component';

const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 1rem;

  display: flex;
  flex-direction: column;

  & > * {
    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }
  }
`;

const ExtraCardComponent = (props) => {
  return (
    <Container>
      <LogoComponent />
      <CitySearchComponent />
    </Container>
  );
};

export default ExtraCardComponent;
