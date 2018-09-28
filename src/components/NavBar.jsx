import React from 'react';
import PropTypes from 'prop-types';


const NavBar = (props) => {
  return(
    <div>
      <nav className="navbar navbar-dark bg-dark navBar">
        <li onClick={() => props.handleShowToggleSideBar}>Plus</li>  
        <li>Menu</li>
        <li>Inventory</li>
      </nav>
    </div>
  );
};

NavBar.propTypes = {
  handleShowToggleSideBar: PropTypes.func.isRequired
}

export default NavBar;