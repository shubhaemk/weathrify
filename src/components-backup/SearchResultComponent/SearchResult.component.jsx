import React from 'react';

import { Container, SearchItem } from './SearchResult.styles';

const SearchResultComponent = (props) => {
  const { cityResult, onSearchClick } = props;
  const isObject = typeof cityResult === 'object';
  const hasLength = cityResult.length;

  if (isObject && !hasLength) {
    return null;
  }

  return (
    <Container>
      {cityResult.map(({ city }, index) => {
        return (
          <SearchItem key={index} onClick={() => onSearchClick(city)}>
            <p>{city}</p>
          </SearchItem>
        );
      })}
    </Container>
  );
};

export default SearchResultComponent;
