import notebook from '../../assets/img/Vector.png'
import styles from './styles.module.scss';


export const Banner = () => {
    return (
        
        <section className={`${styles.banner} container`}>
            <div >
                <p className='highlight'>SAMUEL RODRIGUES DA MOTA</p>
                <h1 className='title lg'>Bem Vindo ao meu Portfólio</h1>
                <p>Desenvolvedor Full Stack em ascensão pronto para transformar minha paixão por design e codificação em experiências de usuário excepcionais</p>
                <button onClick={() => { window.open('https://contate.me/samuelmota', '_blank'); }}>Saiba mais</button>
            </div>
            <img src={notebook} alt="Vetor notebook" />
        </section>
    )

}