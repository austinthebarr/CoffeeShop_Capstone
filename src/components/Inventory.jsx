import React from 'react';
import PropTypes from 'react';

import Item from './Item';

const Inventory = (props) => {
  return(<div className='cardFlex'>
    {Object.keys(props.inventoryList).map((item, i) => {
      return(
        <Item
          itemName={props.inventoryList[item].itemName}
          itemQuantity={props.inventoryList[item].quantity}
          quantityType={props.inventoryList[item].quantityType}
          key={i}
        />
      );
    })}
  </div>);
};
Inventory.propTypes = {
  inventoryList: PropTypes.Object,
};



export default Inventory;