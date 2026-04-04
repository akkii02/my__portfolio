import React from 'react';
import styles from "./Education.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Education = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>
                <FontAwesomeIcon icon={faGraduationCap} /> Education
            </h2>
            <div className={styles.content}>
                <div className={styles.box}>
                    <div className={styles.header}>
                        <h3 className={styles.degree}>Bachelor of Engineering (B.E.)</h3>
                        <span className={styles.duration}>2018 - 2022</span>
                    </div>
                    <p className={styles.university}>P.R. Pote College of Engineering and Management, Amravati, Maharashtra</p>
                    <div className={styles.certifications}>
                        <h4 className={styles.certHeading}>Certifications:</h4>
                        <ul className={styles.certList}>
                            <li className={styles.certItem}>JavaScript, Bootstrap & PHP — Udemy</li>
                            <li className={styles.certItem}>Node.js: Basic to Advanced — Udemy</li>
                            <li className={styles.certItem}>Web Developer Internship Certificate — ABHYAZ</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;