import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer.js'
import CardContainer from './components/CardComponents/CardContainer';

function App() {
  return (
    <div className="app-container">
      <HeaderContainer />
      <CardContainer />
      </div>
  );
};

export default App;