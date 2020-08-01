import styled from 'styled-components';

import { background, text } from '../../constants';

export const Container = styled.div`
  width: 100%;
  max-height: 20rem;

  padding 1rem;

  border: 0.1rem solid ${background.secondary};
  border-top: 0;

  overflow-y: scroll;
`;

export const SearchItem = styled.div`
  width: 100%;
  height: 5rem;

  &:not(:last-child) {
    border-bottom: 0.1rem solid ${background.secondary};
  }

  display: flex;
  justify-content: flex-start;
  align-items: center;

  cursor: pointer;

  & > p {
    color: ${text.light};
    font-size: 1.5rem;
  }
`;
