

import { GitHubLogoIcon } from '@radix-ui/react-icons';
import './ProjectPages.css'

export default function LemonDrop() {
    return (
        <div id='LemonDrop-page' className="project-content ml-60 p-10 w-[calc(100vw-240px)] h-screen text-white overflow-x-hidden overflow-y-scroll no-scrollbar">
            <div className="text-white text-lg">

                <img src="/assets/images/lemon_drop/Lemon-Drop.png" alt="Project Image" 
                    className=" w-[15%] h-[30%] rounded-2xl m-4 items-center justify-center mx-auto" 
                />
                
                <div className="flex justify-center items-center mb-4">
                    <h1 className="text-3xl font-bold">Lemon Drop</h1>
                    <a href="https://github.com/NickAwrist/Lemon_Drop" target="_blank" rel="noopener noreferrer" className='ml-2 text-inherit hover:border-none'>
                        <GitHubLogoIcon className="w-6 h-6 hover:text-gray-600 text-white" />
                    </a>
                </div>  


                <p className="mb-4 indent-0"></p>

                <div className="mb-4">
                    <h2 className="text-2xl font-semibold mb-2">Background</h2>
                    <p>
                       My University holds an annual hackathon called Knights Hack. It came around a perfect time as one of my teammates and I both had recently gotten a dashcam. But, after wiring everything up to my car and making sure everything was working, I realized that it was going to be a hassle to take the SD card out of the dashcam, go up to my apartment, find the adapter, plug it in, and then finally see the footage. I'm a Computer Science major, taking more than two steps is wayyy too much work. And even though the dashcam had a mobile app to download the footage it was wayyy too slow. 
                    </p>
                    <p>
                        I fantasized day and night about having a fairy magically uploading the dashcam footage straight to my computer as soonm as I got home, until one day I stumbled upon a <a href="https://dashcamtalk.com/forum/threads/how-to-access-the-a129-over-wi-fi-without-the-viofo-app.37279/" target="_blank" rel="noopener noreferrer">forum post discussion</a> about my model of dashcam. I learned that the dashcam had a wifi module that could be accessed through a web browser. I was ecstatic. I could finally make my dream come true.
                    </p>
                    <p>
                        I pitched the idea to my team and they were all in. We decided to make a web app that would connect to multiple dashcam's WiFi and automically download the footage. We were going to do it in 36 hours. We called it Lemon Drop.
                    </p>
                    
                    <br/> 
                    
                    <p>    
                    </p>
                    
                    <div className='flex justify-center items-center space-x-4'>
                        {/* <img src='/assets/images/teleop_console/fsirover-buildingjpg.jpg' alt='Picture of a RASSOR Rover being built' className='w-64 h-auto rounded'/>
                        <img src='/assets/images/teleop_console/explodedv1-gearbox.png' alt='Exploded view of gearbox' className='w-60 h-auto rounded'/> */}
                    </div>

                    <br/>

                    <p>

                    </p>
                    
                </div>

                <div className="mb-4">
                    <h2 className="text-2xl font-semibold mb-2">Challenges</h2>
                    <p>
                        Our first challenge was finding architecture that would allow the dashcam to connect easily. Usually a dashcam would be located a bit far from the home's WiFi, so we worried if a home computer would even be able to reach the home WiFi. We decided to use a Raspberry Pi as a middleman. The Raspberry Pi would connect to the dashcam's WiFi, while being connected to the home's internet through an ethernet cable. The Raspberry Pi would then host a web server that the home computer could connect to.
                    </p>
                    <div className="flex flex-col items-center mt-4">
                        <img src='/assets/images/lemon_drop/whiteboard-planning.jpg' alt='Whiteboard Architecture Planning' className='h-[50%] w-[50%] rounded'/>
                        <i>It's always important to plan your designs before implementation</i>
                    </div>  
                    <br/>
                    <p>
                        The next challenge was figuring out how to programmatically and automatically download the dashcams footage. Luckily we quickly learned that the dashcam was hosting a HTTP File Server. We then had to learn how to use Python's requests library to send a POST request to the dashcam's server to download the footage. We coded up a Python Flask server to host a web server that the home computer could connect to.
                    </p>
                    <br/>
                    <p>
                        But with being on the University's WiFi we quickly learned that the University's firewall was blocking the Raspberry Pi from connecting to the dashcam. One of our teammates was able to use a spare router I had lying around to set up a local network that the Raspberry Pi could connect to. We then used this seperate local network to develop our code on the Raspberry Pi and test it.
                    </p>
                    <div className="flex flex-col items-center">
                        <img src='/assets/images/lemon_drop/own-internet-connection.jpg' alt='Local Network Setup' className='h-[10%] w-[20%] rounded'/>
                        <i>Has your school WiFi ever been so bad you had to setup your own network?</i>
                    </div>  
                </div>

                <div className="mb-4">
                    <h2 className="text-2xl font-semibold mb-2">Features</h2>
                    <p>
                        At the end of our 36-hours we were able to successfully implement most of the features we planned on. Because of our time constrains we weren't able to optimize all of the features as well as we wanted to, but I'm proud of the work we did in the given time:
                        <ul className='list-disc list-inside indent-0'>
                            <li>
                                Allowing the user to connect to and manage multiple dashcams.
                            </li>
                            <li>
                                Automatically downloading footage once the RaspberryPi senses the dashcam's WiFi.
                            </li>
                            <li>
                                Hosting a local web server that allows a user to visually manage dashcams and footage.
                            </li>
                        </ul>
                    </p>
                    <div className="flex flex-col items-center mt-4">
                        <div className="flex flex-row justify-around">
                            <img src='/assets/images/lemon_drop/switch-dashcams.jpg' alt='Screencap of the ability to switch dashcams' className='h-[10%] w-[40%] rounded'/>
                            <img src='/assets/images/lemon_drop/manage-footage.jpg' alt='Screencap of the ability to manage your footage' className='h-[10%] w-[40%] rounded'/>
                        </div>
                        <i>Phew, I'm so happy I won't have to walk back to my car for the footage now</i>
                    </div>  

                    
                </div>



                <div className="mb-4">
                    <h2 className="text-2xl font-semibold mb-2">What's Next?</h2>
                    <p>
                        After I finish this website and gather some more free time, I plan to continue working on Lemon Drop. I want to make the web app more user-friendly and intuitive. We also ran into some issues with the Raspberry Pi's WiFi connection being slow that I want to fix. I want to see if I can increase the speed at which the footage is downloaded.
                    </p> 
                </div>

                <div className="mb-4">
                    <h2 className="text-2xl font-semibold mb-2">Technologies</h2>
                    <ul className="list-disc list-inside">
                        <li>Raspberry Pi</li>
                        <li>Python's Flask</li>
                        <li>HTTP/CSS</li>
                    </ul>
                </div>


                <div className="mb-4">
                    <h2 className="text-2xl font-semibold mb-2">Extras</h2>
                    <div className="flex flex-col items-center mt-4">
                        <div className="flex flex-row justify-around">
                            <img src='/assets/images/lemon_drop/knights_hack_group.jpg' alt=' PIcture of group I met and hung out with at Knights Hack' className='h-[10%] w-[23%] rounded'/>
                            <img src='/assets/images/lemon_drop/knightshack_katandme.jpg' alt='Picture of a friend and I from a digital camera' className='h-[10%] w-[40%] rounded'/>
                            <img src='/assets/images/lemon_drop/winning_scavenger_hunt.jpg' alt='Picture of group winning the scavenger hunt' className='h-[10%] w-[40%] rounded'/>
                        </div>
                        <i className='font-semibold'>Just wanted to show off the fun I had at Knights Hack (second year in a row winning scavenger hunt btw)</i>
                    </div>  
                </div>

            </div>
        </div>
    );
}