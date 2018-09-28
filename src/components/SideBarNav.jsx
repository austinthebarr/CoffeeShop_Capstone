import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SideBarNav = (props) => {

  return(
    <div onClick={props.handleHidingToggleSideBar} className="wrapper">
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>Add</h3>
        </div>

        <ul className="list-unstyled components">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/InventoyForm'>Add Item to Inventoy</Link>
          </li>
          <li>
            <Link to='/MenuForm'>Add Item to Menu</Link>
          </li>
        </ul>
      </nav>
    </div>    );
};

SideBarNav.propTypes = {
  handleHidingToggleSideBar: PropTypes.func.isRequired
};

export default SideBarNav;
