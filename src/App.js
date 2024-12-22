import React, { useContext } from 'react';
import './App.css';
import { ThemeContext } from './ThemeContext';

function App() {
  const { theme, color, toggleTheme, changeColor } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`} style={{ background: color }}>
      <div className="container">
        <h1>Theme Customizer Pro</h1>
        <div className="card">
          <p>
            Current theme: <strong>{theme.toUpperCase()}</strong>
          </p>
          <button onClick={toggleTheme}>
            {theme === 'light' ? 'Activate Dark Mode' : 'Activate Light Mode'}
          </button>
          <div className="color-picker">
            <p>Choose a custom background color:</p>
            <input
              type="color"
              value={color}
              onChange={(e) => changeColor(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
