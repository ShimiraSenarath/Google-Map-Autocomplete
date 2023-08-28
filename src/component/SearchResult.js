import React from 'react';

const SearchResult = ({ place, onClick }) => (
  <div onClick={() => onClick(place)}>
    {place && place.name ? place.name : 'No name available'}
  </div>
);

export default SearchResult;