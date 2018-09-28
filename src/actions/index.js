import * as types from '../constants/ActionTypes';

export const addDrink = (drinkName) => ({
  type: types.ADD_DRINK,
  drinkName
});