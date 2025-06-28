/* TEMPLATE PAGE FOR ALL PROJECT PAGES */

import './ProjectPages.css'

export default function Template() {
    return (
        <div id='TEMPLATE-page' className="project-content ml-60 p-10 w-[calc(100vw-240px)] h-screen text-white overflow-x-hidden overflow-y-scroll no-scrollbar">
            <div className="text-white text-lg">

                <img src="" alt="Project Image" 
                    className=" w-2/4 h-5/6 rounded-2xl m-4 items-center justify-center mx-auto" 
                />
                
                <h1 className="text-3xl text-center font-bold mb-4">TITLE</h1>
                
                <br/>
                <p className="mb-4 indent-0"></p>

                <div className="mb-8">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300">
                        <h2 className="text-3xl font-bold mb-6 text-blue-200">Background</h2>
                        <div className="space-y-6">
                            <p className="text-lg leading-relaxed text-gray-100">
                               
                            </p>
                            
                            <p className="text-lg leading-relaxed text-gray-100">    
                            </p>
                            
                            <div className='flex justify-center items-center space-x-4'>
                                {/* <img src='/assets/images/teleop_console/fsirover-buildingjpg.jpg' alt='Picture of a RASSOR Rover being built' className='w-64 h-auto rounded'/>
                                <img src='/assets/images/teleop_console/explodedv1-gearbox.png' alt='Exploded view of gearbox' className='w-60 h-auto rounded'/> */}
                            </div>

                            <p className="text-lg leading-relaxed text-gray-100">

                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300">
                        <h2 className="text-3xl font-bold mb-6 text-blue-200">Features</h2>
                        <div className="space-y-6">
                            <p className="text-lg leading-relaxed text-gray-100">
  
                            </p>
                            <ul className='list-disc list-inside indent-0 text-lg text-gray-100 space-y-2'>
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
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300">
                        <h2 className="text-3xl font-bold mb-6 text-blue-200">Challenges</h2>
                        <div className="space-y-6">
                            <p className="text-lg leading-relaxed text-gray-100">

                            </p>
                            <p className="text-lg leading-relaxed text-gray-100">

                            </p>
                            {/* <div>
                                <img src='/assets/images/teleop_console/Gazebo-Screenshot.png' alt='Gazebo Simulation' className='h-auto rounded'/>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300">
                        <h2 className="text-3xl font-bold mb-6 text-blue-200">Technologies</h2>
                        <ul className="list-disc list-inside text-lg text-gray-100 space-y-2">
                            <li>Gazebo</li>
                            <li>Robot Operating System</li>
                            <li>Python's Flask</li>
                            <li>React</li>
                        </ul>
                    </div>
                </div>

                {/* <div className="mb-4">
                    <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
                    <p>Summarize the project and its outcomes. Mention any future plans or improvements.</p>
                </div> */}

            </div>
        </div>
    );
}
