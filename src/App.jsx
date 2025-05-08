import { About, Body } from './components';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Comingsoon from './components/Comingsoon';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const MainContent = () => (
  <>
    <div className='flex flex-col items-center min-h-screen'>
      <Nav />
      <div className='w-full max-w-[45%]'>
        <section className='padding space-y-10 gap-y-10'>
          <About />
        </section>
        <section className='padding'>
          <Body />
        </section>
      </div>
    </div>
    <Footer />
  </>
);

const App = () => (
  <main>
    <Router>
      <Routes>
        <Route path="/comingsoon" element={<Comingsoon />} />
        <Route path="/" element={<MainContent />} />
      </Routes>
    </Router>
  </main>
);

export default App;
