import AnimatedPage from "@/animation/AnimatedPage";
import SideBar from "@/components/SideBar/SideBar";
import './About.css';

export default function About() {
    return (
        <div className="about-page text-white overflow-x-hidden overflow-y-scroll no-scrollbar relative">
            <div className="about-page-div ml-60 p-4 w-[calc(100vw-240px)] h-screen">
                <AnimatedPage>
                    <article className="aboutme-container z-0 ml-16 pb-16 overflow-y-scroll no-scrollbar h-screen">

                        <h1 id='aboutpage-heading' className="text-4xl font-bold mb-20">About Me</h1>
                        
                        <section className="mb-6">
                            <h2 className="text-2xl font-semibold mb-2">Blurb</h2>
                            <p className="text-lg indent-11">
                                I'm a student finishing up my Bachelor's degree in Computer Science at the University of Central Florida who is actively seeking an internship or full-time position. With experience in both backend and frontend development, I've beein involved in many projects focused on providing web-based solutions, but have expanded my knowledge to include working in other areas such as embedded systems and working with simulation software. <a target="_blank" href="/#/projects/rassor-teleoperation-console">Currently</a>, I am working on a project with the Florida Space Institute to create a teleoperation console for their RE-RASSOR rover program. 
                                <br />
                            </p>
                        </section>

                        <section className="mb-6">
                            <h2 className="text-2xl font-semibold mb-2">Background</h2>
                            <p className="text-lg indent-11">
                                I was born on the infamous country of Haiti, although I don't remember much of my time there, I do remember when my journey to the United States. The first time I felt the plane's wheels lift off the ground, my parents described seeing a glint in my eye that has since never left. I dreamed of one day gaining my own wings and flying, I gained animus towards the airplane's window as it kept me from feeling the air as on my face. From that moment, I knew I was not meant to be earthbound. 
                            </p>
                            <br/>
                            <p className="text-lg indent-11">
                                Growing up in the United States, I had limited access to the internet, so I spent most of my time exploring the world around me and picking up different skills that interested me, I was particularly known for asking too many questions. 'Why' seemed to be my favorite word. I was determined to learn as much about the world as possible. As I became older this manifested into enjoying tinkering with things. I also became interested in space exploration and our new frontier. At this time, I played a game called Kerbal Space Program, and enjoyed the glimpse of the work that goes into space exploration it gave me. There is a huge modding community around this game, and I stumbled unto a really cool mod named "Kerbal Operating System" or kOS. It allowed you to write programs to control your rockets in real-time. It got me hooked as I was programmatically solving interesting real-time problems using concepts I had been learning in grade school and some extra learning. Eventually, I decided to learn other programming languages used in real life, such as C. As I followed tutorials, the power a computer held instantly became clear to me, and I wanted to learn everything about it and more. 
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-semibold mb-2">Journey</h2>
                            <p className="text-lg indent-11">
                            At some point I wanted to know how it all came together and uncover how we got from rocks and electricity to running programs like a web browser. I delved deeper and came across videos of people building computers using Redstone in the game Minecraft. I followed along with tutorials and built my own simple binary adder in the game, and was eventually recommended to <a href="https://youtube.com/playlist?list=PLowKtXNTBypGqImE405J2565dvjafglHU&si=343dXdZQaIbT36HL" target="_blank" rel="noopener noreferrer">this amazing video series</a> by Ben Eater. Months of obsession later I eventually bought an Arduino and started programming and building my own circuits. Soon, programming became a part of everything I did—I programmed custom LED lights, and set up my own HomeLab server to learn how to self-host my own network attached storage (NAS).
                            </p>
                            
                            <br />

                            <p className="text-lg indent-11">
                                When I graduated high school, I was inundated with who I wanted to eventually be. So I decided to do everything! I enrolled in my local community college to get my Associates in Arts with a focus in Computer Science. Simultaneously, I pursued my dream of flying and started lessons at my local flight school. On August 17th, 2019, I got my solo endorsement and got the tail of my shirt cut.
                            </p>
                            <br />
                            <p className="text-lg indent-11">
                                On the last day of February of 2020, luckily the day before COVID-19 shut the world down, I officially got my Private Pilot's License
                            </p>
                            <br/>
                            <p className="text-lg indent-11">
                                Afterwards, I finished up my A.A. at community college and continued to pursue my Bachelors in Computer Science at UCF. 
                            </p>
                        </section>
                    
                        <section>
                            <h2 className="text-2xl font-semibold mb-2">Future Plans</h2>
                            <p className="text-lg indent-11">
                                In the future, I plan to further my education, ideally coming back to school for a Master's degree. In the meantime, I'm focused on completing my studies and actively seeking opportunities in the industry, hopefully I get to continue working on various exciting projects.
                            </p>
                            <br />
                            
                            <p className="text-lg indent-11">
                                Although I'm finishing up school, I consider myself to be a lifelong student. I'm always looking for new things to learn and new ways to grow. As I look ahead, I'm excited yet a bit nervous to discover what lies on the path ahead.
                            </p>
                        </section>
                        

                    </article>
                </AnimatedPage>
            </div>
        </div>
    );
}
