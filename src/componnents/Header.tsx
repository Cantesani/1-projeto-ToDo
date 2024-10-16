import styles from './Header.module.css'
import logoToDo from '../assets/Logo@2x.png'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logoToDo} alt="" />
        </header>
    )
}