import Project from "../components/Project"
import FancyProject from "../components/FancyProject"
import TWT_Poster from "../assets/TWT_Poster.png";

export default function MyProjects(){
    const projects = [
        {id: 1, title:"TWT - The Walking Thread", url: TWT_Poster, date:"2024", description:"A fun project we made for the competition in Prague!"},
        {id: 2, title:"Micromouse", url:"Micromouse.png", date:"2023"}

    ]
    return(
        <div className="MyProjects">
            <h1>Here are some of my favourite projects!</h1>
            
            <div className="projects-grid">
                {projects.map((project) => (
                    <FancyProject key={project.id} {...project}/>
                ))}
            </div>
        </div>
    )
}