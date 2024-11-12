import AnimatedPage from "@/animation/AnimatedPage";
import SideBar from "@/components/SideBar/SideBar";
import './About.css';

export default function About() {
    return (
        <div className="about-page text-white overflow-x-hidden overflow-y-scroll no-scrollbar relative">
            <div className="about-page-div ml-60 p-4 w-[calc(100vw-240px)] h-screen">
                <AnimatedPage>
                    <div className="aboutme-container z-0 ml-16 pb-16 overflow-y-scroll no-scrollbar h-screen">

                        <h1 id='aboutpage-heading' className="text-4xl font-bold mb-20">About Me</h1>
                        
                        <section className="mb-6">
                            <h2 className="text-2xl font-semibold mb-2">Blurb</h2>
                            <p className="text-lg indent-11">
                                I am a student closing in on my Bachelor's degree in Computer Science at the University of Central Florida. I currently have been gaining experience in full-stack Web Development but have expanded my knowledge to include working in other areas such as embedded systems and working with simulation software. Currently, I am working on a project with the Florida Space Institute to create a teleoperation console for their RERASSOR rover program. 
                                <br />
                            </p>
                        </section>

                        <section className="mb-6">
                            <h2 className="text-2xl font-semibold mb-2">Background</h2>
                            <p className="text-lg indent-11">
                                Growing up I had limited access to the internet, so I spent most of my time exploring the world around me and picking up different skills that interested me. At some point I came across a computer and stumbled upon a tutorial on learning C. I made a simple program that calculated how fast a ball would fall on Earth using the formula for acceleration I was taught in school. The power a computer held instantly became clear to me, and I wanted to learn everything and more. 
                            </p>
                            <br/>
                            <p className="text-lg indent-11">
                                At some point I wanted to know how it all came together and learn how we got from rocks and lightning to YouTube. I delved deeper and came across videos of people building computers using Redstone in the game Minecraft. I followed along with tutorials and built my own computer in the game, and was eventually recommended <a href="https://youtube.com/playlist?list=PLowKtXNTBypGqImE405J2565dvjafglHU&si=343dXdZQaIbT36HL" target="_blank" rel="noopener noreferrer">this amazing video series</a> by Ben Eater. Months of obsession later I eventually bought an Arduino and started programming and building my own circuits.
                            </p>
                            
                            <br />

                            <p className="text-lg indent-11">
                                Soon, programming became a part of everything I did—I programmed custom LED lights, set up my own HomeLab server, and even used a language called kOS to control rockets in my favorite game, Kerbal Space Program. I quickly realized the incredible potential of computer science and how much more there was to explore. That's when I decided to pursue a degree in the field.
                            </p>
                            
                        </section>
                    
                        <section>
                            <h2 className="text-2xl font-semibold mb-2">Future Plans</h2>
                            <p className="text-lg indent-11">
                                In the future, I plan to further my education, ideally coming back to school for a Master's degree. In the meantime, I'm focused on completing my studies and working on various exciting projects, and actively seeking opportunities in the industry.
                            </p>
                            <br />
                            
                            <p className="text-lg indent-11">
                                Although I'm finishing up school, I consider myself to be a lifelong student. I'm always looking for new things to learn and new ways to grow. As I look ahead, I'm excited yet a bit nervous to discover what lies on the path ahead.
                            </p>
                        </section>
                        

                    </div>
                </AnimatedPage>
            </div>
        </div>
    );
}
