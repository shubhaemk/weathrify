import styled from 'styled-components';

import { background, borderRadius } from '../../constants';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${background.card};
  border-radius: ${borderRadius};

  overflow: hidden;
`;
