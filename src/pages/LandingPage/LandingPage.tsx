import './LandingPage.css';


function LandingPage() {
  return (
    <div className="landingpage-div">

      <div className="introduction-plate">
        <div className='header-plate'>
          <div>
            <h1>Hi, I'm Sev.</h1>
          </div>
          <div className="links-plate">
            <h2>Thanks for visiting my page</h2> 
          </div>      
        </div>

        <div className="graphics-plate">
          <img src={'assets/images/standin_profile.jpg'} alt="graphic"/>
        </div>
        
      </div>


    </div>
  );
}

export default LandingPage;