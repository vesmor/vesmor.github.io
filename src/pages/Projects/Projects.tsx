import AnimatedPage from "@/animation/AnimatedPage";
import ProjectCard from "@/components/ProjectCards/ProjectCard";
import SideBar from "@/components/SideBar/SideBar";


function Projects(){
    return (
        <div>

            <AnimatedPage>
            <SideBar />
            <div className="content ml-60 bg-background text-white w-[calc(100vw-240px)] h-screen overflow-x-hidden">
                    <h1 className="ml-16">Projects</h1>
                    <div className="projectcard-container ml-16 m-16 py-4">
                        <ul>
                            <ProjectCard 
                                name="Innovative App"
                                description="An app that revolutionizes the way we interact with technology."
                                image="assets/images/standin_profile.jpg"
                            />
                            <ProjectCard 
                                name="Eco-Friendly Gadget"
                                description="A gadget designed to reduce environmental impact."
                                image="assets/images/coquette_mouse.jpg"
                            />
                            
                            <ProjectCard 
                                name="Smart Home Device"
                                description="A device that makes your home smarter and more efficient."
                                image="assets/images/briefcase_standin.png"
                            />
                            
                            <ProjectCard 
                                name="Health Tracker"
                                description="A wearable device that monitors your health metrics."
                                image="assets/images/coquette_mouse.jpg"
                            />
                            
                            <ProjectCard 
                                name="Educational Platform"
                                description="An online platform that enhances learning experiences."
                                image="assets/images/coquette_mouse.jpg"
                            />
                        </ul>

                    </div>
            </div>
            </AnimatedPage>
        </div>
    )
}

export default Projects;