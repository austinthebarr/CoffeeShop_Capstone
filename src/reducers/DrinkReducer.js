import constants from './../constants';
const { types } = constants;
import { v4 } from 'uuid';

const initialState = {
  1: {
    drinkName: 'espresso',
    price: 3.50,
    ingriedients: [],
  },

  2: {
    drinkName: 'latte',
    price: 3.50,
    ingriedients: [],
  }
};
const DrinkReducer = (state = initialState, action) => {
  let newState;
  console.log(action);
  switch (action.type) {
  case types.ADD_DRINK: {
    let newDrinkEntered = {
      drinkName: action.drinkName,
      price: parseInt(action.drinkPrice),
      ingriedients: [],
    };
    newState = Object.assign({}, state,{[v4()]: newDrinkEntered});
    return newState;
  }
  default:
    return state;
  }
};

export default DrinkReducer;