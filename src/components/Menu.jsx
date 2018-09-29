import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

const Menu = (props) => {
  return(
    <div className='cardFlex'>
 
      {Object.keys(props.drinkList).map((drink, i) => {
        return(
          <Item
            drinkName={props.drinkList[drink].drinkName}
            key={drink}
          />
        );
      })}
    </div>
  );
};

Menu.propTypes = {
  drinkList: PropTypes.object
};

export default Menu;
