import React from 'react';
import PropTypes from 'prop-types';

import ItemInCart from './ItemInCart';

const CurrentSale = (props) => {
  return(
    <div className='borderControl'>
      <nav className="navbar navbar-dark bg-dark headerStyles">
      Current Sale:
      </nav>
      <div className='cartList'>
        {Object.keys(props.cartList).map((item)=> { 
          console.log(props.cartList[item].drink.drinkName);
          return(
          <ItemInCart 
          Item={props.cartList[item].drink.drinkName}/>);  
        })}
      </div>
      <button className='btn-primary checkoutButton'>Checkout</button>
    </div>
  );
};

CurrentSale.propTypes = {
  cartList: PropTypes.object
};

export default CurrentSale;