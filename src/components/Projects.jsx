import styles from "@components/Projects.module.css"
import { projects } from "@assets/projects/Projects.js"
import Project from "@components/Project.jsx";


export default function Projects() {
    return (
        <div className={styles.projects} >
            <h1>Projects</h1>
            <div className={styles.projectsContainer} >
                {
                    projects.map((project, index) => (
                        <Project
                            key={index}
                            name={project.name}
                            description={project.description}
                            image={project.image}
                            links={project.links}
                        />
                    ))
                }
            </div>
        </div>
    )
}