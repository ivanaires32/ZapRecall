import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ResetStyles from './styles/ResetStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResetStyles />
    <App />
  </React.StrictMode>
);


