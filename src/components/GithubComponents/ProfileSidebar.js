import React from 'react';
import styles from './ProfileSidebar.module.css';
import profilePic from '../assets/image.png'; // Using the image from Home.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faLink, faUsers } from '@fortawesome/free-solid-svg-icons';

const ProfileSidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.avatarContainer}>
                <img src={profilePic} alt="Akshay Sable" className={styles.avatar} />
                <div className={styles.statusEmoji}>👨‍💻</div>
            </div>
            
            <div className={styles.nameContainer}>
                <h1 className={styles.fullName}>Akshay Sable</h1>
                <h2 className={styles.username}>akkii02</h2>
            </div>
            
            <div className={styles.bioContainer}>
                <p className={styles.bio}>Full-Stack Software Developer | React.js · Node.js · MERN Stack</p>
            </div>
            
            <button className={styles.editButton}>Edit profile</button>
            
            <div className={styles.statsContainer}>
                <div className={styles.statItem}>
                    <FontAwesomeIcon icon={faUsers} className={styles.icon} />
                    <span className={styles.statValue}>250+</span>
                    <span className={styles.statLabel}>followers</span>
                </div>
                <span className={styles.dot}>·</span>
                <div className={styles.statItem}>
                    <span className={styles.statValue}>180</span>
                    <span className={styles.statLabel}>following</span>
                </div>
            </div>
            
            <div className={styles.detailsContainer}>
                <div className={styles.detailItem}>
                    <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
                    <span>Pune, Maharashtra, India</span>
                </div>
                <div className={styles.detailItem}>
                    <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                    <a href="mailto:akshaysable097@gmail.com">akshaysable097@gmail.com</a>
                </div>
                <div className={styles.detailItem}>
                    <FontAwesomeIcon icon={faLink} className={styles.icon} />
                    <a href="https://akshaysable.com" target="_blank" rel="noreferrer">LinkedIn | GitHub | Website</a>
                </div>
            </div>
        </div>
    );
};

export default ProfileSidebar;
