// Viewfull.jsx
import React from 'react';
import { Monitor, Smartphone } from 'lucide-react';

const Viewfull = ({ onViewDesktop }) => {
  return (
    <main>
    <div className=' w-screen flex flex-col items-center h-screen justify-center '>
      <img className='w-[10%] h-[20%] mb-10' src="https://media1.tenor.com/m/zYNc4_kPKDsAAAAd/hive-cats.gif" alt="catgif" />
    
        <div className='text-center text-2xl font-bold text-gray-400 animate-bounce'>Go to desktop mode to view full version</div>
        
    </div>
</main>
  )
};

export default Viewfull;