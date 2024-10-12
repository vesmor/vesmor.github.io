interface ProjectCardProps {
    name: string;
    description: string;
    image: string;
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <div className="project-card flex flex-col md:flex-row items-center 
                        p-4 my-4 border
                        bg-foreground rounded-2xl shadow-lg">
            <div className="project-card-info flex-1 pr-4 mb-4 md:mb-0">
                <h1 className="text-xl font-bold mb-2">{props.name}</h1>
                <p className="text-gray-600">{props.description}</p>
            </div>
            <div className="project-card-image flex-shrink-0 md:w-1/3">
                <img className="w-full h-full object-cover rounded-lg" src={props.image} alt="project"/>
            </div>
        </div>
    )
}
