import { ProjectCard } from './ProjectCard'
import { projects } from '../../../data/projects'
import styles from './styles.module.scss';


export const ProjectList = () => {

    return (
        <ul className={styles.list}>
            {projects.map(project => (
                <ProjectCard key={project.id} project={project} styles={styles}/>
            ))}
        </ul>
    )

}

