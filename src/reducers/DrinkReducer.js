import constants from './../constants';
const { types } = constants;
import { v4 } from 'uuid';

const DrinkReducer = (state = {1:{drinkName: espresso}}, action) => {
  let newState;
  switch (action.type) {
  case types.ADD_DRINK: {
    let newDrinkEntered = {
      drinkName: action.drinkName,
    };
    newState = Object.assign({}, state,{[v4()]: newDrinkEntered});
    return newState;
  }
  default:
    return state;
  }
};

export default DrinkReducer;