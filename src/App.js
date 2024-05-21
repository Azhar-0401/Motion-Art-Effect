import React from 'react';
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
       <Navbar />
      {/* {/* <HeroSection />
      <ReviewSection />
      <ApplySection />
      <SupportSection />
      <FeaturesSection />
      <FooterSection /> */} 
      <iframe
        className="full-screen-preview__frame"
        src="https://qodematrix.com/motion-art-for-elementor/"
        name="preview-frame"
        frameBorder="0"
        noResize="noresize"
        data-view="fullScreenPreview"
        allow="geolocation 'self'; autoplay 'self'"
        style={{ height: '887px', width: '100%' }}
      />
    </div>
  );
}

export default App;
