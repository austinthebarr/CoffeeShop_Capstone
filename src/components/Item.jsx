import React from 'react';
import Stock from './../assets/images/stock.jpg';

const Item = () => {
  var cardInline = {
    width:'18rem',
  };
  return(
    <div className="card" style={cardInline}>

      <img className="card-img-top" src={Stock}/>
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  );
};

export default Item;