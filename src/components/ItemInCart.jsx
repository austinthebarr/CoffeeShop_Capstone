import React from 'react';
import PropTypes from 'prop-types';

const ItemInCart = (props) => {
  return(
    <div className='centerItem'>
      <span className="badge badge-primary itemName">{props.Item}</span>
    </div>);
};
ItemInCart.propTypes = {
  Item: PropTypes.string,
};
export default ItemInCart;