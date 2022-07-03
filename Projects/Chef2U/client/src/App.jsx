import React from 'react'
import IntroScreen from './components/introScreen';
import AuthenticationScreen from './components/authenticationScreen';
import MainScreen from './components/mainScreen';

import './styles/App.css';

const App = () => {
  return (
    <div>
      {/* <IntroScreen /> */}
      <AuthenticationScreen />
      {/* <MainScreen /> */}
    </div>
  )
}

export default App
