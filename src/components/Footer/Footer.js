import React from 'react';
import styles from './Footer.module.scss';
import { ReactComponent as Logo } from '../../assets/images/logo-bookmark.svg';
import facebookIcon from '../../assets/images/icon-facebook.svg';
import twitterIcon from '../../assets/images/icon-twitter.svg';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.inner}`}>
                <div className={styles.left}>
                    <Logo className={styles.logo} />
                    <ul className={styles.links}>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className={styles.right}>
                    <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
                    <a href="#"><img src={twitterIcon} alt="Twitter" /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
