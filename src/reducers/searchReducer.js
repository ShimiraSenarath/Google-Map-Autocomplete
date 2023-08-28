import { FETCH_PLACES_SUCCESS, SELECT_PLACE, ADD_TO_HISTORY } from '../redux/actions/actionTypes';

const initialState = {
  places: [],
  selectedPlace: null,
  searchHistory: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLACES_SUCCESS:
      return { ...state, places: action.payload };
    case SELECT_PLACE:
      return { ...state, selectedPlace: action.payload };
    case ADD_TO_HISTORY:
      return { ...state, searchHistory: [action.payload, ...state.searchHistory] };
    default:
      return state;
  }
};

export default searchReducer;