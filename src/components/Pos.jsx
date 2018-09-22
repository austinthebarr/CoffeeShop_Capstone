import React from 'react';

import Menu from './Menu';
import CurrentSale from './CurrentSale';
import NavBar from './NavBar';

const Pos = () => {
  return(
    <div className='position'> 
      <div className='row'>
        <div className='col-md-8 paddingColRight'> 
          <div className='menuStyles'>
            <Menu /> 
          </div> 
          <div >
            <NavBar />
          </div>
        </div>
        <div className='col-md-4 paddingColLeft'>
          <CurrentSale />
        </div>
      </div>
    </div>
  );
};

export default Pos;