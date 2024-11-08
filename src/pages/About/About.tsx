import AnimatedPage from "@/animation/AnimatedPage";
import SideBar from "@/components/SideBar/SideBar";
import './About.css';

export default function About() {
    return (
        <div className="about-page text-white h-screen overflow-x-hidden overflow-y-scroll no-scrollbar">
            <SideBar />
            
            <div className="container ml-60 p-4 w-[calc(100vw-260px)]">
                <AnimatedPage>
                    <div className="aboutme-container ml-16 h-screen">
                        <h1 className="text-4xl font-bold mb-20">About Me</h1>
                        <section className="mb-6">
                            <h2 className="text-2xl font-semibold mb-2">Blurb</h2>
                            <p className="text-lg">
                                I am a student closing in on my Bachelor's degree in Computer Science at the University of Central Florida. I currently have the most experience in full-stack Web Development but have expanded my knowledge to include working in other areas such as embedded systems and working with simulation software. Currently, I am working on a project with the Florida Space Institute to create a teleoperation console for their RERASSOR rover program. 
                                <br />
                            </p>
                        </section>

                        <section className="mb-6">
                            <h2 className="text-2xl font-semibold mb-2">Background</h2>
                            <p className="text-lg">
                                Although I'm finishing up school, I consider myself to be a lifelong student. I'm always looking for new things to learn and new ways to grow.
                                and I'm excited yet nervous to see where my journey takes me next. 
                                <br />
                                My aspirations include becoming a leader in my field, continuously learning and growing, and 
                                making a positive impact on the community. I aim to innovate and contribute to projects that 
                                can change lives for the better.
                            </p>
                        </section>
                    
                        <section>
                            <h2 className="text-2xl font-semibold mb-2">Future Plans</h2>
                            <p className="text-lg">
                                In the future, I plan to further my education, take on challenging projects, and collaborate with 
                                like-minded individuals. I hope to travel, explore new cultures, and gain diverse experiences 
                                that will enrich my personal and professional life.
                            </p>
                        </section>
                        

                    </div>
                </AnimatedPage>
            </div>
        </div>
    );
}
