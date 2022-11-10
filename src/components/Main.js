import React from 'react';
import PropTypes from 'prop-types';
import './Main.scss';

export default function Main(props) {
  return (
    <main className={props.darkMode ? 'main main--dark' : 'main'}>
      <h1 className="main__title">Fun facts about React</h1>
      <ul className="main__list">
        <li className="main__list-item">Was first released in 2013</li>
        <li className="main__list-item">Was originally created by Jordan Walke</li>
        <li className="main__list-item">Has well over 100K stars on GitHub</li>
        <li className="main__list-item">Is maintained by Facebook</li>
        <li className="main__list-item">
          Powers thousands of enterprise apps, including mobile apps
        </li>
      </ul>
    </main>
  );
}

Main.propTypes = {
  darkMode: PropTypes.bool
};
