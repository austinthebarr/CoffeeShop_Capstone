import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Splash from './Splash';

const App = () => {
  return (
  
    <Switch>
      <Route exact path='/' render={<Splash/>} />
    </Switch>
  );
};

export default App;