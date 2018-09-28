import React, { Component } from 'react';

import Menu from './Menu';
import Inventory from './Inventory';
import CurrentSale from './CurrentSale';
import NavBar from './NavBar';
import SideBarNav from './SideBarNav';

class Pos extends Component {

  constructor(props) {
    super(props);

    this.state = {
      toggleSideBar: false,
      toggleMenu: true,
    };

    this.onShowToggleSideBar = this.onShowToggleSideBar.bind(this);
    this.onHidingToggleSideBar = this.onHidingToggleSideBar.bind(this);
    this.onShowingMenu = this.onShowingMenu.bind(this);
    this.onHidingMenu = this.onHidingMenu.bind(this);
  }

  onShowToggleSideBar(){
    this.setState({toggleSideBar: true});
  }

  onHidingToggleSideBar(){
    this.setState({ toggleSideBar: false});
  }

  onShowingMenu(){
    this.setState({toggleMenu: true});
  }

  onHidingMenu(){
    this.setState({toggleMenu: false});
  }

  showSideBar(){
    if(this.state.toggleSideBar){
      return 'show col-md-4';
    } else {
      return 'hide';
    }
  }

  showInventory(){
    if(!this.state.toggleMenu){
      return 'show menuStyles';
    } else {
      return 'hide';
    }
  }

  showMenu(){
    if(this.state.toggleMenu){
      return 'show menuStyles';
    } else {
      return 'hide';
    }
  }

  render(){
    return(
      
      <div className='position'>
        <div className='row'>
          <div className={this.showSideBar()}>
            <SideBarNav 
              handleHidingToggleSideBar = {this.onHidingToggleSideBar} 
            />
          </div>
          <div className='col-md-8 paddingColRight paddingColLeft '> 
            <div className={this.showMenu()}>
              <Menu /> 
            </div> 
            <div className={this.showInventory()}>
              <Inventory /> 
            </div> 
            <NavBar
              handleShowToggleSideBar = { this.onShowToggleSideBar}
              handleShowingMenu = {this.onShowingMenu}
              handleHidingMenu = {this.onHidingMenu}/>
          </div>
          
          <div className='col-md-4 paddingColLeft'>
            <CurrentSale />
          </div>
        </div>
      </div>

    );
  } 
}

export default Pos;