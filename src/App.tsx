import '../globals.css';
import { ThemeProvider } from './components/theme-provider';
import LandingPage from './pages/LandingPage/LandingPage';
import Projects from './pages/Projects/Projects';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    
      <Routes>  
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

  );
}

export default App;
