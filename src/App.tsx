import { AnimatePresence } from 'framer-motion';
import '../globals.css';
import LandingPage from './pages/LandingPage/LandingPage';
import Projects from './pages/Projects/Projects';
import {Routes, Route, useLocation} from 'react-router-dom';
import About from './pages/About/About';


function App() {

  const location = useLocation();


  return (

    <AnimatePresence mode='sync'>
      <Routes key={location.pathname} location={location}>  
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </AnimatePresence>
 
  );
}

export default App;
