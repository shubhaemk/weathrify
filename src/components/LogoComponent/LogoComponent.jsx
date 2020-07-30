import React from 'react';
import styled from 'styled-components';

import { background, text, borderRadius } from '../../constants';

const Container = styled.div`
  width: 100%;
  height: 30%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: ${background.secondary};

  border-radius: ${borderRadius};
  & > p {
    font-size: 3rem;
    color: ${text.light};

    margin-bottom: 1rem;
  }

  & > a {
    font-size: 1.5rem;
    color: ${text.light};
    text-decoration: none;
  }
`;

const APP_NAME = `Weatherify`;
const DEV_NAME = `by @shubham_kamath`;
const DEV_URL = `https://twitter.com/shubham_kamath`;

const LogoComponent = (props) => {
  return (
    <Container>
      <p>{APP_NAME}</p>
      <a href={DEV_URL} target="__blank">
        {DEV_NAME}
      </a>
    </Container>
  );
};

export default LogoComponent;
