import githubIco from '../../../../assets/icon/github-icon.png'

export const ProjectCard = ({ project , styles}) => {
    return (
        <li className={styles.card}>
            <div>
                <h3 className='title sm'>{project.name}</h3>
                <p>{project.description}</p>
                <a href={project.repository} target='_blank' className='highlight'>Ver repositório</a>
                <button onClick={() => { window.open( project.page , '_blank'); }}>Página do projeto</button>
            </div>
            <img src={githubIco} alt="Github icon"  />
        </li>
    )
}