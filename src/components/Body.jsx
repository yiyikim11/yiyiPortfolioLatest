import React from 'react';
import {Link} from 'react-router-dom';

const Body = () => {
  return (
    <main className='flex w-full flex-col'>
      {/* education section */}
        <div className='mt-12 w-full '>
          <h2 className='font-bold text-lg text-left bg-black text-white w-24 rounded px-1 py-0.5'>Education</h2>
          {/* paragon block*/}
          <div
  style={{
    opacity: 1,
    filter: 'blur(0px)',
    transform: 'translateY(-6px) translateZ(0px)',
  }}
>
  <a
    className="block cursor-pointer"
    href="https://paragoniu.edu.kh/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="rounded-lg bg-card text-card-foreground flex mt-10">
      <div className="flex-none">
        <span className="relative flex shrink-0 overflow-hidden  size-16 m-auto bg-muted-background dark:bg-foreground">
          <img
            className=" h-full w-full "
            alt="Paragon"
            src="/paragonicon.png"
          />
        </span>
      </div>
      <div className="flex-grow ml-6 items-center flex-col group">
        <div className="flex flex-col">
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h3 className="inline-flex items-center justify-center font-semibold leading-none text-md sm:text-md">
              Paragon International University
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 rotate-0"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </h3>
            <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
              2023 - <span className="inline-flex items-center  text-[#3DB5F0]"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 animate-bounce" viewBox="0 0 24 24" fill="currentColor"><path d="M6 2h12v4l-4 4.5 4 4.5v4H6v-4l4-4.5L6 6V2z"></path><path d="M6 6l4 4.5L6 15v4h12v-4l-4-4.5 4-4.5V2H6v4z" fill-opacity="0.1" class="animate-pulse"></path><path d="M12 12.5L8 15h8l-4-2.5zM12 11l4-2.5H8l4 2.5z" fill-opacity="0.3"></path></svg> Present</span>
            </div>
          </div>
          <div className="font-sans text-xs">Bachelor's Degree of Computer Science</div>
        </div>
      </div>
    </div>
  </a>
          </div>

          {/* e2stem block */}
           <div
  style={{
    opacity: 1,
    filter: 'blur(0px)',
    transform: 'translateY(-6px) translateZ(0px)',
  }}
>
  <a
    className="block cursor-pointer"
    href="https://e2stem.org.kh/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="rounded-lg bg-card text-card-foreground flex mt-10">
      <div className="flex-none">
        <span className="relative flex shrink-0 overflow-hidden  size-16 m-auto bg-muted-background dark:bg-foreground">
          <img
            className=" h-full w-full "
            alt="e2stem"
            src="/e2stem1.webp"
          />
        </span>
      </div>
      <div className="flex-grow ml-6 items-center flex-col group">
        <div className="flex flex-col">
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h3 className="inline-flex items-center justify-center font-semibold leading-none text-md sm:text-md">
              E2stem Education Cambodia
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 rotate-0"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </h3>
            <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
              2020 - 2023
              </div>
          </div>
          <div className="font-sans text-xs">High School</div>
        </div>
      </div>
    </div>
  </a>
          </div>

        </div>

      {/* skill section */}
      <div className='mt-12 w-full'>
        <h2 className='font-bold text-lg text-left bg-black text-white w-11.5 rounded px-1 py-0.5 mb-5'>Skill</h2>
         
        {/* the skill blocks */}
          <div className='grid grid-ncols-2 md:grid-cols-4 gap-4'>

              {/* first block */}
            <div className='tech-cursor-hover group flex flex-col items-center shadow-sm border-2 border-black px-6 py-4 bg-white rounded-md hover:bg-gray-300/80 transition-all'>
              <div className='mb-2 w-10 h-10 relative transform transition-transform duration-300 goup-hover:-translate-y-1 group-hover:scale-110 opacity-80'>
               <img 
  alt="PHP logo"
  loading="lazy"
  decoding="async"
  src="https://www.svgrepo.com/show/306554/php.svg"
  style={{
    position: 'absolute',
    height: '100%',
    width: '100%',
    inset: 0,
    objectFit: 'contain',
    color: 'transparent'
  }}
/>
              </div>
              <h3 class="text-sm text-gray-500/80 font-medium">Php</h3>
            </div>
              {/* second block */}
            <div className='tech-cursor-hover group flex flex-col items-center shadow-sm border-2 border-black px-6 py-4 bg-white rounded-md hover:bg-gray-300/80 transition-all'>
              <div className='mb-2 w-10 h-10 relative transform transition-transform duration-300 goup-hover:-translate-y-1 group-hover:scale-110 opacity-80'>
               <img 
  alt="Laravel logo"
  loading="lazy"
  decoding="async"
  src="https://www.svgrepo.com/show/330814/laravel.svg"
  style={{
    position: 'absolute',
    height: '100%',
    width: '100%',
    inset: 0,
    objectFit: 'contain',
    color: 'transparent'
  }}
/>
              </div>
              <h3 class="text-sm text-gray-500/80 font-medium">Laravel</h3>
            </div>
              {/* third block */}
              <div className='tech-cursor-hover group flex flex-col items-center shadow-sm border-2 border-black px-6 py-4 bg-white rounded-md hover:bg-gray-300/80 transition-all'>
              <div className='mb-2 w-10 h-10 relative transform transition-transform duration-300 goup-hover:-translate-y-1 group-hover:scale-110 opacity-80'>
               <img 
  alt="React logo"
  loading="lazy"
  decoding="async"
  src="https://www.svgrepo.com/show/306646/react.svg"
  style={{
    position: 'absolute',
    height: '100%',
    width: '100%',
    inset: 0,
    objectFit: 'contain',
    color: 'transparent'
  }}
/>
              </div>
              <h3 class="text-sm text-gray-500/80 font-medium">ReactJs</h3>
            </div>
              {/* fourth */}
            <div className='tech-cursor-hover group flex flex-col items-center shadow-sm border-2 border-black px-6 py-4 bg-white rounded-md hover:bg-gray-300/80 transition-all'>
              <div className='mb-2 w-10 h-10 relative transform transition-transform duration-300 goup-hover:-translate-y-1 group-hover:scale-110 opacity-80'>
               <img 
  alt="Figma logo"
  loading="lazy"
  decoding="async"
  src="https://www.svgrepo.com/show/532271/figma.svg"
  style={{
    position: 'absolute',
    height: '100%',
    width: '100%',
    inset: 0,
    objectFit: 'contain',
    color: 'transparent'
  }}
/>

              </div>
              <h3 class="text-sm text-gray-500/80 font-medium">Figma</h3>
            </div>
              {/* fifth */}
            <div className='tech-cursor-hover group flex flex-col items-center shadow-sm border-2 border-black px-6 py-4 bg-white rounded-md hover:bg-gray-300/80 transition-all'>
              <div className='mb-2 w-10 h-10 relative transform transition-transform duration-300 goup-hover:-translate-y-1 group-hover:scale-110 opacity-80'>
               <img 
  alt="Flutter logo"
  loading="lazy"
  decoding="async"
  src="https://www.svgrepo.com/show/473613/flutter.svg"
  style={{
    position: 'absolute',
    height: '100%',
    width: '100%',
    inset: 0,
    objectFit: 'contain',
    color: 'transparent'
  }}
/>

              </div>
              <h3 class="text-sm text-gray-500/80 font-medium">Flutter</h3>
            </div>
              {/* sixth */}
             <div className='tech-cursor-hover group flex flex-col items-center shadow-sm border-2 border-black px-6 py-4 bg-white rounded-md hover:bg-gray-300/80 transition-all'>
              <div className='mb-2 w-10 h-10 relative transform transition-transform duration-300 goup-hover:-translate-y-1 group-hover:scale-110 opacity-80'>
               <img 
  alt="MySQL logo"
  loading="lazy"
  decoding="async"
  src="https://www.svgrepo.com/show/394296/mysql.svg"
  style={{
    position: 'absolute',
    height: '100%',
    width: '100%',
    inset: 0,
    objectFit: 'contain',
    color: 'transparent'
  }}
/>

              </div>
              <h3 class="text-sm text-gray-500/80 font-medium">MySQL</h3>
            </div>

          </div>
      </div>

      {/* my project section */}
      <div className='mt-12 w-full'>
          <h2 className='font-bold text-lg text-left bg-black text-white w-28 rounded px-1 py-0.5'>My Projects</h2>
          
          {/* project block card */}
          <div className='grid grid-cols-2 gap-10 mt-5'>
            {/* first block */}
            <div className='border border-gray-300 rounded-md'>
              <img src="/f1.jpg" alt="projectimg" className='w-full rounded-t-md'/>
              {/* description of project */}
              <div className='p-3'>
                <h2 className='text-xl font-bold pb-2'>F1 winner prediction</h2>
                <p className='text-sm pb-2'>Jan 2024 - Feb 2024</p>
                <p className='text-gray-500 pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quidem atque dicta omnis necessitatibus tempore dolorem, corporis voluptatum et. Debitis?</p>
                {/* languages used list */}
                <div className='flex flex-wrap gap-2'>
                  <span className="text-sm px-1 py-1 rounded-md bg-gray-100 text-black font-bold">Next.js</span>
                  <span className="text-sm px-1 py-1 rounded-md bg-gray-100 text-black font-bold">Typescript</span>
                  <span className="text-sm px-1 py-1 rounded-md bg-gray-100 text-black font-bold">PostgreSQL</span>
                  <span className="text-sm px-1 py-1 rounded-md bg-gray-100 text-black font-bold">Prisma</span>
      
                </div>
                <a 
        href="#" 
        className="px-2 py-1.5 rounded-md w-[30%] bg-black flex items-center gap-2 mt-4 text-sm"
      >
        <img 
  alt="Githublogo"
  loading="lazy"
  decoding="async"
  src="https://img.icons8.com/?size=100&id=12599&format=png&color=FFFFFF"
  style={{
    width: '25%',
    height: '25%'
    
  }}
/>
        <span className='text-white'>Source</span>
        
                </a>
              </div>
            </div>

            {/* second block */}
             <div className='border border-gray-300 rounded-md relative'>
              <img src="/f1.jpg" alt="projectimg" className='w-full rounded-t-md'/>
              {/* description of project */}
              <div className='p-3'>
                <h2 className='text-xl font-bold pb-2'>F1 winner prediction</h2>
                <p className='text-sm pb-2'>Jan 2024 - Feb 2024</p>
                <p className='text-gray-500 pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quidem atque dicta omnis necessitatibus tempore dolorem, corporis voluptatum et. Debitis?</p>
                {/* languages used list */}
                <div className='flex flex-wrap gap-2'>
                  <span className="text-sm px-1 py-1 rounded-md bg-gray-100 text-black font-bold">Next.js</span>
                  <span className="text-sm px-1 py-1 rounded-md bg-gray-100 text-black font-bold">Typescript</span>
                  <span className="text-sm px-1 py-1 rounded-md bg-gray-100 text-black font-bold">PostgreSQL</span>
              
      
                </div>
                <a 
        href="#" 
        className="absolute bottom-3 left-3 px-2 py-1.5 rounded-md w-[30%] bg-black flex items-center gap-2 mt-4 text-sm"
      >
        <img 
  alt="Githublogo"
  loading="lazy"
  decoding="async"
  src="https://img.icons8.com/?size=100&id=12599&format=png&color=FFFFFF"
  style={{
    width: '25%',
    height: '25%'
    
  }}
/>
        <span className='text-white'>Source</span>
        
                </a>
              </div>
            </div>

            {/* third block */}
             <div className='border border-gray-300 rounded-md'>
              <img src="/f1.jpg" alt="projectimg" className='w-full rounded-t-md'/>
              {/* description of project */}
              <div className='p-3'>
                <h2 className='text-xl font-bold pb-2'>F1 winner prediction</h2>
                <p className='text-sm pb-2'>Jan 2024 - Feb 2024</p>
                <p className='text-gray-500 pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quidem atque dicta omnis necessitatibus tempore dolorem, corporis voluptatum et. Debitis?</p>
                {/* languages used list */}
                <div className='flex flex-wrap gap-2'>
                  <span className="text-sm px-1 py-1 rounded-md bg-gray-100 text-black font-bold">Next.js</span>
                  <span className="text-sm px-1 py-1 rounded-md bg-gray-100 text-black font-bold">Typescript</span>
                  <span className="text-sm px-1 py-1 rounded-md bg-gray-100 text-black font-bold">PostgreSQL</span>
                  <span className="text-sm px-1 py-1 rounded-md bg-gray-100 text-black font-bold">Prisma</span>
      
                </div>
                <a 
        href="#" 
        className="px-2 py-1.5 rounded-md w-[30%] bg-black flex items-center gap-2 mt-4 text-sm"
      >
        <img 
  alt="Githublogo"
  loading="lazy"
  decoding="async"
  src="https://img.icons8.com/?size=100&id=12599&format=png&color=FFFFFF"
  style={{
    width: '25%',
    height: '25%'
    
  }}
/>
        <span className='text-white'>Source</span>
        
                </a>
              </div>
            </div>


          </div>
{/* view more block */}
      <div className=" pt-6 text-left font-medium text-base transition-all ">
  <Link
    to="/comingsoon"
    className="text-gray-500 hover:text-gray-800  inline-flex items-center"
  >
    <p>View More</p>
    <span className="ml-2">
      <svg
        stroke="gray"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 448 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
      </svg>
    </span>
  </Link>
</div>

      </div>
      

    </main>
  )
}

export default Body;

