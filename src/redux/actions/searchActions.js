import { FETCH_PLACES_SUCCESS, SELECT_PLACE, ADD_TO_HISTORY } from './actionTypes';
import googlePlacesService from '../../services/googlePlacesService';

export const fetchPlaces = (query) => async (dispatch) => {
  try {
    const places = await googlePlacesService.fetchPlaces(query);
    dispatch({ type: FETCH_PLACES_SUCCESS, payload: places });
  } catch (error) {
    console.error('Error fetching places:', error);
  }
};

export const selectPlace = (place) => (dispatch) => {
  dispatch({ type: SELECT_PLACE, payload: place });
  dispatch({ type: ADD_TO_HISTORY, payload: place });
};