import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import searchReducer from '../reducers/searchReducer';

const rootReducer = combineReducers({
  search: searchReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;