import React from 'react';
import stock from './../assets/images/stock.jpg';

const Item = () => {
  var cardInline = {
    width:'11rem',
    height:'11rem',
    padding: '10px 10px',
    marginRight: '10px'
  };
  return(
    <div className="card" style={cardInline}>
      <img className="card-img-top" src={stock}></img>
      <h5 className="card-title">Espresso</h5>
    </div>
  );
};

export default Item;