import React, { useState } from 'react';
import styles from './FAQ.module.scss';
import { ReactComponent as ArrowIcon } from '../../assets/images/icon-arrow.svg';

const faqs = [
    {
        question: 'What is Bookmark?',
        answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet...'
    },
    {
        question: 'How can I request a new browser?',
        answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet...'
    },
    {
        question: 'Is there a mobile app?',
        answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet...'
    },
    {
        question: 'What about other Chromium browsers?',
        answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet...'
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

    return (
        <section className={styles.faq}>
            <div className="container">
                <h2>Frequently Asked Questions</h2>
                <p className={styles.description}>
                    Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.
                </p>

                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`${styles.faqItem} ${openIndex === index ? styles.active : ''}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className={styles.question}>
                                {faq.question}
                                <span className={`${styles.icon} ${openIndex === index ? styles.rotated : ''}`}>
                                    <ArrowIcon />
                                </span>
                            </div>
                            {openIndex === index && (
                                <div className={styles.answer}>{faq.answer}</div>
                            )}
                        </div>
                    ))}
                </div>

                <button className={styles.button}>More Info</button>
            </div>
        </section>
    );
};

export default FAQ;