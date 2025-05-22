import React from 'react';
import styles from './Download.module.scss';
import ChromeIcon from '../../assets/images/logo-chrome.svg';
import FirefoxIcon from '../../assets/images/logo-firefox.svg';
import OperaIcon from '../../assets/images/logo-opera.svg';
import BgDots from '../../assets/images/bg-dots.svg';

const Download = () => {
  return (
    <section className={styles.download}>
      <div className="container">
        <h2>Download the extension</h2>
        <p className={styles.description}>
          We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize. 
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <img src={ChromeIcon} alt="Chrome" />
            <h3>Add to Chrome</h3>
            <p>Minimum version 62</p>
            <img src={BgDots} alt="Hero Illustration" className={styles.separator} />
            <button>Add & Install Extension</button>
          </div>

          <div className={styles.card}>
            <img src={FirefoxIcon} alt="Firefox" />
            <h3>Add to Firefox</h3>
            <p>Minimum version 55</p>
            <img src={BgDots} alt="Hero Illustration" className={styles.separator} />
            <button>Add & Install Extension</button>
          </div>

          <div className={styles.card}>
            <img src={OperaIcon} alt="Opera" />
            <h3>Add to Opera</h3>
            <p>Minimum version 46</p>
            <img src={BgDots} alt="Hero Illustration" className={styles.separator} />
            <button>Add & Install Extension</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
