import Project from "../components/Project"

export default function MyProjects(){
    const projects = [
        {id: 1, title:"TWT - The Walking Thread", url:"TWT_Poster.png", date:"2024"},
        {id: 2, title:"Micromouse", url:"Micromouse.png", date:"2023"},
        {id: 2, title:"Micromouse", url:"Micromouse.png", date:"2023"}

    ]
    return(
        <div className="MyProjects">
            <h1>Here are some of my favourite porjects!</h1>
            <div className="projects-grid">
                {projects.map((project) => (
                    // <Project
                    //     key={project.id}
                    //     title={project.title}
                    //     url={project.url}
                    //     date={project.date} 
                    // />
                    // you can also do it like this instead:
                    <Project key={project.id} {...project} />
                ))}

            </div>
        </div>
    )
}