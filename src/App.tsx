import { AnimatePresence } from 'framer-motion';
import '../globals.css';
import LandingPage from './pages/LandingPage/LandingPage';
import Projects from './pages/Projects/Projects';
import {Routes, Route, useLocation, Navigate} from 'react-router-dom';
import './App.css';
import { useState } from 'react';

import About from './pages/About/About';
import SideBar from './components/SideBar/SideBar';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Teleop from './pages/Projects/ProjectPages/Teleop';
import LemonDrop from './pages/Projects/ProjectPages/LemonDrop';
import ResearchBuddy from './pages/Projects/ProjectPages/ResearchBuddy';


interface IActive{
  isActive: boolean;
}

//side bar will not be rendered on the landing page or error page
function App() {



  const location = useLocation();
  const [isActive, setActiveClass] = useState(false);

  const handleToggle = () => {
    console.log('clicked');
    setActiveClass(!isActive);
  }


  return (
    <AnimatePresence mode='sync'>
      {(location.pathname !== '/' && location.pathname !== '/404') 
        &&
      <div className={'menu-toggle ' + (isActive ? 'is-active' : '') }onClick={handleToggle}>
        <div className='hamburger'>
          <span></span>
        </div>
      </div>
      }
      
      {(location.pathname !== '/' && location.pathname !== '/404') && <SideBar isActive={isActive}/>}
      <Routes key={location.pathname} location={location}> 
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/rassor-teleoperation-console" element={<Teleop />} />
        <Route path="/projects/lemon-drop" element={<LemonDrop />} />
        <Route path="/projects/research-buddy" element={<ResearchBuddy />} />
        
        <Route path="/*" element={<Navigate to={"/404"}/>} />
        <Route path="/404" element={<ErrorPage />} />
      </Routes>
    </AnimatePresence>
 
  );
}

export default App;
