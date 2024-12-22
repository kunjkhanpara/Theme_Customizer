import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the new method for React 18
import './index.css';
import App from './App';
import ThemeProvider from './ThemeContext';

// Create the root and render the app
const root = ReactDOM.createRoot(document.getElementById('root')); // Matches <div id="root"></div> in index.html
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
