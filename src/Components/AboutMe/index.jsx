import styles from './styles.module.scss';

export const AboutMe = () => {
    return (
        <section id="sobre-mim" className={`${styles.aboutMe} container`}>
            <h2 className="title md">Sobre Mim</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nulla esse cupiditate, assumenda debitis at eos distinctio reprehenderit ab blanditiis non odio. Maiores quaerat autem a facere modi. Distinctio, dolorum.</p>
        </section>
    )
}