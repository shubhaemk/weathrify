import React from 'react';

import useFetchData from '../../hooks/fetchDataHook';
import { backgroundFetch } from '../../services/webService';

import { Container } from './Background.styles';

const BackgroundComponent = (props) => {
  const [isLoading, data, error] = useFetchData(
    backgroundFetch,
    false,
  );

  if (error) {
    return 'Error';
  }

  if (isLoading) {
    return 'Loading...';
  }

  if (data) {
    return <Container url={data} />;
  }
};

export default BackgroundComponent;
