import React from 'react';
import PropTypes from 'prop-types';

import ItemInCart from './ItemInCart';

const CurrentSale = (props) => {
  let price = 0;
  return(
    <div className='borderControl'>
      <nav className="navbar navbar-dark bg-dark headerStyles">
      Current Sale:
      </nav>
      <div className='cartList'>
        {Object.keys(props.cartList).map((item)=> { 
          console.log(price);
          price += (props.cartList[item].drink.price);
          return(
            <ItemInCart 
              Item={props.cartList[item].drink.drinkName}
              key={item}/>);  
        })}
      </div>
      <div>
        <h3>Total: ${price}</h3>
      </div>
      <button className='btn-primary checkoutButton'>Checkout</button>
    </div>
  );
};

CurrentSale.propTypes = {
  cartList: PropTypes.object
};

export default CurrentSale;