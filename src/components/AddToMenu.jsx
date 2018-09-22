import React from 'react';
import Header from './Header';

const AddToMenu = () => {
  return (
    <div>
      <Header name='Add to Menu'/>
      <div className='row'> 
        <div className='col-md-3'></div>
        <form className='col-md-6 formStyles'>     
          <div className="form-group">
            <label>Add Drink:</label>
            <input type="item" className="form-control" id="item" aria-describedby="item" placeholder="Enter New Drink"></input>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <div className='col-md-3'></div>
      </div>
    </div>
  );
};

export default AddToMenu;