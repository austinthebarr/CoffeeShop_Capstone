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

export const checkout = () => ({
  type: types.CHECKOUT,
});

export const deleteItem = (id) => ({
  type: types.DELETE_ITEM,
  id,
});

export const addToInventory = (itemName, quantity, quantityType) => ({
  type: types.ADD_TO_INVENTORY,
  itemName,
  quantity,
  quantityType,
});