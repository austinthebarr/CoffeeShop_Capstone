import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from './Header';
import { addToInventory } from '../actions';

const AddToInventory = ( { dispatch }) => {
  let itemName;
  let itemQuantity;
  let quantityType;
  return (
    <div>
      <Header name='Add to Inventory'/>
      <div className='row'> 
        <div className='col-md-3'></div>
        <form 
          className='col-md-6 formStyles'
          onSubmit={e => {e.preventDefault();
            if(!itemName.value.trim() || !itemQuantity.value){
              return;
            }
            dispatch(addToInventory(itemName.value.trim(), itemQuantity.value, quantityType.value));
            itemName.value = '';
            itemQuantity.value = '';}}>     
          <div className="form-group">
            <label>Add Item:</label>
            <input 
              type="item" 
              className="form-control" 
              aria-describedby="item" 
              placeholder="Enter Item"
              ref={node => {
                itemName = node;
              }}></input>
          </div>
          <div className="form-group">
            <label>Amount:</label>
            <input 
              type="number" min="0.01" step="0.01" max="2500"
              className="form-control" 
              placeholder="amount"
              ref={node => {
                itemQuantity = node;
              }}></input>
            <select ref={node => {
              quantityType = node;}}>
              <option>Gallons</option>
              <option>Grams</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <div className='col-md-3'></div>
      </div>
    </div>
  );
};

AddToInventory.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(AddToInventory);