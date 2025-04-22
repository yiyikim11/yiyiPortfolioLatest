import { useState } from 'react'
// yk all import dak knong index.js so that this file is much simpler
import{About, Education} from './components';
import Nav from './components/Nav';

const App = ()=> (
<main  >
    <Nav/>
    {/* <div className=' max-w-x1 space-y-6 z-10 bg-red-100'>
    </div> */}

    <section className='padding'>
      <About/>
    </section>

    <section className='padding'>
      <Education/>
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
  </main>
)
  

export default App;
