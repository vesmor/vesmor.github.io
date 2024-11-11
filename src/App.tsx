import { AnimatePresence } from 'framer-motion';
import '../globals.css';
import LandingPage from './pages/LandingPage/LandingPage';
import Projects from './pages/Projects/Projects';
import {Routes, Route, useLocation, Navigate} from 'react-router-dom';
import About from './pages/About/About';
import SideBar from './components/SideBar/SideBar';
import ErrorPage from './pages/ErrorPage/ErrorPage';

//side bar will not be rendered on the landing page
function App() {

  const location = useLocation();


  return (
    <AnimatePresence mode='sync'>
      {(location.pathname !== '/' && location.pathname !== '/404') && <SideBar/>}
      <Routes key={location.pathname} location={location}> 
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Navigate to={"/404"}/>} />
        <Route path="/404" element={<ErrorPage />} />
      </Routes>
    </AnimatePresence>
 
  );
}

export default App;
