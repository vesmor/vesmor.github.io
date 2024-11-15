import './ProjectPages.css'

export default function Teleop() {
    return (
        <div id='teleop-page' className="project-content ml-60 p-10 w-[calc(100vw-240px)] h-screen text-white overflow-x-hidden overflow-y-scroll no-scrollbar">
            <div className="text-white text-lg">

                <img src="/assets/images/teleop_console/EZRASSOR_CONTROLLER.jpg" alt="Project Image" 
                    className="project-image w-2/4 h-5/6 rounded-2xl m-4 items-center justify-center mx-auto" 
                />
                
                <h1 className="text-3xl text-center font-bold mb-4">RASSOR TeleOperation Console</h1>
                
                <i className='block text-center font-semibold'>I am currently working on this project so this page is a work in progress.</i>
                <br/>
                <p className="mb-4 indent-0">As part of my capstone project, I'm honored to collaborate with the Florida Space Institute in developing a console for their educational, open-source rover. Alongside a team of four, I'm focused on presenting complex technical information in a way that's accessible and intuitive for users, down to grade level students.</p>

                <div className="mb-4">
                    <h2 className="text-2xl font-semibold mb-2">Background</h2>
                    <p className="">
                        RASSOR stands for 'Regolith Advanced Surface Systems Operational Robot', the original rover is an impressive feat of engineering that is being <a target="_blank" rel="noopener noreferrer" href="https://technology.nasa.gov/patent/KSC-TOPS-7">developed by NASA</a>, to be used in future as an excavation rover on Earth and, in the future, extraterrestrial bodies. 
                    </p>
                    
                    <br/> 
                    
                    <p>    
                        The Florida Space Institute(FSI) is offering a research and educational aspect of this rover that can be used in a more non-commericial, academic sense. Hence, they call it the <a target="_blank" rel="noopener noreferrer" href="https://fsi.ucf.edu/student-design/robotics/re-rassor/">RE-RASSOR rover</a>, the 'RE' standing for 'Research and Education.' They are aiming to use open-source parts and software to as a platform for lower cost research, and the ability to support STEAM education for elementary and middle school kids, who are given the 3D printed parts and instructed on how to put it together themselves.
                    </p>
                    
                    <div className='flex justify-center items-center space-x-4'>
                        <img src='/assets/images/teleop_console/fsirover-buildingjpg.jpg' alt='Picture of a RASSOR Rover being built' className='w-64 h-auto rounded'/>
                        <img src='/assets/images/teleop_console/explodedv1-gearbox.png' alt='Exploded view of gearbox' className='w-60 h-auto rounded'/>
                    </div>

                    <br/>

                    <p>
                        Although there is one RE-RASSOR project, there are multiple types of rovers. Some rovers have paver arms that can dig into regolith, while others carry other mini rovers that can be deployed. 
                    </p>
                    
                </div>

                <div className="mb-4">
                    <h2 className="text-2xl font-semibold mb-2">Features</h2>
                    <p>
                        Our goal is to create a teleoperation console that is user-friendly and intuitive. Because there may be multiple rovers in the regolith bin  Our team has to take into account the wide array of experience that our audience may have. Some of the features we are working on include:
                        <ul className='list-disc list-inside indent-0'>
                            <li>
                                Switching between multiple rovers
                            </li>
                            <li>
                                Simulating a time-delay being as if on another planet
                            </li>
                            <li>
                                Simulating an unreliable connection
                            </li>
                            <li>
                                3D representation of Rover's environment
                            </li>
                        </ul>
                    </p>

                    
                </div>

                <div className="mb-4">
                    <h2 className="text-2xl font-semibold mb-2">Challenges</h2>
                    <p>
                        The first hurdle we had to overcome was understanding the rover and its capabilities. We had to learn how the rover was built, how it was controlled, and what it was capable of. This was a challenge because the rover was still in development and there were multiple versions of the rover. It was difficult to always track down the correct person we needed for information.
                    </p>
                    <br/>
                    <p>
                        The second challenge was getting to work with the rover. At the time all the rovers were in use either for testing or for demonstrations. Instead, we had to work with a simulation of the rover. This was a challenge because the simulation software was not user-friendly and there lacked a lot of documentation on how to set it up and use it. <br/>
                        Our first major win was getting the Gazebo simulation to be up in the first place.
                    </p>
                    <div>
                        <img src='/assets/images/teleop_console/Gazebo-Screenshot.png' alt='Gazebo Simulation' className='h-auto rounded'/>
                    </div>
                </div>

                <div className="mb-4">
                    <h2 className="text-2xl font-semibold mb-2">Technologies</h2>
                    <ul className="list-disc list-inside">
                        <li>Gazebo</li>
                        <li>Robot Operating System</li>
                        <li>Python's Flask</li>
                        <li>React</li>
                    </ul>
                </div>


                {/* <div className="mb-4">
                    <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
                    <p>Summarize the project and its outcomes. Mention any future plans or improvements.</p>
                </div> */}

            </div>
        </div>
    );
}
