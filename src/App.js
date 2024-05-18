import React from 'react';
import HomePage from './components/HomePage';
import './index.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ReviewsSection from './components/ReviewSection';
import ApplySection from './components/ApplySection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <ReviewsSection/>
      <ApplySection/>
    </div>
  );
}

export default App;
