import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Navbar = lazy(()=>import('./components/Navbar/Navbar'));
const Home = lazy(()=>import('./components/Home/Home'));
const About = lazy(() => import( './components/About/About'));
const Skill  = lazy(()=>import('./components/Skills/Skill'));
const Project = lazy(()=>import('./components/Porject/Project'));
const Contact = lazy(()=>import('./components/Contact/Contact'));
const Footer  = lazy(()=>import('./components/Footer/Footer'));
const Education = lazy(()=>import('./components/Education/Education'));

function App() {
  return (
    <div className='customScrollbar'>

    <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <main>
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <div id="home">
                  <Home />
                </div>
                <div id="about">
                  <About />
                </div>
                <div id='skill'>
                  <Skill/>
                </div>
                <div id='project'>
                  <Project/>
                </div>
                <div id="education">
                  <Education/>
                </div> 
                <div id='contact'>
                  <Contact/>
                </div>
                <Footer/>
              </>
            } 
          />
        </Routes>
      </main>
          </Suspense>
    </Router>
              </div>
  );
}

export default App;
