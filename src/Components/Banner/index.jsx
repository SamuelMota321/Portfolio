import notebook from '../../assets/img/Vector.png'
import styles from './styles.module.scss';


export const Banner = () => {
    return (
        
        <section className={`${styles.banner} container`}>
            <div >
                <p className='highlight'>SAMUEL RODRIGUES DA MOTA</p>
                <h1 className='title lg'>Bem Vindo ao meu Portifólio</h1>
                <p>uma frase muito interessante sobre mim</p>
                <button onClick={() => { window.open('https://w.app/ZkLnuA', '_blank'); }}>Saiba mais</button>
            </div>
            <img src={notebook} alt="Vetor notebook" />
        </section>
    )

}