
import AnimatedPage from '@/animation/AnimatedPage';
import './LandingPage.css';
import { ShinyButtonLink } from '@/components/ShinyButton';
import 'tailwindcss/tailwind.css';
import {ExitAnimation , ExitButton} from '@/animation/ExitLanding';

function LandingPage() {
  return (
    <ExitAnimation>
      
      <div className="landingpage-div ">
        <div className="introduction-plate text-secondary-foreground">
          <div className='header-plate'>
            <div className='name-plate'>
              <h1>Hi, I'm Sev.</h1>
            </div>
            <div className="subheading-plate">
              <h2>Welcome to my page!</h2> 
            </div>      
          </div>
          <div className="graphics-plate">
            
            <img src={'assets/images/standin_profile.jpg'} alt="graphic"/>
            
          </div>
        </div>

        <ExitButton>
        <div className="buttons-plate">
          <div className='aboutme' id='about-btn'>
            <ShinyButtonLink text='Learn more about me!' link='/about'></ShinyButtonLink>
          </div>
          <div className='aboutme' id='project-btn'>
            <ShinyButtonLink text="See what I've been up to!" link='/projects'></ShinyButtonLink>
          </div>
        </div>
        </ExitButton >

      </div>

    </ExitAnimation>
  );
}

export default LandingPage;