// rafce shortcut
import React from 'react'

const About = () => {
  return (
    <main>
      {/* intro section */}
      <div className='flex flex-row w-full'>
        {/* the left side */}
        <div className="w-[60%] bg-blue-400 mr-3 "> 
          <h1 className='fond-bold'>Hi, I'm Yiyi</h1>
          <p className='pl-1 pr-32'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus aut quam doloremque temporibus error consequuntur vero odio. Harum, minima alias?</p>
        </div>

        {/* right side flip card */}
        <div className="w-[40%] bg-red-400">
          rectangle card swip2
        </div>
        </div>

      {/* about section */}
      <div className='mt-12'>
        <h2 className='font-bold text-lg'>About</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, tenetur ducimus. Nulla at deserunt eum quo corrupti consectetur, esse laboriosam aspernatur quod quaerat illum, ipsum cumque facilis excepturi, aperiam autem. Pariatur eius officiis vero ex! Veritatis fugiat distinctio, eius odio eaque quisquam rem ea facilis maxime sed cum officia quaerat suscipit fuga dolores dolorem, nostrum aliquid culpa ut. Asperiores maxime provident nisi quae sed quasi ab accusamus obcaecati, est harum?</p>
      </div>
    </main>
    
  )
}

export default About;