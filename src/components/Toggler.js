import React from 'react';
import PropTypes from 'prop-types';
import './Toggler.scss';

export default function Toggler(props) {
  return (
    <div className={props.darkMode ? 'toggler toggler--dark' : 'toggler'}>
      <p className="toggler__text">Light</p>
      <button
        type="button"
        aria-label="change color scheme"
        className="toggler__button"
        onClick={props.toggleDarkMode}>
        <span className="toggler__circle"></span>
      </button>
      <p className="toggler__text">Dark</p>
    </div>
  );
}

Toggler.propTypes = {
  darkMode: PropTypes.bool,
  toggleDarkMode: PropTypes.func
};
