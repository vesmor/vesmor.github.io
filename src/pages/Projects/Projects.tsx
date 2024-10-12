import AnimatedPage from "@/animation/AnimatedPage";
import ProjectCard from "@/components/ProjectCards/ProjectCard";
import SideBar from "@/components/SideBar/SideBar";


function Projects(){
    return (
        <div>

            <SideBar />
            <div className="content ml-60 bg-background text-white w-[calc(100vw-240px)] h-screen overflow-x-hidden overflow-y-scroll no-scrollbar">
            <AnimatedPage>
                <h1 className="ml-16">Projects</h1>
                <div className="projectcard-container ml-16 m-16 py-4">
                    <ul>
                        <ProjectCard 
                            name="Innovative App"
                            description="An app that revolutionizes the way we interact with technology."
                            image="assets/images/cat_standin.jpg"
                            link="innovative-app"
                        />
                        <ProjectCard 
                            name="Eco-Friendly Gadget"
                            description="A gadget designed to reduce environmental impact."
                            image="assets/images/coquette_mouse.jpg"
                            link="eco-friendly-gadget"
                        />
                        
                        <ProjectCard 
                            name="Smart Home Device"
                            description="A device that makes your home smarter and more efficient."
                            image="assets/images/briefcase_standin.png"
                            link="smart-home-device"
                        />
                        
                        <ProjectCard 
                            name="Health Tracker"
                            description="A wearable device that monitors your health metrics."
                            image="assets/images/coquette_mouse.jpg"
                            link="health-tracker"
                        />
                        
                        <ProjectCard 
                            name="Educational Platform"
                            description="An online platform that enhances learning experiences."
                            image="assets/images/coquette_mouse.jpg"
                            link="educational-platform"
                        />
                        
                        <ProjectCard 
                            name="Blah Blah Blah"
                            description="Ipsum dolor sit amet, consectetur adipiscing elit."
                            image="assets/images/briefcase_standin.png"
                            link="blah-blah-blah"
                        />
                    </ul>

                </div>
            </AnimatedPage>
            </div>
        </div>
    )
}

export default Projects;