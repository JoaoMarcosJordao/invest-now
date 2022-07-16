import React from 'react';
import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = document.getElementById('root');

const newRender = createRoot(root);

newRender.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

);
