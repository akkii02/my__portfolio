import React from 'react';
import styles from './RepoCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCircle, faCodeFork } from '@fortawesome/free-solid-svg-icons';

const RepoCard = ({ name, description, github, language = 'JavaScript', stars = 5, forks = 2 }) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <a href={github} target="_blank" rel="noopener noreferrer" className={styles.repoName}>
                    {name.toLowerCase().replace(/\s+/g, '-')}
                </a>
                <span className={styles.label}>Public</span>
            </div>
            
            <p className={styles.description}>{description}</p>
            
            <div className={styles.footer}>
                <div className={styles.stat}>
                    <FontAwesomeIcon icon={faCircle} className={`${styles.icon} ${styles.langIcon}`} />
                    <span>{language}</span>
                </div>
                
                <div className={styles.stat}>
                    <FontAwesomeIcon icon={faStar} className={styles.icon} />
                    <span>{stars}</span>
                </div>
                
                <div className={styles.stat}>
                    <FontAwesomeIcon icon={faCodeFork} className={styles.icon} />
                    <span>{forks}</span>
                </div>
            </div>
        </div>
    );
};

export default RepoCard;
