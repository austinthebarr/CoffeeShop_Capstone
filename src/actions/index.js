import * as types from '../constants/ActionTypes';

export const addDrink = (drinkName, drinkPrice) => ({
  type: types.ADD_DRINK,
  drinkName,
  drinkPrice,
});