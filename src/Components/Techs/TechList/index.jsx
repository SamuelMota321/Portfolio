import { TechCard } from './TechCard'
import { techs } from '../../../data/techs'
import styles from './styles.module.scss';



export const TechList = () => {
    return(
        <ul className={styles.list}>
            {techs.map( tech => ( 
                <TechCard  key={tech.id} tech={tech} styles={styles}/>
            ))}
        </ul>
    )
}