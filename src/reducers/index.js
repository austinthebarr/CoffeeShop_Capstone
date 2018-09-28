import { combineReducers } from 'redux';
import DrinkReducer from './DrinkReducer';

const rootReducer = combineReducers({
  drink: DrinkReducer
});

export default rootReducer;