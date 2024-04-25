import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

export const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = document.documentElement.scrollTop;

            if (currentScroll > lastScrollTop) {
                setIsVisible(false); // Rolando para baixo, oculta o header
            } else {
                setIsVisible(true); // Rolando para cima, mostra o header
            }
            setLastScrollTop(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollTop]);

    return (
        <header className={`${styles.header} ${isVisible ? styles.visible : styles.hidden} container`}>
            <h1 className="title sm">Portfólio</h1>
            <nav>
                <ul className={styles.menu}>
                    <li><a href="#sobre-mim">Sobre</a></li>
                    <li><a href="#techs">Stack</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                </ul>
            </nav>
            <button onClick={() => { window.open('https://contate.me/samuelmota', '_blank'); }}>Contato</button>
        </header>
    );
};
