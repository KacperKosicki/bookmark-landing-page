import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';
import { ReactComponent as LogoIcon } from '../../assets/images/logo-bookmark.svg';
import HamburgerIcon from '../../assets/images/icon-hamburger.svg';
import CloseIcon from '../../assets/images/icon-close.svg';
import FacebookIcon from '../../assets/images/icon-facebook.svg';
import TwitterIcon from '../../assets/images/icon-twitter.svg';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const closeMenu = () => setIsMobileMenuOpen(false);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
    }, [isMobileMenuOpen]);

    return (
        <>
            <nav className={`${styles.navbar} ${isMobileMenuOpen ? styles.hidden : ''}`}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <LogoIcon className={isMobileMenuOpen ? styles.logoIconWhite : styles.logoIcon} />
                    </div>

                    <div className={styles.desktopLinks}>
                        <ul className={styles.links}>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#login" className={styles.login}>Login</a></li>
                        </ul>
                    </div>

                    <button className={styles.hamburger} onClick={() => setIsMobileMenuOpen(true)}>
                        <img src={HamburgerIcon} alt="Menu" />
                    </button>
                </div>
            </nav>

            {isMobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    <div className={styles.mobileHeader}>
                        <div className={styles.mobileLogo}>
                            <LogoIcon className={styles.logoIconWhite} />
                        </div>
                        <button onClick={closeMenu}>
                            <img src={CloseIcon} alt="Close menu" />
                        </button>
                    </div>

                    <ul className={styles.mobileLinks}>
                        <li><a href="#features" onClick={closeMenu}>Features</a></li>
                        <li><a href="#pricing" onClick={closeMenu}>Pricing</a></li>
                        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                        <li><a href="#login" className={styles.login} onClick={closeMenu}>Login</a></li>
                    </ul>

                    <div className={styles.socials}>
                        <a href="#"><img src={FacebookIcon} alt="Facebook" /></a>
                        <a href="#"><img src={TwitterIcon} alt="Twitter" /></a>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
