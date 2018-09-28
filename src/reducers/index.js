import { combineReducers } from 'redux';
import DrinkReducer from './DrinkReducer';

const rootReducer = combineReducers({
  drinks: DrinkReducer
});

export default rootReducer;