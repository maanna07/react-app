import React from 'react';
import Router from './Router'
import routes from './Router.js'
import './App.css';

function App() {
  return (
    <Router routes={routes} />
  );
}

export default App;
