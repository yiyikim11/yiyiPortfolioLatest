import { useState } from 'react'
// yk all import dak knong index.js so that this file is much simpler
import{About, Body} from './components';
import Nav from './components/Nav';

const App = ()=> (
<main>
    <Nav/>
    {/* big div that handle full width */}
    <div className='flex justify-center items-center min-h-screen'>

    {/* <div>
      for draggable card on the right
    </div> */}

    {/* content body inside this */}
      <div className=' h-min w-[50%] bg-amber-200 flex flex-col justify-center items-center  min-h-screen'>
        <section className='padding space-y-10 gap-y-10'>
          <About/>
        </section>

        <section className='padding'>
          <Body/>
        </section>

    {/* <section className='padding'>
      <work experience/>
    </section>

    <section className='padding'>
      <education/>
    </section>

    <section className='padding'>
      <skill/>
    </section>

    <section className='padding'>
      <myproject/>
    </section>

    <section className='padding'>
      <acheivement/>
    </section> */}
      </div>

    </div>

  </main>
)
  

export default App;
