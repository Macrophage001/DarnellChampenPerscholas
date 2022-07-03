import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';

import App from './App';
import MainScreen from './components/mainScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/main-screen" element={<MainScreen />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);