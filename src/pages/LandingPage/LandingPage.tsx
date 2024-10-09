import { ButtonOutline } from '../../components/OutlineButton';
// import { ButtonDestructive } from '../../components/DestructiveButton';
// import { ButtonSecondary } from '../../components/SecondaryButton';
import './LandingPage.css';


function LandingPage() {
  return (
    <div className="landingpage-div">

      <div className="introduction-plate">
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

      <div className="buttons-plate">
        <div className='aboutme' id='about-btn'>
          <ButtonOutline text="Learn more about me!" link="/about"></ButtonOutline>
        </div>
        <div className='aboutme' id='project-btn'>
          <ButtonOutline text="See what I've been up to!" link="/projects"></ButtonOutline>
        </div>
      </div>


    </div>
  );
}

export default LandingPage;