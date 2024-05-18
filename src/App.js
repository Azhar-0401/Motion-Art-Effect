import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ReviewSection from './components/ReviewSection';
import ApplySection from './components/ApplySection';
import SupportSection from './components/SupportSection';
import FeaturesSection from './components/FeaturesSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <ReviewSection/>
      <ApplySection/>
      <SupportSection/>
      <FeaturesSection/>
      <FooterSection/>
    </div>
  );
}

export default App;
