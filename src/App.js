import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { projects } from './data/projects';

const Navbar = lazy(()=>import('./components/Navbar/Navbar'));
const ModernLayout = lazy(()=>import('./components/ModernLayout/ModernLayout'));
const Footer  = lazy(()=>import('./components/Footer/Footer'));

function App() {
  return (
    <div className='customScrollbar'>
      <Router>
        <Suspense fallback={<div style={{
          color: 'white', 
          height: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          fontFamily: 'Inter, sans-serif'
        }}>
          <div className="loader">Loading Experience...</div>
        </div>}>
          {/* <Navbar /> */}
          <main>
            <Routes>
              <Route 
                path="/" 
                element={
                  <ModernLayout projects={projects} />
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

