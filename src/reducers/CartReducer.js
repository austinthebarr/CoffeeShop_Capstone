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
  
  case types.CHECKOUT: {
    newState = {};
    return newState;
  }
  case types.DELETE_ITEM: {
    const removeProperty = (obj, property) => {
      for(let key in obj){
        var item = obj[key];
        if(property !== key){
          newState = Object.assign({}, newState, {[key]:item});
        } 
      }
      if(newState === undefined){
        return newState = {};
      } 
      return newState;
    };
    return removeProperty(state, action.id);
  }
  default:
    return state;
  }
};

export default CartReducer;