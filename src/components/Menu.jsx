import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

const Menu = (props) => {
 
  {Object.keys(props.drinkList).map(function(drinkId){
    var drink = props.drinkList[drinkId];
    return( 
      <div key={drinkId} className='cardFlex'>
        <Item
          drinkName={drink.drinkName}
          key={drinkId}
        />
      </div>);
  });}
  
};

Menu.propTypes = {
  drinkList: PropTypes.object
};

export default Menu;