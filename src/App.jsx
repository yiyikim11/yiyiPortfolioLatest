import { About, Body, Particles } from './components';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Comingsoon from './components/Comingsoon';
import Viewfull from './components/Viewfull';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';

const MainContent = () => (
  <>
    <div className='flex flex-col items-center min-h-screen'>
      <Nav />
      <div className='w-full max-w-[40%]'>
        <section className='padding space-y-10 gap-y-10'>
          <About />
        </section>
        <section className='padding'>
          <Body />
          <Footer />
        </section>
      </div>
    </div>
    <Particles/>
  </>
);

const App = () => {
  // All hooks must be declared at the top, before any returns
  const [showMobileView, setShowMobileView] = useState(false);
  const [forceDesktop, setForceDesktop] = useState(false);
  const MOBILE_BREAKPOINT = 900;

  useEffect(() => {
    const checkScreenSize = () => {
      if (!forceDesktop && window.innerWidth < MOBILE_BREAKPOINT) {
        setShowMobileView(true);
      } else {
        setShowMobileView(false);
      }
    };

    // Check on initial load
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [forceDesktop]);

  // Function to pass to Viewfull component
  const handleViewDesktop = () => {
    setForceDesktop(true);
    setShowMobileView(false);
  };

  // If mobile view should be shown, render Viewfull component
  if (showMobileView) {
    return <Viewfull onViewDesktop={handleViewDesktop} />;
  }

  // Your existing desktop portfolio content goes here
  return (
    <main>
      {/* Show indicator if user forced desktop view on mobile */}
      {forceDesktop && window.innerWidth < MOBILE_BREAKPOINT && (
        <div className="bg-yellow-500/20 border-b border-yellow-500/50 p-3 text-center">
          <p className="text-yellow-300 text-sm">
            📱 Viewing desktop version on mobile device
          </p>
        </div>
      )}
      
      <Router>
        <Routes>
          <Route path="/comingsoon" element={<Comingsoon />} />
          <Route path="/" element={<MainContent />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;