import constants from './../constants';
const { types } = constants;
import { v4 } from 'uuid';

const CartReducer = (state = {}, action) => {
  let newState;
  switch(action.type){
  case types.ADD_TO_CART: {
    let clickedDrink = {
      drink: action.drink,
      drinkId: action.drinkId,
    };
    newState = Object.assign({}, state, {[v4()]:clickedDrink});
    return newState;
  }
  default:
    return state;
  }
};

export default CartReducer;