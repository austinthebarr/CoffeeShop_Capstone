import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Item from './Item';
import { addToCart } from './../actions/index';

const Menu = (props) => {
  return(
    <div className='cardFlex'>
 
      {Object.keys(props.drinkList).map((drink, i) => {
        return(
          <div key ={i} onClick={() => props.dispatch(addToCart(props.drinkList[drink], drink))}>
            <Item
              drinkName={props.drinkList[drink].drinkName}
              key={i}
            />
          </div>
        );
      })}
    </div>
  );
};

Menu.propTypes = {
  drinkList: PropTypes.object,
  drinksInCart: PropTypes.object,
  dispatch: PropTypes.func
};


export default connect()(Menu);
