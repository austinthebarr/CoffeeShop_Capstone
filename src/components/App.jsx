import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Splash from './Splash';
import AddToInventory from './AddToInventory';
import AddToMenu from './AddToMenu';

const App = () => {
  return (
    <div className='bodyStyles'> 
      <Switch>
     
        <Route exact path='/' render={() => <Splash/>} />
        <Route path='/InventoyForm' render={() => <AddToInventory/>} />
        <Route path='/MenuForm' render={() => <AddToMenu/>} />
      
      </Switch>
    </div>
  );
};

export default App;