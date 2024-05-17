import React from 'react';
import HomePage from './components/HomePage';
import './index.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>

    </div>
  );
}

export default App;
