import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.scss';
import Toggler from './Toggler';
import logo from './images/react-icon-small.png';

export default function Navbar(props) {
  return (
    <nav className={props.darkMode ? 'nav nav--dark' : 'nav'}>
      <img className="nav__icon" src={logo} />
      <h3 className="nav__title">ReactFacts</h3>
      <Toggler darkMode={props.darkMode} toggleDarkMode={props.toggleDarkMode} />
    </nav>
  );
}

Navbar.propTypes = {
  darkMode: PropTypes.bool,
  toggleDarkMode: PropTypes.func
};
