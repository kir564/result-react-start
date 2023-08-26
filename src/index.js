import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Todo from './todo';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  </React.StrictMode>
);
