import React from 'react';
import { useSelector } from 'react-redux';

const SearchHistory = () => {
  const searchHistory = useSelector(state => state.search.searchHistory);

  return (
    <div>
      <h2>Search History</h2>
      <ul>
        {searchHistory && searchHistory.map((place, index) => (
          <li key={index}>{place.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;