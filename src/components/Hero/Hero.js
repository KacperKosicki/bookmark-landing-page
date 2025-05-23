import React from 'react';
import styles from './Hero.module.scss';
import HeroImage from '../../assets/images/illustration-hero.svg';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundShape}></div>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.left}>
            <h1>A Simple Bookmark Manager</h1>
            <p>
              A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
            </p>
            <div className={styles.buttons}>
              <button className={styles.chrome}>Get it on Chrome</button>
              <button className={styles.firefox}>Get it on Firefox</button>
            </div>
          </div>

          <div className={styles.right}>
            <img src={HeroImage} alt="Hero Illustration" className={styles.image} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;