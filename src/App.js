import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Skill from './components/Skills/Skill';
import Project from './components/Porject/Project';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Education from './components/Education/Education';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
