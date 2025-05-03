// import React from 'react';
import React, { useState, useEffect } from 'react';

const Nav = () => {
  const [currentTime, setCurrentTime] = useState('');
  
  useEffect(() => {
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
    
    return () => clearInterval(timeInterval); // Cleanup interval on unmount
  }, []);
  
  return (
    <div className="flex justify-between items-center px-5 py-2 h-16 sticky top-0 bg-white z-50 w-[50%] rounded-b-md">
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-2xl font-bold">
          {/* Using standard classes that work across Tailwind versions */}
          <span className="text-transparent bg-clip-text" style={{
            backgroundImage: 'linear-gradient(to bottom, #4ade80, #22d3ee, #e879f9)'
          }}>Y</span>
        </span>
      </div>
      
      {/* Navigation controls - middle element with hover effect */}
      <div className=" bg-black group relative flex justify-center items-center px-3 h-10 rounded-full transition-all duration-300 ease-in-out w-30 hover:w-80 overflow-hidden border border-red"
           >
        {/* Left circle */}
        <div className="flex justify-center items-center w-5 h-5 rounded-full border border-white mr-1">
          <span className="border-r border-b border-white w-1.5 h-1.5 transform rotate-45"></span>
        </div>
        
        {/* Menu items that show on hover */}
        <div className="absolute left-[40%] transform -translate-x-[40%] flex opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          <a href="#" style={{ color: '#73C2FB' }} className=" mx-6 whitespace-nowrap hover:underline" >Work</a>
          <a href="#" style={{ color: '#73C2FB' }} className=" mx-6 whitespace-nowrap hover:underline">About</a>
          <a href="#" style={{ color: '#73C2FB' }} className=" mx-6 whitespace-nowrap hover:underline">Play</a>
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