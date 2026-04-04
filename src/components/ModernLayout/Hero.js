import React from 'react';
import styles from './Hero.module.css';
import akki from "../assets/image.png";
import TypingText from '../TypingText/TypingText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faCode, faRocket, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.introSection}>
                    <div className={styles.badge}>Available for new opportunities</div>
                    <h1 className={styles.title}>
                        Full-Stack <span className={styles.gradientText}>Software Developer</span>
                    </h1>
                    <p className={styles.subtitle}>
                        I specialize in building production-grade web applications with high-concurrency 
                        and real-time systems. Currently focusing on secure banking solutions and AI integrations.
                    </p>
                    
                    <div className={styles.metricsContainer}>
                        <div className={styles.metricItem}>
                            <div className={styles.metricHeader}>
                                <FontAwesomeIcon icon={faBriefcase} className={styles.metricIcon} />
                                <span className={styles.metricValue}>2+</span>
                            </div>
                            <span className={styles.metricLabel}>Years Exp.</span>
                        </div>
                        <div className={styles.metricItem}>
                            <div className={styles.metricHeader}>
                                <FontAwesomeIcon icon={faCode} className={styles.metricIcon} />
                                <span className={styles.metricValue}>50+</span>
                            </div>
                            <span className={styles.metricLabel}>Projects</span>
                        </div>
                        <div className={styles.metricItem}>
                            <div className={styles.metricHeader}>
                                <FontAwesomeIcon icon={faRocket} className={styles.metricIcon} />
                                <span className={styles.metricValue}>1k+</span>
                            </div>
                            <span className={styles.metricLabel}>Concurrent Calls</span>
                        </div>
                    </div>

                    <div className={styles.ctaContainer}>
                        <a href="/resume.pdf" download className={styles.primaryBtn}>
                            Download Resume <FontAwesomeIcon icon={faDownload} />
                        </a>
                        <div className={styles.socialStatus}>
                            <TypingText />
                        </div>
                    </div>
                </div>

                <div className={styles.imageSection}>
                    <div className={styles.imageGlow}></div>
                    <div className={styles.imageCard}>
                        <img src={akki} alt="Akshay Sable" className={styles.profileImg} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
