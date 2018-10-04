import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { checkout } from './../actions/index';
import { deleteItem } from './../actions/index';

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
          price += (props.cartList[item].drink.price);
          return(
            <div key={item} onClick={() => props.dispatch(deleteItem(item))}>
            <ItemInCart 
              Item={props.cartList[item].drink.drinkName}
              key={item}/> 
             </div> ); 
        })}
      </div>
      <div>
        <h3>Total: ${price}</h3>
      </div>
      <button onClick={() => props.dispatch(checkout())} className='btn-primary checkoutButton'>Checkout</button>
    </div>
  );
};

CurrentSale.propTypes = {
  cartList: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect()(CurrentSale);