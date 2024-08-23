import React from 'react';
import styles from './Home.module.css'; // Import the CSS module
import akki from "../assets/image.png";
import TypingText from '../TypingText/TypingText';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons'; 

const Home = () => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.intro}>
                <div className={styles.textSection}>
                    <h3 className={styles.greeting}>Hello, I’m</h3>
                    <h2 className={styles.name}>Akshay Sable</h2>
                    <p className={styles.description}> 
                    I am a passionate Frontend Developer with a keen interest in creating interactive web applications.

                        </p>  
                        <TypingText />
                </div>
                <div className={styles.buttonContainer}>
                    {/* <a href="#about" className={styles.button}>
                        About me
                    </a> */}
                    <a href="/resume.pdf" download className={styles.btn}>
                            Download Resume <FontAwesomeIcon icon={faDownload} style={{ color: '#7562e0' }} />
                        </a>
                       </div>
            </div>
            <div className={styles.imageSection}>
                <div className={styles.imageContainer}>
                    <img src={akki} alt="Profile" className={styles.image} /> {/* Replace with your image source */}
                </div>
            </div>
        </div>
            {/* <div className={styles.hidebar}></div> */}
        </>
    );
};

export default Home;
