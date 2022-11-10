import React, { useState, useEffect } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Main from './components/Main';

export default function App() {
  let userTheme = JSON.parse(localStorage.getItem('theme'));
  let systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? true : false;

  // the initial theme value is taken from the system settings
  const [darkMode, setDarkMode] = useState(userTheme !== null ? userTheme : systemTheme);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem('theme', 'true');
    } else {
      localStorage.setItem('theme', 'false');
    }
  }, [darkMode]);

  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}
