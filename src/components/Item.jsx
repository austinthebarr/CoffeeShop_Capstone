import React from 'react';
import PropTypes from 'prop-types';

import stock from './../assets/images/stock.jpg';

const Item = (props) => {
  var cardInline = {
    width:'11rem',
    height:'11rem',
    padding: '10px 10px',
    marginRight: '10px'
  };
  return(
    <div className="card" style={cardInline}>
      <img className="card-img-top" src={stock}></img>
      <h5 className="card-title">{props.drinkName || props.itemName}<br/>{props.itemQuantity} {props.quantityType}</h5>
    </div>
  );
};

Item.propTypes = {
  drinkName: PropTypes.string,
  itemName: PropTypes.string,
  itemQuantity: PropTypes.number,
  quantityType: PropTypes.string,
};

export default Item;