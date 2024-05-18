import React from 'react';
import HomePage from './components/HomePage';
import './index.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ReviewsSection from './components/ReviewSection';
import ApplySection from './components/ApplySection';
import SupportSection from './components/SupportSection';
import FeaturesSection from './components/FeaturesSection';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <ReviewsSection/>
      <ApplySection/>
      <SupportSection/>
      <FeaturesSection/>
    </div>
  );
}

export default App;
