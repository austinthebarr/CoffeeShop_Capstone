import React from 'react';
import PropTypes from 'prop-types';


const NavBar = (props) => {
  return(
    <div>
      <nav className="navbar navbar-dark bg-dark navBar">
        <li onClick={props.handleShowToggleSideBar}>Plus</li>  
        <li onClick={props.handleShowingMenu}>Menu</li>
        <li onClick={props.handleHidingMenu}>Inventory</li>
      </nav>
    </div>
  );
};

NavBar.propTypes = {
  handleShowToggleSideBar: PropTypes.func.isRequired,
  handleShowingMenu: PropTypes.func.isRequired,
  handleHidingMenu: PropTypes.func.isRequired
};

export default NavBar;