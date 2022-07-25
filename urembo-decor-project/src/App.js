import React from 'react';
import './App.css';
import Home from './components/home';
import Navigation from './components/navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
