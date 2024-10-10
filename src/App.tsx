import '../globals.css';
import { ModeToggle } from './components/mode-toggle';
import { ThemeProvider } from './components/theme-provider';
import LandingPage from './pages/LandingPage/LandingPage';
import Projects from './pages/Projects/Projects';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <ThemeProvider>
      <ModeToggle>
      </ModeToggle>
      <Routes>  
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
