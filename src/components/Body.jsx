import React from 'react'

const Body = () => {
  return (
    <main className='flex w-full'>
      {/* education section */}
        <div className='mt-12 w-full '>
          <h2 className='font-bold text-lg text-left w-full'>Education</h2>
          {/* paragon block*/}
          <div className='flex flex-row pt-2' >
            <img className='w-20 h-20 mr-10' src="/paragonicon.png" alt="paragonLogo" />
            <p> Paragon International University <br />major in Computer Science</p>
            <p className='ml-auto mr-4'>2023-Present</p>
          </div>

          {/* e2stem block */}
          <div className='flex flex-row pt-5' >
            <img className='w-20 h-20 mr-10' src="/e2stem1.webp" alt="e2stemLogo" />
            <p> E2Stem Education Cambodia <br />3 years high school</p>
            <p className='ml-auto mr-4'>2020 - 2023</p>
          </div>


        </div>

      {/* skill section */}
      <div>
      </div>
      {/* my project section */}


    </main>
  )
}

export default Body;