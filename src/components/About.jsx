// rafce shortcut
import React from 'react'
import SwipeableCards from './SwipeableCard';

const About = () => {
  return (
    <main>
      {/* intro section */}
      <div className='flex flex-row w-full pt-10'>
        {/* the left side */}
        <div className="w-[60%] "> 
          <h1 className='m-0 p-0 fond-bold'>Hi, I'm Yiyi <span className='text-4xl mb-2'>✨</span> </h1>
          <p className=' pr-24 pt-3'>Developer-wanna-be based in Phnom Penh, prioritizing quality and efficiency in everything I create :D</p>
        </div>

        {/* right side flip card */}
        <div className="w-[50%] ">
          <SwipeableCards/>
        </div>
        </div>

      {/* about section */}
      <div className='mt-15'>
        <h3 className=' mb-5 font-bold text-lg bg-black text-white w-15.5 rounded px-1 py-0.5'>About</h3>
        <p>I’m currently a sophomore majoring in Computer Science, with a focus on creating tech that solves real-world problems. My work spans coding, robotics, and innovative problem-solving, always keeping simplicity, efficiency, and impact at the forefront. Whether I’m developing software or designing systems, I prioritize accessibility and usability to ensure technology is practical for everyone, regardless of their background. I’m constantly exploring new ways to make tech more inclusive and to turn ideas into meaningful solutions.

</p>
      </div>
    </main>
    
  )
}

export default About;