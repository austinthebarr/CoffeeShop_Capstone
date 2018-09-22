import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <div className='navbar navbar-dark bg-dark headerStyles'>{props.name}</div>
  );
};

Header.propTypes = {
  name: PropTypes.string
};

export default Header;