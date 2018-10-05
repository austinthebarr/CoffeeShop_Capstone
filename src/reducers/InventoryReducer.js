import constants from './../constants';
const { types } = constants;
import { v4 } from 'uuid';

const InventoryReducer = (state = {}, action) => {
  let newState;
  switch(action.type){
  case types.ADD_TO_INVENTORY:{

    let newInventoryItemEntered = {
      itemName: action.itemName,
      quantity: parseFloat(action.quantity),
      quantityType: action.quantityType,
    };
    newState = Object.assign({}, state, {[v4()]: newInventoryItemEntered});
    return newState;
  }
  default:
    return state;
  }
 
};

export default InventoryReducer;