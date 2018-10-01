import * as types from '../constants/ActionTypes';

export const addDrink = (drinkName, drinkPrice) => ({
  type: types.ADD_DRINK,
  drinkName,
  drinkPrice,
});

export const addToCart = (drink, drinkId) => ({
  type: types.ADD_TO_CART,
  drink,
  drinkId,
});