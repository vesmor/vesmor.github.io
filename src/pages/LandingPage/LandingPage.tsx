import './LandingPage.css';


function LandingPage() {
  return (
    <div className="landingpage-div">

      <div className="introduction-plate">
        <div className='header-plate'>
          <div className='name-plate'>
            <h1>Hi, I'm Sev.</h1>
          </div>
          <div className="links-plate">
            <h2>Welcome to my page!</h2> 
          </div>      
        </div>

        <div className="graphics-plate">
          <img src={'assets/images/standin_profile.jpg'} alt="graphic"/>
        </div>
        
      </div>

      <div className="information-plate">
        <div className='aboutme'>
          <a href="/about">Learn more about me!</a>
        </div>
        <div className='aboutme'>
          <button>hi</button>
          <a href="/projects">See what I've been working on!</a>
        </div>
      </div>


    </div>
  );
}

export default LandingPage;