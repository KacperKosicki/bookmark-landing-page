import React, { useState } from 'react';
import styles from './Features.module.scss';
import tab1 from '../../assets/images/illustration-features-tab-1.svg';
import tab2 from '../../assets/images/illustration-features-tab-2.svg';
import tab3 from '../../assets/images/illustration-features-tab-3.svg';

const tabs = [
    {
        title: 'Simple Bookmarking',
        image: tab1,
        heading: 'Bookmark in one click',
        description: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    },
    {
        title: 'Speedy Searching',
        image: tab2,
        heading: 'Intelligent search',
        description: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    },
    {
        title: 'Easy Sharing',
        image: tab3,
        heading: 'Share your bookmarks',
        description: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    },
];

const Features = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className={styles.features} id="features">
            <div className={styles.backgroundShapeLeft}></div>
              <div className="container">
            <h2>Features</h2>
            <p className={styles.description}>
                Our aim is to make it quick and easy for you to access your favourite websites.
                Your bookmarks sync between your devices so you can access them on the go.
            </p>

            <ul className={styles.tabList}>
                {tabs.map((tab, index) => (
                    <li
                        key={tab.title}
                        className={index === activeTab ? styles.active : ''}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.title}
                    </li>
                ))}
            </ul>

            <div className={styles.tabContent}>
                <div className={styles.imageContainer}>
                    <img src={tabs[activeTab].image} alt={tabs[activeTab].heading} />
                </div>
                <div className={styles.textContent}>
                    <h3>{tabs[activeTab].heading}</h3>
                    <p>{tabs[activeTab].description}</p>
                    <button>More Info</button>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Features;
