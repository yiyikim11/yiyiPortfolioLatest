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
              <img src="/f1.jpg" alt="projectimg" className='w-full'/>
              <div className='p-3'>
                <h2>Chat Collect</h2>
                <p>Jan 2024 - Feb 2024</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quidem atque dicta omnis necessitatibus tempore dolorem, corporis voluptatum et. Debitis?</p>
                
              </div>
            </div>

            {/* second block */}
            

          </div>
      </div>
      

    </main>
  )
}

export default Body;