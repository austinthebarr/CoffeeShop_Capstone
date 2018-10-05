import React from 'react';
import PropTypes from 'react';

import Item from './Item';

const Inventory = (props) => {
  return(<div className='cardFlex'>
    {Object.keys(props.inventoryList).map((item, i) => {
      return(
        <Item
          item={props.inventoryList[item].itemName}
          quanity={props.inventoryList[item].quanity}
          key={i}
        />
      );
    })}
  </div>);
};
Inventory.propTypes = {
  inventoryList: PropTypes.object,
};



export default Inventory;