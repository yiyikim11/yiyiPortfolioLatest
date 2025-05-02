import React from 'react'

const Body = () => {
  return (
    <main className='flex w-full flex-col'>
      {/* education section */}
        <div className='mt-12 w-full '>
          <h2 className='font-bold text-lg text-left bg-black text-white w-24 rounded px-1 py-0.5'>Education</h2>
          {/* paragon block*/}
          <div className='mt-5 flex flex-row pt-2' >
            <img className='w-20 h-20 mr-10' src="/paragonicon.png" alt="paragonLogo" />
            <p> Paragon International University <br />major in Computer Science <br />rean ot ton jhop te lov sophomore </p>
            <p className='ml-auto mr-4'>2023-Present</p>
          </div>

          {/* e2stem block */}
          <div className='mt-5 flex flex-row pt-5' >
            <img className='w-20 h-20 mr-10' src="/e2stem1.webp" alt="e2stemLogo" />
            <p> E2Stem Education Cambodia <br />3 years high school</p>
            <p className='ml-auto mr-4'>2020 - 2023</p>
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
        className="px-3 py-0.5 rounded-md w-[35%] bg-black flex items-center gap-2 mt-4 text-sm"
      >
        <svg
  xmlns="http://www.w3.org/2000/svg"
  x="0px"
  y="0px"
  width="100"
  height="100"
  viewBox="0 0 256 256"
  style={{ fill: '#FFFFFF' }}
>
  <g
    fill="#ffffff"
    fillRule="nonzero"
    stroke="none"
    strokeWidth="1"
    strokeLinecap="butt"
    strokeLinejoin="miter"
    strokeMiterlimit="10"
    strokeDasharray=""
    strokeDashoffset="0"
    fontFamily="none"
    fontWeight="none"
    fontSize="none"
    textAnchor="none"
    style={{ mixBlendMode: 'normal' }}
  >
    <g transform="scale(10.66667,10.66667)">
      <path d="M10.9,2.1c-4.6,0.5 -8.3,4.2 -8.8,8.7c-0.6,5 2.5,9.3 6.9,10.7v-2.3c0,0 -0.4,0.1 -0.9,0.1c-1.4,0 -2,-1.2 -2.1,-1.9c-0.1,-0.4 -0.3,-0.7 -0.6,-1c-0.3,-0.1 -0.4,-0.1 -0.4,-0.2c0,-0.2 0.3,-0.2 0.4,-0.2c0.6,0 1.1,0.7 1.3,1c0.5,0.8 1.1,1 1.4,1c0.4,0 0.7,-0.1 0.9,-0.2c0.1,-0.7 0.4,-1.4 1,-1.8c-2.3,-0.5 -4,-1.8 -4,-4c0,-1.1 0.5,-2.2 1.2,-3c-0.1,-0.2 -0.2,-0.7 -0.2,-1.4c0,-0.4 0,-1 0.3,-1.6c0,0 1.4,0 2.8,1.3c0.5,-0.2 1.2,-0.3 1.9,-0.3c0.7,0 1.4,0.1 2,0.3c1.3,-1.3 2.8,-1.3 2.8,-1.3c0.2,0.6 0.2,1.2 0.2,1.6c0,0.8 -0.1,1.2 -0.2,1.4c0.7,0.8 1.2,1.8 1.2,3c0,2.2 -1.7,3.5 -4,4c0.6,0.5 1,1.4 1,2.3v3.3c4.1,-1.3 7,-5.1 7,-9.5c0,-6 -5.1,-10.7 -11.1,-10z" />
    </g>
  </g>
</svg>

        <span className='text-white'>Source</span>
        
                </a>
              </div>
            </div>

            {/* second block */}
            

          </div>
      </div>
      

    </main>
  )
}

export default Body;

