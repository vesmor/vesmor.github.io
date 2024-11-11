import AnimatedPage from "@/animation/AnimatedPage";
import ProjectCard from "@/components/ProjectCards/ProjectCard";
import SideBar from "@/components/SideBar/SideBar";
import './Projects.css';

function Projects(){
    return (
        <div className="project-page">
            <div className="project-page-div ml-60 w-[calc(100vw-240px)] h-screen text-white overflow-x-hidden overflow-y-scroll no-scrollbar">
                <AnimatedPage>
                    <h1 className="ml-16">Projects</h1>
                    <div className="projectcard-container ml-16 m-16 py-4">
                        <ul>
                            <ProjectCard 
                                name="Re-Rassor TeleOperation Console"
                                description="A console for the educational, open source Rover."
                                image="/assets/images/teleop_console/EZRASSOR_CONTROLLER.jpg"
                                link="rassor-teleoperation-console"
                            />
                            <ProjectCard 
                                name="Lemon Drop"
                                description="Reverse Engineering a dashcam because we were lazy."
                                image="assets/images/lemon_drop/Lemon-Drop.png"
                                link="eco-friendly-gadget"
                            />
                            
                            
                        </ul>

                    </div>
                </AnimatedPage>
            </div>
        </div>
    )
}

export default Projects;