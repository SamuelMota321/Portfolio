import BlueZap from '../../assets/icon/zap-blu-icon.png'
import BlueGit from '../../assets/icon/github-blu-icon.png'
import Linkedin from '../../assets/icon/linkedin-icon.png'
import styles from './styles.module.scss';


export const Footer = () => {
    return (
        <footer className={`${styles.footer} container`}>
            <div>
                <h2 className='title md'>contato</h2>
                <ul>
                    <li><a href="https://contate.me/samuelmota" target='_blank'><img src={BlueZap} alt="Contato Whatsapp" /></a></li>
                    <li><a href="https://www.linkedin.com/in/samuel-rodrigues-da-mota-80314b28b/" target='_blank'><img src={Linkedin} alt="Perfil Linkedin" /></a></li>
                    <li><a href="https://github.com/SamuelMota321" target='_blank'><img src={BlueGit} alt="Perfil Github" /></a></li>
                </ul>
            </div>
            <p>Todos os direitos reservados - Samuel Rodrigues da mota</p>
        </footer>
    )
}