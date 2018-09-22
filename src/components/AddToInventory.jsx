import React from 'react';
import Header from './Header';

const AddToInventory = () => {
  return (
    <div>
      <Header name='Add to Inventory'/>
      <div className='row'> 
        <div className='col-md-3'></div>
        <form className='col-md-6 formStyles'>     
          <div className="form-group">
            <label>Add Item:</label>
            <input type="item" className="form-control" id="item" aria-describedby="item" placeholder="Enter Item"></input>
          </div>
          <div className="form-group">
            <label>Amount:</label>
            <input type="number" className="form-control" id="amount" placeholder="amount"></input>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <div className='col-md-3'></div>
      </div>
    </div>
  );
};

export default AddToInventory;