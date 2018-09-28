import * as types from '../constants/ActionTypes';

export const drinkAdded = (drinkName) => ({
  type: types.ADD_DRINK,
  drinkName
});