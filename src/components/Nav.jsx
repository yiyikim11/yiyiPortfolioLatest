import React, { useState, useEffect } from 'react';

const Nav = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    // Time update logic
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      
      hours = hours % 12;
      hours = hours ? hours : 12; // Convert 0 to 12
      
      setCurrentTime(`${hours}:${minutes} ${ampm}`);
    };
    
    updateTime(); // Initialize time
    const timeInterval = setInterval(updateTime, 60000); // Update every minute
    
    // Scroll event listener with expanded check 
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const wasScrolled = scrolled;
      const isScrolled = scrollPosition > 10;
      
      // Set scroll state
      setScrolled(isScrolled);
      
      // Check if we've returned to the top - explicitly expand the nav
      if (wasScrolled && !isScrolled) {
        // This is when we transition from scrolled to not scrolled (back to top)
        const navControl = document.querySelector('.nav-control');
        if (navControl) {
          navControl.classList.remove('w-30');
          navControl.classList.add('w-80');
        }
        
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
          navMenu.classList.remove('opacity-0');
          navMenu.classList.add('opacity-90');
        }
      }
    };

    // Initial check
    handleScroll();
    
    // Add event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function
    return () => {
      clearInterval(timeInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  // Determine nav bar position and style based on scroll state
  const navBarClasses = scrolled 
    ? "bg-white/30 backdrop-blur-sm shadow-sm top-4 h-[3rem] sm:h-[4.5rem]"
    : "bg-transparent top-0 h-[4.5rem]";
    
  // Navigation control width and menu visibility
  const navControlWidth = scrolled ? "w-30 hover:w-80" : "w-80";
  const menuVisibility = scrolled ? "opacity-0 group-hover:opacity-90" : "opacity-90";
  
  return (
    <div className={`flex justify-between items-center px-5 py-2 sticky transition-all duration-300 
      ${navBarClasses} z-50 w-[50%] rounded-b-md`}>
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-2xl font-bold">
          {/* Using standard classes that work across Tailwind versions */}
          <span className="text-transparent bg-clip-text" style={{
            backgroundImage: 'linear-gradient(to bottom, #4ade80, #22d3ee, #e879f9)'
          }}>Y</span>
        </span>
      </div>
      
      {/* Navigation controls - expanded at top, hover effect when scrolled */}
      <div className={`nav-control bg-black group relative flex justify-center items-center px-2 h-10 rounded-full 
           transition-all duration-300 ease-in-out ${navControlWidth} overflow-hidden`}>
        {/* Left circle */}
        <div className="flex justify-center items-center w-5 h-5 rounded-full border border-white mr-1">
          <span className="border-r border-b border-white w-1.5 h-1.5 transform rotate-45"></span>
        </div>
        
        {/* Menu items - always visible at top, show on hover when scrolled */}
        <div className={`nav-menu absolute left-[40%] transform -translate-x-[40%] flex 
             transition-opacity items-center justify-center duration-300 ease-in-out ${menuVisibility}`}>
          <a href="#" className="!text-white mx-6 whitespace-nowrap hover:text-blue-400">About</a>
          <a href="#" className="!text-white mx-6 whitespace-nowrap hover:text-blue-400">Work</a>
          <a href="#" className="!text-white mx-6 whitespace-nowrap hover:text-blue-400">Play</a>
        </div>
        
        {/* Right circle */}
        <div className="flex justify-center items-center w-5 h-5 rounded-full border border-white ml-auto"></div>
      </div>
      
      {/* Time display */}
      <div className="text-black font-bold text-sm">
        {currentTime}
      </div>
    </div>
  );
};

export default Nav;