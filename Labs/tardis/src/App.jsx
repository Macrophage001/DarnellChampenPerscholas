import React from 'react'
import { useReducer } from 'react';
import './App.css';
import { DivOne } from './components/divOne';
import { context } from './context';

const App = () => {
  const reducer = (state, action) => {
    const { type, payload } = action;
    return {
      'add': () => state + 1,
      'subtract': () => state - 1,
      'default': () => state,
    }[type]();
  }

  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <context.Provider value={{ state, dispatch }}>
      <div>
        <DivOne />
      </div>
    </context.Provider>
  )
}

export default App;
