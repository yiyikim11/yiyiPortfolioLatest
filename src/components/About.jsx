// rafce shortcut

import SwipeableCards from './SwipeableCard';

const About = () => {
  return (
    <main>
      {/* intro section */}
      <div className='flex flex-row w-full pt-12'>
        {/* the left side */}
        <div className="w-[60%] "> 
          <p className='m-0 p-0 font-bold text-3xl'>Hi, I'm Yiyi <span className='text-2xl mb-2'>✨</span> </p>
          <p className=' pr-24 pt-3'>Emerging developer based in Phnom Penh, prioritizing quality and efficiency in everything I create :D</p>
        </div>

        {/* right side flip card */}
        <div className="w-[50%] ">
          <SwipeableCards/>
        </div>
        </div>

      {/* about section */}
      <div className='mt-10'>
      <div className=" px-2 py-1 w-fit mb-3 border-1 border-gray-200 bg-gray-100 text-gray-700 text-xs rounded-lg shadow-[2px_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[4px_4px_12px_rgba(0,0,0,0.15)] transition-all duration-200">
        About
      </div>
        <p>I’m a Computer Science sophomore with a growing interest in building tools that are both practical and well-crafted. I also enjoy sharing what I learn, which has led me to contribute to Makerspace105 and volunteer with Blocks F&D—two nonprofit initiatives offering free robotics courses to high school students.

</p>
      </div>
    </main>
    
  )
}

export default About;