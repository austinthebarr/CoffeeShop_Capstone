import React from 'react';

import Menu from './Menu';
import CurrentSale from './CurrentSale';
import NavBar from './NavBar';

const Pos = () => {
  return(
    <div> 
      <div className='row col-md-12'>
        <div className='col-md-8'>
          <Menu />
        </div>
        <div className='col-md-4'>
          <CurrentSale />
        </div>
      </div>
      <div className='row col-md-12'>
        <NavBar />
      </div>
    </div>
  );
};

export default Pos;