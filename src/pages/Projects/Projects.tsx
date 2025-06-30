/* Page where all the Project Cards are located */
/* The pages for the projects are located in the subfolder of this folder /projectpages */

import AnimatedPage from "@/animation/AnimatedPage";
import ProjectCard from "@/components/ProjectCards/ProjectCard";
import './Projects.css';

function Projects(){
    return (
        <div className="project-page">
            <div className="project-page-div p-4 ml-60 w-[calc(100vw-240px)] h-screen text-white overflow-x-hidden overflow-y-scroll no-scrollbar">
                <AnimatedPage>
                    <h1 id='projectspage-heading' className="ml-16 text-4xl font-bold mb-20">Projects</h1>
                    <div className="projectcard-container ml-16 m-16 py-4">
                        <ul>
                            <ProjectCard 
                                name="Re-Rassor TeleOperation Console"
                                description="A console for the educational, open source Rover."
                                image="/assets/images/teleop_console/rerassor_showoff.png"
                                link="rassor-teleoperation-console"
                            />
                            <ProjectCard 
                                name="Lemon Drop"
                                description="Reverse Engineering a dashcam to automate footage retrieval."
                                image="assets/images/lemon_drop/Lemon-Drop.png"
                                link="lemon-drop"
                            />
                            <ProjectCard 
                                name="ResearchBuddy"
                                description="Discord Bot to help labs not forget their dates."
                                link="research-buddy"
                            />
                            
                            
                        </ul>

                    </div>
                </AnimatedPage>
            </div>
        </div>
    )
}

export default Projects;