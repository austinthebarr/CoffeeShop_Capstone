import React from 'react';

import Header from './Header';

const Splash = () => {
  return (
    <div>
      <Header name='Welcome to CoffeeShop!' />
      <div className='row'> 
        <div className='col-md-3'></div>
        <form className='col-md-6 formStyles'>     
          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <div className='col-md-3'></div>
      </div> 
    </div>
  );
};

export default Splash;