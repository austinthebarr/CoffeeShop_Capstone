import { combineReducers } from 'redux';
import DrinkReducer from './DrinkReducer';
import CartReducer from './CartReducer';
import InventoryReducer from './InventoryReducer';

const rootReducer = combineReducers({
  drinks: DrinkReducer,
  cart: CartReducer,
  inventory: InventoryReducer,
});

export default rootReducer;