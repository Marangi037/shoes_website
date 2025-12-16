import React, {useState} from 'react';
import styles from './Navbar.module.css';

export const NavBar = () => {
    const [transButton, setShowButton] = useState(true);
    const handlebutton = () => {
        setShowButton(!transButton);
    };
    
    return (
        <>
        <nav className={styles.navbar}>
            <h1 className={styles.navHeader}>Shoe<span className={styles.navSpan}>s</span></h1>
            <ul className={styles.navbarElements}>
                <a className={styles.navbarElement} href="#">Home</a>
                <a className={styles.navbarElement} href="#">Products</a>
                <a className={styles.navbarElement} href="#">Review</a>
                <a className={styles.navbarElement} href="#">contact</a>
            </ul>
            <button className={styles.buttonContainer} onClick={() => handlebutton()}>
                <div className={`${transButton ? styles.hamburger : styles.hamburgerOpen}`}>

            </div>
            </button>
            
            <div className={`${transButton ? "hidden" : styles.openMenu}`}>
                <ul className={styles.openMenuElements}>
                <a className={styles.openMenuElement} href="#">Home</a>
                <a className={styles.openMenuElement} href="#">Products</a>
                <a className={styles.openMenuElement} href="#">Review</a>
                <a className={styles.openMenuElement} href="#">contact</a>
                </ul>
                <p className={styles.openMenuText}>&copy; copyright Marangi 2025</p>
        </div>
        
        </nav>
        
        </>
)
}
