import React, { Component } from 'react';

import Menu from './Menu';
import CurrentSale from './CurrentSale';
import NavBar from './NavBar';

class Pos extends Component {

  constructor(props) {
    super(props);

    this.state = {
      toggleSideBar: false
    }

    this.onShowToggleSideBar = this.onShowToggleSideBar.bind(this);
    this.onHidingToggleSideBar = this.onHidingToggleSideBar.bind(this);
  }

  onShowToggleSideBar(){
    this.setState({toggleSideBar: true});
  }

  onHidingToggleSideBar(){
    this.setState({ toggleSideBar: false});
  }

  render(){
    return(
      <div className='position'> 
        <div className='row'>
          <div className='col-md-8 paddingColRight'> 
            <div className='menuStyles'>
              <Menu /> 
            </div> 
            <div >
              <NavBar handleShowToggleSideBar = {this.onShowToggleSideBar} />
            </div>
          </div>
          <div className='col-md-4 paddingColLeft'>
            <CurrentSale />
          </div>
        </div>
      </div>
    );
  } 
};

export default Pos;