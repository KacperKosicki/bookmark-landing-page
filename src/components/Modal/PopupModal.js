import React, { useEffect } from 'react';
import styles from './PopupModal.module.scss';
import tabImage from '../../assets/images/illustration-features-tab-3.svg';

const PopupModal = ({ onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.content}>
          <div className={styles.image}>
            <img src={tabImage} alt="Share your bookmarks" />
          </div>
          <div className={styles.text}>
            <h3>Share your bookmarks</h3>
            <p>
              Easily share your bookmarks and collections with others.
              Create a shareable link that you can send at the click of a button.
            </p>
            <button onClick={onClose}>More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
