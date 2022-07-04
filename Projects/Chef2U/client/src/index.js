import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';

import App from './App';
import MainScreen from './components/mainScreen';
import AuthenticationScreen from './components/authenticationScreen';
import AccountScreen from './components/accountScreen';
import Logout from './components/logout';

const avatarNavLinks = [
  { name: 'Account', link: '/account' },
  { name: 'Orders', link: '/account/orders' },
  { name: 'Logout', link: '/logout' }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<MainScreen navLinks={avatarNavLinks} />} />
        <Route path="/account" element={<AccountScreen navLinks={avatarNavLinks} />} />
        <Route path="/login" element={<AuthenticationScreen />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);