import AnimatedPage from "@/animation/AnimatedPage";
import SideBar from "@/components/SideBar/SideBar";

export default function About() {
    return (
        <div className="text-white ">
            <SideBar />
            
            <div className="container ml-60 p-4 w-[calc(100vw-240px)]">
            <AnimatedPage>
                <h1 className="text-4xl font-bold mb-6">About Me</h1>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Inspirations</h2>
                    <p className="text-lg">
                        I draw inspiration from the world around me, including nature, technology, and the people I meet. 
                        My family and friends have always been a source of motivation and support.
                    </p>
                </section>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Aspirations</h2>
                    <p className="text-lg">
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
            </AnimatedPage>
            </div>
        </div>
    );
}
