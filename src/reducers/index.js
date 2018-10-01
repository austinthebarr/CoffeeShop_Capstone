import { combineReducers } from 'redux';
import DrinkReducer from './DrinkReducer';
import CartReducer from './CartReducer';

const rootReducer = combineReducers({
  drinks: DrinkReducer,
  cart: CartReducer,
});

export default rootReducer;