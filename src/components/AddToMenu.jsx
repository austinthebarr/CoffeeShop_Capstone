import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addDrink } from './../actions/index';

import Header from './Header';

const AddToMenu = ({ dispatch }) => {
  let drinkName;
  let priceOfDrink;
  return (
    <div>
      <Header name='Add to Menu'/>
      <div className='row'> 
        <div className='col-md-3'></div>
        <form 
          onSubmit={e => {e.preventDefault(); 
            if(!drinkName.value.trim() || !priceOfDrink.value){
              return;
            } 
            console.log(priceOfDrink.value);
            dispatch(addDrink(drinkName.value.trim(), priceOfDrink.value));
            drinkName.value = '';
          }} className='col-md-6 formStyles'>     
          <div className="form-group">
            <label>Add Drink:</label>
            <input
              className="form-control" 
              aria-describedby="item" 
              placeholder="Enter New Drink"
              ref={node => {
                drinkName = node;
              }}></input>
            <input
              className="form-control" 
              aria-describedby="item" 
              placeholder="Enter Price"
              ref={node => {
                priceOfDrink = node;
              }}></input>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <div className='col-md-3'></div>
      </div>
    </div>
  );
};
AddToMenu.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(AddToMenu);