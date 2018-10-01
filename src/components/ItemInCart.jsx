import React from 'react';
import PropTypes from 'prop-types';

const ItemInCart = (props) => {
  return(
    <div>
      <span class="badge badge-primary">{props.Item}</span>
    </div>);
};
ItemInCart.propTypes = {
  Item: PropTypes.string,
};
export default ItemInCart;