import styles from './Header.module.css'

import  iginteLogo from '../assets/Ignite-logo.svg';
export const Header = () => {
    return (
        <header className={styles.header}>
            <img src={iginteLogo} alt="LogoTipo do Ignite"/>
            <strong>Ignite Feed</strong>
        </header>
    )
}