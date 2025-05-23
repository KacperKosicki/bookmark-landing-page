import React, { useState } from 'react';
import styles from './Newsletter.module.scss';
import Counter from '../Counter/Counter';
import ErrorIcon from '../../assets/images/icon-error.svg';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const validateEmail = (e) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setError(true);
    } else {
      setError(false);
      alert('Email accepted!');
      setEmail('');
    }
  };

  return (
    <section className={styles.newsletter}>
      <div className="container">
        <p className={styles.joined}><Counter /> ALREADY JOINED</p>
        <h2 className={styles.heading}>
          Stay up-to-date with what <br /> we're doing
        </h2>
        <form className={styles.form} onSubmit={validateEmail} noValidate>
          <div className={`${styles.inputWrapper} ${error ? styles.error : ''}`}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email"
            />
            {error && <img src={ErrorIcon} alt="Error" className={styles.errorIcon} />}
            {error && <p className={styles.errorMsg}>Whoops, make sure it's an email</p>}
          </div>
          <button type="submit">Contact Us</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
