import styled from 'styled-components';

import { background, text } from '../../constants';

export const Container = styled.div`
  width: 100%;
  min-height: 5rem;

  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CityInput = styled.input`
  border: none;
  outline: none;

  width: 100%;
  height: 5rem;

  background-color: ${background.card};
  caret-color: ${background.secondary};

  line-height: 2rem;
  font-size: 2rem;
  color: ${text.secondary};

  border-bottom: 4px solid ${background.secondary};
`;
