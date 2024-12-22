import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [color, setColor] = useState('#ffffff');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme-preference');
    const savedColor = localStorage.getItem('theme-color');
    if (savedTheme) {
      setTheme(savedTheme);
    }
    if (savedColor) {
      setColor(savedColor);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme-preference', theme);
    localStorage.setItem('theme-color', color);
  }, [theme, color]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <ThemeContext.Provider value={{ theme, color, toggleTheme, changeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
 