// rafce shortcut
import React from 'react'
import SwipeableCards from './SwipeableCard';

const About = () => {
  return (
    <main>
      {/* intro section */}
      <div className='flex flex-row w-full pt-14'>
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
        <p>I’m a Computer Science sophomore with a growing interest in building tools that are both practical and well-crafted. I also enjoy sharing what I learn, which has led me to contribute to Makerspace105 and volunteer with Blocks F&D—two nonprofit initiatives offering free robotics courses to high school students.

</p>
      </div>
    </main>
    
  )
}

export default About;