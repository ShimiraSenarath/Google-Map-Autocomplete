import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { fetchPlaces } from '../redux/actions/searchActions';

const AutocompleteInput = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    dispatch(fetchPlaces(event.target.value));
  };

  return (
    <TextField
      label="Search Places"
      value={inputValue}
      onChange={handleInputChange}
      variant="outlined"
    />
  );
};

export default AutocompleteInput;